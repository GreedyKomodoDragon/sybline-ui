import { JSX, createSignal } from "solid-js";
import Prism from "prismjs";
import "prismjs/components/prism-json.js";
import "./collapse.css";

interface props {
  roleName: string;
  jsonRole: string;
}
const Collapse = (prop: props): JSX.Element => {
  const [isOpen, setIsOpen] = createSignal(false);  

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
              innerHTML={Prism.highlight(JSON.stringify(JSON.parse(prop.jsonRole),null,2), Prism.languages.json, "json")}
            />
          </pre>
        </div>
      )}
    </div>
  );
};

export default Collapse;
