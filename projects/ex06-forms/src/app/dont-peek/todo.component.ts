import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-todo-item',
  template: `
    <form (ngSubmit)="add(); addItemForm.reset()" #addItemForm="ngForm">
      <div class="form-group">
        <label for="item">New Todo:</label>
        <input type="text" class="form-control" required [(ngModel)]="itemText" name="item" placeholder="New item" #item="ngModel" />
        <div [hidden]="item.valid || item.pristine" class="alert alert-danger">Required</div>
      </div>
      <button type="submit" class="btn btn-primary" [disabled]="!addItemForm.form.valid">Add</button>
    </form>
  `
})
export class NewTodoItemComponent {
  itemText = '';
  @Output()
  itemAdded = new EventEmitter();

  add = () => this.itemAdded.next(this.itemText);
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

  toggle = () => this.itemToggled.next(this.item);
}

const filters = {
  all: () => true,
  done: item => item.isDone,
  undone: item => !item.isDone
};

const orders = {
  asc: (item1, item2) => item1.text.localeCompare(item2.text),
  desc: (item1, item2) => -item1.text.localeCompare(item2.text)
};

@Component({
  selector: 'app-todo',
  template: `
    <app-new-todo-item (itemAdded)="add($event)"></app-new-todo-item>
    <div>
      <span *ngFor="let o of orders" (click)="order = o"> {{ o }} </span>
    </div>
    <span *ngFor="let f of filters" (click)="filter = f"> {{ f }} </span>
    <app-todo-item *ngFor="let item of filteredItems" [item]="item" (itemToggled)="toggle($event)"></app-todo-item>
  `
})
export class TodoComponent {
  items = [
    { id: 0, text: 'Do this first' },
    { id: 1, text: 'Do that second' },
    { id: 2, text: 'Do this third' },
    { id: 3, text: 'Do that fourth' },
    { id: 4, text: 'Do this fifth' },
    { id: 5, text: 'Do that sixth' }
  ];
  filters = Object.keys(filters);
  filter = 'all';
  orders = Object.keys(orders);
  order = 'asc';

  toggle = item => (item.isDone = !item.isDone);
  add = text => this.items.push({ id: this.items.length, text });
  get filteredItems() {
    return this.items.filter(filters[this.filter]).sort(orders[this.order]);
  }
}
