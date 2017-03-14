var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _desc, _value, _class2, _descriptor;

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

import { customElement, bindable } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';

export let Combo = (_dec = customElement('combo'), _dec2 = bindable({
  name: 'selected',
  attribute: 'selected',
  defaultBindingMode: bindingMode.twoWay,
  changeHandler: '_handleSelectedChanged'
}), _dec3 = bindable({
  name: 'options',
  attribute: 'options',
  defaultBindingMode: bindingMode.oneWay,
  changeHandler: '_handleOptionsChanged'
}), _dec4 = bindable({
  name: 'size',
  attribute: 'size',
  defaultValue: 'medium',
  defaultBindingMode: bindingMode.oneTime
}), _dec5 = bindable({
  name: 'title',
  attribute: 'title',
  defaultBindingMode: bindingMode.oneTime
}), _dec6 = bindable({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
}), _dec7 = bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
}), _dec8 = bindable({
  name: 'noSelectionOption',
  attribute: 'no-selection-option',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneTime
}), _dec9 = bindable({
  name: 'noSelectionText',
  attribute: 'no-selection-text',
  defaultValue: 'Choose...',
  defaultBindingMode: bindingMode.oneTime
}), _dec10 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = _dec10(_class = (_class2 = class Combo {

  constructor(element) {
    _initDefineProp(this, 'onchange', _descriptor, this);

    this.element = element;
  }

  attached() {
    this.combo = this.element.querySelector('select');
  }

  detached() {
    this.combo = null;
  }

  _handleSelectedChanged(newValue) {
    if (this.onchange) {
      this.onchange({ selected: this.selected });
    }
  }

  _handleOptionsChanged(newValue) {
    if (this.selected) {
      if (typeof this.selected === 'object') {
        if (!this.options.some(x => x.id == this.selected.id)) {
          this.combo.value = this.selected = null;
        }
      } else {
        if (!this.options.some(x => x == this.selected)) {
          this.combo.value = this.selected = null;
        }
      }
    }
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'onchange', [bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);