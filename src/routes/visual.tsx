import { clientOnly } from "@solidjs/start";
import { createSignal } from "solid-js";
import { getRoutingData } from "~/rest";

const Diagram = clientOnly(() => import("~/components/diagram"));

export default function Visualiser() {
  const [loading, setLoading] = createSignal<boolean>(true);
  const [data, setData] = createSignal<string[]>([]);

  // first time fetch - in place to avoid css not loading for now, could be issue SSR?
  getRoutingData("route")
    .then((values) => {
      setData(values.queues);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
    });
    
  return (
    <div>
      <header class="py-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-5xl font-semibold">Current Architecture</h1>
        </div>
      </header>
      <Diagram />
    </div>
  );
}
