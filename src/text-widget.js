import { customElement, inject, bindable, bindingMode, TaskQueue } from 'aurelia-framework';
import { DOM } from 'aurelia-pal';


@customElement('text-widget')
@bindable({
  name: 'textValue',
  attribute: 'text-value',
  defaultBindingMode: bindingMode.twoWay,
  defaultValue: null,
  changeHandler: '_textValueChanged'
})
@bindable({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
})
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
@bindable({
  name: 'readonly',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
})
@bindable({
  name: 'maxLength',
  attribute: 'max-length',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: null
})
@inject(Element, TaskQueue)
export class TextWidget {

  @bindable small = false;
  @bindable placeholder = '';
  @bindable label = '';
  @bindable small = false;
  @bindable horizontal = false;

  constructor(element, taskQueue) {
    this.element = element;
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
    }
    else {
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
      this.input.style.height = `${this.optimalHeight}px`;
    }
  }

  blur(e) {
    if (this.optimalHeight > this.minSize) {
      this.input.style.height = `${this.minSize}px`;
      if (this.textValue) {
        this.input.style.overflowY = 'scroll';
      }
    }

    this.taskQueue.queueMicroTask(() => this.element.dispatchEvent(DOM.createCustomEvent('blur')));
  }

  _textValueChanged() {
    if (this.multiline && this.input)
      this._resize();
  }
}