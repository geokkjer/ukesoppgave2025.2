import { BaseComponent } from "../components/baseComponent";

// Define the possible page states
export type PageState = 'login' | 'cart' | 'products';

// Define the app state interface
export interface AppState {
    currentPage: PageState;
    user?: {
        id: string;
        name: string;
        email: string;
    };
    // Add other state properties as needed
}

export class App extends BaseComponent {
    private state: AppState = {
        currentPage: 'login'
    };

    constructor() {
        super();
        this.state = {
            currentPage: 'products'
        };
    }

    // Method to update state and trigger re-render
    setState(newState: Partial<AppState>) {
        this.state = { ...this.state, ...newState };
        this.render();
    }

    // Method to get current state (optional, for debugging)
    getState(): AppState {
        return { ...this.state };
    }

    // Method to navigate between pages
    navigateToPage(page: PageState) {
        this.setState({ currentPage: page });
    }

    // Render different content based on current page
    private renderCurrentPage(): string {
        switch (this.state.currentPage) {
            case 'login':
                return '<login-view></login-view>';
            case 'cart':
                return '<cart-view></cart-view>';
            case 'products':
                return '<products-view></products-view>';
            default:
                return '<login-view></login-view>';
        }
    }
    
    render() {
        this.shadowRoot!.innerHTML = /*HTML*/ `
            <style>
                h1 {
                    color: darkblue;
                }
                .app-container {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }
                .content {
                    flex: 1;
                    padding: 1rem;
                }
                .debug-info {
                    position: fixed;
                    top: 10px;
                    right: 10px;
                    background: rgba(0,0,0,0.1);
                    padding: 0.5rem;
                    border-radius: 4px;
                    font-size: 0.8rem;
                }
            </style>
            <div class="app-container">
                <header-component></header-component>
                <main class="content">
                    ${this.renderCurrentPage()}
                </main>
                <div class="debug-info">
                    Current Page: ${this.state.currentPage}
                </div>
            </div>
        `;

        this.attachEventListeners();
    }

    private attachEventListeners() {
        this.addEventListener('navigate', (event: Event) => {
            const customEvent = event as CustomEvent;
            this.navigateToPage(customEvent.detail.page);
        });

        this.addEventListener('login-success', (event: Event) => {
            const customEvent = event as CustomEvent;
            this.setState({
                currentPage: 'products',
                user: customEvent.detail.user
            });
        });
    }
}