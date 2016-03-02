System.register(['babel-runtime/helpers/create-class', 'babel-runtime/helpers/class-call-check', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'numeral'], function (_export) {
  var _createClass, _classCallCheck, customElement, bindable, bindingMode, computedFrom, inject, numeral, KEY_A, KEY_Z, CurrencyInput;

  return {
    setters: [function (_babelRuntimeHelpersCreateClass) {
      _createClass = _babelRuntimeHelpersCreateClass['default'];
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck['default'];
    }, function (_aureliaTemplating) {
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
      'use strict';

      KEY_A = 65;
      KEY_Z = 90;

      CurrencyInput = (function () {
        function CurrencyInput(element) {
          _classCallCheck(this, _CurrencyInput);

          this.element = element;
          this.displayValue = '';

          this._boundOnBlur = this.onBlur.bind(this);
        }

        _createClass(CurrencyInput, [{
          key: 'attached',
          value: function attached() {
            this.input = this.element.querySelector('input');
            this.input.addEventListener('blur', this._boundOnBlur, true);
          }
        }, {
          key: 'detached',
          value: function detached() {
            this.input.removeEventListener('blur', this._boundOnBlur, true);
          }
        }, {
          key: 'valueChanged',
          value: function valueChanged(newValue, oldValue) {
            this._updateDisplay(newValue ? newValue.toString() : '', oldValue ? oldValue.toString() : '');
          }
        }, {
          key: 'onBlur',
          value: function onBlur() {
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