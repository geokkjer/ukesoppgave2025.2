import { BaseComponent } from "./baseComponent";

export class InputComponent extends BaseComponent {
    render() {
        this.shadowRoot!.innerHTML = `
            <input type="text" placeholder="Type something..." />
        `;
    }
}
