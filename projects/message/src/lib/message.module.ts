import { NgModule } from '@angular/core';
import { MessageComponent } from './message.component';
import { ContainerComponent } from './container/container.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { MessageServiceModule } from './message-service.module';

@NgModule({
  declarations: [MessageComponent, ContainerComponent],
  imports: [OverlayModule, CommonModule, MessageServiceModule]
})
export class MessageModule {}
