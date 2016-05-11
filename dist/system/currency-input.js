'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'numeral'], function (_export, _context) {
  var customElement, bindable, bindingMode, computedFrom, inject, numeral, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, KEY_A, KEY_Z, CurrencyInput;

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
      computedFrom = _aureliaBinding.computedFrom;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_numeral) {
      numeral = _numeral.default;
    }],
    execute: function () {
      KEY_A = 65;
      KEY_Z = 90;

      _export('CurrencyInput', CurrencyInput = (_dec = customElement('currency-input'), _dec2 = bindable({
        name: 'value',
        attribute: 'value',
        defaultBindingMode: bindingMode.twoWay,
        changeHandler: 'valueChanged'
      }), _dec3 = bindable({
        name: 'size',
        attribute: 'size',
        defaultValue: 'medium',
        defaultBindingMode: bindingMode.oneTime
      }), _dec4 = bindable({
        name: 'disabled',
        attribute: 'disabled',
        defaultValue: false,
        defaultBindingMode: bindingMode.oneWay
      }), _dec5 = bindable({
        name: 'setNullToDefaultValue',
        attribute: 'set-null-to-default-value',
        defaultValue: '',
        defaultBindingMode: bindingMode.oneWay
      }), _dec6 = bindable({
        name: 'onlyAllowPositiveNumbers',
        attribute: 'only-allow-positive-numbers',
        defaultValue: false,
        defaultBindingMode: bindingMode.oneWay
      }), _dec7 = bindable({
        name: 'extendedView',
        attribute: 'extended-view',
        defaultValue: true,
        defaultBindingMode: bindingMode.oneWay
      }), _dec8 = bindable({
        name: 'customCSS',
        attribute: 'custom-css',
        defaultValue: '',
        defaultBindingMode: bindingMode.oneWay
      }), _dec9 = bindable({
        name: 'placeholder',
        defaultValue: '0.00',
        defaultBindingMode: bindingMode.oneTime
      }), _dec10 = bindable('label'), _dec11 = bindable({
        name: 'grabFocus',
        attribute: 'grab-focus',
        defaultValue: false
      }), _dec12 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = _dec10(_class = _dec11(_class = _dec12(_class = function () {
        function CurrencyInput(element) {
          _classCallCheck(this, CurrencyInput);

          this.element = element;
          this.displayValue = '';

          this._boundOnBlur = this.onBlur.bind(this);
        }

        CurrencyInput.prototype.attached = function attached() {
          this.input = this.element.querySelector('input');
          this.input.addEventListener('blur', this._boundOnBlur, true);
        };

        CurrencyInput.prototype.detached = function detached() {
          this.input.removeEventListener('blur', this._boundOnBlur, true);
        };

        CurrencyInput.prototype.valueChanged = function valueChanged(newValue, oldValue) {
          this._updateDisplay(newValue ? newValue.toString() : '', oldValue ? oldValue.toString() : '');
        };

        CurrencyInput.prototype.onBlur = function onBlur() {
          this._updateDisplay(this.displayValue, this.value);
        };

        CurrencyInput.prototype._updateDisplay = function _updateDisplay(update, oldValue) {
          this.displayValue = update.trim();
          if (this.displayValue) {
            this.value = this._castValueToFloat(this.displayValue.replace(/,|$/g, ""));
            if (isNaN(this.value)) {
              this._clearValue(oldValue);
            } else {
              this._setDisplayValue(this.value, oldValue);
            }
          } else {
            if (this.setNullToDefaultValue !== '') {
              var newValue = this._castValueToFloat(this.setNullToDefaultValue);
              this.value = newValue;
              this.displayValue = numeral(newValue).format('0,0.00');
            } else {
              this.value = null;
            }
          }
        };

        CurrencyInput.prototype._castValueToFloat = function _castValueToFloat(value) {
          return Number(parseFloat(value).toFixed(2));
        };

        CurrencyInput.prototype._setDisplayValue = function _setDisplayValue(newValue, oldValue) {
          if (this.onlyAllowPositiveNumbers && newValue < 0) {
            this._clearValue(oldValue);
          } else {
            this.displayValue = numeral(newValue).format('0,0.00');
          }
        };

        CurrencyInput.prototype._clearValue = function _clearValue(oldValue) {
          this.displayValue = oldValue;
          this.value = oldValue;
        };

        return CurrencyInput;
      }()) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class));

      _export('CurrencyInput', CurrencyInput);
    }
  };
});