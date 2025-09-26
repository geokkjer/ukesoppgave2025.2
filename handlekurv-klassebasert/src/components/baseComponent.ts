export class BaseComponent extends HTMLElement {
   propNames: string[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }

    render() {
    }

}