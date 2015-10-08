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
@bindable({
  name:'displayedText',
  attribute:'displayed-text',
  defaultBindingMode: bindingMode.twoWay
})
@bindable({
  name: 'placeholder',
  attribute: 'placeholder',
  defaultValue: ''
})
@bindable('title')
@bindable('onEnterPressed')
export class AutoCompleteWidget {
  constructor(element) {
    this.element = element;
    this._keyUpListener = ((event) => {
      if (this.input.value.trim() === '') {
        this._setSelectedItem(null, '');
      }
      else if (event.which === 13 && !this.showingSuggestions) {
        if (this.onEnterPressed) {
          this.onEnterPressed();
        }
      }
    }).bind(this);

    this.showingSuggestions = false;
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
      onSelect: this.onSelect.bind(this),
      beforeRender: this.suggestionsShown.bind(this),
      onHide: this.suggestionsHidden.bind(this)
    });
    this.input.addEventListener('keyup', this._keyUpListener);
  }

  suggestionsShown(container) {
    this.showingSuggestions = true;
  }

  suggestionsHidden(container) {
    this.showingSuggestions = false;
  }

  lookup(query, done) {
    this.controller.search(query).then((results) => {
      done(results);
    });
  }

  onSelect(suggestion) {
    //Needs to be set here too, as changing via jQuery is apparently not enough to trigger the change.
    this._setSelectedItem(suggestion.data, suggestion.value);
  }

  _setSelectedItem(data, value) {
    if (this.selectedItem && typeof this.selectedItem === 'object') {
      this.selectedItem.id = data;
      this.selectedItem.description = value;
    }
    else {
      this.selectedItem = data;
      this.displayedText = value;
    }
  }

  @computedFrom('selectedItem.description', 'displayedText')
  get bindableText() {
    if (this.selectedItem && typeof this.selectedItem === 'object') {
      return this.selectedItem.description;
    }
    return this.displayedText;
  }
}
