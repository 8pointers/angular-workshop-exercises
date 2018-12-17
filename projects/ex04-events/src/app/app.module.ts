import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';

@NgModule({
  declarations: [AppComponent, ClickCounterComponent, GameOfLifeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
