import axios from "axios";
import { getCookieValue } from "~/middleware";

axios.defaults.headers.common["Access-Control-Allow-Origin"] =
  import.meta.env.VITE_SYB_ADDRESS;

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

  if (!import.meta.env.VITE_SYB_ADDRESS) {
    throw new Error("Missing required environment variable: SYB_ADDRESS");
  }

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SYB_ADDRESS}/api/v1/info/routing`,
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

export async function getRoutingData(routeKey: string): Promise<RoutingData> {
  if (typeof document === "undefined") {
    return { queues: [] };
  }

  if (!import.meta.env.VITE_SYB_ADDRESS) {
    throw new Error("Missing required environment variable: SYB_ADDRESS");
  }

  if (!routeKey) {
    throw new Error("Must provide a routeKey with a length > 0");
  }

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SYB_ADDRESS}/api/v1/info/routing/${routeKey}`,
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

  if (!import.meta.env.VITE_SYB_ADDRESS) {
    throw new Error("Missing required environment variable: SYB_ADDRESS");
  }

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SYB_ADDRESS}/api/v1/info/accounts`,
      {
        auth: getAuth(),
      }
    );

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

  if (!import.meta.env.VITE_SYB_ADDRESS) {
    throw new Error("Missing required environment variable: SYB_ADDRESS");
  }

  if (!user) {
    throw new Error("Must provide a user with a length > 0");
  }

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SYB_ADDRESS}/api/v1/info/accounts/roles/${user}`,
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

  if (!import.meta.env.VITE_SYB_ADDRESS) {
    throw new Error("Missing required environment variable: SYB_ADDRESS");
  }

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SYB_ADDRESS}/api/v1/info/roles`,
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

export async function getQueues(): Promise<Queue[]> {
  if (typeof document === "undefined") {
    return [];
  }

  if (!import.meta.env.VITE_SYB_ADDRESS) {
    throw new Error("Missing required environment variable: SYB_ADDRESS");
  }

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SYB_ADDRESS}/api/v1/info/queues`,
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

export async function assignRole(role: string, username: string) {
  if (typeof document === "undefined") {
    return;
  }

  if (!import.meta.env.VITE_SYB_ADDRESS) {
    throw new Error("Missing required environment variable: SYB_ADDRESS");
  }

  try {
    await axios.put(
      `${
        import.meta.env.VITE_SYB_ADDRESS
      }/api/v1/accounts/roles/${username}/${role}`,
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

  if (!import.meta.env.VITE_SYB_ADDRESS) {
    throw new Error("Missing required environment variable: SYB_ADDRESS");
  }

  try {
    await axios.delete(
      `${
        import.meta.env.VITE_SYB_ADDRESS
      }/api/v1/accounts/roles/${username}/${role}`,
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
  if (!import.meta.env.VITE_SYB_ADDRESS) {
    throw new Error("Missing required environment variable: SYB_ADDRESS");
  }

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SYB_ADDRESS}/api/v1/login`,
      {
        auth: {
          username: username,
          password: token,
        },
      }
    );

    return response.status == 200;
  } catch (error) {
    console.error("Error fetching data:", error);
    return false;
  }
}

export async function login(
  username: string,
  password: string
): Promise<string> {
  if (!import.meta.env.VITE_SYB_ADDRESS) {
    throw new Error("Missing required environment variable: SYB_ADDRESS");
  }

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SYB_ADDRESS}/api/v1/login`,
      {
        username: username,
        password: password,
      }
    );

    return response.data.token;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function createAccount(username: string, password: string) {
  if (!import.meta.env.VITE_SYB_ADDRESS) {
    throw new Error("Missing required environment variable: SYB_ADDRESS");
  }

  try {
    await axios.post(
      `${import.meta.env.VITE_SYB_ADDRESS}/api/v1/accounts`,
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
  const token = getCookieValue(document.cookie, "syb-token");
  if (!token) {
    throw "failed to get token";
  }

  const username = getCookieValue(document.cookie, "syb-username");
  if (!username) {
    throw "failed to get username";
  }

  return {
    username: username,
    password: token,
  };
}
