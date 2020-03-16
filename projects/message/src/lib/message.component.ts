import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
// Notice: Add the below line will trigger the bug
// import { ContainerComponent } from './container.component';
@Component({
  selector: 'lib-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    {{ message }}
  `
})
export class MessageComponent {
  @Input() message = '';
}
