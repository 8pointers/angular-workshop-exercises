import { Component, OnInit } from '@angular/core';
import { Leaderboard1Service } from './leaderboard-1';

@Component({
  selector: 'app-leaderboard2',
  template: `
    {{ discipline }}
    <div *ngFor="let player of leaderboard">{{ player.name }}</div>
    <button (click)="removeLastPlayer()">Remove last player</button>
    <button (click)="doubleTheDiscipline()">Double the discipline</button>
    <button (click)="reset()">Reset</button>
  `
})
export class Leaderboard2Component implements OnInit {
  discipline: string;
  leaderboard: any[];

  constructor(private leaderboardService: Leaderboard1Service) {}

  removeLastPlayer(): void {
    this.leaderboard.pop();
  }

  doubleTheDiscipline(): void {
    this.discipline += this.discipline;
  }

  reset(): void {
    this.leaderboard = [];
  }

  ngOnInit() {
    this.discipline = this.leaderboardService.discipline;
    this.leaderboard = this.leaderboardService.getLeaderboard();
  }
}

@Component({
  selector: 'app-leaderboard-index2',
  providers: [Leaderboard1Service],
  template: `
    <p><app-leaderboard2></app-leaderboard2></p>

    <p><app-leaderboard2></app-leaderboard2></p>
  `
})
export class LeaderboardIndex2Component implements OnInit {
  ngOnInit() {}
}
