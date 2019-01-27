import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DemoInputChildComponent, DemoInputParentComponent } from './demo-input/demo-input.component';
import { DemoOutputChildComponent, DemoOutputParentComponent } from './demo-output/demo-output.component';
import { DemoTwoWayComponent, DemoTwoWayCounterComponent } from './demo-two-way/demo-two-way.component';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';
import { TodoComponent, TodoItemComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoInputParentComponent,
    DemoInputChildComponent,
    DemoOutputParentComponent,
    DemoOutputChildComponent,
    DemoTwoWayComponent,
    DemoTwoWayCounterComponent,
    GameOfLifeComponent,
    TodoComponent,
    TodoItemComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
