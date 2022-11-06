import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor() { }

  add(menssage: string) {
    this.messages.push(menssage)
  }

  clear() {
    this.messages = [];
  }
}
