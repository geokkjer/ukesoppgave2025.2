// Functional component system using templates
type Component = () => HTMLElement;

// Component factory function
function createComponent(templateId: string): Component {
  return () => {
    const template = document.getElementById(templateId) as HTMLTemplateElement;
    const clone = template.content.cloneNode(true) as DocumentFragment;
    return clone.firstElementChild as HTMLElement;
  };
}

// Create components
const Header = createComponent('header-template');
const Aside = createComponent('aside-template');
const Main = createComponent('main-template');
const Footer = createComponent('footer-template');

// App component that composes other components
function App(): HTMLElement {
  const app = document.createElement('div');
  app.className = 'app-container';
  
  app.appendChild(Header());
  app.appendChild(Aside());
  app.appendChild(Main());
  app.appendChild(Footer());
  
  return app;
}

// Mount the app
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');
  if (root) {
    root.appendChild(App());
  }
});