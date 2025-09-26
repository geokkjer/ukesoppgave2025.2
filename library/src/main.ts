
import { Login } from "./views/login";
import { Books } from "./components/books";
import { Navbar } from "./components/navbar";
import { App } from "./views/app";
import { Card } from "./components/card";
import { Search } from "./components/search";
import { MainTopBar } from "./components/mainTopBar";
import { Filter } from "./components/filter";

customElements.define('library-filter', Filter);
customElements.define('main-top-bar', MainTopBar);
customElements.define('library-navbar', Navbar);
customElements.define('library-app', App);
customElements.define('library-login', Login);
customElements.define('library-books', Books);
customElements.define('library-search', Search);
customElements.define('book-card', Card);