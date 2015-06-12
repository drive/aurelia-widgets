import {inject, bindable, customElement, bindingMode, computedFrom} from 'aurelia-framework';
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
@bindable('title')
export class AutoCompleteWidget {
  constructor(element) {
    this.element = element;
  }

  bind() {
    this.apply();
  }

  @computedFrom('title')
  get isShowing() {
    return this.title != undefined && this.title.length > 0;
  }

  apply() {
    //normally we dont need to do this but the query function on the select2, this becomes the jquery object on the callback
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
  }
}
