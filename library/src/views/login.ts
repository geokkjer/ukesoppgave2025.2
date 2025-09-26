import { BaseElement } from "../components/base";

export class Login extends BaseElement {
  render() {
    this.shadowRoot!.innerHTML = /*html*/ `
      <div>
        <library-navbar links=${JSON.stringify([
          { title: "Home", url: "/" },
          { title: "About", url: "/about" },
          { title: "Contact", url: "/contact" },
        ])}></library-navbar>
        <p>This is the login view content.</p>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    `;
    this.addEventListeners();
  }
  
  
  
  private addEventListeners() {
    this.shadowRoot!.querySelector('button')?.addEventListener('click', () => {
      alert('Login button clicked!');
    });
  }
}