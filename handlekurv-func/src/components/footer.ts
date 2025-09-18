export function footer(): HTMLElement {
    const footer = document.getElementById('footer');
    footer!.innerHTML = /*HTML*/ `
      <p>&copy; 2025 My E-commerce Site</p>
      <author>Michał Szczepański</author>
    `;
    return footer!;

}