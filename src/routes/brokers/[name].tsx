import { useParams } from "solid-start";

export default function Broker() {
  const params = useParams<{ name: string }>();

  return (
    <>
      <header class="py-4">
        <div class="container mx-auto">
          <h1 class="text-3xl font-semibold">{params.name}</h1>
        </div>
      </header>

      <section class="py-8">
        <div class="container mx-auto">
          <h2 class="text-2xl font-semibold">Queue's Connected</h2>
          <ul class="mt-4">
            <li class="flex items-center justify-between py-2">
              <span>Item 1</span>
              <a class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full flex items-center">
                Go to
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 ml-2 stroke-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.293 10l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 11H3.5a.5.5 0 010-1h9.793z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="py-8">
        <div class="container mx-auto">
          <h2 class="text-2xl font-semibold">Send Message</h2>
          <form class="mt-4">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="message"
              >
                Message:
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div class="flex items-center justify-end">
              <button class="px-4 py-2 bg-blue-500 text-white rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
