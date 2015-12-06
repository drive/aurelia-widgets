'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _numeral = require('numeral');

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
    value: function valueChanged(newValue) {
      this._updateDisplay(newValue.toString());
    }
  }, {
    key: 'onblur',
    value: function onblur() {
      this._updateDisplay(this.displayValue);
    }
  }, {
    key: '_updateDisplay',
    value: function _updateDisplay(update) {
      this.displayValue = update.trim();
      if (this.displayValue) {
        this.value = parseFloat(this.displayValue.replace(/,|$/g, "")).toFixed(2);
        if (this.value === 'NaN') {
          this.value = NaN;
          this.displayValue = '';
        } else {
          this.displayValue = (0, _numeral2['default'])(this.value).format('0,0.00');
        }
      }
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
    name: 'value',
    attribute: 'value',
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay,
    changeHandler: 'valueChanged'
  })(CurrencyInput) || CurrencyInput;
  CurrencyInput = (0, _aureliaTemplating.customElement)('currency-input')(CurrencyInput) || CurrencyInput;
  return CurrencyInput;
})();

exports.CurrencyInput = CurrencyInput;