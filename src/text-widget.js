import {customElement, bindable} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';
import {VelocityAnimator} from 'aurelia-animator-velocity';

const elasticEvents = ['keyup', 'cut', 'paste', 'change'];
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
      if (!this.minSize) {
        this.minSize = this.input.scrollHeight;
      }

      this.input.addEventListener('focus', this.boundExpand);
      this.input.addEventListener('blur', this.boundShrink);
    }
    else {
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
      //the '+ 20' means the text doesn't jump about on screen when resizing.
      newSize += 20;
    }
    return newSize;
  }

  resize() {
    this.input.style.height = `${this.optimalHeight}px`;
  }

  _expand(e) {
    let contentHeight = this.optimalHeight;
    if (contentHeight > this.minSize) {
      this.animator.animate(this.input, { height: `${contentHeight}px` }, { duration: ANIMATION_LENGTH });
    }
  }

  _shrink(e) {
    let contentHeight = this.optimalHeight;
    if (contentHeight > this.minSize) {
      this.animator.animate(this.input, { height: `${this.minSize}px`}, { duration: ANIMATION_LENGTH });
      if (this.textValue) {
        this.input.style.overflow = 'scroll';
      }
    }
  }
}