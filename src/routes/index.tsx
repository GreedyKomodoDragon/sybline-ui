import BrokerTab from "~/components/BrokerTab";

export default function Home() {
  return (
    <main class="my-5 mx-5">
      <ul class="list-reset flex border-b">
        <li class="-mb-px mr-1">
          <a
            class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold"
            href="#"
          >
            Broker
          </a>
        </li>
        <li class="mr-1">
          <a
            class="bg-white inline-block py-2 px-4 text-blue hover:text-blue-darker font-semibold"
            href="#"
          >
            Queues
          </a>
        </li>
        <li class="mr-1">
          <a
            class="bg-white inline-block py-2 px-4 text-blue hover:text-blue-darker font-semibold"
            href="#"
          >
            Accounts
          </a>
        </li>
        <li class="mr-1">
          <a
            class="bg-white inline-block py-2 px-4 text-grey-light font-semibold"
            href="#"
          >
            Health
          </a>
        </li>
        <li class="mr-1">
          <a
            class="bg-white inline-block py-2 px-4 text-grey-light font-semibold"
            href="#"
          >
            Visualiser
          </a>
        </li>
      </ul>
      <BrokerTab/>
    </main>
  );
}
