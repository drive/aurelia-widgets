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
  defaultBindingMode: bindingMode.twoWay,
  changeHandler: '_handleSelectedChanged'
})
@inject(Element)
export class Combo {
  constructor(element) {
    this.element = element;
    this._boundChange = this._change.bind(this);
  }

  attached() {
    this.combo = this.element.querySelector('select');
    //Sometimes we already have a bounded property and it's already changed before the attached callback is invoked
    //so this ensures that the loaded/changed value will always be set on the select when attached to the DOM
    if (this.selected) 
      this.combo.value = this.selected;

    this.combo.addEventListener('change', this._boundChange);
  }

  detached() {
    this.combo.removeEventListener('change', this._boundChange);
  }

  _change(change) {
    this.selected = change.target.value;
  }

  _handleSelectedChanged(newValue) {
    if (this.combo) 
      this.combo.value = newValue;
  }
}