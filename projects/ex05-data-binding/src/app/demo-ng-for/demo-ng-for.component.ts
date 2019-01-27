import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-demo-ng-for-parent',
  template: `
    <button (click)="reorder()">Reorder</button>
    <app-demo-ng-for-child *ngFor="let name of names; let i = index" [name]="name.name"></app-demo-ng-for-child>
    <app-demo-ng-for-child *ngFor="let name of names; let i = index; trackBy: id" [name]="name.name"></app-demo-ng-for-child>
  `
})
export class DemoNgForParentComponent {
  length = 5;
  offset = 0;
  get names() {
    return Array.from({ length: this.length }, (_, i) => (this.offset + i) % this.length).map(id => ({ id, name: `Name ${id}` }));
  }
  reorder = () => this.offset++;
  id = name => name.id;
}
@Component({
  selector: 'app-demo-ng-for-child',
  template: '<div><button (click)="visible = !visible">Toggle</button><span *ngIf="visible">{{ name }}</span></div>'
})
export class DemoNgForChildComponent {
  @Input()
  name: string;
  visible = true;
}
