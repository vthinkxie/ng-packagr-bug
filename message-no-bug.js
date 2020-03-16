import {
  ɵɵdefineComponent,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵsetClassMetadata,
  Component,
  ChangeDetectionStrategy,
  Input,
  ɵɵelement,
  ɵɵproperty,
  ɵɵdirectiveInject,
  ChangeDetectorRef,
  ɵɵtemplate,
  ɵɵinject,
  Injector,
  ɵɵdefineInjectable,
  Injectable,
  ɵɵdefineNgModule,
  ɵɵdefineInjector,
  ɵɵsetNgModuleScope,
  NgModule
} from '@angular/core';
import { NgForOf, CommonModule } from '@angular/common';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';

// Notice: Add the below line will trigger the bug
// import { ContainerComponent } from './container.component';
class MessageComponent {
  constructor() {
    this.message = '';
  }
}
MessageComponent.ɵfac = function MessageComponent_Factory(t) {
  return new (t || MessageComponent)();
};
MessageComponent.ɵcmp = ɵɵdefineComponent({
  type: MessageComponent,
  selectors: [['lib-message']],
  inputs: { message: 'message' },
  decls: 1,
  vars: 1,
  template: function MessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtext(0);
    }
    if (rf & 2) {
      ɵɵtextInterpolate1(' ', ctx.message, ' ');
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
/*@__PURE__*/ (function() {
  ɵsetClassMetadata(
    MessageComponent,
    [
      {
        type: Component,
        args: [
          {
            selector: 'lib-message',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: `
    {{ message }}
  `
          }
        ]
      }
    ],
    null,
    {
      message: [
        {
          type: Input
        }
      ]
    }
  );
})();

function ContainerComponent_lib_message_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, 'lib-message', 1);
  }
  if (rf & 2) {
    const message_r1 = ctx.$implicit;
    ɵɵproperty('message', message_r1);
  }
}
class ContainerComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.messages = [];
  }
  createMessage() {
    this.messages = [...this.messages, 'message'];
    this.cdr.markForCheck();
  }
  ngOnInit() {}
}
ContainerComponent.ɵfac = function ContainerComponent_Factory(t) {
  return new (t || ContainerComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
ContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: ContainerComponent,
  selectors: [['lib-container']],
  decls: 1,
  vars: 1,
  consts: [
    [3, 'message', 4, 'ngFor', 'ngForOf'],
    [3, 'message']
  ],
  template: function ContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ContainerComponent_lib_message_0_Template, 1, 1, 'lib-message', 0);
    }
    if (rf & 2) {
      ɵɵproperty('ngForOf', ctx.messages);
    }
  },
  directives: [NgForOf, MessageComponent],
  encapsulation: 2,
  changeDetection: 0
});
/*@__PURE__*/ (function() {
  ɵsetClassMetadata(
    ContainerComponent,
    [
      {
        type: Component,
        args: [
          {
            selector: 'lib-container',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: `
    <lib-message *ngFor="let message of messages" [message]="message"></lib-message>
  `
          }
        ]
      }
    ],
    function() {
      return [{ type: ChangeDetectorRef }];
    },
    null
  );
})();

class MessageService {
  constructor(overlay, injector) {
    this.overlay = overlay;
    this.injector = injector;
    this.name = 'message';
  }
  create() {
    this.container = this.container || this.createContainer();
    this.container.createMessage();
  }
  createContainer() {
    const overlayRef = this.overlay.create();
    const componentPortal = new ComponentPortal(ContainerComponent, null, this.injector);
    const componentRef = overlayRef.attach(componentPortal);
    return componentRef.instance;
  }
}
MessageService.ɵfac = function MessageService_Factory(t) {
  return new (t || MessageService)(ɵɵinject(Overlay), ɵɵinject(Injector));
};
MessageService.ɵprov = ɵɵdefineInjectable({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function() {
  ɵsetClassMetadata(
    MessageService,
    [
      {
        type: Injectable,
        args: [
          {
            providedIn: 'root'
          }
        ]
      }
    ],
    function() {
      return [{ type: Overlay }, { type: Injector }];
    },
    null
  );
})();

class MessageModule {}
MessageModule.ɵmod = ɵɵdefineNgModule({ type: MessageModule });
MessageModule.ɵinj = ɵɵdefineInjector({
  factory: function MessageModule_Factory(t) {
    return new (t || MessageModule)();
  },
  imports: [[OverlayModule, CommonModule]]
});
(function() {
  (typeof ngJitMode === 'undefined' || ngJitMode) &&
    ɵɵsetNgModuleScope(MessageModule, { declarations: [MessageComponent, ContainerComponent], imports: [OverlayModule, CommonModule] });
})();
/*@__PURE__*/ (function() {
  ɵsetClassMetadata(
    MessageModule,
    [
      {
        type: NgModule,
        args: [
          {
            declarations: [MessageComponent, ContainerComponent],
            imports: [OverlayModule, CommonModule]
          }
        ]
      }
    ],
    null,
    null
  );
})();

/*
 * Public API Surface of message
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MessageComponent, MessageModule, MessageService };
//# sourceMappingURL=message.js.map
