import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { PatientsComponent } from './patients.component';
import { patientsReducer } from './patients.reducer';

@NgModule({
  declarations: [PatientsComponent],
  imports: [CommonModule, StoreModule.forFeature('patients', patientsReducer)],
  exports: [PatientsComponent]
})
export class PatientsModule {}
