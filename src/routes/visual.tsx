import { clientOnly } from "@solidjs/start";
import { createSignal } from "solid-js";
import { getAllFullBrokerInfo, getRoutingData } from "~/rest";

const Diagram = clientOnly(() => import("~/components/diagram"));

export default function Visualiser() {
  const [loading, setLoading] = createSignal<boolean>(true);
  const [nodes, setNodes] = createSignal<any>([]);
  const [edges, setEdges] = createSignal<any>([]);

  getAllFullBrokerInfo()
    .then((data) => {
      const ndes = [];
      const edgs = [];

      for (let i = 0; i < data.length; i++) {
        let element = data[i];

        ndes.push({
          id: "node-" + element.key,
          position: { x: 0, y: 0 },
          data: {
            content: (
              <div>
                <p class="text-l">Broker: {element.key}</p>
              </div>
            ),
          },
          inputs: 0,
          outputs: element.queues.length,
          color: "#cecece",
        });

        for (let k = 0; k < element.queues.length; k++) {
          const queue = element.queues[k];
          ndes.push({
            id: "node-" + queue,
            position: { x: 0, y: 0 },
            data: {
              content: (
                <div>
                  <p class="text-l">Queue: {queue}</p>
                </div>
              ),
            },
            inputs: 1,
            outputs: 0,
            color: "white",
          });

          edgs.push({
            id: "edge_" + element.key + ":" + queue,
            sourceNode: "node-" + element.key,
            sourceOutput: k,
            targetNode: "node-" + queue,
            targetInput: 0,
          });
        }
      }

      setNodes(ndes);
      setEdges(edgs);
      setLoading(false);
    })
    .catch(console.error);

  return (
    <div>
      <header class="py-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-5xl font-semibold">Current Architecture</h1>
        </div>
      </header>
      {!loading() && <Diagram nodes={nodes()} edges={edges()} />}
    </div>
  );
}
