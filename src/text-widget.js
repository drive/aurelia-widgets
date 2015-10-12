import {customElement, bindable} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection'

@customElement('text-widget')
@bindable({
  name:'textValue',
  attribute:'text-value',
  defaultBindingMode: bindingMode.twoWay
})
@bindable('placeholder')
@bindable('label')
@inject(Element)
export class TextWidget {
  constructor(element) {
    this.element = element;
  }

  attached() {
    this.input = this.element.querySelector('input');
  }

  selectAll() {
    this.input.select();
  }
}