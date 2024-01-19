import { createSignal } from "solid-js";
import { Node, Edge, SolidFlow } from "@greedykomodo/solid-flow";

const initialNodes = [
  {
    id: "node-a",
    position: { x: 50, y: 50 },
    data: {
      content: (
        <div>
          <p class="text-xl">Broker: Node A</p>
          <p>Routing Key: Key</p>
        </div>
      ),
    },
    inputs: 0,
    outputs: 3,
    color: "yellow",
  },
  {
    id: "node-b",
    position: { x: 250, y: 50 },
    data: {
      content: <p>Node B</p>,
    },
    inputs: 1,
    outputs: 0,
  },
  {
    id: "node-c",
    position: { x: 450, y: 50 },
    data: {
      content: <p>Node C</p>,
    },
    inputs: 1,
    outputs: 0,
  },
  {
    id: "node-d",
    position: { x: 250, y: 250 },
    data: {
      content: <p>Node D</p>,
    },
    inputs: 1,
    outputs: 0,
    color: "blue",
  },
  {
    id: "node-e",
    position: { x: 250, y: 250 },
    data: {
      content: (
        <div>
          <p class="text-xl">Broker: Node E</p>
          <p>Routing Key: Key</p>
        </div>
      ),
    },
    inputs: 0,
    outputs: 1,
    color: "yellow",
  },
];

const initialEdges = [
  {
    id: "edge_a:b",
    sourceNode: "node-a",
    sourceOutput: 0,
    targetNode: "node-b",
    targetInput: 0,
  },
  {
    id: "edge_a:d",
    sourceNode: "node-a",
    sourceOutput: 1,
    targetNode: "node-d",
    targetInput: 0,
  },
  {
    id: "edge_a:c",
    sourceNode: "node-a",
    sourceOutput: 2,
    targetNode: "node-c",
    targetInput: 0,
  },
  {
    id: "edge_e:b",
    sourceNode: "node-e",
    sourceOutput: 0,
    targetNode: "node-b",
    targetInput: 0,
  },
];

const Diagram = () => {
  const [nodes, setNodes] = createSignal<Node[]>(initialNodes);
  const [edges, setEdges] = createSignal<Edge[]>(initialEdges);

  return (
    <div class="mt-5 mb-10 w-5/6 mx-auto rounded-md border-solid border-gray-800 border-2 p-2 bg-white">
      <SolidFlow
        nodes={nodes()}
        edges={edges()}
        height="70vh"
        width="100%"
        onNodesChange={(newNodes: Node[]) => {
          setNodes(newNodes);
        }}
        onEdgesChange={(newEdges: Edge[]) => {
          setEdges(newEdges);
        }}
      />
    </div>
  );
};

export default Diagram;