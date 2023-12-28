import RightArrow from "~/icons/RightArrow";

interface ActionRowProps {
  name: string;
  url: string;
}

export default function ActionRow(props: ActionRowProps) {

  return (
    <div class="bg-white shadow-md rounded-md p-4 mb-4">
      <div class="flex items-center justify-between">
        <h4 class="font-semibold text-xl">{props.name}</h4>
        <a href={props.url} class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full flex items-center">
          Go to
          <RightArrow />
        </a>
      </div>
    </div>
  );
}
