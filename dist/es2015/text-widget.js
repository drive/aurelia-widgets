var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

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

import { customElement, inject, bindable, bindingMode, TaskQueue } from 'aurelia-framework';
import { DOM } from 'aurelia-pal';
import { VelocityAnimator } from 'aurelia-animator-velocity';

const ANIMATION_LENGTH = 200;
export let TextWidget = (_dec = customElement('text-widget'), _dec2 = bindable({
  name: 'textValue',
  attribute: 'text-value',
  defaultBindingMode: bindingMode.twoWay,
  defaultValue: null,
  changeHandler: '_textValueChanged'
}), _dec3 = bindable({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
}), _dec4 = bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
}), _dec5 = bindable({
  name: 'multiline',
  attribute: 'multiline',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneTime
}), _dec6 = bindable({
  name: 'readonly',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
}), _dec7 = bindable({
  name: 'maxLength',
  attribute: 'max-length',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: null
}), _dec8 = inject(Element, VelocityAnimator, TaskQueue), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = (_class2 = class TextWidget {

  constructor(element, animator, taskQueue) {
    _initDefineProp(this, 'small', _descriptor, this);

    _initDefineProp(this, 'placeholder', _descriptor2, this);

    _initDefineProp(this, 'label', _descriptor3, this);

    _initDefineProp(this, 'small', _descriptor4, this);

    _initDefineProp(this, 'horizontal', _descriptor5, this);

    this.element = element;
    this.animator = animator;
    this.taskQueue = taskQueue;

    this.boundExpand = this._expand.bind(this);
    this.boundResize = this._resize.bind(this);

    this.maxHeight = window.innerHeight - 200;
  }

  attached() {
    if (this.multiline) {
      this.input = this.element.querySelector('textarea');

      this.minSize = Math.max(this._calcCurrentHeight(), 52);

      this.input.addEventListener('input', this.boundResize);
      this.input.addEventListener('focus', this.boundExpand);
      document.addEventListener('resize', this.boundResize);

      this.optimalHeight = this._calcOptimalHeight();
      if (this.optimalHeight > this.minSize && this.textValue) {
        this.input.style.overflowY = 'scroll';
      }
    } else {
      this.input = this.element.querySelector('input');
    }

    if (this.maxLength) {
      this.input.setAttribute('maxlength', this.maxLength);
    }
  }

  detached() {
    if (this.multiline) {
      this.input.removeEventListener('input', this.boundResize);
      this.input.removeEventListener('focus', this.boundExpand);
      document.removeEventListener('resize', this.boundResize);
    }
  }

  _calcCurrentHeight() {
    let rect = this.input.getBoundingClientRect();
    return rect.bottom - rect.top;
  }

  _calcOptimalHeight() {
    this.input.style.height = 'auto';
    let scrollHeight = this.input.scrollHeight;
    if (scrollHeight > this.maxHeight) {
      this.input.style.overflowY = 'scroll';
      return this.maxHeight;
    }

    this.input.style.overflowY = 'hidden';
    return scrollHeight;
  }

  _resize() {
    let originalX = window.pageXOffset;
    let originalY = window.pageYOffset;
    this.optimalHeight = this._calcOptimalHeight();
    this.input.style.height = `${this.optimalHeight}px`;
    window.scrollTo(originalX, originalY);
  }

  _expand(e) {
    if (this.optimalHeight > this.minSize) {
      this.animator.animate(this.input, { height: `${this.optimalHeight}px` }, { duration: ANIMATION_LENGTH });
    }
  }

  blur(e) {
    if (this.optimalHeight > this.minSize) {
      this.animator.animate(this.input, { height: `${this.minSize}px` }, { duration: ANIMATION_LENGTH });
      if (this.textValue) {
        this.input.style.overflowY = 'scroll';
      }
    }

    this.taskQueue.queueMicroTask(() => this.element.dispatchEvent(DOM.createCustomEvent('blur')));
  }

  _textValueChanged() {
    if (this.multiline && this.input) this._resize();
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'small', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'label', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'small', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'horizontal', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
})), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);