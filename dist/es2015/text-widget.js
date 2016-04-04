var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class;

import { customElement, bindable } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';

const elasticEvents = ['keyup', 'cut', 'paste', 'change'];

export let TextWidget = (_dec = customElement('text-widget'), _dec2 = bindable({
  name: 'textValue',
  attribute: 'text-value',
  defaultBindingMode: bindingMode.twoWay
}), _dec3 = bindable({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
}), _dec4 = bindable('placeholder'), _dec5 = bindable('label'), _dec6 = bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
}), _dec7 = bindable({
  name: 'multiline',
  attribute: 'multiline',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneTime
}), _dec8 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = class TextWidget {

  constructor(element) {
    this.element = element;
    this.boundResize = this.resize.bind(this);
  }

  attached() {
    if (this.multiline) {
      this.input = this.element.querySelector('textarea');
      elasticEvents.forEach(event => {
        this.input.addEventListener(event, this.boundResize);
      });
      document.addEventListener('resize', this.boundResize);
      this.minSize = this.input.scrollHeight;
    } else {
      this.input = this.element.querySelector('input');
    }
  }

  detached() {
    if (this.multiline) {
      elasticEvents.forEach(event => {
        this.input.removeEventListener(event, this.boundResize);
      });
      document.removeEventListener('resize', this.boundResize);
    }
  }

  resize() {
    this.input.style.overflow = 'hidden';
    this.input.style.height = 'auto';
    let newSize = this.input.scrollHeight;
    if (newSize > this.minSize) {
      newSize += 20;
    }
    this.input.style.height = `${ newSize }px`;
  }
}) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);