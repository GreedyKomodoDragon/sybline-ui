import { clientOnly } from "solid-start/islands";

const Diagram = clientOnly(() => import("~/components/diagram"));

export default function Visualiser() {
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
