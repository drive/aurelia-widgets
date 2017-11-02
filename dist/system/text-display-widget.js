'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'jquery'], function (_export, _context) {
  "use strict";

  var customElement, bindable, bindingMode, inject, $, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, TextDisplayWidget;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_jquery) {
      $ = _jquery.default;
    }],
    execute: function () {
      _export('TextDisplayWidget', TextDisplayWidget = (_dec = customElement('text-display-widget'), _dec2 = bindable('text'), _dec3 = bindable({
        name: 'placeholder',
        defaultValue: '',
        defaultBindingMode: bindingMode.oneTime
      }), _dec4 = bindable('toolTipText'), _dec5 = bindable({
        name: 'placement',
        defaultValue: 'top',
        defaultBindingMode: bindingMode.oneTime
      }), _dec6 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = function () {
        function TextDisplayWidget(element) {
          _classCallCheck(this, TextDisplayWidget);

          this.element = element;
        }

        TextDisplayWidget.prototype.bind = function bind() {
          this.toolTipElement = $(this.element.querySelector('.text-display-widget-label'));
          this.toolTipElement.attr('title', '');
          this.toolTipElement.tooltip({
            container: 'body',
            placement: this.placement,
            html: true,
            title: this.toolTipText || this.text
          });
        };

        TextDisplayWidget.prototype.unbind = function unbind() {
          this.toolTipElement.tooltip('dispose');
        };

        TextDisplayWidget.prototype.textChanged = function textChanged(newValue) {
          if (!this.toolTipText) {
            this._updateToolTip(newValue);
          }
        };

        TextDisplayWidget.prototype.toolTipTextChanged = function toolTipTextChanged(newValue) {
          this._updateToolTip(newValue);
        };

        TextDisplayWidget.prototype._updateToolTip = function _updateToolTip(newValue) {
          this.toolTipElement.attr('data-original-title', newValue);
        };

        return TextDisplayWidget;
      }()) || _class) || _class) || _class) || _class) || _class) || _class));

      _export('TextDisplayWidget', TextDisplayWidget);
    }
  };
});