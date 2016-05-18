import {bindable} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';

@bindable({
  name: 'labelText',
  attribute: 'label-text',
  defaultBindingMode: bindingMode.oneTime
})
@bindable({
  name: 'enabled',
  attribute: 'enabled',
  defaultBindingMode: bindingMode.oneWay
})
@bindable({
  name: 'checked',
  attribute: 'checked',
  defaultBindingMode: bindingMode.twoWay
})
@bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
})
@bindable({
  name: 'iconFamilyClass',
  attribute: 'icon-family-class',
  defaultValue: 'fa'
})
@bindable({
  name: 'checkedIconClass',
  attribute: 'checked-icon-class',
  defaultValue: 'fa-check'
})
export class Checkbox {

  @bindable ontoggle;

  constructor() {
    this.checked = false;
    this.enabled = true;
  }

  checkboxSelected() {
    if (!this.enabled)
      return;

    this.checked = !this.checked;
    if (this.ontoggle) {
      this.ontoggle({checked: this.checked});
    }
  }

}