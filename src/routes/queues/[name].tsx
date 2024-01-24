import { useParams } from "@solidjs/router";
import { createSignal } from "solid-js";
import MessageCard from "~/components/queue/MessageCard";
import QueueInfo from "~/components/queue/QueueInfo";
import { Message } from "~/rest/queue";

export default function Queues() {
  const params = useParams<{ name: string }>();

  const [messages, setMessages] = createSignal<Message[]>();

  return (
    <div class="container mx-auto flex justify-between items-center">
      <main class="flex-1 overflow-y-auto p-6">
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-4xl font-semibold">Queue: {params.name}</h1>
        </div>
        <QueueInfo />
        <div class="flex items-center gap-4 mb-4">
          <label for="messageCount" class="text-sm text-gray-500">
            Fetch
          </label>
          <input
            id="messageCount"
            class="rounded-md border-gray-300  bg-white w-20 p-1  text-sm text-gray-500 border-2"
            type="number"
          />
          <label for="messageCount" class="text-sm text-gray-500 ">
            messages
          </label>
          <button class="bg-green-500 text-white px-4 py-2 rounded-md">
            Go
          </button>
        </div>
        <div class="text-sm text-gray-500  mb-6">
          Total Items: <span class="font-bold">10</span>
        </div>
        <div class="grid gap-4">
          <MessageCard />
          <MessageCard />
        </div>
      </main>
    </div>
  );
}
