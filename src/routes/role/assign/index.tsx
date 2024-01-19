import { useSearchParams } from "@solidjs/router";
import { createSignal } from "solid-js";
import JsonBlock from "~/components/JsonBlock";
import Dialog from "~/components/SybDialog";
import SybSelect from "~/components/SybSelect";
import { assignRole, getAccounts, getAllRoles } from "~/rest";

const getIndex = (selectRole: string, array: string[]) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === selectRole) {
      return index;
    }
  }

  return 0;
};

export default function Add() {
  const [searchParams] = useSearchParams();

  const [roles, setRoles] = createSignal<string[]>([]);
  const [rawes, setRawes] = createSignal<string[]>([]);

  const [data, setData] = createSignal<string[]>([]);

  const [selectedRole, setSelectRole] = createSignal<string>("");
  const [selectedAccount, setSelectedAccount] = createSignal<string>(
    searchParams.name || ""
  );

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

        setSelectRole(rols[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const fetchingAccounts = () => {
    getAccounts()
      .then((values) => {
        setData(values.accounts);

        if (
          selectedAccount() === "" ||
          !values.accounts.includes(selectedAccount())
        ) {
          setSelectedAccount(values.accounts[0]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // first time fetches
  fetchingRoles();
  fetchingAccounts();

  return (
    <>
      <header class="py-4">
        <div class="container mx-auto flex">
          <h1 class="text-4xl font-semibold">User:</h1>
          <div class="ml-4">
            <SybSelect
              options={data()}
              onChange={(i) => {
                setSelectedAccount(i.target.value);
              }}
              selected={selectedAccount()}
            />
          </div>
        </div>
        <hr class="mx-20 my-6" />
      </header>
      <div class="flex w-full max-w-7xl mx-auto space-x-4">
        <div class="w-1/2">
          <div class="space-y-4">
            <h2 class="text-2xl font-bold">Select a new Role</h2>
            <div class="space-y-2">
              <SybSelect
                options={roles()}
                onChange={(i) => {
                  setSelectRole(i.target.value);
                }}
                selected={selectedRole()}
              />
            </div>
            <Dialog
              buttonClass="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white hover:bg-blue-700 h-10 px-4 py-2 w-full"
              buttonText="Submit"
              confirmation={async ()=> {
                await assignRole(selectedRole(), selectedAccount())
              }}
            />
          </div>
        </div>
        <div class="w-1/2">
          {rawes().length > 0 ? (
            <>
              <h2 class="text-2xl font-bold">Role JSON</h2>
              <JsonBlock
                jsonRole={rawes()[getIndex(selectedRole(), roles())]}
              />
            </>
          ) : (
            <h2 class="text-2xl font-bold">
              Not roles found! Create a role first!
            </h2>
          )}
        </div>
      </div>
    </>
  );
}
