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
  }

  bind() {
    this.apply();
  }

  unbind() {
    $(this.element).find('input').autocomplete('dispose');
  }

  apply() {
    $(this.element).find('input').autocomplete({
      lookup: this.lookup.bind(this),
      onSelect: this.onSelect.bind(this)
    });
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
