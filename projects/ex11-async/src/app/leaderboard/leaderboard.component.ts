import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LeaderboardService {
  constructor(private http: HttpClient) {}

  getPlayer(id: number): Promise<any> {
    return fetch(`assets/player/${id}.json`).then(response => response.json());
  }

  getLeaderboard(): Promise<any[]> {
    return fetch('assets/leaderboard.json').then(response => response.json());
  }

  getLeaderboardWithPlayers1(): Promise<any[]> {
    // TODO
    return null;
  }

  getPlayer2(id: number): Observable<any> {
    return this.http.get<any>(`assets/player/${id}.json`);
  }

  getLeaderboard2(): Observable<any[]> {
    return this.http.get<any>('assets/leaderboard.json');
  }

  getLeaderboardWithPlayers2(): Observable<any[]> {
    // TODO
    return null;
  }
}

@Component({
  selector: 'app-leaderboard',
  providers: [LeaderboardService],
  template: `
    <h1>Leaderboard 1</h1>
    <div *ngFor="let player of (players1 | async); let i = index">
      {{ i + 1 }}. {{ player.name }} ({{ player.id }})
    </div>
    <h1>Leaderboard 2</h1>
    <div *ngFor="let player of (players2 | async); let i = index">
      {{ i + 1 }}. {{ player.name }} ({{ player.id }})
    </div>
  `
})
export class LeaderboardComponent implements OnInit {
  players1: Promise<any[]>;
  players2: Observable<any[]>;

  constructor(private leaderboardService: LeaderboardService) {}

  ngOnInit() {
    this.players1 = this.leaderboardService.getLeaderboardWithPlayers1();
    this.players2 = this.leaderboardService.getLeaderboardWithPlayers2();
  }
}
