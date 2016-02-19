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
  name: 'setNullToDefaultValue',
  attribute: 'set-null-to-default-value',
  defaultValue: '',
  defaultBindingMode: bindingMode.oneWay
})
@bindable({
  name: 'onlyAllowPositiveNumbers',
  attribute: 'only-allow-positive-numbers',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
})
@bindable({
  name: 'extendedView',
  attribute: 'extended-view',
  defaultValue: true,
  defaultBindingMode: bindingMode.oneWay
})
@bindable({
  name: 'customCSS',
  attribute: 'custom-css',
  defaultValue: '',
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

  valueChanged(newValue, oldValue) {
    this._updateDisplay(newValue ? newValue.toString() : '', oldValue ? oldValue.toString() : '');
  }

  onblur() {
    this._updateDisplay(this.displayValue, this.value);
  }

  _updateDisplay(update, oldValue) {
    this.displayValue = update.trim();   
    if (this.displayValue) {
      let newValue = this._castValueToFloat(this.displayValue.replace(/,|$/g, ""));
      if (newValue === 'NaN') {
        this._clearValue(oldValue);
      }
      else {
        this._setDisplayValue(newValue, oldValue);
      }
    } else {
      if (this.setNullToDefaultValue !== '') {
        let newValue = this._castValueToFloat(this.setNullToDefaultValue);
        this.value = newValue;
        this.displayValue = numeral(newValue).format('0,0.00');
      } else {
        this.value = '';
      }
    }
  }

  _castValueToFloat(value) {
    return parseFloat(value).toFixed(2);
  }

  _setDisplayValue(newValue, oldValue) {
    if (this.onlyAllowPositiveNumbers && newValue < 0) {
      this._clearValue(oldValue);
    }
    else {
      this.displayValue = numeral(newValue).format('0,0.00');
      this.value = newValue;
    }
  }

  _clearValue(oldValue) {
    this.displayValue = oldValue;
    this.value = oldValue;
  }
}