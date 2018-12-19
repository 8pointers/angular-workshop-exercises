import { Directive, ElementRef, HostListener, Input } from '@angular/core';

declare let ga: any;

@Directive({
  selector: '[appGA]'
})
export class GADirective {
  @Input()
  appGA: string;

  constructor(private el: ElementRef) {}

  @HostListener('click')
  send() {
    ga('send', 'event', ...this.appGA.split(','));
  }
}
