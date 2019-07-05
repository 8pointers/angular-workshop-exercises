import { Component, EventEmitter, Input, Output } from '@angular/core';

class Item {
  private static nextId = 1;
  id = Item.nextId++;
  constructor(public text: string) {}
}

@Component({
  selector: 'app-todo-item',
  styleUrls: ['./todo.component.css'],
  template: `
    <div [ngClass]="{ done: item.isDone }" (click)="toggle()">
      {{ item.text }}
    </div>
  `
})
export class TodoItemComponent {
  @Input()
  item: any;

  @Output()
  itemToggled = new EventEmitter();

  toggle() {
    this.itemToggled.next(this.item);
  }
}
@Component({
  selector: 'app-todo-new-item',
  template: `
    <form (ngSubmit)="add(); addItemForm.reset()" #addItemForm="ngForm">
      <div class="form-group">
        <label for="itemText">New item</label>
        <input type="text" class="form-control" required [(ngModel)]="newItem" name="itemText" placeholder="Enter text" />
      </div>
      <button type="submit" class="btn btn-primary" [disabled]="!addItemForm.form.valid">
        Login
      </button>
    </form>
  `
})
export class TodoNewItemComponent {
  @Output()
  itemAdded = new EventEmitter();

  newItem = '';

  add() {
    this.itemAdded.next(new Item(this.newItem));
  }
}

const filters = {
  all: () => true,
  done: item => item.isDone,
  undone: item => !item.isDone
};

@Component({
  selector: 'app-todo',
  template: `
    <span *ngFor="let f of filters" (click)="filter = f"> {{ f }} </span>
    <app-todo-new-item (itemAdded)="add($event)"></app-todo-new-item>
    <app-todo-item *ngFor="let item of filteredItems" [item]="item" (itemToggled)="toggle($event)"></app-todo-item>
  `
})
export class TodoComponent {
  items = [
    new Item('Do this first'),
    new Item('Do that second'),
    new Item('Do this third'),
    new Item('Do that fourth'),
    new Item('Do this fifth'),
    new Item('Do that sixth')
  ];
  filters = Object.keys(filters);
  filter = 'all';

  toggle = item => (item.isDone = !item.isDone);

  add = item => this.items.push(item);

  get filteredItems() {
    return this.items.filter(filters[this.filter]);
  }
}
