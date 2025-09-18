import { footer } from "../components/footer";
import type { DispatchFunction, Model } from "../types";

export function mainView(state: Model, dispatch: DispatchFunction): HTMLElement {
    const app = document.getElementById('app');
    const element = document.createElement('main')!;
    const footer = footer();
    element.id = 'main';
    element.innerHTML = `
            <h1>Welcome to the Store</h1>
            <input type="text" placeholder="Brukernavn" />
            <input type="password" placeholder="Passord" />
            <button id="login-button">Logg inn</button>
    `;
    app!.replaceChildren(element);
    app!.appendChild(footer);
    document.getElementById('login-button')!.addEventListener('click', () => {
        const username = (element.querySelector('input[type="text"]') as HTMLInputElement).value;
        const password = (element.querySelector('input[type="password"]') as HTMLInputElement).value;
        dispatch('login', { username, password });
    });
    return element;

}