import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';

@Component({
    selector: 'product-view',
    templateUrl: './product-view.component.html',
    styleUrl: './product-view.component.scss',
})
export class ProductViewComponent {
    @Input() product: Product = {
        image: 'assets/images/products/iPhone.webp',
        title: 'iPhone 15 Pro',
        price: 1299,
        rating: 4.2,
        inStock: 4,
    };
    productQuantity: number = 0;

    changeOrder(quantity: number) {
        if (quantity >= 0 && quantity <= this.product.inStock) {
            this.productQuantity = quantity;
        }
    }
}
