import {customElement, bindable} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';
import $ from 'jquery';

@customElement('text-display-widget')
@bindable('text')
@bindable({
  name: 'placeholder',
  defaultValue: '',
  defaultBindingMode: bindingMode.oneTime
})
@bindable('toolTipText')
@bindable({
  name: 'placement',
  defaultValue: 'auto top',
  defaultBindingMode: bindingMode.oneTime
})
@inject(Element)
export class TextDisplayWidget {

  constructor(element) {
    this.element = element;
  }

  bind() {
    let toolTipElement = $(this.element.querySelector('[data-toggle="tooltip"]'));
    toolTipElement.attr('title', this.toolTipText || this.text);
    toolTipElement.tooltip({
      container: 'body',
      placement: this.placement,
      html: true
    });
    this._updateToolTip(this.toolTipText || this.text);
  }

  unbind() {
    $(this.element.querySelector('[data-toggle="tooltip"]')).tooltip('destroy');
  }
    
  textChanged(newValue) {
    if (!this.toolTipText) {
      this._updateToolTip(newValue); 
    }
  }

  toolTipTextChanged(newValue) {
    this._updateToolTip(newValue);
  }

  _updateToolTip(newValue) {
    $(this.element.querySelector('[data-toggle="tooltip"]')).attr('title', newValue).tooltip('fixTitle');
  }

}