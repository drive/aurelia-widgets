var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _desc, _value, _class2, _descriptor, _descriptor2;

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

import { customElement, bindable, bindingMode, computedFrom, TaskQueue } from 'aurelia-framework';
import { DOM } from 'aurelia-pal';
import { inject } from 'aurelia-dependency-injection';
import numeral from 'numeral';

const KEY_A = 65;
const KEY_Z = 90;

let nextID = 0;

export let CurrencyInput = (_dec = customElement('currency-input'), _dec2 = bindable({
  name: 'value',
  attribute: 'value',
  defaultBindingMode: bindingMode.twoWay,
  changeHandler: 'valueChanged'
}), _dec3 = bindable({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
}), _dec4 = bindable({
  name: 'setNullToDefaultValue',
  attribute: 'set-null-to-default-value',
  defaultValue: '',
  defaultBindingMode: bindingMode.oneWay
}), _dec5 = bindable({
  name: 'onlyAllowPositiveNumbers',
  attribute: 'only-allow-positive-numbers',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
}), _dec6 = bindable({
  name: 'customCSS',
  attribute: 'custom-css',
  defaultValue: '',
  defaultBindingMode: bindingMode.oneWay
}), _dec7 = bindable({
  name: 'placeholder',
  defaultValue: '0.00',
  defaultBindingMode: bindingMode.oneTime
}), _dec8 = bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
}), _dec9 = inject(Element, TaskQueue), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = (_class2 = class CurrencyInput {

  constructor(element, taskQueue) {
    _initDefineProp(this, 'label', _descriptor, this);

    _initDefineProp(this, 'small', _descriptor2, this);

    this.id = nextID++;

    this.element = element;
    this.taskQueue = taskQueue;

    this.displayValue = '';
  }

  attached() {
    this.input = this.element.querySelector('input');
  }

  valueChanged(newValue, oldValue) {
    this._updateDisplay(!Number.isNaN(Number.parseFloat(newValue)) ? newValue.toString() : '', !Number.isNaN(Number.parseFloat(oldValue)) ? oldValue.toString() : '');
  }

  blur() {
    this._updateDisplay(this.displayValue, this.value);

    this.taskQueue.queueMicroTask(() => this.element.dispatchEvent(DOM.createCustomEvent('blur')));
  }

  _updateDisplay(update, oldValue) {
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
        let newValue = this._castValueToFloat(this.setNullToDefaultValue);
        this.value = newValue;
        this.displayValue = numeral(newValue).format('0,0.00');
      } else {
        this.value = null;
      }
    }
  }

  _castValueToFloat(value) {
    return Number(parseFloat(value).toFixed(2));
  }

  _setDisplayValue(newValue, oldValue) {
    if (this.onlyAllowPositiveNumbers && newValue < 0) {
      this._clearValue(oldValue);
    } else {
      this.displayValue = numeral(newValue).format('0,0.00');
    }
  }

  _clearValue(oldValue) {
    this.displayValue = oldValue;
    this.value = oldValue;
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'label', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'small', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
})), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);