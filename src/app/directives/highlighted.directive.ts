import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[Highlighted]'
})
export class HighlightedDirective {

  constructor(private el: ElementRef) {
    console.log('Directive called')
   }

  @Input("Highlighted") newColor: string;

  @HostListener('mouseenter') mouseEnter() {
    this.highlight(this.newColor || '#e0119d');
  }
  @HostListener('mouseleave') mouseLeave() {
    this.highlight(null);
  }
  private highlight ( color: string) {
    this.el.nativeElement.style.background = color;
  }
}
