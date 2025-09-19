import type { AppState, DispatchFunction } from "../types";
import { navBar } from "../components/navBar";
import { footer } from "../components/footer";

export function mainView(state: AppState, dispatch: DispatchFunction): HTMLElement {
    const nav = navBar(state, dispatch);
    const foot = footer();
    const main = document.createElement('main');
    main.id= 'main';
    const h1 = document.createElement('h1');
    h1.innerText = `Velkommen til vår nettbutikk!`;
    const div = document.createElement('div');
    div.innerText = `${state.users.length} brukere er registrert.`;
    main.appendChild(nav);
    main.appendChild(h1);
    main.appendChild(div);
    main.appendChild(foot);
    return main;
}