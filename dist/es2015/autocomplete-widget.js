var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _desc, _value, _class2, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { customElement, bindable } from 'aurelia-templating';
import { bindingMode, computedFrom } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import $ from 'jquery';
import 'devbridge-autocomplete';

export let AutoCompleteWidget = (_dec = inject(Element), _dec2 = customElement('autocomplete-widget'), _dec3 = bindable({
  name: 'size',
  attribute: 'size',
  defaultValue: 'medium',
  defaultBindingMode: bindingMode.oneTime
}), _dec4 = bindable({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
}), _dec5 = bindable({
  name: 'controller',
  attribute: 'controller',
  defaultBindingMode: bindingMode.twoWay
}), _dec6 = bindable({
  name: 'selectedItem',
  attribute: 'selected-item',
  defaultBindingMode: bindingMode.twoWay
}), _dec7 = bindable({
  name: 'placeholder',
  attribute: 'placeholder',
  defaultValue: '',
  defaultBindingMode: bindingMode.oneTime
}), _dec8 = bindable({
  name: 'customCSS',
  attribute: 'custom-css',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: ''
}), _dec9 = bindable('title'), _dec10 = bindable('onenterpressed'), _dec11 = bindable({
  name: 'autoSelectFirstResult',
  attribute: 'auto-select-first',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: true
}), _dec12 = bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
}), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = _dec10(_class = _dec11(_class = _dec12(_class = (_class2 = class AutoCompleteWidget {

  constructor(element) {
    _initDefineProp(this, 'onchange', _descriptor, this);

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
    this.input.value = this._formatSelectionValue(this.selectedItem);

    $(this.input).autocomplete({
      lookup: this.lookup.bind(this),
      onSelect: this.onSelect.bind(this),
      onInvalidateSelection: this.onInvalidateSelection.bind(this),
      beforeRender: this.suggestionsShown.bind(this),
      onHide: this.suggestionsHidden.bind(this),
      deferRequestBy: 200,
      autoSelectFirst: this.autoSelectFirstResult
    });
    $(this.input).data('autocomplete').selection = this.selectedItem;
  }

  selectedItemChanged(newValue) {
    let currentControlSelection = $(this.input).data('autocomplete').selection;

    if (currentControlSelection == null && newValue == null || currentControlSelection != null && currentControlSelection.data === newValue) {
      return;
    }

    this.input.value = this._formatSelectionValue(newValue);
    $(this.input).data('autocomplete').selection = newValue;
  }

  lookup(query, done) {
    this.controller.search(query).then(results => {
      done(results);
    });
  }

  onSelect(suggestion) {
    this._setSelectedItem(suggestion.data);
  }

  onInvalidateSelection(param) {
    this._setSelectedItem(null);
  }

  suggestionsShown(container) {
    this.showingSuggestions = true;

    if (this.customCSS !== '') $(container)[0].classList.add(...this.customCSS.split(','));
  }

  suggestionsHidden(container) {
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
    if (selection) {
      selectionValue = selection.hasOwnProperty("toString") && typeof selection.toString === "function" ? selection.toString() : `${ selection.code } ${ selection.description }`;
    }
    return selectionValue;
  }

  _setSelectedItem(data) {
    this.selectedItem = data;

    if (this.onchange) {
      this.onchange({ selected: this.selectedItem });
    }
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'onchange', [bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);