import { BaseComponent } from "./baseComponent";

export class Header extends BaseComponent {
   private readonly links = [
      { name: "Produkter", href: "#/produkter" },
      { name: "Handlekurv 🛒", href: "#/handlekurv" }
    ];
    
    render() {
   
    this.shadowRoot!.innerHTML = /*HTML*/ `
      <style>
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: #333;
          color: white;
        }
        .logo {
          font-size: 1.5rem;
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
        }
        </style>
        <header>
          <nav class="navbar">
            <h1 class="logo">Nettbutikk</h1>
            <ul class="nav-links">
              <li>
                <a href="#">${this.links[0].name}</a>
                <a href="#">${this.links[1].name}</a>
                <span class="cart-info">(0) totalt: 0.00 NOK</span>
              </li>
            </ul>
          </nav>
        </header>   
    `;
  }
}
    