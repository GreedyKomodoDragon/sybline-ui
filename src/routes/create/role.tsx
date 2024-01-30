import { createSignal } from "solid-js";
import ErrorAlert from "~/components/ErrorAlert";
import JsonBlock from "~/components/JsonBlock";
import SuccessAlert from "~/components/SuccessAlert";
import { createRole } from "~/rest/accounts";

export default function Role() {
  const [raw, setRaw] = createSignal<string>("{}");

  const [success, setSuccess] = createSignal<boolean>(false);
  const [failed, setFailed] = createSignal<boolean>(false);

  return (
    <>
      <header class="py-4">
        <div class="container mx-auto flex">
          <h1 class="text-4xl font-semibold">Create a new Role</h1>
        </div>
        <hr class="mx-20 my-6" />
      </header>
      {failed() && (
        <div class="flex w-full max-w-7xl mx-auto space-x-4 mb-5">
          <ErrorAlert />
        </div>
      )}
      {success() && (
        <div class="flex w-full max-w-7xl mx-auto space-x-4  mb-5">
          <SuccessAlert />
        </div>
      )}
      <div class="flex w-full max-w-7xl mx-auto space-x-4">
        <div class="w-1/2">
          <div class="space-y-4">
            <h2 class="text-2xl font-bold">Input Raw Json</h2>
            <div class="space-y-2">
              <div class="ml-4 flex">
                <textarea
                  class="overflow-hidden w-full p-4 border rounded-md resize-none focus:outline-none focus:border-blue-500"
                  onInput={(e) => {
                    setRaw(e.currentTarget.value);
                    e.currentTarget.style.height = "auto"; // Reset height to auto
                    e.currentTarget.style.height =
                      e.currentTarget.scrollHeight + "px"; // Set
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <h2 class="text-2xl font-bold ">Formatted JSON</h2>
          <div class="mt-4">
            <JsonBlock jsonRole={raw()} />
          </div>
          <button
            class="mt-10 mb-5 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md float-right"
            onClick={() => {
              setSuccess(false);
              setFailed(false);

              createRole(raw())
                .then(() => {
                  setSuccess(true);
                })
                .catch(() => {
                  setFailed(true);
                });
            }}
          >
            Create New Role
          </button>
        </div>
      </div>
    </>
  );
}
