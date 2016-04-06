var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class;

import { customElement, bindable } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { VelocityAnimator } from 'aurelia-animator-velocity';

const elasticEvents = ['keyup', 'cut', 'paste', 'change'];
const ANIMATION_LENGTH = 200;
export let TextWidget = (_dec = customElement('text-widget'), _dec2 = bindable({
  name: 'textValue',
  attribute: 'text-value',
  defaultBindingMode: bindingMode.twoWay
}), _dec3 = bindable({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
}), _dec4 = bindable('placeholder'), _dec5 = bindable('label'), _dec6 = bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
}), _dec7 = bindable({
  name: 'multiline',
  attribute: 'multiline',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneTime
}), _dec8 = inject(Element, VelocityAnimator), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = class TextWidget {

  constructor(element, animator) {
    this.element = element;
    this.animator = animator;
    this.boundResize = this.resize.bind(this);
    this.boundExpand = this._expand.bind(this);
    this.boundShrink = this._shrink.bind(this);
  }

  attached() {
    if (this.multiline) {
      this.input = this.element.querySelector('textarea');
      elasticEvents.forEach(event => {
        this.input.addEventListener(event, this.boundResize);
      });
      document.addEventListener('resize', this.boundResize);
      this.minSize = this.input.scrollHeight;

      this.input.addEventListener('focus', this.boundExpand);
      this.input.addEventListener('blur', this.boundShrink);
    } else {
      this.input = this.element.querySelector('input');
    }
  }

  detached() {
    if (this.multiline) {
      elasticEvents.forEach(event => {
        this.input.removeEventListener(event, this.boundResize);
      });
      document.removeEventListener('resize', this.boundResize);
      this.input.removeEventListener('focus', this.boundExpand);
      this.input.removeEventListener('blur', this.boundShrink);
    }
  }

  get optimalHeight() {
    this.input.style.overflow = 'hidden';
    this.input.style.height = 'auto';
    let newSize = this.input.scrollHeight;
    if (newSize > this.minSize) {
      newSize += 20;
    }
    return newSize;
  }

  resize() {
    this.input.style.height = `${ this.optimalHeight }px`;
  }

  _expand(e) {
    this.animator.animate(this.input, { height: `${ this.optimalHeight }px` }, { duration: ANIMATION_LENGTH });
  }

  _shrink(e) {
    this.animator.animate(this.input, { height: `${ this.minSize }px` }, { duration: ANIMATION_LENGTH });
    this.input.style.overflow = 'scroll';
  }
}) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);