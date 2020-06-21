import { Directive, ElementRef, EventEmitter, HostListener, Injectable, Input } from '@angular/core';

@Injectable()
export class ToggleService {
  public toggler = new EventEmitter<string>();

  toggle(what: string) {
    this.toggler.next(what);
  }
}

@Directive({
  selector: '[appToggleable]'
})
export class ToggleableDirective {
  @Input('appToggleable')
  appToggleable: string;

  @Input('appToggleableClass')
  appToggleableClass: string;

  constructor(toggleService: ToggleService, el: ElementRef) {
    toggleService.toggler.subscribe(what => {
      if (this.appToggleable === what) {
        el.nativeElement.classList.toggle(this.appToggleableClass);
      }
    });
  }
}

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {
  @Input('appToggle')
  appToggle: string;

  constructor(private toggleService: ToggleService) {}

  @HostListener('click')
  toggle() {
    this.toggleService.toggle(this.appToggle);
  }
}
