import { BaseComponent } from "./baseComponent";

export class LoginView extends BaseComponent {
  render() {
    this.shadowRoot!.innerHTML = /*HTML*/ `
      <style>
        #main {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          font-family: Arial, sans-serif;
        }
        h1 {
          color: darkblue;
        }
        input {
          padding: 0.5rem;
          font-size: 1rem;
          width: 200px;
        }
       
      </style> 
      <main id="main">
        <h1>Welcome to the Store</h1>
        <input type="text" placeholder="Brukernavn" />
        <input type="password" placeholder="Passord" />
        <custom-button label="Logg inn" class="login-button"></custom-button>
        <footer>
          <p>&copy; 2024 Handlekurv App</p>
        </footer>
      </main>

    `;
    this.shadowRoot!.querySelector("custom-button")!.addEventListener("click", () => {
      const userName = this.shadowRoot!.querySelector("input[type=text]") as HTMLInputElement;
      const password = this.shadowRoot!.querySelector("input[type=password]") as HTMLInputElement;
      console.log(`Username: ${userName.value}, Password: ${password.value}`);
    });
  }
}

