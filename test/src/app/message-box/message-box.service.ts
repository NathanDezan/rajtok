import { Injectable } from "@angular/core";
import { AsyncSubject, Observable, ReplaySubject, share, Subject } from "rxjs";
import { Message } from "./message.interface";
import { Message as ConcreteMessage } from './message'


@Injectable({
  providedIn: 'root'
})
export class MessageBoxService {
  private messages = new Subject<ConcreteMessage>()

  constructor() {}

  getMessages() : Observable<ConcreteMessage> {
    return this.messages.pipe(share())
  }

  sendMessage(message : Message) : void {
    this.messages.next(new ConcreteMessage(message.kind, message.message))
  }
}
