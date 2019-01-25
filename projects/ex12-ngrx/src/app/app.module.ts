import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './counter/counter.reducer';
import { PatientsModule } from './patients/patients.module';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, StoreModule.forRoot({ counter: counterReducer }), PatientsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
