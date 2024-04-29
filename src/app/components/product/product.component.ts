import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
})
export class ProductComponent {
    @Input() product: Product = {
        image: 'assets/images/products/iPhone.webp',
        title: 'iPhone 15 Pro',
        price: 1299,
        rating: 4.2,
        inStock: 4,
    };
    productQuantity: number = 0;

    changeOrder(quantity: number) {
        if (quantity >= 0) this.productQuantity = quantity;
    }
}
