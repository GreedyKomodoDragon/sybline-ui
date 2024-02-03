import { createForm, required } from "@modular-forms/solid";
import { createSignal } from "solid-js";
import ErrorAlert from "~/components/ErrorAlert";
import SuccessAlert from "~/components/SuccessAlert";
import SybSwitch from "~/components/inputs/Switch";
import { createQueue } from "~/rest/queue";
import { minNumber } from "~/utils/modular";

type CreateRouteForm = {
  brokerName: string;
  queueName: string;
  retryLimit: number;
  queueSize: number;
};

export default function Route() {
  const [, { Form, Field }] = createForm<CreateRouteForm>();

  const [checkedDLQ, setCheckedDLQ] = createSignal<boolean>(false);

  const [success, setSuccess] = createSignal<boolean>(false);
  const [failed, setFailed] = createSignal<boolean>(false);

  return (
    <>
      <header class="py-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-4xl font-semibold">Create New Route</h1>
        </div>
      </header>

      <section class="py-2">
        <div class="container mx-auto">
          <div class="space-y-8">
            {failed() && (
              <div class="mb-2">
                <ErrorAlert />
              </div>
            )}
            {success() && (
              <div class="mb-2">
                <SuccessAlert />
              </div>
            )}
            <div class="space-y-2">
              <div class="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class=""
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
                <p class="text-gray-500 dark:text-gray-400">
                  If you using an existing broker name, it will add to it, not
                  overwrite!
                </p>
              </div>
            </div>
            <Form
              class="mt-4"
              onSubmit={(e) => {
                createQueue(
                  e.brokerName,
                  e.queueName,
                  e.queueSize,
                  e.retryLimit,
                  checkedDLQ()
                )
                  .then(() => {
                    setSuccess(true);
                  })
                  .catch(() => {
                    setFailed(true);
                  });
              }}
            >
              <div class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="text-1"
                    >
                      Broker Name
                    </label>
                    <Field
                      name="brokerName"
                      validate={[required("Broker name must be provided")]}
                    >
                      {(field, props) => (
                        <>
                          <input
                            {...props}
                            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="text-1"
                            placeholder="Enter text"
                            value={field.value}
                          />
                          {field.error && (
                            <div class="text-red-600">{field.error}</div>
                          )}
                        </>
                      )}
                    </Field>
                  </div>
                  <div class="space-y-2">
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="text-2"
                    >
                      Queue Name
                    </label>
                    <Field
                      name="queueName"
                      validate={[required("Queue name must be provided")]}
                    >
                      {(field, props) => (
                        <>
                          <input
                            {...props}
                            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="text-1"
                            placeholder="Enter text"
                            value={field.value}
                          />
                          {field.error && (
                            <div class="text-red-600">{field.error}</div>
                          )}
                        </>
                      )}
                    </Field>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="number-1"
                    >
                      Retry Limit
                    </label>
                    <Field
                      name="retryLimit"
                      validate={[
                        required("Retry Limit must be provided"),
                        minNumber(0, "Retry Limit must be at least zero"),
                      ]}
                      type="number"
                    >
                      {(field, props) => (
                        <>
                          <input
                            {...props}
                            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="number-1"
                            placeholder="Enter number"
                            type="number"
                            value={field.value}
                          />
                          {field.error && (
                            <div class="text-red-600">{field.error}</div>
                          )}
                        </>
                      )}
                    </Field>
                  </div>
                  <div class="space-y-2">
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="number-2"
                    >
                      Queue Size
                    </label>
                    <Field
                      name="queueSize"
                      validate={[
                        required("Queue Size must be provided"),
                        minNumber(1, "Queue Size must be at one in size"),
                      ]}
                      type="number"
                    >
                      {(field, props) => (
                        <>
                          <input
                            {...props}
                            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="number-2"
                            placeholder="Enter number"
                            type="number"
                            value={field.value}
                          />
                          {field.error && (
                            <div class="text-red-600">{field.error}</div>
                          )}
                        </>
                      )}
                    </Field>
                  </div>
                </div>
                <SybSwitch
                  isChecked={checkedDLQ}
                  toggleSwitch={() => {
                    setCheckedDLQ(!checkedDLQ());
                  }}
                  text="Enabled Dead-Letter Queue"
                />

                <div class="flex justify-end">
                  <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
