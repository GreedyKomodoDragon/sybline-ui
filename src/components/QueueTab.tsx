import ActionRow from "./ActionRow";

export default function QueueTab() {
  return (
    <>
      <div class="container mx-auto py-4">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md float-right">
          Refresh
        </button>
      </div>
      <div class="container mx-auto py-8">
        <hr class="mt-2 mb-4" />
        <ActionRow name="Queue Name" url="/queues/name"/>
        <ActionRow name="Queue Name 2" url="/queues/name2"/>
      </div>
      <div class="flex justify-center mt-4 mb-8">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mr-2">
          1
        </button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-600 font-semibold py-2 px-4 rounded-full ml-2">
          2
        </button>
      </div>
    </>
  );
}
