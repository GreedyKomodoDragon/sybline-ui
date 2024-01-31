import { getAuth, getLeaderURL } from ".";
import axios from "axios";

export async function SubmitMessage(routeKey: string, data: string) {
  const leaderUrl = await getLeaderURL();

  await axios.post(
    `${leaderUrl}/api/v1/broker/submit`,
    {
      routingKey: routeKey,
      data: data,
    },
    {
      auth: getAuth(),
    }
  );
}
