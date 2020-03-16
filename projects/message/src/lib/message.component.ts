import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    {{message}}
  `,
  styles: []
})
export class MessageComponent implements OnInit {
  @Input() message = '';
  constructor() {}

  ngOnInit(): void {}
}
