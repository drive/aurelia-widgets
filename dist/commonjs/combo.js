'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Combo = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _desc, _value, _class2, _descriptor;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Combo = exports.Combo = (_dec = (0, _aureliaTemplating.customElement)('combo'), _dec2 = (0, _aureliaTemplating.bindable)({
  name: 'size',
  attribute: 'size',
  defaultValue: 'medium',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec3 = (0, _aureliaTemplating.bindable)({
  name: 'title',
  attribute: 'title',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec4 = (0, _aureliaTemplating.bindable)({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec5 = (0, _aureliaTemplating.bindable)({
  name: 'options',
  attribute: 'options',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec6 = (0, _aureliaTemplating.bindable)({
  name: 'selected',
  attribute: 'selected',
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay,
  changeHandler: '_handleSelectedChanged'
}), _dec7 = (0, _aureliaTemplating.bindable)({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
}), _dec8 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = (_class2 = function () {
  function Combo(element) {
    _classCallCheck(this, Combo);

    _initDefineProp(this, 'onchange', _descriptor, this);

    this.element = element;
    this._boundChange = this._change.bind(this);
  }

  Combo.prototype.attached = function attached() {
    this.combo = this.element.querySelector('select');

    if (this.selected || this.selected === 0) this._setComboValue(this.selected);

    this.combo.addEventListener('change', this._boundChange);
  };

  Combo.prototype.detached = function detached() {
    this.combo.removeEventListener('change', this._boundChange);
  };

  Combo.prototype.getSelectedId = function getSelectedId(item) {
    if (item && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') return item.id;

    return item;
  };

  Combo.prototype._change = function _change(change) {
    this._setSelected(change.target);

    if (this.onchange) {
      this.onchange(this.selected);
    }
  };

  Combo.prototype._handleSelectedChanged = function _handleSelectedChanged(newValue) {
    if (this.combo) this._setComboValue(newValue);
  };

  Combo.prototype._setComboValue = function _setComboValue(newValue) {
    if (newValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object') this.combo.value = newValue.id;else this.combo.value = newValue;
  };

  Combo.prototype._setSelected = function _setSelected(item) {
    if (_typeof(this.selected) === 'object') {
      this.selected = this.options.find(function (x) {
        return x.id == item.value;
      });
    } else {
      this.selected = item.value;
    }
  };

  return Combo;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'onchange', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);