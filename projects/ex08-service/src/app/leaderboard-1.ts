import { Component, Injectable, OnInit } from '@angular/core';

@Injectable()
export class Leaderboard1Service {
  public discipline = 'Pokemon';

  private leaderboard = [
    {name: 'Player One'},
    {name: 'Player Two'},
    {name: 'Player Three'}
  ];

  getLeaderboard(): any[] {
    return this.leaderboard;
  }
}

@Component({
  selector: 'app-leaderboard',
  providers: [Leaderboard1Service],
  template: `
    {{discipline}}
    <div *ngFor="let player of leaderboard">{{player.name}}</div>
  `
})
export class Leaderboard1Component implements OnInit {
  discipline: string;
  leaderboard: any[];

  constructor(private leaderboardService: Leaderboard1Service) {
  }

  ngOnInit() {
    this.discipline = this.leaderboardService.discipline;
    this.leaderboard = this.leaderboardService.getLeaderboard();
  }
}
