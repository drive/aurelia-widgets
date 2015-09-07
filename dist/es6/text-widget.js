import {customElement, inject, bindable, bindingMode} from 'aurelia-framework';

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
}