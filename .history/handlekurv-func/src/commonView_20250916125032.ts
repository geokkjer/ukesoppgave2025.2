function mainView(): HTMLElement {
    const app = document.getElementById('app');
    if (app) {
        document.createElement('header');
        document.createElement('main');
        document.createElement('footer');

        const header = app.querySelector('header') as HTMLElement;
        const main = app.querySelector('main') as HTMLElement;
        const footer = app.querySelector('footer') as HTMLElement;

        generateNavbar(header);
        generateFooter(footer);

        return app;
    }

}