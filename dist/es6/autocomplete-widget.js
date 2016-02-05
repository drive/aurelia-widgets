import {customElement, bindable} from 'aurelia-templating';
import {bindingMode, computedFrom} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection'
import $ from 'jquery';
import 'devbridge-autocomplete';

@inject(Element)
@customElement('autocomplete-widget')
@bindable({
  name: 'size',
  attribute: 'size',
  defaultValue: 'medium',
  defaultBindingMode: bindingMode.oneTime
})
@bindable({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
})
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
@bindable({
  name: 'customCSS',
  attribute: 'custom-css',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: ''
})
@bindable('title')
@bindable('onenterpressed')
@bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
})
export class AutoCompleteWidget {

  @bindable onchange;
  
  constructor(element) {
    this.element = element;
    this.showingSuggestions = false;
  }

  bind() {
    this.input = this.element.querySelector('input');
    this.apply();
  }

  unbind() {
    $(this.input).autocomplete('dispose');
  }

  apply() {

    // must set the value first for initial selection to be respected
    this.input.value = this._formatSelectionValue(this.selectedItem);

    $(this.input).autocomplete({
      lookup: this.lookup.bind(this),
      onSelect: this.onSelect.bind(this),
      onInvalidateSelection: this.onInvalidateSelection.bind(this),
      transformResult: this.transformResult.bind(this),
      beforeRender: this.suggestionsShown.bind(this),
      onHide: this.suggestionsHidden.bind(this),
      deferRequestBy: 200
    });
    $(this.input).data('autocomplete').selection = this.selectedItem;    
  }  

  lookup(query, done) {
    this.controller.search(query).then((results) => {
      done(results);
    });
  }

  onSelect(suggestion) {
    this._setSelectedItem(suggestion.data);
  }

  onInvalidateSelection(param) {
    this._setSelectedItem(null);
  }

  transformResult(response) {
    return {
      suggestions: $.map(response, function(dataItem) {
        return { value: this._formatSelectionValue(dataItem), data: dataItem };
      })
    };
  }

  suggestionsShown(container) {
    this.showingSuggestions = true;

    if (this.customCSS !== '')
      $(container)[0].classList.add(...this.customCSS.split(','));
  }

  suggestionsHidden(container) {
    //Slight kludge as the events don't fire in the order I want.
    setTimeout(() => {
      this.showingSuggestions = false;
    }, 250);
  }

  keyUpListener(event) {
    if (event.which === 13 && !this.showingSuggestions) {
      if (this.onenterpressed) {
        this.onenterpressed();
        event.preventDefault();
      }
    }
  }

  selectAll() {
    this.input.select();
  }

  _formatSelectionValue(selection) {
    let selectionValue = '';
    if(selection) {
      selectionValue = `${selection.code} ${selection.description}`;
    }
    return selectionValue;
  }

  _setSelectedItem(data) {
      this.selectedItem = data;

      if (this.onchange) {
        this.onchange({ selected: this.selectedItem });
      }
  }
}