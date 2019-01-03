import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './counter/counter.reducer';
import { CellsPipe } from './game-of-life/cells.pipe';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';
import { gameOfLifeReducer } from './game-of-life/game-of-life.reducer';
import { MotdComponent } from './motd/motd.component';
import { MotdEffects } from './motd/motd.effects';
import { motdReducer } from './motd/motd.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    MotdComponent,
    GameOfLifeComponent,
    CellsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      counter: counterReducer,
      gameOfLife: gameOfLifeReducer,
      message: motdReducer
    }),
    EffectsModule.forRoot([MotdEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
