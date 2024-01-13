import { useLocation } from "@solidjs/router";
import NavBar from "./NavBar";
import Tabs from "./Tabs";

export default function Header() {
  const location = useLocation();

  if (location.pathname == "/login") {
    return (
        <></>
    )
  }

  return (
    <>
      <NavBar />
      <Tabs />
    </>
  );
}
