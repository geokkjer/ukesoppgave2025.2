import { BaseComponent } from "./baseComponent";


export class ButtonComponent extends BaseComponent {

    render() {
        this.shadowRoot!.innerHTML = /*html*/ `
            <style>
                button {
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                    background-color: #007BFF;
                    color: #faf8f8ff;
                }
            </style>
            <button>LoggIn</button>
        `;

        // login button define
        const loginButton = this.shadowRoot?.querySelector('button')
        loginButton!.addEventListener('click', (e) => { 
            e.preventDefault();
            this.handleClick() 
        }
    );
}        
    
        // login event action
        handleClick() {
            console.log('Login button clicked');
            const email = (this.shadowRoot?.querySelector('input[type="email"]') as HTMLInputElement | null)?.value;
            const password = (this.shadowRoot?.querySelector('input[type="password"]') as HTMLInputElement | null)?.value;
            
            if (!email && !password) {
                console.log('Please enter email and password');
                return;
            } else if (!email) {
                console.log('Please enter email');
                return;
            } else if (!password) {
                console.log('Please enter password');
                return;
            }
    }
}
