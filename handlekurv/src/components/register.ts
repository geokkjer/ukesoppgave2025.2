class Register extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        const element = document.createElement('div');
        element.textContent = "Register Page - Under Construction";
        this.shadowRoot?.replaceChildren(element);
    }
    }


    export default Register;