var _dec, _dec2, _class;

import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

export let SelectOnFocus = (_dec = customAttribute('selectonfocus'), _dec2 = inject(Element), _dec(_class = _dec2(_class = class SelectOnFocus {
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
}) || _class) || _class);