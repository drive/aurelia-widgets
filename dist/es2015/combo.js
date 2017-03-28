var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class;

import { customElement, bindable } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';

export let Combo = (_dec = customElement('combo'), _dec2 = bindable({
  name: 'selected',
  attribute: 'selected',
  defaultBindingMode: bindingMode.twoWay,
  changeHandler: '_handleSelectedChanged'
}), _dec3 = bindable({
  name: 'options',
  attribute: 'options',
  defaultBindingMode: bindingMode.oneWay,
  changeHandler: '_handleOptionsChanged'
}), _dec4 = bindable({
  name: 'size',
  attribute: 'size',
  defaultValue: 'medium',
  defaultBindingMode: bindingMode.oneTime
}), _dec5 = bindable({
  name: 'title',
  attribute: 'title',
  defaultBindingMode: bindingMode.oneTime
}), _dec6 = bindable({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
}), _dec7 = bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
}), _dec8 = bindable({
  name: 'noSelectionOption',
  attribute: 'no-selection-option',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneTime
}), _dec9 = bindable({
  name: 'noSelectionText',
  attribute: 'no-selection-text',
  defaultValue: 'Choose...',
  defaultBindingMode: bindingMode.oneTime
}), _dec10 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = _dec10(_class = class Combo {

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.combo = this.element.querySelector('select');
  }

  detached() {
    this.combo = null;
  }

  _handleSelectedChanged(newValue) {}

  _handleOptionsChanged(newValue) {
    if (this.selected) {
      if (typeof this.selected === 'object') {
        if (!this.options.some(x => x.id == this.selected.id)) {
          this.combo.value = this.selected = null;
        }
      } else {
        if (!this.options.some(x => x == this.selected)) {
          this.combo.value = this.selected = null;
        }
      }
    }
  }
}) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);