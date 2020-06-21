import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';
import { Leaderboard1Component } from './leaderboard-1';
import { Leaderboard2Component, LeaderboardIndex2Component } from './leaderboard-2';
import { Leaderboard3Component, LeaderboardIndex3Component } from './leaderboard-3';
import { TodoComponent, TodoItemComponent, TodoNewItemComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    Leaderboard1Component,
    Leaderboard2Component,
    Leaderboard3Component,
    LeaderboardIndex2Component,
    LeaderboardIndex3Component,
    TodoComponent,
    TodoItemComponent,
    TodoNewItemComponent,
    GameOfLifeComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
