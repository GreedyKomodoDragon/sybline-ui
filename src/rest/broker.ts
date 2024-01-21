import { getAuth } from ".";
import axios from "axios";

export async function SubmitMessage(routeKey: string, data: string) {
  if (!import.meta.env.VITE_SYB_ADDRESS) {
    throw new Error("Missing required environment variable: SYB_ADDRESS");
  }

  try {
    await axios.post(
      `${import.meta.env.VITE_SYB_ADDRESS}/api/v1/broker/submit`,
      {
        routingKey: routeKey,
        data: data,
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
