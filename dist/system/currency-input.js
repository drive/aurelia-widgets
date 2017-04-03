'use strict';

System.register(['aurelia-framework', 'aurelia-pal', 'aurelia-dependency-injection', 'numeral'], function (_export, _context) {
  "use strict";

  var customElement, bindable, bindingMode, computedFrom, TaskQueue, DOM, inject, numeral, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _desc, _value, _class2, _descriptor, KEY_A, KEY_Z, CurrencyInput;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
      computedFrom = _aureliaFramework.computedFrom;
      TaskQueue = _aureliaFramework.TaskQueue;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
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
      }), _dec10 = bindable({
        name: 'grabFocus',
        attribute: 'grab-focus',
        defaultValue: false
      }), _dec11 = inject(Element, TaskQueue), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = _dec10(_class = _dec11(_class = (_class2 = function () {
        function CurrencyInput(element, taskQueue) {
          _classCallCheck(this, CurrencyInput);

          _initDefineProp(this, 'label', _descriptor, this);

          this.id = nextID++;

          this.element = element;
          this.taskQueue = taskQueue;

          this.displayValue = '';
        }

        CurrencyInput.prototype.attached = function attached() {
          this.input = this.element.querySelector('input');
        };

        CurrencyInput.prototype.valueChanged = function valueChanged(newValue, oldValue) {
          this._updateDisplay(!Number.isNaN(Number.parseFloat(newValue)) ? newValue.toString() : '', !Number.isNaN(Number.parseFloat(oldValue)) ? oldValue.toString() : '');
        };

        CurrencyInput.prototype.blur = function blur() {
          var _this = this;

          this._updateDisplay(this.displayValue, this.value);

          this.taskQueue.queueMicroTask(function () {
            return _this.element.dispatchEvent(DOM.createCustomEvent('blur'));
          });
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
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'label', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class));

      _export('CurrencyInput', CurrencyInput);
    }
  };
});