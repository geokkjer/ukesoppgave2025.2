export function footer(): HTMLElement {
  const footerElement = document.createElement('footer');
  footerElement.innerHTML = /*HTML*/ `
      <p>&copy; 2025 My E-commerce Site</p>
      <author>Michał Szczepański</author>
    `;
  return footerElement
}    
