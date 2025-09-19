export function footer(): HTMLElement {
  const footerElement = document.createElement('footer');
  footerElement.innerHTML = /*HTML*/ `
      <p>&copy; 2025 Buy Now! </p>
      <author>GET Academy</author>
    `;
  return footerElement
}    
