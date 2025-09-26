import { BaseElement } from "./base";
import navbarCss from "../css/navbar.css?inline";

interface NavLink {
  title: string;
  url: string;
}
export class Navbar extends BaseElement {
    static get observedAttributes() {
    return ['links'];
  }
    attributeChangedCallback(name: string) {
    if (name === 'links') {
      this.render();
    }
  }
  render() {
    this.shadowRoot!.innerHTML = /*html*/ `
      <style>
        ${navbarCss}
      </style>
      <nav>
        <ul>
            <h1>Library</h1>
          ${this.links.map(link => `<li><a href="${link.url}">${link.title}</a></li>`).join('')}
        </ul>
      </nav>
    `;
  }
  private get links(): NavLink[] {
    const linksAttr = this.getAttribute('links');
    return linksAttr ? JSON.parse(linksAttr) : [];
  }
}

