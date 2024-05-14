import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class CartService {
    // Items in the cart will the list of product ids.
    private items: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

    // Defining getter and setters
    getItems() {
        return this.items;
    }

    setItems(value: string[]) {
        this.items.next(value);
    }

    clearItems() {
        this.items.next([]);
    }

    addItem(value: string) {
        this.items.value.push(value);
        this.items.next(this.items.value);
    }

    removeItem(value: string) {
        this.items.next(this.items.value.filter((item: string) => {
            return item !== value;
        }));
    }
}
