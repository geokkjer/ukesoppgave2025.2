import { BaseComponent } from "../components/baseComponent";
export class App extends BaseComponent {
    render() {
        this.shadowRoot!.innerHTML = `
            <h1>Welcome to My App</h1>
            <my-button></my-button>
            <my-button></my-button>
            <my-button></my-button>
            <my-button></my-button>
        `;
    }
}
