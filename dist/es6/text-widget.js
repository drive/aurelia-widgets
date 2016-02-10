import {customElement, bindable} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';

@customElement('text-widget')
@bindable({
  name:'textValue',
  attribute:'text-value',
  defaultBindingMode: bindingMode.twoWay
})
@bindable({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
})
@bindable('placeholder')
@bindable('label')
@bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
})
@bindable({
  name: 'multiline',
  attribute: 'multiline',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneTime
})
@inject(Element)
export class TextWidget {
  constructor(element) {
    this.element = element;
  }

  attached() {
    if (this.multiline) {
      this.input = this.element.querySelector('textarea');
    }
    else {
      this.input = this.element.querySelector('input');
    }
  }

  selectAll() {
    if (this.multiline) {
      this._moveCaretToEnd();
    }
    else {
      this.input.select();
    }
  }


  //function obviously stolen from: http://stackoverflow.com/a/4716021/5141725
  _moveCaretToEnd() {
    if (typeof this.input.selectionStart == "number") {
        this.input.selectionStart = this.input.selectionEnd = this.inpute.value.length;
    } else if (typeof this.input.createTextRange != "undefined") {
        this.input.focus();
        var range = this.input.createTextRange();
        range.collapse(false);
        range.select();
    }
  }
}