import { JSX, createSignal } from "solid-js";
import Prism from "prismjs";
import "prismjs/components/prism-json.js";
import "./collapse.css";

interface props {
  roleName: string;
}
const Collapse = (prop: props): JSX.Element => {
  const [isOpen, setIsOpen] = createSignal(false);

  const content = `{ \"role\": \"ROOT\",\n\t\t\"actions\": {\n\t\t\t\"GetMessages\": \"allow:*\",\n\t\t\t\"SubmitMessage\": \"allow:*\",\n\t\t\t\"SubmitBatchedMessages\": \"allow:*\",\n\t\t\t\"CreateQueue\": \"allow\",\n\t\t\t\"ChangePassword\": \"allow\",\n\t\t\t\"Ack\": \"allow:*\",\n\t\t\t\"BatchAck\": \"allow:*\",\n\t\t\t\"DeleteQueue\": \"allow\",\n\t\t\t\"CreateUser\": \"allow\",\n\t\t\t\"DeleteUser\": \"allow\",\n\t\t\t\"CreateRole\": \"allow\",\n\t\t\t\"DeleteRole\": \"allow\",\n\t\t\t\"AssignRole\": \"allow\",\n\t\t\t\"UnassignRole\": \"allow\",\n\t\t\t\"CreateRole\": \"allow\"\n\t\t}}`;

  return (
    <div class="mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen())}
        class="flex items-center justify-between w-full bg-gray-200 text-gray-700 rounded-lg py-2 px-4 focus:outline-none"
      >
        <span class="text-lg font-semibold">{prop.roleName}</span>
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

      {isOpen() && (
        <div class="mt-2 bg-white shadow-md rounded-lg p-4">
          <pre>
            {/* @ts-ignore */}
            <code
              innerHTML={Prism.highlight(content, Prism.languages.json, "json")}
            />
          </pre>
        </div>
      )}
    </div>
  );
};

export default Collapse;
