import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './counter/counter.reducer';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
