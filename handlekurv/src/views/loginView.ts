import { footer } from "../components/footer";
import type { DispatchFunction, AppState } from "../types";

export default class LoginView extends HTMLElement {
    private dispatch?: DispatchFunction;


    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    setDispatch(dispatch: DispatchFunction) {
        this.dispatch = dispatch;
    }

    attributeChangedCallback(){
        this.render();
    }

    connectedCallback () {
        this.render();
    }
    
    // render() {
    //    const element = document.createElement('main');
    //    element.id = 'main';
    //    const addFooter = footer();
       
    //    const title = document.createElement('h1');
    //    title.textContent = 'Welcome to the Store';
       
    //    const userNameInput = document.createElement('input');
    //    userNameInput.type = 'text';
    //    userNameInput.placeholder = 'Brukernavn';
       
    //    const passwordInput = document.createElement('input');
    //    passwordInput.type = 'password';
    //    passwordInput.placeholder = 'Passord';
       
    //    const button = document.createElement('button');
    //    button.textContent = 'Logg inn';
       
    //    element.append(title, userNameInput, passwordInput, button, addFooter);
    //    this.shadowRoot?.replaceChildren(element);
    // }
    // Attach event listener to button (login button)

    render() {
       const element = document.createElement('main');
       element.id = 'main';
       const addFooter = footer();
       const title = document.createElement('h1');
       title.textContent = 'Welcome to the Store';
       const userNameInput = document.createElement('input');
       userNameInput.type = 'email';
       userNameInput.placeholder = 'Email (ex: user@example.com)';
       const passwordInput = document.createElement('input');
       passwordInput.type = 'password';
       passwordInput.placeholder = 'Passord';
       const button = document.createElement('button');
       button.textContent = 'Logg inn';
       const registerButton = document.createElement('button');
       registerButton.textContent="Register"
       this.addEventListeners(userNameInput, passwordInput, button);
        registerButton.addEventListener('click', ()=> {
            if (this.dispatch) {this.dispatch('register-view', 'register')}
        })

       element.append(title, userNameInput, passwordInput, button, registerButton, addFooter);
       this.shadowRoot?.replaceChildren(element);
    }
// dette hadde vært fint å flytte den til controller.ts???
    private addEventListeners(userNameInput: HTMLInputElement, passwordInput: HTMLInputElement, button: HTMLButtonElement) {
        button.addEventListener('click', () => {
            const username = userNameInput.value.trim();
            const password = passwordInput.value.trim();
           
            if (this.dispatch) {
                this.dispatch('login', { username, password });
            }
        }
        );
}}
