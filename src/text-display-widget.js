import { customElement, bindable } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
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
  defaultValue: 'top',
  defaultBindingMode: bindingMode.oneTime
})
@inject(Element)
export class TextDisplayWidget {

  constructor(element) {
    this.element = element;
  }

  bind() {
    this.toolTipElement = $(this.element.querySelector('.text-display-widget-label'));
    this.toolTipElement.attr('title', '');
    this.toolTipElement.tooltip({
      container: 'body',
      placement: this.placement,
      html: true,
      title: this.toolTipText || this.text
    });
  }

  unbind() {
    this.toolTipElement.tooltip('dispose');
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
    this.toolTipElement.attr('data-original-title', newValue);
  }

}