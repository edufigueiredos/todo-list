import { Directive, ElementRef, Input, Renderer2, AfterViewChecked } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[appChangeMatIconStyle]'
})
export class ChangeMatIconStyleDirective implements AfterViewChecked {

  @Input() appChangeMatIconStyle = '24px'
  @Input() iconColor = 'black';
  @Input() cursor = 'default';

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngAfterViewChecked(): void {
    this.changeSize(this.appChangeMatIconStyle, this.iconColor, this.cursor);
  }

  private changeSize(size: string, color: string, cursor: string) {
    this.renderer.setStyle(this.element.nativeElement, 'width', size);
    this.renderer.setStyle(this.element.nativeElement, 'height', size);
    this.renderer.setStyle(this.element.nativeElement, 'font-size', size);
    this.renderer.setStyle(this.element.nativeElement, 'color', color);
    this.renderer.setStyle(this.element.nativeElement, 'cursor', cursor);
  }

}
