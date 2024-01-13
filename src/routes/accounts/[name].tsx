import { For, createSignal } from "solid-js";
import Collapse from "~/components/Collapse";
import Spinner from "~/components/Spinner";
import { Role, getRoles } from "~/rest";

export default function Account() {
  const params = useParams<{ name: string }>();

  const [loading, setLoading] = createSignal<boolean>(true);
  const [data, setData] = createSignal<Role[]>([]);

  const fetchingRoles = () => {
    getRoles(params.name)
      .then((values) => {
        setData(values);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // first time fetch
  fetchingRoles();

  return (
    <>
      <header class="py-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-4xl font-semibold">User: {params.name}</h1>
          <div class="flex space-x-2">
            <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Add Role
            </button>
            <button
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onclick={() => {
                setLoading(true);
                fetchingRoles();
              }}
            >
              Refresh
            </button>
          </div>
        </div>
        <hr class="mx-20 my-6" />
      </header>
      {loading() ? (
        <div class="flex justify-center items-center py-2">
          <Spinner />
        </div>
      ) : (
        <section class="py-2">
          <div class="container mx-auto">
            <h2 class="text-3xl font-semibold">Roles</h2>
            <ul class="mt-4">
              {data().length > 0 ? (
                <For each={data()}>
                  {(role: Role, _) => (
                    <Collapse roleName={role.name} jsonRole={role.raw} />
                  )}
                </For>
              ) : (
                <h2>User has no roles assigned to it!</h2>
              )}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
