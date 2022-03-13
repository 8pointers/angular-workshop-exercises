import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { Counter1Component } from './counter1/counter1.component';
import { Counter2Component } from './counter2/counter2.component';
import { Intro1Component } from './intro/1-intro.component';
import { Intro2Component } from './intro/2-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    Intro1Component,
    Intro2Component,
    Counter1Component,
    Counter2Component,
    CountdownComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
