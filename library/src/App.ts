
import { BaseView } from "./views/base";
import { MainView } from "./views/main";
import { Login } from "./views/login";
import { Books } from "./components/books";
import { Navbar } from "./components/navbar";
export class App extends BaseView {
  render() {
    this.shadowRoot!.innerHTML = /*html*/ `
     <library-login></library-login>
    `;
  }
}
customElements.define('library-navbar', Navbar);
customElements.define('library-main', MainView);
customElements.define('library-app', App);
customElements.define('library-login', Login);
customElements.define('library-books', Books);