import { NgModule } from '@angular/core';
import { MessageComponent } from './message.component';
import { ContainerComponent } from './container.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MessageComponent, ContainerComponent],
  imports: [OverlayModule, CommonModule]
})
export class MessageModule {}
