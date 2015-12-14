import {customElement, bindable} from 'aurelia-templating';
import {bindingMode, computedFrom} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection'
import numeral from 'numeral';

const KEY_A = 65;
const KEY_Z = 90;

@customElement('currency-input')
@bindable({
  name:'value',
  attribute:'value',
  defaultBindingMode: bindingMode.twoWay,
  changeHandler: 'valueChanged'
})
@bindable({
  name: 'size',
  attribute: 'size',
  defaultValue: 'medium',
  defaultBindingMode: bindingMode.oneTime
})
@bindable({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
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

  valueChanged(newValue) {
    this._updateDisplay(newValue.toString());
  }

  onblur() {
    this._updateDisplay(this.displayValue);
  }

  _updateDisplay(update) {
    this.displayValue = update.trim();
    if (this.displayValue) {
      this.value = parseFloat(this.displayValue.replace(/,|$/g, "")).toFixed(2);
      if (this.value === 'NaN') {
        this.value = NaN;
        this.displayValue = '';
      }
      else {
        this.displayValue = numeral(this.value).format('0,0.00');
      }
    }
  }
}