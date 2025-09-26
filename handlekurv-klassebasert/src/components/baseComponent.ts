export class BaseComponent extends HTMLElement {
    static propNames: string[] = [];
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