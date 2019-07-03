import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DemoLifecycleChildComponent } from './demo-lifecycle/demo-lifecycle-child.component';
import { DemoLifecycleParentComponent } from './demo-lifecycle/demo-lifecycle-parent.component';
import { DemoNgClassComponent } from './demo-ng-class/demo-ng-class.component';
import { DemoNgForTrackByComponent } from './demo-ng-for/demo-ng-for-trackBy.component';
import { DemoNgForComponent } from './demo-ng-for/demo-ng-for.component';
import { DemoNgIfComponent } from './demo-ng-if/demo-ng-if.component';
import { DemoNgStyleComponent } from './demo-ng-style/demo-ng-style.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoNgClassComponent,
    DemoNgStyleComponent,
    DemoNgIfComponent,
    DemoNgForComponent,
    DemoNgForTrackByComponent,
    DemoLifecycleChildComponent,
    DemoLifecycleParentComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
