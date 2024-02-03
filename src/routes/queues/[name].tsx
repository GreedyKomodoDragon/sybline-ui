import { useParams } from "@solidjs/router";
import { For, createSignal } from "solid-js";
import ErrorAlert from "~/components/ErrorAlert";
import MessageCard from "~/components/queue/MessageCard";
import QueueInfo from "~/components/queue/QueueInfo";
import { Message, getMessages } from "~/rest/queue";

export default function Queues() {
  const params = useParams<{ name: string }>();

  const [messages, setMessages] = createSignal<Message[]>([]);
  const [failed, setFailed] = createSignal<boolean>(false);
  const [amount, setAmount] = createSignal<number>(0);

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
            onChange={(e) => setAmount(Number(e.currentTarget.value))}
          />
          <label for="messageCount" class="text-sm text-gray-500 ">
            messages
          </label>
          <button
            class="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={() => {
              if (amount() < 0) {
                return;
              }

              getMessages(params.name, amount())
                .then((data) => setMessages(data))
                .catch(() => {
                  setFailed(true);
                });
            }}
          >
            Go
          </button>
        </div>
        {messages().length > 0 && (
          <div class="text-sm text-gray-500  mb-6">
            Total Items: <span class="font-bold">{messages().length}</span>
          </div>
        )}

        {failed() && <ErrorAlert />}
        <div class="grid gap-4">
          {messages() && (
            <For each={messages()}>
              {(msg: Message) => (
                <MessageCard
                  id={msg.id}
                  data={msg.data}
                  queue={params.name}
                  onSuccess={() => {
                    setMessages(messages().filter(mg => mg.id !== msg.id))
                  }}
                />
              )}
            </For>
          )}
        </div>
      </main>
    </div>
  );
}
