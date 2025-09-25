import { App } from './views/App';

// Usage examples for the App state management

// 1. Create and initialize the app
const app = new App();
document.body.appendChild(app);

// 2. Navigate programmatically
// app.navigateToPage('products');

// 3. Update state with user information
// app.setState({
//   currentPage: 'dashboard',
//   user: {
//     id: '123',
//     name: 'John Doe',
//     email: 'john@example.com'
//   }
// });

// 4. Example of how child components can trigger navigation
// From within a login component, you might dispatch a custom event:
/*
// In login component after successful login:
const loginSuccessEvent = new CustomEvent('login-success', {
  bubbles: true,
  detail: {
    user: {
      id: '123',
      name: 'John Doe',
      email: 'john@example.com'
    }
  }
});
this.dispatchEvent(loginSuccessEvent);

// In header component for navigation:
const navigateEvent = new CustomEvent('navigate', {
  bubbles: true,
  detail: {
    page: 'products'
  }
});
this.dispatchEvent(navigateEvent);
*/

// 5. Example header component with navigation buttons
export class HeaderWithNavigation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot!.innerHTML = `
      <style>
        nav {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: #f0f0f0;
        }
        button {
          padding: 0.5rem 1rem;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background: #0056b3;
        }
      </style>
      <nav>
        <button id="products-btn">Products</button>
        <button id="cart-btn">Cart</button>
        <button id="profile-btn">Profile</button>
        <button id="logout-btn">Logout</button>
      </nav>
    `;

    // Add navigation event listeners
    this.shadowRoot!.getElementById('products-btn')?.addEventListener('click', () => {
      this.dispatchNavigationEvent('products');
    });

    this.shadowRoot!.getElementById('cart-btn')?.addEventListener('click', () => {
      this.dispatchNavigationEvent('cart');
    });

    this.shadowRoot!.getElementById('profile-btn')?.addEventListener('click', () => {
      this.dispatchNavigationEvent('profile');
    });

    this.shadowRoot!.getElementById('logout-btn')?.addEventListener('click', () => {
      this.dispatchLogoutEvent();
    });
  }

  private dispatchNavigationEvent(page: string) {
    const event = new CustomEvent('navigate', {
      bubbles: true,
      detail: { page }
    });
    this.dispatchEvent(event);
  }

  private dispatchLogoutEvent() {
    const event = new CustomEvent('logout', {
      bubbles: true
    });
    this.dispatchEvent(event);
  }
}

// Register the component
customElements.define('header-with-navigation', HeaderWithNavigation);

export default app;