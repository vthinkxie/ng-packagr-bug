import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <lib-message *ngFor="let message of messages" [message]="message"></lib-message>
  `
})
export class ContainerComponent implements OnInit {
  messages = [];
  createMessage() {
    this.messages = [...this.messages, 'message'];
    this.cdr.markForCheck();
  }
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}
}
