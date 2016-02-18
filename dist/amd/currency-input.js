define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'numeral'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _numeral) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _numeral2 = _interopRequireDefault(_numeral);

  var KEY_A = 65;
  var KEY_Z = 90;

  var CurrencyInput = (function () {
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
          var newValue = parseFloat(this.displayValue.replace(/,|$/g, "")).toFixed(2);
          if (newValue === 'NaN') {
            this._clearValue(oldValue);
          } else {
            this._setDisplayValue(newValue, oldValue);
          }
        } else {
          this.value = '';
        }
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