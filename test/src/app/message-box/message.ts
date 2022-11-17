
import { Message as IMessage } from './message.interface'

export class Message implements IMessage {
  constructor(public kind : String, public message : String) {
  }

  get bgClass() {
    return 'bg-' + this.kind
  }
}
