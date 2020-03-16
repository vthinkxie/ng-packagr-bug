import { Injectable, Injector } from '@angular/core';
import { MessageServiceModule } from './message-service.module';
import { Overlay } from '@angular/cdk/overlay';
import { SingleService } from './single.service';
import { ContainerComponent } from './container/container.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: MessageServiceModule
})
export class MessageService {
  name = 'message';
  container: ContainerComponent;
  create() {
    this.container = this.withContainer();
    this.singleService.cacheMap.set(this.name, this.container);
    this.container.createMessage();
  }
  private withContainer(): ContainerComponent {
    const containerInstance = this.singleService.cacheMap.get(this.name);

    if (containerInstance) {
      return containerInstance as ContainerComponent;
    }
    const overlayRef = this.overlay.create({
      hasBackdrop: false,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay.position().global()
    });
    const componentPortal = new ComponentPortal(ContainerComponent, null, this.injector);
    const componentRef = overlayRef.attach(componentPortal);
    return componentRef.instance;
  }
  constructor(private overlay: Overlay, private injector: Injector, private singleService: SingleService) {}
}
