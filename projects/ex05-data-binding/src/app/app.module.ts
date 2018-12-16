import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DemoInputComponent } from './demo-input/demo-input.component';
import { DemoOutputComponent } from './demo-output/demo-output.component';

@NgModule({
  declarations: [AppComponent, DemoInputComponent, DemoOutputComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
