import { JSX } from "solid-js";
import Prism from "prismjs";
import "prismjs/components/prism-json.js";
import "./JsonBlock.css";

interface props {
  jsonRole: string;
}

const JsonBlock = (prop: props): JSX.Element => {
  const getJson = (raw: string) => {
    try {
      return JSON.stringify(JSON.parse(raw), null, 2);
    } catch {
      return "{}";
    }
  };

  return (
    <div class="mt-2 bg-white shadow-md rounded-lg p-4">
      <pre>
        {/* @ts-ignore */}
        <code
          innerHTML={Prism.highlight(
            getJson(prop.jsonRole),
            Prism.languages.json,
            "json"
          )}
        />
      </pre>
    </div>
  );
};

export default JsonBlock;
