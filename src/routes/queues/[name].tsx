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
          <button class="bg-blue-500 text-white px-4 py-2 rounded-md">
            Get Messages
          </button>
        </div>
      </section>

      <section class="py-6">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-semibold">Message List Section</h2>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <p class="text-lg font-semibold">Message 1</p>
                <p>Message details go here...</p>
              </div>
              <div>
                <button class="bg-green-500 text-white px-3 py-1 rounded-md">
                  ACK
                </button>
                <button class="bg-red-500 text-white px-3 py-1 rounded-md">
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
