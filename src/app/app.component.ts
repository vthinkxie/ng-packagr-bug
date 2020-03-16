import { Component } from '@angular/core';
import { MessageService } from 'message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'overlay-bug';

  constructor(private messageService: MessageService) {}
  message() {
    this.messageService.create();
  }
}
