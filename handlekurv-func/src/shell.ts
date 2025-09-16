import type { Model } from "./types";
import { productsView } from "./productsView";
import { footer, navBar } from "./commonView";
import { mainView } from "./commonView";

export function render(state: Model, action: string | null): void {
  
  // const renderMainView = mainView();

  
  // console.log("Rendering with state:", state);
  // console.log("Action:", action);

  const oldState = {
    ...state,
  };
if (oldState.app.currentPage === 'products') {
  productsView(oldState);
  navBar(state);
  footer();
} else if (oldState.app.currentPage === 'cart') {
  const app = document.getElementById('app');
  app!.innerHTML = 'this is the cart page';
}
}
