export interface AppState {
    currentId?: number | null;
    filesAndFolders: FileOrFolder[];
};
export interface FileOrFolder {
    id: number ;
    name: string;
    parentId?: number | null;
    content?: string;
}