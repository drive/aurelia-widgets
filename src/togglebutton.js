import {customElement, bindable} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap-toggle';
import 'bootstrap-toggle/css/bootstrap-toggle.css!';

@bindable({
  name: 'onText',
  attribute:'on-text',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: 'On'
})
@bindable({
  name: 'offText',
  attribute:'off-text',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: 'Off'
})
@bindable({
  name: 'width',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: null
})
@bindable({
  name: 'label',
  attribute: 'label',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: ''
})
@bindable({
  name: 'checked',
  defaultBindingMode: bindingMode.twoWay
})
@bindable({
  name: 'disabled',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
})
@inject(Element)
@customElement('toggle-button')
export class ToggleButton {

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
    })
    this.checkedChanged(this.checked);
    this.disabledChanged(this.disabled);
  }

  unbind() {
    this.toggleElement.bootstrapToggle('destroy');
  }

  checkedChanged(newValue) {
    if (newValue) {
      this.toggleElement.bootstrapToggle('on');
    } else {
      this.toggleElement.bootstrapToggle('off');
    }
  }

  disabledChanged(newValue) {
    if (newValue) {
      this.toggleElement.bootstrapToggle('disable');
    } else {
      this.toggleElement.bootstrapToggle('enable');
    }
  }
}