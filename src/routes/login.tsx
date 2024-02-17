import { SubmitHandler, createForm, required } from "@modular-forms/solid";
import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import { login } from "../rest";
import { setCookie } from "../utils/cookies";

type LoginForm = {
  username: string;
  password: string;
};

export default function Login() {
  const [, { Form, Field }] = createForm<LoginForm>();
  const [failed, setFailed] = createSignal<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit: SubmitHandler<LoginForm> = async (e) => {
    setFailed(false);

    try {
      const token = await login(e.username, e.password);

      if (!token) {
        setFailed(true);
        return;
      }

      setCookie("syb-username", e.username);
      setCookie("syb-token", token);

      navigate("/");
    } catch (error) {
      setFailed(true);
    }
  };

  return (
    <div class="bg-gray-800 h-screen flex items-center justify-center">
      <main class="bg-white p-8 rounded shadow-md w-96">
        <div class="text-center mb-6">
          <img
            src="/logo_full.svg"
            alt="Placeholder Image"
            class="h-50 w-50 text-blue-500 mx-auto"
          />
        </div>
        <Form onSubmit={handleSubmit}>
          <div class="mb-4">
            <label for="username" class="block text-gray-600">
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
                    class="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    id="username"
                    type="text"
                    value={field.value}
                  />
                  {field.error && (
                    <div class="text-red-600 mt-2">{field.error}</div>
                  )}
                </>
              )}
            </Field>
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-600">
              Password
            </label>
            <Field
              name="password"
              validate={[required("Please provide a password")]}
            >
              {(field, props) => (
                <>
                  <input
                    {...props}
                    class="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    id="password"
                    type="password"
                    value={field.value}
                  />
                  {field.error && (
                    <div class="text-red-600 mt-2">{field.error}</div>
                  )}
                </>
              )}
            </Field>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </Form>
        {failed() && (
          <div class="text-red-600 mt-2">
            Unable to login, check credentials
          </div>
        )}
      </main>
    </div>
  );
}
