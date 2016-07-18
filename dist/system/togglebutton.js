'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'jquery', 'bootstrap', 'bootstrap-toggle', 'bootstrap-toggle/css/bootstrap-toggle.css!'], function (_export, _context) {
  "use strict";

  var customElement, bindable, bindingMode, inject, $, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, ToggleButton;

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
    }, function (_bootstrap) {}, function (_bootstrapToggle) {}, function (_bootstrapToggleCssBootstrapToggleCss) {}],
    execute: function () {
      _export('ToggleButton', ToggleButton = (_dec = bindable({
        name: 'onText',
        attribute: 'on-text',
        defaultBindingMode: bindingMode.oneTime,
        defaultValue: 'On'
      }), _dec2 = bindable({
        name: 'offText',
        attribute: 'off-text',
        defaultBindingMode: bindingMode.oneTime,
        defaultValue: 'Off'
      }), _dec3 = bindable({
        name: 'width',
        defaultBindingMode: bindingMode.oneTime,
        defaultValue: null
      }), _dec4 = bindable({
        name: 'label',
        attribute: 'label',
        defaultBindingMode: bindingMode.oneTime,
        defaultValue: ''
      }), _dec5 = bindable({
        name: 'checked',
        defaultBindingMode: bindingMode.twoWay
      }), _dec6 = bindable({
        name: 'disabled',
        defaultValue: false,
        defaultBindingMode: bindingMode.oneWay
      }), _dec7 = inject(Element), _dec8 = customElement('toggle-button'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = function () {
        function ToggleButton(element) {
          _classCallCheck(this, ToggleButton);

          this.element = element;
        }

        ToggleButton.prototype.bind = function bind() {
          var _this = this;

          this.toggleElement = $(this.element.querySelector('[data-toggle="toggle"]'));
          this.toggleElement.bootstrapToggle({
            on: this.onText,
            off: this.offText,
            width: this.width
          });
          this.toggleElement.change(function () {
            _this.checked = _this.toggleElement.prop('checked');
          });
          this.checkedChanged(this.checked);
          this.disabledChanged(this.disabled);
        };

        ToggleButton.prototype.unbind = function unbind() {
          this.toggleElement.bootstrapToggle('destroy');
        };

        ToggleButton.prototype.checkedChanged = function checkedChanged(newValue) {
          if (newValue) {
            this.toggleElement.bootstrapToggle('on');
          } else {
            this.toggleElement.bootstrapToggle('off');
          }
        };

        ToggleButton.prototype.disabledChanged = function disabledChanged(newValue) {
          if (newValue) {
            this.toggleElement.bootstrapToggle('disable');
          } else {
            this.toggleElement.bootstrapToggle('enable');
          }
        };

        return ToggleButton;
      }()) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class));

      _export('ToggleButton', ToggleButton);
    }
  };
});