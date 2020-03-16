import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
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
