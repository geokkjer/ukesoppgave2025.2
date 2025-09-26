import { BaseComponent } from "./baseComponent";

export class InputComponent extends BaseComponent {
    render() {
        this.shadowRoot!.innerHTML = `
            <input type="email" placeholder="Email" value=""id="email"/>
            <input type="password" placeholder="Password" value="" id="password"/>
        `;
    }
}
