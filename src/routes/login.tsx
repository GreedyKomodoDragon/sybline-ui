export default function Login() {
  return (
    <div class="bg-gray-800 h-screen flex items-center justify-center">
        <main class="bg-white p-8 rounded shadow-md w-96">
            <div class="text-center mb-6">
                <img src="/logo_full.svg" alt="Placeholder Image" class="h-50 w-50 text-blue-500 mx-auto"/>
            </div>
            <form>
                <div class="mb-4">
                    <label for="username" class="block text-gray-600">Username</label>
                    <input type="text" id="username" name="username" class="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500" required/>
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-gray-600">Password</label>
                    <input type="password" id="password" name="password" class="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500" required/>
                </div>
                <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
            </form>
        </main>
    </div>
  );
}
