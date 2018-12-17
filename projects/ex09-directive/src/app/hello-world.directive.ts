import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHelloWorld]'
})
export class HelloWorldDirective {
  @Input('appHelloWorld')
  message: string;

  constructor(private el: ElementRef) {}

  @HostListener('click')
  greet() {
    console.log(this.el.nativeElement.classList.contains('player'));
    console.log(this.el.nativeElement.classList.add('player'));
    console.log(this.el.nativeElement.classList.remove('player'));
    console.log(this.el.nativeElement.classList.add('vip'));
    alert(this.message);
  }
}
