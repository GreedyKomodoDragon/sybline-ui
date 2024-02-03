/* eslint-disable @typescript-eslint/no-explicit-any */
import { clientOnly } from "@solidjs/start";
import { createSignal } from "solid-js";
import { getAllFullBrokerInfo } from "~/rest";

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
        const element = data[i];

        const nodeRouteName = "node-" + element.key;

        ndes.push({
          id: nodeRouteName,
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

        const nodeStartName = "edge_" + element.key + ":"
        for (let k = 0; k < element.queues.length; k++) {
          const queue = element.queues[k];
          const nodeQueueName = "node-" + queue;

          ndes.push({
            id: nodeQueueName,
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
            id: nodeStartName + queue,
            sourceNode: nodeRouteName,
            sourceOutput: k,
            targetNode: nodeQueueName,
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
