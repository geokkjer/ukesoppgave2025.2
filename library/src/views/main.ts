import { BaseView } from "./base";

export class MainView extends BaseView {
  render() {
    this.shadowRoot!.innerHTML = /*html*/ `
            <library-navbar links=${JSON.stringify([
              { title: "Home", url: "/" },
              { title: "About", url: "/about" },
              { title: "Contact", url: "/contact" },
            ])}></library-navbar>
            <h1>Main View</h1>
            <p>This is the main view content.</p>
           
            
    `;
  }
}
