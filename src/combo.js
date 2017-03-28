import {customElement, bindable} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection'

@customElement('combo')
@bindable({
  name:'selected',
  attribute:'selected',
  defaultBindingMode: bindingMode.twoWay,
  changeHandler: '_handleSelectedChanged'
})
@bindable({
  name:'options',
  attribute:'options',
  defaultBindingMode: bindingMode.oneWay,
  changeHandler: '_handleOptionsChanged'
})
@bindable({
  name: 'size',
  attribute: 'size',
  defaultValue: 'medium',
  defaultBindingMode: bindingMode.oneTime
})
@bindable({
  name:'title',
  attribute:'title',
  defaultBindingMode: bindingMode.oneTime
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
  name: 'noSelectionOption',
  attribute: 'no-selection-option',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneTime
})
@bindable({
  name: 'noSelectionText',
  attribute: 'no-selection-text',
  defaultValue: 'Choose...',
  defaultBindingMode: bindingMode.oneTime
})
@inject(Element)
export class Combo {

  // @bindable onchange;

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.combo = this.element.querySelector('select');
  }

  detached() {
    this.combo = null;
  }

  _handleSelectedChanged(newValue) {
    // if (this.onchange) {
    //   this.onchange({selected: this.selected});
    // }
  }

  _handleOptionsChanged(newValue) {
    if (this.selected) {
      if(typeof this.selected === 'object') {
        if(!this.options.some(x => x.id == this.selected.id)) {
          this.combo.value = this.selected = null;
        }
      } else {
        if(!this.options.some(x => x == this.selected)) {
          this.combo.value = this.selected = null;
        }
      }
    }
  }
}