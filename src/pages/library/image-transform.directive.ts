import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageTransform]',
})
export class ImageTransformDirective {
  constructor(private _eleRef: ElementRef) {}

  @HostListener('mouseover') onmouseover() {
    this._eleRef.nativeElement.style.transform = 'scale(1.1)';
    //this._eleRef.nativeElement['style'].backgroundColor = 'blue';
    //this._eleRef.nativeElement.style.backgroundColor = 'cyan';
  }
}
