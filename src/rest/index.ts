import axios from "axios";

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

export async function getRoutingMappings(): Promise<RoutingMapping> {
  if (!import.meta.env.VITE_SYB_ADDRESS) {
    throw new Error("Missing required environment variable: SYB_ADDRESS");
  }

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SYB_ADDRESS}/info/routing`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getRoutingData(routeKey: string): Promise<RoutingData> {
  if (!import.meta.env.VITE_SYB_ADDRESS) {
    throw new Error("Missing required environment variable: SYB_ADDRESS");
  }

  if (!routeKey) {
    throw new Error("Must provide a routeKey with a length > 0");
  }

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SYB_ADDRESS}/info/routing/${routeKey}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getAccounts(): Promise<Accounts> {
  if (!import.meta.env.VITE_SYB_ADDRESS) {
    throw new Error("Missing required environment variable: SYB_ADDRESS");
  }

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SYB_ADDRESS}/info/accounts`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
