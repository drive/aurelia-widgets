import {customElement, bindable} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';

const elasticEvents = ['keyup', 'cut', 'paste', 'change'];

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
@inject(Element)
export class TextWidget {

  constructor(element) {
    this.element = element;
    this.boundResize = this.resize.bind(this);
  }

  attached() {
    if (this.multiline) {
      this.input = this.element.querySelector('textarea');
      elasticEvents.forEach(event => {
        this.input.addEventListener(event, this.boundResize);
      });
      document.addEventListener('resize', this.boundResize);
      this.minSize = this.input.scrollHeight;
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
    }
  }

  resize() {
    this.input.style.overflow = 'hidden';
    this.input.style.height = 'auto';
    let newSize = this.input.scrollHeight;
    if (newSize > this.minSize) {
      //the '+ 20' means the text doesn't jump about on screen when resizing.
      newSize += 20;
    }
    this.input.style.height = `${newSize}px`;
  }
}