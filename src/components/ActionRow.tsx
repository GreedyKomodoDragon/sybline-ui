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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2 stroke-current"
            viewBox="0 0 20 20"
          >
            <path
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.293 10l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 11H3.5a.5.5 0 010-1h9.793z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
