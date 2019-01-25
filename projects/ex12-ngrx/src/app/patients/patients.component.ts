import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddHeight, AddWeight, Toggle } from './patients.actions';
import { Patient, State } from './patients.reducer';
import { selectOrderedPatients } from './patients.selectors';

@Component({
  selector: 'app-patients',
  template: `
    <div>
      orderBy:<span></span>
      <div *ngFor="let patient of (patients$ | async)">
        <button (click)="addHeight(patient.id, 0.01)">+</button><button (click)="addHeight(patient.id, -0.01)">-</button>
        {{ patient.height }}m <button (click)="addWeight(patient.id, 1)">+</button><button (click)="addWeight(patient.id, -1)">-</button>
        {{ patient.weight }}kg<br />
      </div>
    </div>
  `
})
export class PatientsComponent {
  orders$: Observable<String[]>;
  patients$: Observable<Patient[]>;
  toggle = (id: number) => this.store.dispatch(new Toggle({ id }));
  addHeight = (id: number, delta: number) => this.store.dispatch(new AddHeight({ id, delta }));
  addWeight = (id: number, delta: number) => this.store.dispatch(new AddWeight({ id, delta }));

  constructor(private store: Store<State>) {
    this.orders$ = store.pipe(select());
    this.patients$ = store.pipe(select(selectOrderedPatients));
  }
}
