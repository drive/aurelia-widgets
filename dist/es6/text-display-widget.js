import {customElement, bindable} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';
import $ from 'jquery';

@customElement('text-display-widget')
@bindable('text')
@bindable({
  name: 'placement',
  defaultValue: 'auto'
})
@inject(Element)
export class TextDisplayWidget {

  constructor(element) {
    this.element = element;
  }

  bind() {
    $(this.element.querySelector('[data-toggle="tooltip"]')).attr('title', this.text).tooltip();
  }
    
  textChanged(newValue) {
   $(this.element.querySelector('[data-toggle="tooltip"]')).attr('title', newValue).tooltip('fixTitle');
  }

}