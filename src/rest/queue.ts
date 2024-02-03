import axios from "axios";
import { getAuth, getLeaderURL } from ".";

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

  const leaderUrl = await getLeaderURL();

  const response = await axios.get(`${leaderUrl}/api/v1/queue/fetch`, {
    auth: getAuth(),
    params: {
      queue: name,
      amount: amount,
    },
  });

  const nonBase64: Message[] = [];
  for (const element of response.data) {
    nonBase64.push({
      id: element.id,
      data: atob(element.data),
    });
  }

  return nonBase64;
}

export async function ackMessage(id: string, queue: string) {
  if (typeof document === "undefined") {
    return;
  }

  const leaderUrl = await getLeaderURL();

  await axios.put(
    `${leaderUrl}/api/v1/queue/ack`,
    {
      id: id,
      queue: queue,
    },
    {
      auth: getAuth(),
    }
  );
}

export async function nackMessage(id: string, queue: string) {
  if (typeof document === "undefined") {
    return;
  }

  const leaderUrl = await getLeaderURL();

  await axios.put(
    `${leaderUrl}/api/v1/queue/nack`,
    {
      id: id,
      queue: queue,
    },
    {
      auth: getAuth(),
    }
  );
}

export async function createQueue(
  routingKey: string,
  name: string,
  size: number,
  retryLimit: number,
  hasDLQueue: boolean
) {
  const leaderUrl = await getLeaderURL();

  await axios.post(
    `${leaderUrl}/api/v1/queue/create`,
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
