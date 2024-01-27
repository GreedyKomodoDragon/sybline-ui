import { Accessor } from "solid-js";

// SybSwitch assumes a signal will be passed in order to capture the state
type SybSwitchProps = {
  isChecked: Accessor<boolean>;
  toggleSwitch: () => void;
  text: string;
};

export default function SybSwitch(props: SybSwitchProps) {
  const { isChecked, toggleSwitch, text } = props;

  return (
    <div class="flex items-center space-x-2">
      <button
        type="button"
        role="switch"
        aria-checked={isChecked()}
        data-state={isChecked() ? "checked" : "unchecked"}
        value="on"
        class={`peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300`}
        id="option"
        onClick={() => toggleSwitch()}
      >
        <span
          data-state={isChecked() ? "checked" : "unchecked"}
          class={`pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0`}
        ></span>
      </button>
      <label
        class={`text-sm font-medium leading-none ${
          isChecked() &&
          "peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        }`}
        for="option"
      >
        {text}
      </label>
    </div>
  );
}
