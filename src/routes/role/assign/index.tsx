import { useSearchParams } from "@solidjs/router";
import { createSignal } from "solid-js";
import JsonBlock from "~/components/JsonBlock";
import SybSelect from "~/components/SybSelect";
import { getAllRoles } from "~/rest";

export default function Add() {
  const [searchParams] = useSearchParams();

  const [roles, setRoles] = createSignal<string[]>([]);
  const [rawes, setRawes] = createSignal<string[]>([]);
  const [selectedRole, setSelectRole] = createSignal<string>("");

  const fetchingRoles = () => {
    getAllRoles()
      .then((values) => {
        const rols = [];
        const raws = [];

        for (const element of values) {
          rols.push(element.name);
          raws.push(element.raw);
        }

        setRawes(raws);
        setRoles(rols);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getIndex = (selectRole: string) => {
    if (roles().length == 0) {
      return 0;
    }

    for (let index = 0; index < roles().length; index++) {
      const element = roles()[index];
      if (element === selectRole) {
        return index;
      }
    }

    return 0;
  };

  // first time fetch
  fetchingRoles();

  return (
    <>
      <header class="py-4">
        <div class="container mx-auto flex">
          <h1 class="text-4xl font-semibold">User:</h1>
          <div class="ml-4">
            <SybSelect options={[]} />
          </div>
        </div>
        <hr class="mx-20 my-6" />
      </header>
      <div class="flex w-full max-w-7xl mx-auto space-x-4">
        <div class="w-1/2">
          <form class="space-y-4">
            <h2 class="text-2xl font-bold">Select a new Role</h2>
            <div class="space-y-2">
              <SybSelect
                options={roles()}
                onChange={(i) => {
                  setSelectRole(i.target.value);
                }}
              />
            </div>
            <button
              class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white hover:bg-blue-700 h-10 px-4 py-2 w-full"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div class="w-1/2">
          <h2 class="text-2xl font-bold">Role JSON</h2>
          <JsonBlock jsonRole={rawes()[getIndex(selectedRole())] || '{"json": true}'} />
        </div>
      </div>
    </>
  );
}
