import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable, map, merge, scan, delay, Observer, ReplaySubject, BehaviorSubject, Subject, Subscription, of, tap, startWith } from 'rxjs';
import { MessageBoxService } from './message-box.service';
import { Message } from './message';


declare global {
  interface Window {
    service? : any
  }
}

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  private messages!: Observable<Message>

  currentMessages : Observable<Message[]>

  constructor(private service : MessageBoxService) {
    this.messages = this.service.getMessages()

    this.currentMessages =
      merge(
        this.messages.pipe(
          map(message => (arr : any[]) => [...arr, message])
        ),
        this.messages.pipe(
          map(() => (arr: any[]) => arr.slice(1)),
          delay(3500)
        )
      ).pipe(
        scan((acc: any[], op) => op(acc), []),
        startWith([])
      )
  }

  ngOnInit(): void {
  }
}
