import {customElement, bindable} from 'aurelia-templating';
import {bindingMode, computedFrom} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection'
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
  name: 'placeholder',
  attribute: 'placeholder',
  defaultValue: '',
  defaultBindingMode: bindingMode.oneTime
})
@bindable('title')
@bindable('onenterpressed')
@bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
})
export class AutoCompleteWidget {
  constructor(element) {
    this.element = element;
    this._keyUpListener = ((event) => {
      if (this.input.value.trim() === '') {
        this._setSelectedItem(null, '');
      }
      else if (event.which === 13 && !this.showingSuggestions) {
        if (this.onenterpressed) {
          this.onenterpressed();
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

  attached() {
    if (this.grabFocus) {
      this.input.focus();
    }
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
    this._setSelectedItem(suggestion.data);
  }

  _setSelectedItem(data) {
    this.selectedItem = data;
  }

  @computedFrom('selectedItem')
  get bindableText() {
    if (this.selectedItem) {
      return `${this.selectedItem.code} ${this.selectedItem.description}`;
    }
  }

  selectAll() {
    this.input.select();
  }
}
