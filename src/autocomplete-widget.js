import {inject, bindable, customAttribute, bindingMode, computedFrom} from 'aurelia-framework';
import $ from 'jquery';
import autocomplete from 'devbridge/jQuery-Autocomplete';

@inject(Element)
@customAttribute('autocomplete-widget')
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
export class AutoCompleteWidget {
  constructor(element) {
    this.element = element;
  }

  bind() {
    this.apply();
  }

  apply() {
    $(this.element).autocomplete({
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
  }
}
