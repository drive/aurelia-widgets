import {customAttribute, inject} from 'aurelia-framework';

@customAttribute('selectonfocus')
@inject(Element)
export class SelectOnFocus {
  constructor(element) {
    this.element = element;
    this.blockMouseUp = false;

    this._boundOnFocus = this.onFocus.bind(this);
    this._boundOnMouseDown = this.onMouseDown.bind(this);
    this._boundOnMouseUp = this.onMouseUp.bind(this);
  }

  attached() {
    this.element.addEventListener('focus', this._boundOnFocus);
    this.element.addEventListener('mousedown', this._boundOnMouseDown);
    this.element.addEventListener('mouseup', this._boundOnMouseUp);
    
  }

  detached() {  
    this.element.removeEventListener('focus', this._boundOnFocus);
    this.element.removeEventListener('mousedown', this._boundOnMouseDown);
    this.element.removeEventListener('mouseup', this._boundOnMouseUp);
  }

  onFocus() {
    this.element.select();
  }

  onMouseDown() {
    this.blockMouseUp = this.element !== document.activeElement;
  }

  onMouseUp(event) {
    if (this.blockMouseUp) {
      event.preventDefault();
    }
  }
}