import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent, TodoItemComponent } from './todo/todo.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, GameOfLifeComponent, TodoComponent, TodoItemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
