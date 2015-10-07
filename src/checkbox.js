import {bindable} from 'aurelia-framework';

export class Checkbox {

	@bindable toggle;

  checkboxSelected() {
    this.selected = !this.selected;
    if (this.toggle) {
    	this.toggle(this.selected);
    }
  }

}