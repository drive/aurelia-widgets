var _dec, _dec2, _class;

import { inject, customAttribute } from 'aurelia-framework';
import $ from 'jquery';

const TOOLTIP_PLACEMENT = 'auto top';

export let Tooltip = (_dec = customAttribute('tooltip'), _dec2 = inject(Element), _dec(_class = _dec2(_class = class Tooltip {
  constructor(element) {
    this.element = element;
  }

  bind() {
    if (this.value) this._createTooltip(this.value);
  }

  unbind() {
    this._destroyToolTip();
  }

  valueChanged(newValue, oldValue) {
    if (newValue) {
      this._updateToolTip(newValue);
    } else this._destroyToolTip();
  }

  _updateToolTip(newValue) {
    if (!this.toolTipElement) this._createTooltip(newValue);else this.toolTipElement.attr('data-original-title', newValue);
  }

  _createTooltip(value) {
    this.toolTipElement = $(this.element);
    this.toolTipElement.attr('title', '');
    this.toolTipElement.tooltip({
      container: 'body',
      placement: TOOLTIP_PLACEMENT,
      html: true,
      title: this.value
    });
  }

  _destroyToolTip() {
    this.toolTipElement.tooltip('destroy');
    this.toolTipElement = null;
  }
}) || _class) || _class);