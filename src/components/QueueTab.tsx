import { For, createSignal } from "solid-js";
import ActionRow from "./ActionRow";
import { Queue, getQueues } from "~/rest";
import Spinner from "./Spinner";

export default function QueueTab() {
  const [loading, setLoading] = createSignal<boolean>(true);
  const [data, setData] = createSignal<Queue[]>([]);

  // first time fetch
  getQueues()
    .then((values) => {
      setData(values);
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
            const ques = await getQueues();
            setData(ques);
            setLoading(false);
          }}
        >
          Refresh
        </button>
      </div>
      <div class="container mx-auto py-8">
        <hr class="mt-2 mb-4" />
        {loading() && (
          <div class="flex justify-center items-center py-2">
            <Spinner />
          </div>
        )}
        {!loading() && !data() && <h2>No Routing Keys Found</h2>}
        {data() && (
          <For each={data()}>
            {(que, _) => (
              <ActionRow name={que.name} url={`/queues/${que.name}`} />
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
