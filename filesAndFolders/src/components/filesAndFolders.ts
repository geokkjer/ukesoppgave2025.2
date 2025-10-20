import { BaseComponent } from "./baseComponent";
import type { FileOrFolder } from "../types";
export class FilesAndFolders extends BaseComponent {
  static props = ['items', 'parent-folder'];

  render() {
    const filesAndFolders = this.get('items') as FileOrFolder[] || [];
    this.shadowRoot!.innerHTML = /*html*/ `
    <fieldset>
        <legend>Filer og mapper</legend>
         ${filesAndFolders.filter(f => !f.content).map(f =>/*HTML*/`
                    📁 <a href="" data-id="${f.id}">${f.name}</a><br/>
                `).join('')}
        ${filesAndFolders.filter(f => f.content).map(f =>/*HTML*/`
                    <span>🗎</span> <a href="" data-id="${f.id}">${f.name}</a><br/>
                `).join('')}
    </fieldset>
    `;
  }
}
