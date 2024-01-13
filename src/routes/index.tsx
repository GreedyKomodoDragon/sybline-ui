import { useCookies } from "@solidjs-use/integrations/useCookies";
import BrokerTab from "~/components/BrokerTab";

export default function Home() {


  const cookies = useCookies(["locale"]);

  return (
    <>
      <button onClick={() => cookies.set("locale", "ru-RU")}>Russian</button>
      <BrokerTab />
    </>
  );
}
