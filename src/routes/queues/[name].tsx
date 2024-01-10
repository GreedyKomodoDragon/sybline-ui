import { useParams } from "solid-start";

export default function Queues() {
  const params = useParams<{ name: string }>();

  return (
    <div class="flex flex-col h-screen">
      <main class="flex-1 overflow-y-auto p-6">
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-xl font-semibold">Queue</h1>
        </div>
        <section class="bg-gray-100 p-4 rounded-md mb-4">
          <h2 class="text-lg font-semibold mb-2">Queue Information</h2>
          <p class="text-sm text-gray-500 ">
            Current Queue Size: <span class="font-bold">50</span>
          </p>
          <p class="text-sm text-gray-500 ">
            Maximum Queue Size: <span class="font-bold">100</span>
          </p>
          <p class="text-sm text-gray-500 ">
            Average Wait Time: <span class="font-bold">5 minutes</span>
          </p>
        </section>
        <div class="flex items-center gap-4 mb-4">
          <label for="messageCount" class="text-sm text-gray-500 ">
            Get
          </label>
          <select
            id="messageCount"
            class="rounded-md border-gray-300  bg-white  text-sm text-gray-500 "
          >
            <option>1</option>
            <option>5</option>
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <label for="messageCount" class="text-sm text-gray-500 ">
            messages
          </label>
          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Go
          </button>
        </div>
        <div class="text-sm text-gray-500  mb-6">
          Total Items: <span class="font-bold">10</span>
        </div>
        <div class="grid gap-6">
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div class="p-6 flex items-center justify-between bg-gray-100 ">
              <span class="font-medium">Item 1</span>
              <div class="flex items-center gap-2">
                <button class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  Acknowledge
                </button>
                <button class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  Nack
                </button>
              </div>
            </div>
          </div>
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div class="p-6 flex items-center justify-between bg-gray-100 ">
              <span class="font-medium">Item 2</span>
              <div class="flex items-center gap-2">
                <button class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  Acknowledge
                </button>
                <button class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  Nack
                </button>
              </div>
            </div>
          </div>
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div class="p-6 flex items-center justify-between bg-gray-100 ">
              <span class="font-medium">Item 3</span>
              <div class="flex items-center gap-2">
                <button class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  Acknowledge
                </button>
                <button class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  Nack
                </button>
              </div>
            </div>
          </div>
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div class="p-6 flex items-center justify-between bg-gray-100 ">
              <span class="font-medium">Item 4</span>
              <div class="flex items-center gap-2">
                <button class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  Acknowledge
                </button>
                <button class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  Nack
                </button>
              </div>
            </div>
          </div>
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div class="p-6 flex items-center justify-between bg-gray-100 ">
              <span class="font-medium">Item 5</span>
              <div class="flex items-center gap-2">
                <button class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  Acknowledge
                </button>
                <button class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  Nack
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
