import {inject, bindable, customElement, bindingMode} from 'aurelia-framework';
import $ from 'jquery';
import autocomplete from 'devbridge/jQuery-Autocomplete';

@inject(Element)
@customElement('autocomplete-widget')
@bindable({
  name:'controller',
  attribute:'controller',
  defaultBindingMode: bindingMode.twoWay
})
@bindable({
  name:'selectedItem',
  attribute:'selected-item',
  defaultBindingMode: bindingMode.twoWay
})
@bindable({
  name:'displayedText',
  attribute:'displayed-text',
  defaultBindingMode: bindingMode.twoWay
})
@bindable('title')
@bindable('placeholder')
export class AutoCompleteWidget {
  constructor(element) {
    this.element = element;
    this._keyUpListener = ((event) => {
      if (this.input.value.trim() === '') {
        this.selectedItem = null;
        this.displayedText = '';
      }
    }).bind(this);
  }

  bind() {
    this.input = this.element.querySelector('input');
    this.apply();
  }

  unbind() {
    $(this.input).autocomplete('dispose');
    this.input.removeEventListener('keyup', this._keyUpListener);
  }

  apply() {
    $(this.input).autocomplete({
      lookup: this.lookup.bind(this),
      onSelect: this.onSelect.bind(this)
    });
    this.input.addEventListener('keyup', this._keyUpListener);
  }

  lookup(query,done) {
    this.controller.search(query).then((results) => {
      done(results);
    });
  }

  onSelect(suggestion) {
    this.selectedItem = suggestion.data;
    //Needs to be set here too, as changing via jQuery is apparently not enough to trigger the change.
    this.displayedText = suggestion.value;
  }
}
