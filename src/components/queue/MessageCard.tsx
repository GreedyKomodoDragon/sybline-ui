import { createSignal } from "solid-js";
import { ackMessage, nackMessage } from "../../rest/queue";

type MessageCardProps = {
  id: string;
  data: string;
  queue: string;
  onSuccess: () => void;
};

export default function MessageCard(props: MessageCardProps) {
  const [isOpen, setIsOpen] = createSignal<boolean>(false);
  const [failed, setFailed] = createSignal<string>("");
  return (
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm"
      data-v0-t="card"
    >
      <div class="p-4 flex items-center justify-between bg-gray-100 ">
        <span class="font-medium">Id: {props.id}</span>
        <div class="flex items-center gap-2">
          <button
            class="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={() => {
              ackMessage(props.id, props.queue)
                .then(() => {
                  props.onSuccess();
                })
                .catch((error) => {
                  if (error.response.data.message) {
                    setFailed("error: " + error.response.data.message);
                  }
                });
            }}
          >
            Ack
          </button>
          <button
            class="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={() => {
              nackMessage(props.id, props.queue)
                .then(() => {
                  props.onSuccess();
                })
                .catch((error) => {
                  if (error.response.data.message) {
                    setFailed("error: " + error.response.data.message);
                  }
                });
            }}
          >
            Nack
          </button>
          <button
            onClick={() => setIsOpen(!isOpen())}
            class="flex items-center justify-between w-full bg-gray-200 text-gray-700 rounded-lg py-2 px-4 focus:outline-none"
          >
            <svg
              class={`w-5 h-5 transition-transform transform ${
                isOpen() ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 3L2 12h16z" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen() && <div class="p-6 flex">Data: {props.data}</div>}
      { failed() && <div class="p-6 flex text-red-500">Error: {failed()}</div>}
    </div>
  );
}
