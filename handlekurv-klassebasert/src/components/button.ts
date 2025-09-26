import { BaseComponent } from "./baseComponent";

export class ButtonComponent extends BaseComponent {

    render() {
        this.shadowRoot!.innerHTML = /*html*/ `
            <style>
                button {
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                    background-color: #007BFF;
                }
            </style>
            <button></button>
        `;
    }
}

