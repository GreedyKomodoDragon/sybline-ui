import { useNavigate } from "@solidjs/router";
import { For, createSignal } from "solid-js";
import ActionRow from "~/components/ActionRow";
import Spinner from "~/components/Spinner";
import { getAccounts, getRoutingMappings } from "~/rest";

export default function AccountsTab() {
  const navigate = useNavigate();

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
        <div class="flex space-x-2">
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md float-right"
            onclick={async () => {
              navigate("/create/role");
            }}
          >
            Create new Role
          </button>
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md float-right"
            onclick={async () => {
              navigate("/create/account");
            }}
          >
            Create new Account
          </button>
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
            <h2 class="text-3xl mt-20">No Accounts Found</h2>
          </div>
        )}
        {data() && (
          <For each={data()}>
            {(key: string, _) => (
              <ActionRow name={key} url={`/accounts/${key}`} />
            )}
          </For>
        )}
      </div>
    </>
  );
}
