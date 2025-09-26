import { BaseElement } from "./base";

export class Search extends BaseElement {
  render() {
    this.shadowRoot!.innerHTML = /*html*/ `
      <style>
        :host {
          display: block;
          font-family: Arial, sans-serif;
          padding: 16px;
        }
        #search-container {
          margin-bottom: 16px;
        }
        input[type="text"] {
          width: 100%;
          padding: 8px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      </style>
      <div id="search-container">
        <input type="text" placeholder="Search books..." />
      </div>
    `;
  }
}