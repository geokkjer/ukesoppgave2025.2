import { BaseComponent } from "./baseComponent";

export interface ButtonProps {
  label?: string;
  className?: string;
}

export class Button extends BaseComponent {
  private props: ButtonProps = {};
  constructor(props: ButtonProps = {}) {
    super();
    this.props = {
      label: "Button",
      ...props,
    };
  }

  static get observedAttributes() {
    return ["label", "class"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      if (name === "label") {
        this.props.label = newValue;
      } else if (name === "class") {
        this.props.className = newValue;
      }
      this.render();
    }
  }

  setProps(newProps: Partial<ButtonProps>) {
    this.props = { ...this.props, ...newProps };
    this.render();
  }

  render() {
    const additionalClass = this.props.className
      ? ` ${this.props.className}`
      : "";

    this.shadowRoot!.innerHTML = /*HTML*/ `
        <style>
        button {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          background-color: darkblue;
          color: white;
          border: none;
          cursor: pointer;
        }
        button:hover {
          background-color: navy;
        }
        </style>
      <button 
        class="btn${additionalClass}"
      >
        ${this.props.label}
      </button>
    `;
  }
}
