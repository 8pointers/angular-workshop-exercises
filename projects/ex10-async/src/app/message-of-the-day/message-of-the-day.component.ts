import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MessageOfTheDayService {
  constructor(private http: HttpClient) {}

  getWithFetch(): Promise<string> {
    return fetch('/api/motd').then(response => response.json());
  }

  getWithHttpAsPromise(): Promise<string> {
    return this.http.get<string>('/api/motd').toPromise();
  }

  getWithHttpAsObservable(): Observable<string> {
    return this.http.get<string>('/api/motd');
  }
}

@Component({
  selector: 'app-message-of-the-day',
  providers: [MessageOfTheDayService],
  template: `
    <div>
      {{ reason }}
      <div>Message 1: {{ message1 }}</div>
      <div>Message 2: {{ message2 | async }}</div>
      <div>Message 3: {{ message2 | async }}</div>
      <div>Message 4: {{ message4 }}</div>
      <div>Message 5: {{ message5 | async }}</div>
    </div>
  `
})
export class MessageOfTheDayComponent implements OnInit {
  reason: any;
  message1: string;
  message2: Promise<string>;
  message3: Promise<string>;
  message4: string;
  message5: Observable<string>;
  constructor(private messageOfTheDayService: MessageOfTheDayService) {}

  ngOnInit() {
    this.messageOfTheDayService
      .getWithFetch()
      .then(
        message => (this.message1 = message),
        reason => (this.reason = reason)
      );

    this.message2 = this.messageOfTheDayService.getWithFetch();

    this.message3 = this.messageOfTheDayService.getWithHttpAsPromise();

    this.messageOfTheDayService
      .getWithHttpAsObservable()
      .subscribe(
        message => (this.message4 = message),
        reason => (this.reason = reason)
      );

    this.message5 = this.messageOfTheDayService.getWithHttpAsObservable();
  }
}
