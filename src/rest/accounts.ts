import axios from 'axios';
import { getAuth } from '.';

export async function createRole(
    role: string,
  ) {
    if (!import.meta.env.VITE_SYB_ADDRESS) {
      throw new Error("Missing required environment variable: SYB_ADDRESS");
    }
  
    await axios.post(
      `${import.meta.env.VITE_SYB_ADDRESS}/api/v1/accounts/roles/create`,
      {
        role
      },
      {
        auth: getAuth(),
      }
    );
  }
  