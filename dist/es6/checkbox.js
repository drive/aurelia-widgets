import {bindable} from 'aurelia-framework';

@bindable()
export class Checkbox {

  checkboxSelected() {
    this.selected = !this.selected;
  }

}