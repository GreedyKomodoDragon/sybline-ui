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
      });
    }

    return nonBase64;
  } catch (error) {
    throw error;
  }
}

export async function ackMessage(id: string, queue: string) {
  if (typeof document === "undefined") {
    return;
  }

  if (!import.meta.env.VITE_SYB_ADDRESS) {
    throw new Error("Missing required environment variable: SYB_ADDRESS");
  }

  try {
    await axios.put(
      `${import.meta.env.VITE_SYB_ADDRESS}/api/v1/queue/ack`,
      {
        id: id,
        queue: queue,
      },
      {
        auth: getAuth(),
      }
    );
  } catch (error) {
    throw error;
  }
}

export async function nackMessage(id: string, queue: string) {
  if (typeof document === "undefined") {
    return;
  }

  if (!import.meta.env.VITE_SYB_ADDRESS) {
    throw new Error("Missing required environment variable: SYB_ADDRESS");
  }

  try {
    await axios.put(
      `${import.meta.env.VITE_SYB_ADDRESS}/api/v1/queue/nack`,
      {
        id: id,
        queue: queue,
      },
      {
        auth: getAuth(),
      }
    );
  } catch (error) {
    throw error;
  }
}

export async function createQueue(
  routingKey: string,
  name: string,
  size: number,
  retryLimit: number,
  hasDLQueue: boolean
) {
  if (!import.meta.env.VITE_SYB_ADDRESS) {
    throw new Error("Missing required environment variable: SYB_ADDRESS");
  }

  await axios.post(
    `${import.meta.env.VITE_SYB_ADDRESS}/api/v1/queue/create`,
    {
      routingKey,
      name,
      size,
      retryLimit,
      hasDLQueue,
    },
    {
      auth: getAuth(),
    }
  );
}