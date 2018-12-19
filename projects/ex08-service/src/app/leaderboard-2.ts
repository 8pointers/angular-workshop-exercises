import { Component, OnInit } from '@angular/core';
import { Leaderboard1Service } from './leaderboard-1';

@Component({
  selector: 'app-leaderboard2',
  template: `
    {{discipline}}
    <div *ngFor="let player of leaderboard">{{player.name}}</div>
    <button (click)="a()">A</button>
    <button (click)="b()">B</button>
    <button (click)="c()">C</button>
  `
})
export class Leaderboard2Component implements OnInit {
  discipline: string;
  leaderboard: any[];

  constructor(private leaderboardService: Leaderboard1Service) {
  }

  a(): void {
    this.leaderboard.pop();
  }

  b(): void {
    this.discipline += this.discipline;
  }

  c(): void {
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
    <p>
    <app-leaderboard2></app-leaderboard2>
    <p>
    <app-leaderboard2></app-leaderboard2>
  `
})
export class LeaderboardIndex2Component implements OnInit {
  ngOnInit() {
  }
}
