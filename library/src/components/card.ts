import { BaseElement } from "./base";

export class Card extends BaseElement {
  props: { title: string; content: string } = { title: "", content: "" };

  static get observedAttributes() {
    return ["title", "content"];
  }

  attributeChangedCallback(name: string) {
    if (name === "title" || name === "content") {
      this.render();
    }
  }

  render() {
    this.shadowRoot!.innerHTML = /*html*/ `
      <style>
        .card {
          display: block;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 2px 5px rgba(212, 28, 28, 0.1);
          font-family: Arial, sans-serif;
        }
        h2 {
          margin-top: 0;
        }
        .card:hover {
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            transform: translateY(-2px);
            transition: all 0.3s ease;
        }
      </style>
      <div class="card">
        <h2>${this.title}</h2>
        <p>${this.content}</p>
      </div>
    `;
  }

  get title(): string {
    return this.getAttribute("title") || "Default Title";
  }

  get content(): string {
    return this.getAttribute("content") || "Default content goes here.";
  }
}
