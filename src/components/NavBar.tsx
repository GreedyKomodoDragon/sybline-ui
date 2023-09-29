export default function NavBar() {
  return (
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="/" class="flex items-center">
          <img
            src="/logo_full.svg"
            class="mr-3 h-6 sm:h-9"
            alt="sybline Logo"
          />
        </a>
        <div class="flex items-center lg:order-2">
          <button class="text-gray-800 dark:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-gray-800">
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
}
