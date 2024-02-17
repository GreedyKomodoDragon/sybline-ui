import axios from "axios";
import { getCookie } from "../utils/cookies";

export interface RoutingMapping {
  keys: string[];
}

export interface RoutingData {
  queues: string[];
}

export interface Accounts {
  accounts: string[];
}

export interface Role {
  name: string;
  raw: string;
}

export interface Queue {
  name: string;
}

export async function getRoutingMappings(): Promise<RoutingMapping> {
  if (typeof document === "undefined") {
    return { keys: [] };
  }

  const leaderUrl = await getLeaderURL();

  try {
    const response = await axios.get(`${leaderUrl}/api/v1/info/routing`, {
      auth: getAuth(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getRoutingData(routeKey: string): Promise<RoutingData> {
  if (typeof document === "undefined") {
    return { queues: [] };
  }

  const leaderUrl = await getLeaderURL();

  if (!routeKey) {
    throw new Error("Must provide a routeKey with a length > 0");
  }

  try {
    const response = await axios.get(
      `${leaderUrl}/api/v1/info/routing/${routeKey}`,
      {
        auth: getAuth(),
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getAccounts(): Promise<Accounts> {
  if (typeof document === "undefined") {
    return { accounts: [] };
  }

  const leaderUrl = await getLeaderURL();

  try {
    const response = await axios.get(`${leaderUrl}/api/v1/info/accounts`, {
      auth: getAuth(),
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // throw error;
    return { accounts: [] };
  }
}

export async function getRoles(user: string): Promise<Role[]> {
  if (typeof document === "undefined") {
    return [];
  }

  const leaderUrl = await getLeaderURL();

  if (!user) {
    throw new Error("Must provide a user with a length > 0");
  }

  try {
    const response = await axios.get(
      `${leaderUrl}/api/v1/info/accounts/roles/${user}`,
      {
        auth: getAuth(),
      }
    );

    return response.data.Roles;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getAllRoles(): Promise<Role[]> {
  if (typeof document === "undefined") {
    return [];
  }

  const leaderUrl = await getLeaderURL();

  try {
    const response = await axios.get(`${leaderUrl}/api/v1/info/roles`, {
      auth: getAuth(),
    });

    return response.data.Roles;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getQueues(): Promise<Queue[]> {
  if (typeof document === "undefined") {
    return [];
  }

  const leaderUrl = await getLeaderURL();

  try {
    const response = await axios.get(`${leaderUrl}/api/v1/info/queues`, {
      auth: getAuth(),
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

type AllInfo = {
  key: string;
  queues: string;
};

export async function getAllFullBrokerInfo(): Promise<AllInfo[]> {
  if (typeof document === "undefined") {
    return [];
  }

  const leaderUrl = await getLeaderURL();

  const response = await axios.get(`${leaderUrl}/api/v1/info/all`, {
    auth: getAuth(),
  });

  return response.data;
}

export async function assignRole(role: string, username: string) {
  if (typeof document === "undefined") {
    return;
  }

  const leaderUrl = await getLeaderURL();

  try {
    await axios.put(
      `${leaderUrl}/api/v1/accounts/roles/${username}/${role}`,
      {},
      {
        auth: getAuth(),
      }
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function unassignRole(role: string, username: string) {
  if (typeof document === "undefined") {
    return;
  }

  const leaderUrl = await getLeaderURL();

  try {
    await axios.delete(
      `${leaderUrl}/api/v1/accounts/roles/${username}/${role}`,
      {
        auth: getAuth(),
      }
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function isLogged(
  username: string,
  token: string
): Promise<boolean> {
  let url = await getAnyURL();

  const response = await axios.get(`${url}/api/v1/login`, {
    auth: {
      username: username,
      password: token,
    },
  });

  return response.status == 200;
}

export async function login(
  username: string,
  password: string
): Promise<string> {

  const leaderUrl = await getLeaderURL();

  const response = await axios.post(`${leaderUrl}/api/v1/login`, {
    username: username,
    password: password,
  });

  return response.data.token;
}

export async function logout() {
  const leaderUrl = await getLeaderURL();

  await axios.post(
    `${leaderUrl}/api/v1/logout`,
    {},
    {
      auth: getAuth(),
    }
  );
}

export async function createAccount(username: string, password: string) {
  const leaderUrl = await getLeaderURL();

  try {
    await axios.post(
      `${leaderUrl}/api/v1/accounts`,
      {
        username: username,
        password: password,
      },
      {
        auth: getAuth(),
      }
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export function getAuth(): { username: string; password: string } {
  const token = getCookie("syb-token");
  if (!token) {
    throw "failed to get token";
  }

  const username = getCookie("syb-username");
  if (!username) {
    throw "failed to get username";
  }

  return {
    username: username,
    password: token,
  };
}

let leaderUrl = "";

export async function isLeader(url: string): Promise<boolean> {
  const response = await axios.get(`${url}/api/v1/info/isLeader`);

  return response.data.isLeader === true;
}

export async function getLeaderURL(): Promise<string> {
  if (leaderUrl !== "") {
    return leaderUrl;
  }

  const f = await fetch("/config/config.json");
  const data = await f.json();

  for (const url of data.urls) {
    const leaderFound = await isLeader(url);
    if (leaderFound) {
      leaderUrl = url;
      return url;
    }
  }

  throw Error("cannot find leader");
}

export async function getAnyURL(): Promise<string> {
  if (leaderUrl !== "") {
    return leaderUrl;
  }

  const f = await fetch("/config/config.json");
  const data = await f.json();

  for (const url of data.urls) {
    return url;
  }

  throw Error("cannot find leader");
}
