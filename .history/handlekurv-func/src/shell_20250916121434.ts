import type { Model } from "./types";

export function render(state: Model, action: string | null): void {
  console.log("Rendering with state:", state);
  console.log("Action:", action);
}


