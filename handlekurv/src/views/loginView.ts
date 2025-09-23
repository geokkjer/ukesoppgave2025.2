import { footer } from "../components/footer";
import type { DispatchFunction, AppState } from "../types";

export default class LoginView extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(){
        this.render();
    }

    connectedCallback () {
        this.render();
    }
    render() {
       const element = document.createElement('main');
       element.id = 'main';
       const addFooter = footer();
       const title = document.createElement('h1');
       title.textContent = 'Welcome to the Store';
       const userNameInput = document.createElement('input');
       userNameInput.type = 'text';
       userNameInput.placeholder = 'Brukernavn';
       const passwordInput = document.createElement('input');
       passwordInput.type = 'password';
       passwordInput.placeholder = 'Passord';
       const button = document.createElement('button');
       button.textContent = 'Logg inn';
       element.append(title, userNameInput, passwordInput, button, addFooter);
       this.shadowRoot?.replaceChildren(element);
    }
}


// export function loginView(state: AppState, dispatch: DispatchFunction): HTMLElement {
//     const element = document.createElement('main')!;
//     const addFooter = footer();
//     element.id = 'main';
//     element.innerHTML = `
//             <h1>Welcome to the Store</h1>
//             <input type="text" placeholder="Brukernavn" />
//             <input type="password" placeholder="Passord" />
//             <button >Logg inn</button>
//     `;
//     element.appendChild(addFooter);
//     element.querySelector('button')!.addEventListener('click', () => {
//         const username = (element.querySelector('input[type="text"]') as HTMLInputElement).value;
//         const password = (element.querySelector('input[type="password"]') as HTMLInputElement).value;
//         dispatch('login', { username, password });
//     });
//     return element;

// }
