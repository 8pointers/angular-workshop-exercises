import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  { path: '', component: HelloWorldComponent },

  { path: 'helloWorld', component: HelloWorldComponent },
  { path: 'clickCounter', component: ClickCounterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
