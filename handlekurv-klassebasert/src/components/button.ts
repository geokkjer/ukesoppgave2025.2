import { BaseComponent } from "./baseComponent";

export class ButtonComponent extends BaseComponent {
    render() {
        this.shadowRoot!.innerHTML = `
            <button>Click me</button>
        `;
    }
}

