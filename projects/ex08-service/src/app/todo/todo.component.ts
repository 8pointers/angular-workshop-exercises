import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  styleUrls: ['./todo.component.css'],
  template: `
    <div [ngClass]="{ done: item.isDone }" (click)="toggle()">
      {{ item.text }}
    </div>
  `
})
export class TodoItemComponent implements OnInit {
  @Input()
  item: any;

  @Output()
  itemToggled = new EventEmitter();

  toggle() {
    this.itemToggled.next(this.item);
  }

  ngOnInit() {}
}
@Component({
  selector: 'app-todo-new-item',
  template: `
    <form (ngSubmit)="add(); addItemForm.reset()" #addItemForm="ngForm">
      <div class="form-group">
        <label for="itemText">New item</label>
        <input
          type="text"
          class="form-control"
          required
          [(ngModel)]="newItem"
          name="itemText"
          placeholder="Enter text"
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        [disabled]="!addItemForm.form.valid"
      >
        Login
      </button>
    </form>
  `
})
export class TodoNewItemComponent implements OnInit {
  @Output()
  itemAdded = new EventEmitter();

  newItem = '';

  add() {
    this.itemAdded.next({ id: 7, text: this.newItem });
  }

  ngOnInit() {}
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
    <app-todo-item
      *ngFor="let item of filteredItems"
      [item]="item"
      (itemToggled)="toggle($event)"
    ></app-todo-item>
  `
})
export class TodoComponent implements OnInit {
  items: any[];
  filters = Object.keys(filters);
  filter = 'all';

  toggle = item => (item.isDone = !item.isDone);

  add = item => this.items.push(item);

  get filteredItems() {
    return this.items.filter(filters[this.filter]);
  }

  ngOnInit() {
    this.items = [
      { id: 0, text: 'Do this first' },
      { id: 1, text: 'Do that second' },
      { id: 2, text: 'Do this third' },
      { id: 3, text: 'Do that fourth' },
      { id: 4, text: 'Do this fifth' },
      { id: 5, text: 'Do that sixth' }
    ];
  }
}
