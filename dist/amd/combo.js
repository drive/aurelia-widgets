define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Combo = undefined;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _desc, _value, _class2, _descriptor;

  var Combo = exports.Combo = (_dec = (0, _aureliaTemplating.customElement)('combo'), _dec2 = (0, _aureliaTemplating.bindable)({
    name: 'selected',
    attribute: 'selected',
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay,
    changeHandler: '_handleSelectedChanged'
  }), _dec3 = (0, _aureliaTemplating.bindable)({
    name: 'options',
    attribute: 'options',
    defaultBindingMode: _aureliaBinding.bindingMode.oneWay,
    changeHandler: '_handleOptionsChanged'
  }), _dec4 = (0, _aureliaTemplating.bindable)({
    name: 'size',
    attribute: 'size',
    defaultValue: 'medium',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec5 = (0, _aureliaTemplating.bindable)({
    name: 'title',
    attribute: 'title',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec6 = (0, _aureliaTemplating.bindable)({
    name: 'disabled',
    attribute: 'disabled',
    defaultValue: false,
    defaultBindingMode: _aureliaBinding.bindingMode.oneWay
  }), _dec7 = (0, _aureliaTemplating.bindable)({
    name: 'grabFocus',
    attribute: 'grab-focus',
    defaultValue: false
  }), _dec8 = (0, _aureliaTemplating.bindable)({
    name: 'noSelectionOption',
    attribute: 'no-selection-option',
    defaultValue: false,
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec9 = (0, _aureliaTemplating.bindable)({
    name: 'noSelectionText',
    attribute: 'no-selection-text',
    defaultValue: 'Choose...',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec10 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = _dec10(_class = (_class2 = function () {
    function Combo(element) {
      _classCallCheck(this, Combo);

      _initDefineProp(this, 'onchange', _descriptor, this);

      this.element = element;
    }

    Combo.prototype.attached = function attached() {
      this.combo = this.element.querySelector('select');
    };

    Combo.prototype.detached = function detached() {
      this.combo = null;
    };

    Combo.prototype._handleSelectedChanged = function _handleSelectedChanged(newValue) {
      if (this.onchange) {
        this.onchange({ selected: this.selected });
      }
    };

    Combo.prototype._handleOptionsChanged = function _handleOptionsChanged(newValue) {
      var _this = this;

      if (this.selected) {
        if (_typeof(this.selected) === 'object') {
          if (!this.options.some(function (x) {
            return x.id == _this.selected.id;
          })) {
            this.combo.value = this.selected = null;
          }
        } else {
          if (!this.options.some(function (x) {
            return x == _this.selected;
          })) {
            this.combo.value = this.selected = null;
          }
        }
      }
    };

    return Combo;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'onchange', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
});