import { BaseComponent } from "../components/baseComponent";
export class App extends BaseComponent {
    render() {
        this.shadowRoot!.innerHTML = `
            <h1>Login</h1>
            <my-input ></my-input>
            <my-input ></my-input>

            <my-button></my-button>
        `;
    }
}
