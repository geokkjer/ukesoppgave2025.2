import { BaseComponent } from "../components/baseComponent";
export class App extends BaseComponent {
    render() {
        this.shadowRoot!.innerHTML = /*HTML*/ `
            <style>
                h1 {
                    color: darkblue;
                }
            </style>
            <header-component></header-component>
            <login-view></login-view>
        `;
    }
}