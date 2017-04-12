define(['exports', 'aurelia-framework', 'aurelia-pal', 'aurelia-dependency-injection', 'numeral'], function (exports, _aureliaFramework, _aureliaPal, _aureliaDependencyInjection, _numeral) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CurrencyInput = undefined;

  var _numeral2 = _interopRequireDefault(_numeral);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _desc, _value, _class2, _descriptor, _descriptor2;

  var KEY_A = 65;
  var KEY_Z = 90;

  var nextID = 0;

  var CurrencyInput = exports.CurrencyInput = (_dec = (0, _aureliaFramework.customElement)('currency-input'), _dec2 = (0, _aureliaFramework.bindable)({
    name: 'value',
    attribute: 'value',
    defaultBindingMode: _aureliaFramework.bindingMode.twoWay,
    changeHandler: 'valueChanged'
  }), _dec3 = (0, _aureliaFramework.bindable)({
    name: 'disabled',
    attribute: 'disabled',
    defaultValue: false,
    defaultBindingMode: _aureliaFramework.bindingMode.oneWay
  }), _dec4 = (0, _aureliaFramework.bindable)({
    name: 'setNullToDefaultValue',
    attribute: 'set-null-to-default-value',
    defaultValue: '',
    defaultBindingMode: _aureliaFramework.bindingMode.oneWay
  }), _dec5 = (0, _aureliaFramework.bindable)({
    name: 'onlyAllowPositiveNumbers',
    attribute: 'only-allow-positive-numbers',
    defaultValue: false,
    defaultBindingMode: _aureliaFramework.bindingMode.oneWay
  }), _dec6 = (0, _aureliaFramework.bindable)({
    name: 'customCSS',
    attribute: 'custom-css',
    defaultValue: '',
    defaultBindingMode: _aureliaFramework.bindingMode.oneWay
  }), _dec7 = (0, _aureliaFramework.bindable)({
    name: 'placeholder',
    defaultValue: '0.00',
    defaultBindingMode: _aureliaFramework.bindingMode.oneTime
  }), _dec8 = (0, _aureliaFramework.bindable)({
    name: 'grabFocus',
    attribute: 'grab-focus',
    defaultValue: false
  }), _dec9 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaFramework.TaskQueue), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = (_class2 = function () {
    function CurrencyInput(element, taskQueue) {
      _classCallCheck(this, CurrencyInput);

      _initDefineProp(this, 'label', _descriptor, this);

      _initDefineProp(this, 'small', _descriptor2, this);

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
        return _this.element.dispatchEvent(_aureliaPal.DOM.createCustomEvent('blur'));
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
          this.displayValue = (0, _numeral2.default)(newValue).format('0,0.00');
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
        this.displayValue = (0, _numeral2.default)(newValue).format('0,0.00');
      }
    };

    CurrencyInput.prototype._clearValue = function _clearValue(oldValue) {
      this.displayValue = oldValue;
      this.value = oldValue;
    };

    return CurrencyInput;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'label', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'small', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
});