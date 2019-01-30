import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HelloWorldDirective } from './hello-world.directive';
import { TodoComponent, TodoItemComponent, TodoNewItemComponent, TodoService } from './todo/todo.component';

@NgModule({
  declarations: [AppComponent, HelloWorldDirective, TodoComponent, TodoItemComponent, TodoNewItemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
