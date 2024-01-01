import { createSignal } from "solid-js";
import { Node, Edge, SolidFlow } from "solid-flow";
import styles from './diagram.module.css';
 
const initialNodes = [
    {
        id: "node-1",
        position: { x: 50, y: 100 },
        data: {
            content: <p>This is a simple node</p>,
        },
        inputs: 0,
        outputs: 1,
    },
    {
        id: "node-2",
        position: { x: 350, y: 100 },
        data: {
            label: "Node with label",
            content: <p>This is a node with a label</p>,
        },
        inputs: 1,
        outputs: 1,
    },
    {
        id: "node-3",
        position: { x: 350, y: 300 },
        data: {
            content: <p style={{ width: "200px" }}>This is a node with two inputs and two outputs</p>,
        },
        inputs: 2,
        outputs: 2,
    },

    {
        id: "node-4",
        position: { x: 700, y: 100 },
        data: {
            label: "Only inputs",
            content: <p>This is a node with only inputs</p>,
        },
        inputs: 2,
        outputs: 0,
    },
];

const initialEdges = [
    {
        id: "edge_0:0_1:0",
        sourceNode: "node-1",
        sourceOutput: 0,
        targetNode: "node-2",
        targetInput: 0,
    },
    {
        id: "edge_0:0_2:0",
        sourceNode: "node-1",
        sourceOutput: 0,
        targetNode: "node-3",
        targetInput: 0,
    },
    {
        id: "edge_1:0_3:0",
        sourceNode: "node-2",
        sourceOutput: 0,
        targetNode: "node-4",
        targetInput: 0,
    },
    {
        id: "edge_2:0_3:1",
        sourceNode: "node-3",
        sourceOutput: 0,
        targetNode: "node-4",
        targetInput: 1,
    },
];

const Diagram = () => {
    const [nodes, setNodes] = createSignal<Node[]>(initialNodes);
    const [edges, setEdges] = createSignal<Edge[]>(initialEdges);

    return (
        <div class="mt-5 w-5/6 mx-auto rounded-md border-solid border-gray-800 border-2 p-2 bg-white">
            <SolidFlow
                nodes={nodes()}
                edges={edges()}
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