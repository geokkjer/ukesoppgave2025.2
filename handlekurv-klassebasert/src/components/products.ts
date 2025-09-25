import { BaseComponent } from "./baseComponent";

export class Products extends BaseComponent {
    render() {
        this.shadowRoot!.innerHTML = /*HTML*/ `
            <style>
                .products {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1rem;
                    padding: 1rem;
                }
                .product-card {
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 1rem;
                    text-align: center;
                }
                .product-card h2 {
                    font-size: 1.25rem;
                    margin-bottom: 0.5rem;
                }
                .product-card p {
                    margin-bottom: 0.5rem;
                }
            </style>
            <div class="products">
                <div class="product-card">
                    <h2>Produkt 1</h2>
                    <p>Beskrivelse av produkt 1</p>
                    <p>Pris: 100 NOK</p>
                    <button-component label="Legg i handlekurv"></button-component>
                </div>
            </div>
        `;
    }
}