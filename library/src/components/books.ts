import  { BaseElement } from './base';

export class Books extends BaseElement
 {
  render() {
    this.shadowRoot!.innerHTML = `
      <div>
        <h1>Books</h1>
        <p>This is the books component content.</p>
      </div>
    `;
  }
}
