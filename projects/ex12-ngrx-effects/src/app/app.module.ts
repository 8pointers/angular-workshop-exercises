import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './counter/counter.reducer';
import { MotdComponent } from './motd/motd.component';
import { MotdEffects } from './motd/motd.effects';
import { motdReducer } from './motd/motd.reducer';

@NgModule({
  declarations: [AppComponent, CounterComponent, MotdComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ counter: counterReducer, message: motdReducer }),
    EffectsModule.forRoot([MotdEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}