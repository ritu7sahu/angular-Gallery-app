import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightMenu]',
})
export class HighlightMenuDirective {
  constructor(private _elmRef: ElementRef) {}
  @HostListener('mouseover') onmouseover() {
    this.highlight('#fff', '#000');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('#000', '#fff');
  }

  private highlight(bgcolor: string, color: string) {
    this._elmRef.nativeElement.style.backgroundColor = bgcolor;
    this._elmRef.nativeElement.style.color = color;
    this._elmRef.nativeElement.style.padding = '10px';
  }
}
