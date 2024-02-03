import { For, JSX } from "solid-js";

interface SybSelectProps {
  options?: string[];
  onChange?: JSX.ChangeEventHandlerUnion<HTMLSelectElement, Event> 
  selected?: string;
}

export default function SybSelect(props: SybSelectProps) {
  return (
    <div class="mt-1 relative">
      <select
        id="select"
        name="select"
        class="block w-full py-2 pl-3 pr-10 text-base border-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        onChange={props.onChange}  
      >
        <For each={props.options}>
          {(key: string) => <option selected={props.selected == key} value={key}>{key}</option>}
        </For>
      </select>
      <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          class="w-5 h-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
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
      </div>
    </div>
  );
}
