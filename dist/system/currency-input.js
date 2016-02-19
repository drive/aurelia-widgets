System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'numeral'], function (_export) {
  'use strict';

  var customElement, bindable, bindingMode, computedFrom, inject, numeral, KEY_A, KEY_Z, CurrencyInput;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
      computedFrom = _aureliaBinding.computedFrom;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_numeral) {
      numeral = _numeral['default'];
    }],
    execute: function () {
      KEY_A = 65;
      KEY_Z = 90;

      CurrencyInput = (function () {
        function CurrencyInput(element) {
          _classCallCheck(this, _CurrencyInput);

          this.element = element;
          this.displayValue = '';
        }

        _createClass(CurrencyInput, [{
          key: 'attached',
          value: function attached() {
            this.input = this.element.querySelector('input');
          }
        }, {
          key: 'selectAll',
          value: function selectAll() {
            this.input.select();
          }
        }, {
          key: 'valueChanged',
          value: function valueChanged(newValue, oldValue) {
            this._updateDisplay(newValue ? newValue.toString() : '', oldValue ? oldValue.toString() : '');
          }
        }, {
          key: 'onblur',
          value: function onblur() {
            this._updateDisplay(this.displayValue, this.value);
          }
        }, {
          key: '_updateDisplay',
          value: function _updateDisplay(update, oldValue) {
            this.displayValue = update.trim();
            if (this.displayValue) {
              var newValue = this._castValueToFloat(this.displayValue.replace(/,|$/g, ""));
              if (newValue === 'NaN') {
                this._clearValue(oldValue);
              } else {
                this._setDisplayValue(newValue, oldValue);
              }
            } else {
              if (this.setNullToDefaultValue !== '') {
                var newValue = this._castValueToFloat(this.setNullToDefaultValue);
                this.value = newValue;
                this.displayValue = numeral(newValue).format('0,0.00');
              } else {
                this.value = '';
              }
            }
          }
        }, {
          key: '_castValueToFloat',
          value: function _castValueToFloat(value) {
            return parseFloat(value).toFixed(2);
          }
        }, {
          key: '_setDisplayValue',
          value: function _setDisplayValue(newValue, oldValue) {
            if (this.onlyAllowPositiveNumbers && newValue < 0) {
              this._clearValue(oldValue);
            } else {
              this.displayValue = numeral(newValue).format('0,0.00');
              this.value = newValue;
            }
          }
        }, {
          key: '_clearValue',
          value: function _clearValue(oldValue) {
            this.displayValue = oldValue;
            this.value = oldValue;
          }
        }]);

        var _CurrencyInput = CurrencyInput;
        CurrencyInput = inject(Element)(CurrencyInput) || CurrencyInput;
        CurrencyInput = bindable({
          name: 'grabFocus',
          attribute: 'grab-focus',
          defaultValue: false
        })(CurrencyInput) || CurrencyInput;
        CurrencyInput = bindable('label')(CurrencyInput) || CurrencyInput;
        CurrencyInput = bindable({
          name: 'placeholder',
          defaultValue: '0.00',
          defaultBindingMode: bindingMode.oneTime
        })(CurrencyInput) || CurrencyInput;
        CurrencyInput = bindable({
          name: 'customCSS',
          attribute: 'custom-css',
          defaultValue: '',
          defaultBindingMode: bindingMode.oneWay
        })(CurrencyInput) || CurrencyInput;
        CurrencyInput = bindable({
          name: 'extendedView',
          attribute: 'extended-view',
          defaultValue: true,
          defaultBindingMode: bindingMode.oneWay
        })(CurrencyInput) || CurrencyInput;
        CurrencyInput = bindable({
          name: 'onlyAllowPositiveNumbers',
          attribute: 'only-allow-positive-numbers',
          defaultValue: false,
          defaultBindingMode: bindingMode.oneWay
        })(CurrencyInput) || CurrencyInput;
        CurrencyInput = bindable({
          name: 'setNullToDefaultValue',
          attribute: 'set-null-to-default-value',
          defaultValue: '',
          defaultBindingMode: bindingMode.oneWay
        })(CurrencyInput) || CurrencyInput;
        CurrencyInput = bindable({
          name: 'disabled',
          attribute: 'disabled',
          defaultValue: false,
          defaultBindingMode: bindingMode.oneWay
        })(CurrencyInput) || CurrencyInput;
        CurrencyInput = bindable({
          name: 'size',
          attribute: 'size',
          defaultValue: 'medium',
          defaultBindingMode: bindingMode.oneTime
        })(CurrencyInput) || CurrencyInput;
        CurrencyInput = bindable({
          name: 'value',
          attribute: 'value',
          defaultBindingMode: bindingMode.twoWay,
          changeHandler: 'valueChanged'
        })(CurrencyInput) || CurrencyInput;
        CurrencyInput = customElement('currency-input')(CurrencyInput) || CurrencyInput;
        return CurrencyInput;
      })();

      _export('CurrencyInput', CurrencyInput);
    }
  };
});