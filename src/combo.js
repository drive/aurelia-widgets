import {customElement, inject, bindable, bindingMode} from 'aurelia-framework';

@customElement('combo')
@bindable({
  name:'title',
  attribute:'title',
  defaultBindingMode: bindingMode.oneTime
})
@bindable({
  name:'options',
  attribute:'options',
  defaultBindingMode: bindingMode.oneTime
})
@bindable({
  name:'selected',
  attribute:'selected',
  defaultBindingMode: bindingMode.twoWay
})
@inject(Element)
export class Combo {
  constructor(element) {
    this.element = element;
    this._boundChange = this._change.bind(this);
  }

  attached() {
    this.combo = this.element.querySelector('select');
    this.combo.addEventListener('change', this._boundChange);
  }

  detached() {
    this.combo.removeEventListener('change', this._boundChange);
  }

  _change(change) {
    this.selected = change.target.value;
  }
}