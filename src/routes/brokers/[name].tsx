import { useParams } from "@solidjs/router";
import { For, createSignal } from "solid-js";
import ActionRow from "~/components/ActionRow";
import Spinner from "~/components/Spinner";
import SubmitForm from "~/components/broker/SubmitForm";
import { getRoutingData } from "~/rest";

export default function Broker() {
  const params = useParams<{ name: string }>();

  const [loading, setLoading] = createSignal<boolean>(true);
  const [data, setData] = createSignal<string[]>([]);

  // first time fetch
  getRoutingData(params.name)
    .then((values) => {
      setData(values.queues);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <>
      <header class="py-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-4xl font-semibold">Broker: {params.name}</h1>
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md float-right"
            onclick={async () => {
              setLoading(true);
              const keys = await getRoutingData(params.name);
              setData(keys.queues);
              setLoading(false);
            }}
          >
            Refresh
          </button>
        </div>
      </header>
      {loading() ? (
        <div class="flex justify-center items-center py-2">
          <Spinner />
        </div>
      ) : (
        <>
          <section class="py-2">
            <div class="container mx-auto">
              <h2 class="text-2xl font-semibold">Send Message</h2>
              <SubmitForm routingKey={params.name} />
            </div>
          </section>
          <section class="py-2">
            <div class="container mx-auto">
              <h2 class="text-2xl font-semibold">Queue's Connected</h2>
              <ul class="mt-4">
                {data() && (
                  <For each={data()}>
                    {(queue: string) => (
                      <ActionRow name={queue} url={`/queues/${queue}`} />
                    )}
                  </For>
                )}
              </ul>
            </div>
          </section>
        </>
      )}
    </>
  );
}
