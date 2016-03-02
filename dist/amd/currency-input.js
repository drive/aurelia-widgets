define(['exports', 'babel-runtime/helpers/create-class', 'babel-runtime/helpers/class-call-check', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'numeral', 'babel-runtime/helpers/interop-require-default'], function (exports, _babelRuntimeHelpersCreateClass, _babelRuntimeHelpersClassCallCheck, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _numeral, _babelRuntimeHelpersInteropRequireDefault) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _numeral2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_numeral);

  var KEY_A = 65;
  var KEY_Z = 90;

  var CurrencyInput = (function () {
    function CurrencyInput(element) {
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, _CurrencyInput);

      this.element = element;
      this.displayValue = '';

      this._boundOnBlur = this.onBlur.bind(this);
    }

    (0, _babelRuntimeHelpersCreateClass['default'])(CurrencyInput, [{
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
            this.displayValue = (0, _numeral2['default'])(newValue).format('0,0.00');
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
          this.displayValue = (0, _numeral2['default'])(newValue).format('0,0.00');
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
    CurrencyInput = (0, _aureliaDependencyInjection.inject)(Element)(CurrencyInput) || CurrencyInput;
    CurrencyInput = (0, _aureliaTemplating.bindable)({
      name: 'grabFocus',
      attribute: 'grab-focus',
      defaultValue: false
    })(CurrencyInput) || CurrencyInput;
    CurrencyInput = (0, _aureliaTemplating.bindable)('label')(CurrencyInput) || CurrencyInput;
    CurrencyInput = (0, _aureliaTemplating.bindable)({
      name: 'placeholder',
      defaultValue: '0.00',
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })(CurrencyInput) || CurrencyInput;
    CurrencyInput = (0, _aureliaTemplating.bindable)({
      name: 'customCSS',
      attribute: 'custom-css',
      defaultValue: '',
      defaultBindingMode: _aureliaBinding.bindingMode.oneWay
    })(CurrencyInput) || CurrencyInput;
    CurrencyInput = (0, _aureliaTemplating.bindable)({
      name: 'extendedView',
      attribute: 'extended-view',
      defaultValue: true,
      defaultBindingMode: _aureliaBinding.bindingMode.oneWay
    })(CurrencyInput) || CurrencyInput;
    CurrencyInput = (0, _aureliaTemplating.bindable)({
      name: 'onlyAllowPositiveNumbers',
      attribute: 'only-allow-positive-numbers',
      defaultValue: false,
      defaultBindingMode: _aureliaBinding.bindingMode.oneWay
    })(CurrencyInput) || CurrencyInput;
    CurrencyInput = (0, _aureliaTemplating.bindable)({
      name: 'setNullToDefaultValue',
      attribute: 'set-null-to-default-value',
      defaultValue: '',
      defaultBindingMode: _aureliaBinding.bindingMode.oneWay
    })(CurrencyInput) || CurrencyInput;
    CurrencyInput = (0, _aureliaTemplating.bindable)({
      name: 'disabled',
      attribute: 'disabled',
      defaultValue: false,
      defaultBindingMode: _aureliaBinding.bindingMode.oneWay
    })(CurrencyInput) || CurrencyInput;
    CurrencyInput = (0, _aureliaTemplating.bindable)({
      name: 'size',
      attribute: 'size',
      defaultValue: 'medium',
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })(CurrencyInput) || CurrencyInput;
    CurrencyInput = (0, _aureliaTemplating.bindable)({
      name: 'value',
      attribute: 'value',
      defaultBindingMode: _aureliaBinding.bindingMode.twoWay,
      changeHandler: 'valueChanged'
    })(CurrencyInput) || CurrencyInput;
    CurrencyInput = (0, _aureliaTemplating.customElement)('currency-input')(CurrencyInput) || CurrencyInput;
    return CurrencyInput;
  })();

  exports.CurrencyInput = CurrencyInput;
});