import type { Model } from "./types";

export function render(state: Model, action: string | null): void {
  console.log("Rendering with state:", state);
  console.log("Action:", action);

  const oldState = {
    ...state,
  };
if (oldState.app.currentPage === 'products') {
    const app = document.getElementById('app');
    app!.innerHTML = 'hello world :)';
}


