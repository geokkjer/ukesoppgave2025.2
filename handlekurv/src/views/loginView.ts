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
       userNameInput.type = 'text';
       userNameInput.placeholder = 'Brukernavn';
       const passwordInput = document.createElement('input');
       passwordInput.type = 'password';
       passwordInput.placeholder = 'Passord';
       const button = document.createElement('button');
       button.textContent = 'Logg inn';
       this.addEventListeners(userNameInput, passwordInput, button);
       this.addEventListeners(userNameInput, passwordInput, button);
       
       element.append(title, userNameInput, passwordInput, button, addFooter);
       this.shadowRoot?.replaceChildren(element);
    }

    private addEventListeners(userNameInput: HTMLInputElement, passwordInput: HTMLInputElement, button: HTMLButtonElement) {
        button.addEventListener('click', () => {
            const username = userNameInput.value.trim();
            const password = passwordInput.value.trim();

    // Check if both fields are filled in
        if (!username || !password) {
            alert("Please fill in both username and password.");
            return;
        }

        // Log the credentials (in real app: send to server or validate)
        console.log("Login attempt:", { username, password });

        // Simple mock login logic
        if (username === "admin" && password === "1234") {
            alert("Login successful!");

            // Dispatch custom event for success
            // This allows  app to listen and react to       
            } else{
                alert("Invalid credentials, try again.");

            
            // Dispatch custom event for failure
            // This allows parent app to listen and handle failed login
            if (this.dispatch) {
                this.dispatch('login', { username, password });
            }
        }
    

    });
}}
