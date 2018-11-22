define(['exports', 'aurelia-framework', 'aurelia-pal', 'aurelia-dependency-injection', 'numeral'], function (exports, _aureliaFramework, _aureliaPal, _aureliaDependencyInjection, _numeral) {
  'use strict';

  exports.__esModule = true;
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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

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
    name: 'cssClasses',
    attribute: 'css-classes',
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

      _initDefineProp(this, 'change', _descriptor3, this);

      _initDefineProp(this, 'inputValue', _descriptor4, this);

      this.id = nextID++;

      this.element = element;
      this.taskQueue = taskQueue;
    }

    CurrencyInput.prototype.attached = function attached() {
      this.input = this.element.querySelector('input');
    };

    CurrencyInput.prototype.valueChanged = function valueChanged(newValue) {
      var _this = this;

      if (newValue === null && this.setNullToDefaultValue !== "") {
        this.taskQueue.queueMicroTask(function () {
          _this.value = Number.parseFloat(newInputValue).toFixed(2);
        });
      } else {
        var _newInputValue = !Number.isNaN(Number.parseFloat(newValue)) ? newValue.toString() : "";
        if (_newInputValue !== this.inputValue) this.inputValue = (0, _numeral2.default)(_newInputValue).format('0,0.00');
      }
    };

    CurrencyInput.prototype.inputValueChanged = function inputValueChanged(newInputValue) {
      var _this2 = this;

      newInputValue = newInputValue.replace(/,|$/g, "");
      var newValue = !Number.isNaN(Number.parseFloat(newInputValue)) ? Number.parseFloat(newInputValue).toFixed(2) : this.emptyStringIsNull ? null : 0;
      if (this.onlyAllowPositiveNumbers && newValue < 0) {
        newValue = 0;
        this.taskQueue.queueMicroTask(function () {
          _this2.inputValue = (0, _numeral2.default)(newValue).format('0,0.00');
        });
      }

      if (newValue !== this.value) {
        this.value = newValue;
        this.change({ value: this.value });
      }
    };

    CurrencyInput.prototype.blur = function blur() {
      var _this3 = this;

      this.taskQueue.queueMicroTask(function () {
        return _this3.element.dispatchEvent(_aureliaPal.DOM.createCustomEvent('blur'));
      });
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
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'change', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return function () {};
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'inputValue', [_aureliaFramework.observable], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  })), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
});
//# sourceMappingURL=currency-input.js.map
