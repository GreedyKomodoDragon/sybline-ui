import { createSignal } from "solid-js";
import { useParams } from "solid-start";
import ActionRow from "~/components/ActionRow";
import Spinner from "~/components/Spinner";

export default function Broker() {
  const params = useParams<{ name: string }>();

  const [loading, setLoading] = createSignal<boolean>(true);
  const [data, setData] = createSignal<string[]>([]);

  // // first time fetch
  // getRoutingMappings()
  //   .then((values) => {
  //     setData(values.keys);
  //     setLoading(false);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  return (
    <>
      <header class="py-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-6xl font-semibold">{params.name}</h1>
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md float-right"
            onclick={async () => {
              // setLoading(true)
              // const keys = await getRoutingMappings()
              // setData(keys.keys)
              // setLoading(false)
            }}
          >
            Refresh
          </button>
        </div>
      </header>
      {loading() ? (
        <div class="flex justify-center items-center py-2">
          <Spinner />
        </div>
      ) : (
        <>
          <section class="py-2">
            <div class="container mx-auto">
              <h2 class="text-3xl font-semibold">Send Message</h2>
              <form class="mt-4">
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="message"
                  >
                    Message:
                  </label>
                  <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div class="flex items-center justify-end">
                  <button class="px-4 py-2 bg-blue-500 text-white rounded">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>
          <section class="py-2">
            <div class="container mx-auto">
              <h2 class="text-3xl font-semibold">Queue's Connected</h2>
              <ul class="mt-4">
                <ActionRow url="/queues/name" name="queue" />
              </ul>
            </div>
          </section>
        </>
      )}
    </>
  );
}
