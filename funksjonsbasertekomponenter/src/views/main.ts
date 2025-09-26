// Main view function for functional component system
export type Component = () => HTMLElement;

/**
 * Creates a main component from the main-template
 * @returns HTMLElement - The main component element
 */
export function createMainView(): HTMLElement {
  const template = document.getElementById('main-template') as HTMLTemplateElement;
  
  if (!template) {
    console.error('main-template not found');
    // Fallback main element
    const fallbackMain = document.createElement('main');
    fallbackMain.innerHTML = '<h2>Main Content</h2><p>Template not found</p>';
    return fallbackMain;
  }
  
  const clone = template.content.cloneNode(true) as DocumentFragment;
  return clone.firstElementChild as HTMLElement;
}

/**
 * Enhanced main view function that allows content customization
 * @param title - Custom title for the main section
 * @param content - Custom content for the main section
 * @returns HTMLElement - The customized main component
 */
export function createCustomMainView(title?: string, content?: string): HTMLElement {
  const mainElement = createMainView();
  
  if (title) {
    const titleElement = mainElement.querySelector('h2');
    if (titleElement) {
      titleElement.textContent = title;
    }
  }
  
  if (content) {
    const contentElement = mainElement.querySelector('p');
    if (contentElement) {
      contentElement.textContent = content;
    }
  }
  
  return mainElement;
}

/**
 * Renders the main view to a specific container
 * @param containerId - ID of the container element
 * @param title - Optional custom title
 * @param content - Optional custom content
 */
export function renderMainView(containerId: string, title?: string, content?: string): void {
  const container = document.getElementById(containerId);
  
  if (!container) {
    console.error(`Container with id '${containerId}' not found`);
    return;
  }
  
  const mainView = title || content 
    ? createCustomMainView(title, content)
    : createMainView();
  
  // Clear existing content and append new main view
  container.innerHTML = '';
  container.appendChild(mainView);
}

/**
 * Main view component factory (follows the pattern from main.ts)
 */
export const MainView: Component = () => createMainView();
