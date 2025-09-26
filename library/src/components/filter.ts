import { BaseElement } from "./base";

export class Filter extends BaseElement {
  render() {
    this.shadowRoot!.innerHTML = /*html*/ `
      <style>
        :host {
          display: block;
          padding: 16px;
          background-color: #f9f9f9;
          border-bottom: 1px solid #eee;
        }
        .filter-container {
          display: flex;
          gap: 12px;
        }
        select {
          padding: 8px;
          font-size: 14px;
        }
      </style>
      <div class="filter-container">
        <select>
          <option value="">All Genres</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="fantasy">Fantasy</option>
        </select>
        <select>
          <option value="">All Authors</option>
          <option value="author1">Author 1</option>
          <option value="author2">Author 2</option>
          <option value="author3">Author 3</option>
        </select>
      </div>
    `;
  }
}   