import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DemoLifecycleChildComponent, DemoLifecycleComponent } from './demo-lifecycle/demo-lifecycle.component';
import { DemoNgClassComponent } from './demo-ng-class/demo-ng-class.component';
import { DemoNgForTrackByComponent, IdComponent } from './demo-ng-for/demo-ng-for-trackBy.component';
import { DemoNgForComponent } from './demo-ng-for/demo-ng-for.component';
import { DemoNgIfComponent } from './demo-ng-if/demo-ng-if.component';
import { DemoNgStyleComponent } from './demo-ng-style/demo-ng-style.component';
import { MotivationLifecycleComponent } from './motivation-lifecycle/motivation-lifecycle.component';
import { MotivationNgClassComponent } from './motivation-ng-class/motivation-ng-class.component';

@NgModule({
  declarations: [
    AppComponent,
    MotivationNgClassComponent,
    DemoNgClassComponent,
    DemoNgStyleComponent,
    DemoNgIfComponent,
    DemoNgForComponent,
    IdComponent,
    DemoNgForTrackByComponent,
    MotivationLifecycleComponent,
    DemoLifecycleChildComponent,
    DemoLifecycleComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
