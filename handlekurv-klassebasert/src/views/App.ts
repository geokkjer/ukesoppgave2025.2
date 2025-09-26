import { BaseComponent } from "../components/baseComponent";

export class App extends BaseComponent {
    render() {
        this.shadowRoot!.innerHTML = `
            <h1>Login</h1> 
            <form id="loginForm">
            <my-input></my-input>
            <my-button>LoggIn</my-button>
            </form>
        `;
    }
}
