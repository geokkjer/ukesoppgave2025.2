import { BaseElement } from "./base";

export class MainTopBar extends BaseElement {
  render() {
    this.shadowRoot!.innerHTML = /*html*/ `
      <style>
        :host {
          display: block;
          background-color: #f8f8f8;
          padding: 12px 16px;
          border-bottom: 1px solid #eee;
        }
      </style>
      <div class="search-container">
        <library-search></library-search>
      </div>
      <div class="filter-container">
        <library-filter></library-filter>
      </div>
    `;
  }
}
