import { Component } from '@angular/core';

class Item {
  get isPremium() {
    return this.price >= 100;
  }
  constructor(public name: string, public price: number) {}
}

@Component({
  selector: 'app-shopping-cart',
  template: `
    <div *ngFor="let item of items" [ngClass]="{ premium: item.isPremium }">{{ item.name }} - {{ item.price }}</div>
    Total: {{ totalPrice }}
  `,
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  items = [new Item('Angular 2 Book', 10), new Item('Fridge', 1000), new Item('Socks', 10), new Item('Batteries', 10)].sort(
    (i1, i2) => i1.price - i2.price
  );
  get totalPrice() {
    return this.items.reduce((acc, { price }) => acc + price, 0);
  }
}
