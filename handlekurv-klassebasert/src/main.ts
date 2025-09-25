import { App } from "./views/App";
import { LoginView } from "./components/loginView";
import { Header } from "./components/header";
import { Button } from "./components/button";
import { Products } from "./components/products";

customElements.define("handlekurv-app", App);
customElements.define("login-view", LoginView);
customElements.define("header-component", Header);
customElements.define("custom-button", Button);
customElements.define("products-view", Products);