import {customElement, bindable, bindingMode, computedFrom, TaskQueue} from 'aurelia-framework';
import {DOM} from 'aurelia-pal';
import {inject} from 'aurelia-dependency-injection'
import numeral from 'numeral';

const KEY_A = 65;
const KEY_Z = 90;

let nextID = 0;

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
@bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
})
@inject(Element, TaskQueue)
export class CurrencyInput {

  @bindable label = '';

  id = nextID++;

  constructor(element, taskQueue) {
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
}