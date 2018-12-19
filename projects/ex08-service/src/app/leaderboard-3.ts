import { Component, Injectable, OnInit } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable()
export class Leaderboard3Service {
  private i = 0;
  discipline = new Subject<string>();
  betterDiscipline = new ReplaySubject<string>();

  constructor() {
    this.nextDiscipline();
  }

  nextDiscipline(): void {
    this.discipline.next('pokemon ' + ++this.i);
    this.betterDiscipline.next('pokemon ' + this.i);
  }
}

@Component({
  selector: 'app-leaderboard3',
  template: `
    discipline: {{ discipline | async }}<br />
    betterDiscipline: {{ betterDiscipline | async }}<br />
    <button (click)="nextDiscipline()">Next discipline</button>
  `
})
export class Leaderboard3Component implements OnInit {
  discipline: Observable<string>;
  betterDiscipline: Observable<string>;

  constructor(private leaderboardService: Leaderboard3Service) {}

  nextDiscipline(): void {
    this.leaderboardService.nextDiscipline();
  }

  ngOnInit() {
    this.discipline = this.leaderboardService.discipline;
    this.betterDiscipline = this.leaderboardService.betterDiscipline;
  }
}

@Component({
  selector: 'app-leaderboard-index3',
  providers: [Leaderboard3Service],
  template: `
    <app-leaderboard3></app-leaderboard3>
    <p><app-leaderboard3></app-leaderboard3></p>
  `
})
export class LeaderboardIndex3Component implements OnInit {
  ngOnInit() {}
}
