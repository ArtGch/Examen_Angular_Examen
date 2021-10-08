import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRestaurantEvalDirect]'
})
export class RestaurantEvalDirectDirective {

  @Input("appRestaurantEvalDirect")

  set indexOfElement(value: number) {
    if(value === -1) {
      this._renderer.setStyle(this._el.nativeElement,"color", "grey");
    }
    else {
      if(value < 1 ) {
        this._renderer.setStyle(this._el.nativeElement,"color", "red");
      }
      else {
        this._renderer.setStyle(this._el.nativeElement,"color", "yellow");
      }
    }

  }
  constructor(private _el: ElementRef, private _renderer: Renderer2) { }

}
