import {bindable, bindingMode} from 'aurelia-framework';

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
      this.ontoggle();
    }
  }

}