import {customElement, bindable} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';

@customElement('text-widget')
@bindable({
  name:'textValue',
  attribute:'text-value',
  defaultBindingMode: bindingMode.twoWay
})
@bindable('placeholder')
@bindable('label')
@bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
})
@bindable({
  name: 'multiline',
  attribute: 'multiline',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneTime
})
@inject(Element)
export class TextWidget {
  constructor(element) {
    this.element = element;
  }

  attached() {
    if (this.multiline) {
      this.input = this.element.querySelector('textarea');
    }
    else {
      this.input = this.element.querySelector('input');
    }
  }

  selectAll() {
    this.input.select();
  }
}