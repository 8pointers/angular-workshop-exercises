import { Component, Injectable, Input } from '@angular/core';

@Injectable()
export class TodoService {
  items = [
    { id: 0, text: 'Do this first', isDone: true },
    { id: 1, text: 'Do that second' },
    { id: 2, text: 'Do this third' },
    { id: 3, text: 'Do that fourth' },
    { id: 4, text: 'Do this fifth' },
    { id: 5, text: 'Do that sixth' }
  ];
  nextId = this.items.length;
  addItem = (text: string) => this.items.push({ id: this.nextId++, text });
  toggle = item => (item.isDone = !item.isDone);
}

@Component({
  selector: 'app-todo-item',
  styleUrls: ['./todo.component.css'],
  template: `
    <div [ngClass]="{ done: item.isDone }" (click)="todoService.toggle(item)">{{ item.text }}</div>
  `
})
export class TodoItemComponent {
  @Input()
  item: any;
  constructor(public todoService: TodoService) {}
}

@Component({
  selector: 'app-todo-new-item',
  template: `
    <form (ngSubmit)="add(); addItemForm.reset()" #addItemForm="ngForm">
      <div class="form-group">
        <label for="itemText">New item</label>
        <input type="text" class="form-control" required [(ngModel)]="newItem" name="itemText" placeholder="Enter text" />
      </div>
      <button type="submit" class="btn btn-primary" [disabled]="!addItemForm.form.valid">Login</button>
    </form>
  `
})
export class TodoNewItemComponent {
  newItem = '';
  add = () => this.todoService.addItem(this.newItem);
  constructor(private todoService: TodoService) {}
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
    <app-todo-new-item></app-todo-new-item>
    <app-todo-item *ngFor="let item of filteredItems" [item]="item"></app-todo-item>
  `
})
export class TodoComponent {
  filters = Object.keys(filters);
  filter = 'all';

  get filteredItems() {
    return this.todoService.items.filter(filters[this.filter]);
  }
  constructor(private todoService: TodoService) {}
}
