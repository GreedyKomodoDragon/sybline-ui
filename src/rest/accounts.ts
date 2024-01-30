import axios from "axios";
import { getAuth, getLeaderURL } from ".";

export async function createRole(role: string) {
  const leaderUrl = await getLeaderURL();

  await axios.post(
    `${leaderUrl}/api/v1/accounts/roles/create`,
    {
      role,
    },
    {
      auth: getAuth(),
    }
  );
}
