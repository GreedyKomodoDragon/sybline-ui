import axios from "axios";
import { getAuth } from ".";

export type Message = {
  id: string;
  data: string;
};

export async function getMessages(
  name: string,
  amount: number
): Promise<Message[]> {
  if (typeof document === "undefined") {
    return [];
  }

  if (!import.meta.env.VITE_SYB_ADDRESS) {
    throw new Error("Missing required environment variable: SYB_ADDRESS");
  }

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SYB_ADDRESS}/api/v1/queue/fetch`,
      {
        auth: getAuth(),
        params: {
          queue: name,
          amount: amount,
        },
      }
    );

    const nonBase64: Message[] = [];
    for (const element of response.data) {
        nonBase64.push({
            id: element.id,
            data: atob(element.data),
        })
    }

    return nonBase64;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
