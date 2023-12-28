import { For, createSignal } from "solid-js";
import ActionRow from "./ActionRow";
import { getRoutingMappings } from "~/rest";
import Spinner from "./Spinner";

export default function BrokerTab() {
  const [loading, setLoading] = createSignal<boolean>(true)
  const [data, setData] = createSignal<string[]>([])

  // first time fetch
  getRoutingMappings()
    .then((values) => {
      setData(values.keys)
      setLoading(false)
    }).catch((err) => {
      console.error(err)
    })
  
  return (
    <>
      <div class="container mx-auto py-4">
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md float-right"
          onclick={async () => {
            setLoading(true)
            const keys = await getRoutingMappings()
            setData(keys.keys)
            setLoading(false)
          }}
        >
          Refresh
        </button>
      </div>

      <div class="container mx-auto py-8">
        <hr class="mt-2 mb-4" />
        {loading() && <Spinner />}
        {!loading() && !data() && <h2>No Routing Keys Found</h2>}
        {data() && (
          <For each={data()}>
            {(key: string, _) => (
              <ActionRow name={key} url={`/brokers/${key}`} />
            )}
          </For>
        )}
      </div>
      <div class="flex justify-center mt-4 mb-8">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mr-2">
          1
        </button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-600 font-semibold py-2 px-4 rounded-full ml-2">
          2
        </button>
      </div>
    </>
  );
}
