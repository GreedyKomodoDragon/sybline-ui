import { createSignal } from "solid-js";
import { Node, Edge, SolidFlow } from "@greedykomodo/solid-flow";

type DiagramProps = {
  nodes: Node[]
  edges: Edge[]
}

const Diagram = (props: DiagramProps) => {
  const [nodes, setNodes] = createSignal<Node[]>(props.nodes);
  const [edges, setEdges] = createSignal<Edge[]>(props.edges);

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