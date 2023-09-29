export default function BrokerTab() {
  return (
    <>
      <div class="container mx-auto py-4">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md float-right">
          Refresh
        </button>
      </div>
      <div class="container mx-auto py-8">
        <hr class="mt-2 mb-4"/>
        <div class="bg-white shadow-md rounded-md p-4 mb-4">
          <div class="flex items-center justify-between">
            <h4 class="font-semibold text-xl">Broker Name: </h4>
            <button class="text-gray-500 hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>
          <form class="mt-4">
            <div class="mb-2">
              <label for="comment" class="block text-gray-600 font-semibold">
                Body
              </label>
              <textarea
                id="comment"
                name="comment"
                rows="3"
                class="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Type your comment here..."
              ></textarea>
            </div>
            <div class="mb-2 h-5">
              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md float-right"
              >
                <span class="mr-2">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 inline-block"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.293 9.293a1 1 0 011.414-1.414L10 14.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="flex justify-center mt-4 mb-8">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mr-2">
          1
        </button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-600 font-semibold py-2 px-4 rounded-full ml-2">
          2
        </button>
      </div>
    </>
  );
}
