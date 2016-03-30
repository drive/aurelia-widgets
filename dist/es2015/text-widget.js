var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class;

import { customElement, bindable } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';

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
  }

  attached() {
    if (this.multiline) {
      this.input = this.element.querySelector('textarea');
    } else {
      this.input = this.element.querySelector('input');
    }
  }
}) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);