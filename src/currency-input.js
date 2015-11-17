import {customElement, bindable} from 'aurelia-templating';
import {bindingMode, computedFrom} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection'

const KEY_A = 65;
const KEY_Z = 90;

@customElement('currency-input')
@bindable({
  name:'value',
  attribute:'value',
  defaultBindingMode: bindingMode.twoWay
})
@bindable({
  name: 'placeholder',
  defaultValue: '0.00',
  defaultBindingMode: bindingMode.oneTime
})
@bindable('label')
@bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
})
@inject(Element)
export class CurrencyInput {

  constructor(element) {
    this.element = element;
    this.displayValue = '';
  }

  attached() {
    this.input = this.element.querySelector('input');
  }

  selectAll() {
    this.input.select();
  }

  onblur() {
    this.displayValue = this.displayValue.trim();
    if (this.displayValue) {
      this.value = parseFloat(this.displayValue.replace(/,|$/g, "")).toFixed(2);
      if (this.value === 'NaN') {
        this.value = NaN;
        this.displayValue = '';
      }
      else {
        this.displayValue = this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    }
  }
}