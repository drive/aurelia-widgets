'use strict';

System.register(['aurelia-framework', 'jquery'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, $, _dec, _dec2, _class, TOOLTIP_PLACEMENT, Tooltip;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customAttribute = _aureliaFramework.customAttribute;
    }, function (_jquery) {
      $ = _jquery.default;
    }],
    execute: function () {
      TOOLTIP_PLACEMENT = 'top';

      _export('Tooltip', Tooltip = (_dec = customAttribute('tooltip'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
        function Tooltip(element) {
          _classCallCheck(this, Tooltip);

          this.element = element;
        }

        Tooltip.prototype.bind = function bind() {
          if (this.value) {
            this._createTooltip(this.value);
          }
        };

        Tooltip.prototype.unbind = function unbind() {
          this._destroyToolTip();
        };

        Tooltip.prototype.valueChanged = function valueChanged(newValue, oldValue) {
          if (newValue) {
            this._updateToolTip(newValue);
          } else {
            this._destroyToolTip();
          }
        };

        Tooltip.prototype._updateToolTip = function _updateToolTip(newValue) {
          if (!this.toolTipElement) this._createTooltip(newValue);else this.toolTipElement.attr('data-original-title', newValue);
        };

        Tooltip.prototype._createTooltip = function _createTooltip(value) {
          this.toolTipElement = $(this.element);
          this.toolTipElement.attr('title', '');
          this.toolTipElement.tooltip({
            container: 'body',
            placement: TOOLTIP_PLACEMENT,
            html: true,
            title: this.value || ''
          });
        };

        Tooltip.prototype._destroyToolTip = function _destroyToolTip() {
          if (this.toolTipElement) {
            this.toolTipElement.tooltip('dispose');
            this.toolTipElement = null;
          }
        };

        return Tooltip;
      }()) || _class) || _class));

      _export('Tooltip', Tooltip);
    }
  };
});