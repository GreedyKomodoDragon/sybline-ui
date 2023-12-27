import { useParams } from "solid-start";

export default function Queues() {
  const params = useParams<{ name: string }>();

  return (
    <>
      <header class="container mx-auto px-4">
        <h1 class="text-3xl font-semibold">{params.name}</h1>
      </header>

      <section class="py-6">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-semibold">Stats Section</h2>
        </div>
      </section>

      <section class="py-6">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-semibold">Get Messages Section</h2>
          <form
            id="getMessageForm"
            class="bg-white p-4 shadow-md rounded-md mt-4 flex items-center space-x-4"
          >
            <label for="messageCount" class="text-gray-600">
              Number of Messages:
            </label>
            <div class="relative inline-block">
              <input
                type="number"
                class="peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                value={10}
              />
            </div>
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Get Messages
            </button>
          </form>
        </div>
      </section>

      <section class="py-6">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-semibold">Message List Section</h2>
          <div class="space-y-4">
            <div class="mt-4 bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <p class="text-lg font-semibold">Message 1</p>
                <p>Message details go here...</p>
              </div>
              <div>
                <button class="bg-green-500 text-white px-3 py-1 rounded-l">
                  ACK
                </button>
                <button class="bg-red-500 text-white px-3 py-1 rounded-r">
                  NACK
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
