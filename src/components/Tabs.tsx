import { useLocation } from "@solidjs/router";

export default function Tabs() {
  const location = useLocation();
  const selectedClassname = "bg-white inline-block border-l-4 border-t-4 border-r-4 rounded-t py-2 px-4 text-blue-dark font-semibold";
  const unselectedClassname = "bg-white inline-block py-2 px-4 text-blue hover:text-blue-darker font-semibold"

  return (
    <main class="my-5 mx-5">
      <ul class="list-reset flex border-b-2">
        <li class="-mb-px mr-1">
          <a
            class={(["/", "/brokers"].includes(location.pathname)) ? selectedClassname : unselectedClassname }
            href="/brokers"
          >
            Brokers
          </a>
        </li>
        <li class="mr-1">
          <a
            class={location.pathname === "/queues" ? selectedClassname : unselectedClassname }
            href="/queues"
          >
            Queues
          </a>
        </li>
        <li class="mr-1">
          <a
            class={location.pathname === "/accounts" ? selectedClassname : unselectedClassname }
            href="/accounts"
          >
            Accounts
          </a>
        </li>
        <li class="mr-1">
          <a
            class={location.pathname === "/visualiser" ? selectedClassname : unselectedClassname }
            href="/visualiser"
          >
            Visualiser
          </a>
        </li>
      </ul>
    </main>
  );
}
