import { BaseComponent } from "../components/baseComponent";
import type { FilesAndFolders } from "../components/filesAndFolders";
import type { AppState } from "../types";

export class AppView extends BaseComponent {
  appState: AppState = {
    currentId: null,
    filesAndFolders: [
        {id: 1, name: 'Handlelister'},
        {id: 2, name: 'Ting som skal fikses'},
        {id: 3, name: 'Oktober', parentId: 1},
        {id: 4, name: 'Tirsdag 15.', parentId: 3, content: 'melk\nbrød\nost\n'},
        {id: 5, name: 'Bad', parentId: 2, content: 'Lekkasje, bla bla'},
        {id: 6, name: 'notater.txt', content: 'abc'},
    ],
  };

  render() {
   
    this.shadowRoot!.innerHTML = /*html*/ `
        <files-and-folders></files-and-folders>
    `;
    const filesAndFolders = this.shadowRoot!.querySelector('files-and-folders') as FilesAndFolders;
    const currentFilesAndFolders = this.appState.filesAndFolders.filter(f => f.parentId == this.appState.currentId);
    filesAndFolders.set('items', currentFilesAndFolders);
  }
}
