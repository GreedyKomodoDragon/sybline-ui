import { createSignal } from "solid-js";
import { useParams } from "solid-start";
import Collapse from "~/components/Collapse";
import Spinner from "~/components/Spinner";

export default function Account() {
  const params = useParams<{ name: string }>();

  const [loading, setLoading] = createSignal<boolean>(true);
  const [data, setData] = createSignal<string[]>([]);

  return (
    <>
      <header class="py-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-4xl font-semibold">User: {params.name}</h1>
          <div class="flex space-x-2">
            <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Add Role
            </button>
            <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Refresh
            </button>
          </div>
        </div>
        <hr class="mx-20 my-6" />
      </header>
      {!loading() ? (
        <div class="flex justify-center items-center py-2">
          <Spinner />
        </div>
      ) : (
        <section class="py-2">
          <div class="container mx-auto">
            <h2 class="text-3xl font-semibold">Roles</h2>
            <ul class="mt-4">
              <Collapse roleName={"role name here"} />
            </ul>
          </div>
        </section>
      )}
    </>
  );
}