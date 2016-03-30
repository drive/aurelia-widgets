'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = undefined;

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

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

var Checkbox = exports.Checkbox = (_dec = (0, _aureliaTemplating.bindable)({
  name: 'labelText',
  attribute: 'label-text',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec2 = (0, _aureliaTemplating.bindable)({
  name: 'enabled',
  attribute: 'enabled',
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec3 = (0, _aureliaTemplating.bindable)({
  name: 'checked',
  attribute: 'checked',
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec4 = (0, _aureliaTemplating.bindable)({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
}), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = function () {
  function Checkbox() {
    _classCallCheck(this, Checkbox);

    _initDefineProp(this, 'ontoggle', _descriptor, this);

    this.checked = false;
    this.enabled = true;
  }

  Checkbox.prototype.checkboxSelected = function checkboxSelected() {
    if (!this.enabled) return;

    this.checked = !this.checked;
    if (this.ontoggle) {
      this.ontoggle({ checked: this.checked });
    }
  };

  return Checkbox;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ontoggle', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class) || _class);