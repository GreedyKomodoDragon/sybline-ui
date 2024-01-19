import { JSX } from "solid-js";
import Prism from "prismjs";
import "prismjs/components/prism-json.js";
import "./JsonBlock.css";

interface props {
  jsonRole: string;
}

const JsonBlock = (prop: props): JSX.Element => {
  return (
    <div class="mt-2 bg-white shadow-md rounded-lg p-4">
      <pre>
        {/* @ts-ignore */}
        <code
          innerHTML={Prism.highlight(
            JSON.stringify(JSON.parse(prop.jsonRole), null, 2),
            Prism.languages.json,
            "json"
          )}
        />
      </pre>
    </div>
  );
};

export default JsonBlock;
