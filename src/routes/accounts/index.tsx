import { For, createSignal } from "solid-js";
import ActionRow from "~/components/ActionRow";
import Spinner from "~/components/Spinner";
import { getAccounts, getRoutingMappings } from "~/rest";

export default function AccountsTab() {
  const [loading, setLoading] = createSignal<boolean>(true);
  const [data, setData] = createSignal<string[]>([]);

  // first time fetch
  getAccounts()
    .then((values) => {
      setData(values.accounts);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <>
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="my-4 text-5xl font-semibold">Accounts</h1>
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md float-right"
          onclick={async () => {
            setLoading(true);
            const { accounts } = await getAccounts();
            setData(accounts);
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
        {!loading() && !data() && <h2>No Accounts Found</h2>}
        {data() && (
          <For each={data()}>
            {(key: string, _) => (
              <ActionRow name={key} url={`/accounts/${key}`} />
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
