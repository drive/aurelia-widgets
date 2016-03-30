var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class;

import { customElement, bindable } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap-toggle';
import 'bootstrap-toggle/css/bootstrap-toggle.css!';

export let ToggleButton = (_dec = bindable({
  name: 'onText',
  attribute: 'on-text',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: 'On'
}), _dec2 = bindable({
  name: 'offText',
  attribute: 'off-text',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: 'Off'
}), _dec3 = bindable({
  name: 'width',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: null
}), _dec4 = bindable({
  name: 'label',
  attribute: 'label',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: ''
}), _dec5 = bindable({
  name: 'checked',
  defaultBindingMode: bindingMode.twoWay
}), _dec6 = inject(Element), _dec7 = customElement('toggle-button'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = class ToggleButton {

  constructor(element) {
    this.element = element;
  }

  bind() {
    this.toggleElement = $(this.element.querySelector('[data-toggle="toggle"]'));
    this.toggleElement.bootstrapToggle({
      on: this.onText,
      off: this.offText,
      width: this.width
    });
    this.toggleElement.change(() => {
      this.checked = this.toggleElement.prop('checked');
    });
    this.checkedChanged(this.checked);
  }

  checkedChanged(newValue) {
    if (newValue) {
      this.toggleElement.bootstrapToggle('on');
    } else {
      this.toggleElement.bootstrapToggle('off');
    }
  }

  unbind() {
    this.toggleElement.bootstrapToggle('destroy');
  }
}) || _class) || _class) || _class) || _class) || _class) || _class) || _class);