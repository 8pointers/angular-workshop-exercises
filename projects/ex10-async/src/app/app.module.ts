import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MessageOfTheDayComponent } from './message-of-the-day/message-of-the-day.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';

@NgModule({
  declarations: [AppComponent, MessageOfTheDayComponent, LeaderboardComponent, GameOfLifeComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
