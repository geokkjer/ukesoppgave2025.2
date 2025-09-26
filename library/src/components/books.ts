import  { BaseElement } from './base';

export class Books extends BaseElement
 {
  render() {
    this.shadowRoot!.innerHTML = /*html*/ `
      <style>
        #books-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
          font-family: Arial, sans-serif;
          padding: 16px;
        }
      </style>
      <div id="books-container">
        <book-card title="Sample Book" content="This is a sample book description."></book-card>
        <book-card title="Sample Book" content="This is a sample book description."></book-card>
        <book-card title="Sample Book" content="This is a sample book description."></book-card>
        <book-card title="Sample Book" content="This is a sample book description."></book-card>
        <book-card title="Sample Book" content="This is a sample book description."></book-card>
        <book-card title="Sample Book" content="This is a sample book description."></book-card>
        <book-card title="Sample Book" content="This is a sample book description."></book-card>
      </div>
    `;
  }
}
