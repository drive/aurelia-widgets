var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

import { customElement, bindable } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import $ from 'jquery';

export let TextDisplayWidget = (_dec = customElement('text-display-widget'), _dec2 = bindable('text'), _dec3 = bindable({
  name: 'placeholder',
  defaultValue: '',
  defaultBindingMode: bindingMode.oneTime
}), _dec4 = bindable('toolTipText'), _dec5 = bindable({
  name: 'placement',
  defaultValue: 'auto top',
  defaultBindingMode: bindingMode.oneTime
}), _dec6 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class TextDisplayWidget {

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
    this.toolTipElement.tooltip('destroy');
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

}) || _class) || _class) || _class) || _class) || _class) || _class);