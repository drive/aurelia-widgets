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
      this._setComboValue(this.selected);

    this.combo.addEventListener('change', this._boundChange);
  }

  detached() {
    this.combo.removeEventListener('change', this._boundChange);
  }

  getSelectedId(item) {
    if (typeof item === 'object')
      return item.id;

    return item;
  }

  _change(change) {
    this._setSelected(change.target);
  }

  _handleSelectedChanged(newValue) {
    if (this.combo) 
      this._setComboValue(newValue);
  }

  _setComboValue(newValue) {
    if (typeof newValue === 'object')
      this.combo.value = newValue.id;
    else
      this.combo.value = newValue;
  }

  _setSelected(item) {
    if (typeof this.selected === 'object') {
      this.selected.id = item.value;
      //supports only one selected option
      this.selected.description = item.selectedOptions[0].text;
    }
    else {
      this.selected = item.value;
    }
  }
}