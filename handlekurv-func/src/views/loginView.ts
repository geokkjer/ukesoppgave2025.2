import { footer } from "../components/footer";
import type { DispatchFunction, AppState } from "../types";

export function loginView(state: AppState, dispatch: DispatchFunction): HTMLElement {
    const element = document.createElement('main')!;
    const addFooter = footer();
    element.id = 'main';
    element.innerHTML = `
            <h1>Welcome to the Store</h1>
            <input type="text" placeholder="Brukernavn" />
            <input type="password" placeholder="Passord" />
            <button >Logg inn</button>
    `;
    element.appendChild(addFooter);
    element.querySelector('button')!.addEventListener('click', () => {
        const username = (element.querySelector('input[type="text"]') as HTMLInputElement).value;
        const password = (element.querySelector('input[type="password"]') as HTMLInputElement).value;
        dispatch('login', { username, password });
    });
    return element;

}