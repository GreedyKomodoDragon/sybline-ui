import { For, createSignal } from "solid-js";
import ActionRow from "./ActionRow";
import { getRoutingMappings } from "~/rest";
import Spinner from "./Spinner";
import { useNavigate } from "@solidjs/router";

export default function BrokerTab() {
  const navigate = useNavigate();
  const [loading, setLoading] = createSignal<boolean>(true);
  const [data, setData] = createSignal<string[]>([]);

  // first time fetch
  getRoutingMappings()
    .then((values) => {
      setData(values.keys);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <>
      <div class="container mx-auto py-4">
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md float-right"
          onclick={async () => {
            setLoading(true);
            const keys = await getRoutingMappings();
            setData(keys.keys);
            setLoading(false);
          }}
        >
          Refresh
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md float-right mr-1"
          onclick={async () => {
            navigate("/create/route");
          }}
        >
          Create New Route
        </button>
      </div>

      <div class="container mx-auto py-8">
        <hr class="mt-2 mb-4" />
        {loading() && (
          <div class="flex justify-center items-center py-2">
            <Spinner />
          </div>
        )}
        {!loading() && data().length == 0 && (
          <div class="flex items-center justify-center">
            <h2 class="text-3xl mt-20">No Routing Keys Found</h2>
          </div>
        )}
        {data() && (
          <For each={data()}>
            {(key: string) => (
              <ActionRow name={key} url={`/brokers/${key}`} />
            )}
          </For>
        )}
      </div>
    </>
  );
}
