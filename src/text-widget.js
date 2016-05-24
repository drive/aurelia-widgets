import {customElement, bindable} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';
import {VelocityAnimator} from 'aurelia-animator-velocity';
import $ from 'jquery';

const ANIMATION_LENGTH = 200; //ms

@customElement('text-widget')
@bindable({
  name:'textValue',
  attribute:'text-value',
  defaultBindingMode: bindingMode.twoWay
})
@bindable({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
})
@bindable('placeholder')
@bindable('label')
@bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
})
@bindable({
  name: 'multiline',
  attribute: 'multiline',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneTime
})
@inject(Element, VelocityAnimator)
export class TextWidget {

  constructor(element, animator) {
    this.element = element;
    this.animator = animator;
    this.boundExpand = this._expand.bind(this);
    this.boundShrink = this._shrink.bind(this);
    this.boundResize = this._resize.bind(this);

    this.maxHeight = window.innerHeight - 200;
  }

  attached() {
    if (this.multiline) {
      this.input = this.element.querySelector('textarea');
      this.$input = $(this.input);

      this.minSize = this._calcCurrentHeight();

      this.$input.on('input', this.boundResize);

      this.input.addEventListener('focus', this.boundExpand);
      this.input.addEventListener('blur', this.boundShrink);
      document.addEventListener('resize', this.boundResize);

      this.optimalHeight = this._calcOptimalHeight();
      if (this.optimalHeight > this.minSize && this.textValue) {
        this.input.style.overflowY = 'scroll';
      }
    }
    else {
      this.input = this.element.querySelector('input');
    }
  }

  detached() {
    if (this.multiline) {
      this.$input.off('input', this.boundResize);
      this.input.removeEventListener('focus', this.boundExpand);
      this.input.removeEventListener('blur', this.boundShrink);
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

  _shrink(e) {
    if (this.optimalHeight > this.minSize) {
      this.animator.animate(this.input, { height: `${this.minSize}px`}, { duration: ANIMATION_LENGTH });
      if (this.textValue) {
        this.input.style.overflowY = 'scroll';
      }
    }
  }
}