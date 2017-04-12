var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
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

import { bindable } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';

export let Checkbox = (_dec = bindable({
  name: 'enabled',
  attribute: 'enabled',
  defaultBindingMode: bindingMode.oneWay
}), _dec2 = bindable({
  name: 'checked',
  attribute: 'checked',
  defaultBindingMode: bindingMode.twoWay
}), _dec3 = bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
}), _dec4 = bindable({
  name: 'iconFamilyClass',
  attribute: 'icon-family-class',
  defaultValue: 'fa'
}), _dec5 = bindable({
  name: 'checkedIconClass',
  attribute: 'checked-icon-class',
  defaultValue: 'fa-check'
}), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_class2 = class Checkbox {

  constructor() {
    _initDefineProp(this, 'ontoggle', _descriptor, this);

    _initDefineProp(this, 'small', _descriptor2, this);

    _initDefineProp(this, 'label', _descriptor3, this);

    this.checked = false;
    this.enabled = true;
  }

  checkboxSelected() {
    if (!this.enabled) return;

    this.checked = !this.checked;
    if (this.ontoggle) {
      this.ontoggle({ checked: this.checked });
    }
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ontoggle', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'small', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'label', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
})), _class2)) || _class) || _class) || _class) || _class) || _class);