import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DemoInputChildComponent, DemoInputParentComponent } from './demo-input/demo-input.component';
import { DemoInterpolationContextComponent } from './demo-interpolation/demo-interpolation-context.component';
import { DemoInterpolationComponent } from './demo-interpolation/demo-interpolation.component';
import { DemoNgForChildComponent, DemoNgForParentComponent } from './demo-ng-for/demo-ng-for.component';
import { DemoOutputChildComponent, DemoOutputParentComponent } from './demo-output/demo-output.component';
import { DemoTwoWayChildComponent, DemoTwoWayParentComponent } from './demo-two-way/demo-two-way.component';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';
import { TodoComponent, TodoItemComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoInterpolationComponent,
    DemoInterpolationContextComponent,
    DemoInputParentComponent,
    DemoInputChildComponent,
    DemoOutputParentComponent,
    DemoOutputChildComponent,
    DemoTwoWayParentComponent,
    DemoTwoWayChildComponent,
    DemoNgForParentComponent,
    DemoNgForChildComponent,
    TodoComponent,
    TodoItemComponent,
    GameOfLifeComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
