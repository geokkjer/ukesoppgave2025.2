export class BaseElement extends HTMLElement {  
    static props: string[] = [];
    static get observedAttributes() {
        return this.propNames;
    }
    static get propNames() {
        return this.props.map(prop => prop.toLowerCase());
    }
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        const propName = (this.constructor as typeof BaseElement).props.find(
            prop => prop.toLowerCase() === name
        );
        if (propName && oldValue !== newValue) {
            (this as any)[propName] = newValue;
            this.render();
        }
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
    }
}