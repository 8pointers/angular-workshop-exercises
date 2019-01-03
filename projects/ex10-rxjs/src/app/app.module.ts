import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Counter1Component } from './counter1/counter1.component';
import { Counter2Component } from './counter2/counter2.component';

@NgModule({
  declarations: [AppComponent, Counter1Component, Counter2Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
