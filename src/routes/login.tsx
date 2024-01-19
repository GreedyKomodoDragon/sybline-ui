import { useCookies } from "@solidjs-use/integrations/useCookies";
import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import { login } from "~/rest";

export default function Login() {
  const cookies = useCookies(["token", "username"]);
  const navigate = useNavigate()
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Do something with username and password, e.g., send them to the server
    const token = await login(username(), password());
    if (token) {
        cookies.set("syb-username", username());
        cookies.set("syb-token", token);

        navigate("/")
        return
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
        <form onSubmit={handleSubmit}>
          <div class="mb-4">
            <label for="username" class="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              class="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={username()}
              onInput={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={password()}
              onInput={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </main>
    </div>
  );
}
