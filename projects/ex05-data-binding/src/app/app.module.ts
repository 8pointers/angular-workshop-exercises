import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DemoInputComponent } from './demo-input/demo-input.component';
import { DemoOutputComponent } from './demo-output/demo-output.component';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';
import { TodoComponent, TodoItemComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoInputComponent,
    DemoOutputComponent,
    GameOfLifeComponent,
    TodoComponent,
    TodoItemComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
