export default function CreateAccount() {
  return (
    <div class="flex flex-col items-center justify-center min-h-scree">
      <div class="w-full max-w-lg p-6">
        <h2 class="text-5xl mb-5 font-bold text-center text-gray-900">
          Create a New Account
        </h2>
        <form class="mt-4 space-y-6">
          <div class="space-y-1">
            <label
              class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium "
              for="username"
            >
              Username
            </label>
            <input
              class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
              id="username"
              type="text"
            />
          </div>
          <div class="space-y-1">
            <label
              class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium "
              for="password"
            >
              Password
            </label>
            <input
              class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
              id="password"
              type="password"
            />
          </div>
          <div class="space-y-1">
            <label
              class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium "
              for="confirm-password"
            >
              Confirm Password
            </label>
            <input
              class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
              id="confirm-password"
              type="password"
            />
          </div>
          <button
            class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white hover:bg-blue-700 h-10 px-4 py-2 w-full"
            type="submit"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
