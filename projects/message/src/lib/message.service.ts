import { Injectable, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ContainerComponent } from './container.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  name = 'message';
  container: ContainerComponent;
  create() {
    this.container = this.container || this.createContainer();
    this.container.createMessage();
  }
  private createContainer(): ContainerComponent {
    const overlayRef = this.overlay.create();
    const componentPortal = new ComponentPortal(ContainerComponent, null, this.injector);
    const componentRef = overlayRef.attach(componentPortal);
    return componentRef.instance;
  }
  constructor(private overlay: Overlay, private injector: Injector) {}
}
