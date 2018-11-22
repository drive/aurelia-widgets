import { customElement, bindable, bindingMode, observable, TaskQueue } from 'aurelia-framework';
import { DOM } from 'aurelia-pal';
import { inject } from 'aurelia-dependency-injection'
import numeral from 'numeral';

const KEY_A = 65;
const KEY_Z = 90;

let nextID = 0;

@customElement('currency-input')
@bindable({
  name: 'value',
  attribute: 'value',
  defaultBindingMode: bindingMode.twoWay,
  changeHandler: 'valueChanged'
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
  name: 'cssClasses',
  attribute: 'css-classes',
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
  @bindable small = false;
  @bindable change = () => { };

  @observable inputValue: string = null;

  id = nextID++;

  constructor(element, taskQueue) {
    this.element = element;
    this.taskQueue = taskQueue;
  }

  attached() {
    this.input = this.element.querySelector('input');
  }

  valueChanged(newValue) {
    if (newValue === null && this.setNullToDefaultValue !== "") {
      this.taskQueue.queueMicroTask(() => {
        this.value = Number.parseFloat(newInputValue).toFixed(2);
      });
    } else {
      const newInputValue = !Number.isNaN(Number.parseFloat(newValue)) ? newValue.toString() : "";
      if (newInputValue !== this.inputValue)
        this.inputValue = numeral(newInputValue).format('0,0.00');
    }
  }

  inputValueChanged(newInputValue) {
    newInputValue = newInputValue.replace(/,|$/g, "")
    let newValue = !Number.isNaN(Number.parseFloat(newInputValue)) ? Number.parseFloat(newInputValue).toFixed(2) : (this.emptyStringIsNull ? null : 0);
    if (this.onlyAllowPositiveNumbers && newValue < 0) {
      newValue = 0;
      this.taskQueue.queueMicroTask(() => {
        this.inputValue = numeral(newValue).format('0,0.00');
      });
    }

    if (newValue !== this.value) {
      this.value = newValue;
      this.change({ value: this.value });
    }
  }

  blur() {
    this.taskQueue.queueMicroTask(() => this.element.dispatchEvent(DOM.createCustomEvent('blur')));
  }
}