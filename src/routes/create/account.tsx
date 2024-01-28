import { createForm, minLength, required } from "@modular-forms/solid";
import { createSignal } from "solid-js";
import ErrorAlert from "~/components/ErrorAlert";
import SuccessAlert from "~/components/SuccessAlert";
import { createAccount } from "~/rest";

type CreateAccountForm = {
  username: string;
  password: string;
  confirmPassword: string;
};

export default function CreateAccount() {
  const [_, { Form, Field }] = createForm<CreateAccountForm>();

  const [accountCreated, setAccountCreated] = createSignal<boolean>(false);
  const [failed, setFailed] = createSignal<boolean>(false);
  const [match, setMatch] = createSignal<string>("");

  // const [loading, setLoading] = createSignal();

  return (
    <div class="flex flex-col items-center justify-center">
      {failed() && <ErrorAlert />}
      {accountCreated() && <SuccessAlert />}
      <div class="w-full max-w-lg p-6">
        <h2 class="text-5xl mb-5 font-bold text-center text-gray-900">
          Create a New Account
        </h2>
        <Form
          onSubmit={(e) => {
            setFailed(false);
            if (e.password != e.confirmPassword) {
              setMatch("Passwords must match");
              return;
            }

            setMatch("");

            createAccount(e.username, e.password)
              .then(() => {
                setAccountCreated(true);
              })
              .catch(() => {
                setFailed(true);
              });
          }}
        >
          <div class="mt-4 space-y-6">
            <div class="space-y-1">
              <label
                class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium "
                for="username"
              >
                Username
              </label>
              <Field
                name="username"
                validate={[required("Please enter your username")]}
              >
                {(field, props) => (
                  <>
                    <input
                      {...props}
                      class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                      id="username"
                      type="text"
                      value={field.value}
                    />
                    {field.error && (
                      <div class="text-red-600">{field.error}</div>
                    )}
                  </>
                )}
              </Field>
            </div>
            <div class="space-y-1">
              <label
                class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium "
                for="password"
              >
                Password
              </label>
              <Field
                name="password"
                validate={[required("Please enter your password")]}
              >
                {(field, props) => (
                  <>
                    <input
                      {...props}
                      class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                      id="password"
                      type="password"
                      value={field.value}
                    />
                    {field.error && (
                      <div class="text-red-600">{field.error}</div>
                    )}
                  </>
                )}
              </Field>
            </div>
            <div class="space-y-1">
              <label
                class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium "
                for="confirm-password"
              >
                Confirm Password
              </label>
              <Field
                name="confirmPassword"
                validate={[required("Please enter your password again")]}
              >
                {(field, props) => (
                  <>
                    <input
                      {...props}
                      class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                      id="confirm-password"
                      type="password"
                      value={field.value}
                    />
                    {field.error && (
                      <div class="text-red-600">{field.error}</div>
                    )}
                    {match() && <div class="text-red-600">{match()}</div>}
                  </>
                )}
              </Field>
            </div>
            <button
              type="submit"
              class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white hover:bg-blue-700 h-10 px-4 py-2 w-full"
            >
              Create Account
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
