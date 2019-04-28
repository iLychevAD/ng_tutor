import { Component, OnInit } from '@angular/core';
import { MessageService } from './msg.service';
 
@Component({
  selector: 'app-messages',
  templateUrl: './msg.component.html'
})
export class MessagesComponent implements OnInit {
 
  constructor(public messageService: MessageService) {}
 
  ngOnInit() {
  }
 
}
