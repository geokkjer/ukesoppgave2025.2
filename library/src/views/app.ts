import { BaseView } from "./base";

export class App extends BaseView {
  private appLinks = [
    { title: 'Login', url: '/login' }
  ];
  render() {
    this.shadowRoot!.innerHTML = /*html*/ `
      <style>
        :host {
          display: block;
          font-family: Arial, sans-serif;
          padding: 16px;
        }
      </style>
      <library-navbar links='${JSON.stringify(this.appLinks)}'></library-navbar>
      <main-top-bar></main-top-bar>
      <library-books></library-books>
    `;
  }
}
