function mainView(): HTMLElement {
    const app = document.getElementById('app');
     
        // gamle version- overgang
        // document.createElement('header');
        // document.createElement('main');
        // document.createElement('footer');

        const header = document.createElement('header') as HTMLElement;
        const main = document.createElement('main') as HTMLElement;
        const footer = document.createElement('footer') as HTMLElement;

        app!.appendChild(header);
        app!.appendChild(main);
        app!.appendChild(footer);

        return app!;    
}

export { mainView };