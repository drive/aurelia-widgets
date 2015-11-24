System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection'], function (_export) {
  'use strict';

  var customElement, bindable, bindingMode, computedFrom, inject, KEY_A, KEY_Z, CurrencyInput;

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
                this.displayValue = this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              }
            }
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