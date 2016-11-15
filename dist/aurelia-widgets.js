import $ from 'jquery';
import 'devbridge-autocomplete';
import numeral from 'numeral';
import 'bootstrap';
import 'bootstrap-toggle';
import {customElement,bindable,customAttribute} from 'aurelia-templating';
import {bindingMode,computedFrom} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';
import {EventAggregator} from 'aurelia-event-aggregator';
import {VelocityAnimator} from 'aurelia-animator-velocity';
import {inject,customAttribute} from 'aurelia-framework';

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
  name: 'autoSelectFirstResult',
  attribute: 'auto-select-first',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: true
})
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
      beforeRender: this.suggestionsShown.bind(this),
      onHide: this.suggestionsHidden.bind(this),
      deferRequestBy: 200,
      autoSelectFirst: this.autoSelectFirstResult,
      formatResult:this.formatResult.bind(this)
    });
    $(this.input).data('autocomplete').selection = this.selectedItem;
  }

  selectedItemChanged(newValue) {
    let currentControlSelection = $(this.input).data('autocomplete').selection;
    // onInvalidateSelection causes this function to be called async by aurelia binding engine, at this point
    // the text of the input control may have already been changed by the user so setting this.input.value can blow
    // away text the user has entered. If the control selection is already the same as the newValue, we should be
    // able to ignore this callback.
    if((currentControlSelection == null && newValue == null) ||
       (currentControlSelection != null && currentControlSelection.hasOwnProperty('data') && currentControlSelection.data === newValue)) {
      return;
    }

    if(newValue == null) {
      this.input.value = '';
      $(this.input).data('autocomplete').selection = null;
    } else {
      $(this.input).data('autocomplete').suggestions = [ this.controller.createSuggestion(newValue) ];
      $(this.input).data('autocomplete').onSelect(0);
    }
  }

  lookup(query, done) {
    // if the query string is the formatted value of the selected item, just return the selected item
    if(query == this._formatSelectionValue(this.selectedItem)) {
      done({
        suggestions: [ this.controller.createSuggestion(this.selectedItem) ]
      });
    } else {
      this.controller.search(query).then((results) => {
        done(results);
      });  
    }
  }

  onSelect(suggestion) {
    this._setSelectedItem(suggestion.data);
  }

  formatResult(suggestion, currentValue) {
    if(this.controller.formatResult)
        return this.controller.formatResult(suggestion.data);
    else
      return this.controller.formatItem(suggestion.data);
  }

  onInvalidateSelection(param) {
    this._setSelectedItem(null);
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

  blurListener() {
    if (this.selectedItem == null) {
      this.input.value = '';
    }
  }

  _formatSelectionValue(selection) {
    let selectionValue = '';
    if (selection) {
      selectionValue = this.controller.formatItem(selection);
    }
    return selectionValue;
  }

  _setSelectedItem(data) {
      if(this.selectedItem === data) { return; }

      this.selectedItem = data;
      if (this.onchange) {
        this.onchange({ selected: this.selectedItem });
      }
  }
}
@bindable({
  name: 'labelText',
  attribute: 'label-text',
  defaultBindingMode: bindingMode.oneTime
})
@bindable({
  name: 'enabled',
  attribute: 'enabled',
  defaultBindingMode: bindingMode.oneWay
})
@bindable({
  name: 'checked',
  attribute: 'checked',
  defaultBindingMode: bindingMode.twoWay
})
@bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
})
@bindable({
  name: 'iconFamilyClass',
  attribute: 'icon-family-class',
  defaultValue: 'fa'
})
@bindable({
  name: 'checkedIconClass',
  attribute: 'checked-icon-class',
  defaultValue: 'fa-check'
})
export class Checkbox {

  @bindable ontoggle;

  constructor() {
    this.checked = false;
    this.enabled = true;
  }

  checkboxSelected() {
    if (!this.enabled)
      return;

    this.checked = !this.checked;
    if (this.ontoggle) {
      this.ontoggle({checked: this.checked});
    }
  }

}
import {inject} from 'aurelia-dependency-injection'

@customElement('combo')
@bindable({
  name: 'size',
  attribute: 'size',
  defaultValue: 'medium',
  defaultBindingMode: bindingMode.oneTime
})
@bindable({
  name:'title',
  attribute:'title',
  defaultBindingMode: bindingMode.oneTime
})
@bindable({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
})
@bindable({
  name:'options',
  attribute:'options',
  defaultBindingMode: bindingMode.oneTime
})
@bindable({
  name:'selected',
  attribute:'selected',
  defaultBindingMode: bindingMode.twoWay,
  changeHandler: '_handleSelectedChanged'
})
@bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
})
@inject(Element)
export class Combo {

  @bindable onchange;

  constructor(element) {
    this.element = element;
    this._boundChange = this._change.bind(this);
  }

  attached() {
    this.combo = this.element.querySelector('select');
    //Sometimes we already have a bounded property and it's already changed before the attached callback is invoked
    //so this ensures that the loaded/changed value will always be set on the select when attached to the DOM
    if (this.selected || this.selected === 0)
      this._setComboValue(this.selected);

    this.combo.addEventListener('change', this._boundChange);
  }

  detached() {
    this.combo.removeEventListener('change', this._boundChange);
  }

  getSelectedId(item) {
    if (item && typeof item === 'object')
      return item.id;

    return item;
  }

  _change(change) {
    this._setSelected(change.target);

    if (this.onchange) {
      this.onchange({selected: this.selected});
    }
  }

  _handleSelectedChanged(newValue) {
    if (this.combo)
      this._setComboValue(newValue);
  }

  _setComboValue(newValue) {
    if (newValue && typeof newValue === 'object')
      this.combo.value = newValue.id;
    else
      this.combo.value = newValue;
  }

  _setSelected(item) {
    if (typeof this.selected === 'object') {
      this.selected = this.options.find(x => x.id == item.value);
    }
    else {
      this.selected = item.value;
    }
  }
}
import {inject} from 'aurelia-dependency-injection'
const KEY_A = 65;
const KEY_Z = 90;

@customElement('currency-input')
@bindable({
  name:'value',
  attribute:'value',
  defaultBindingMode: bindingMode.twoWay,
  changeHandler: 'valueChanged'
})
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
  name: 'setNullToDefaultValue',
  attribute: 'set-null-to-default-value',
  defaultValue: '',
  defaultBindingMode: bindingMode.oneWay
})
@bindable({
  name: 'onlyAllowPositiveNumbers',
  attribute: 'only-allow-positive-numbers',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
})
@bindable({
  name: 'extendedView',
  attribute: 'extended-view',
  defaultValue: true,
  defaultBindingMode: bindingMode.oneWay
})
@bindable({
  name: 'customCSS',
  attribute: 'custom-css',
  defaultValue: '',
  defaultBindingMode: bindingMode.oneWay
})
@bindable({
  name: 'placeholder',
  defaultValue: '0.00',
  defaultBindingMode: bindingMode.oneTime
})
@bindable('label')
@bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
})
@inject(Element)
export class CurrencyInput {

  constructor(element) {
    this.element = element;
    this.displayValue = '';

    this._boundOnBlur = this.onBlur.bind(this);
  }

  attached() {
    this.input = this.element.querySelector('input');    
    this.input.addEventListener('blur', this._boundOnBlur, true);
  }

  detached() {  
    this.input.removeEventListener('blur', this._boundOnBlur, true);
  }

  valueChanged(newValue, oldValue) {
    this._updateDisplay(newValue ? newValue.toString() : '', oldValue ? oldValue.toString() : '');
  }

  onBlur() {
    this._updateDisplay(this.displayValue, this.value);
  }

  _updateDisplay(update, oldValue) {
    this.displayValue = update.trim();   
    if (this.displayValue) {
      this.value = this._castValueToFloat(this.displayValue.replace(/,|$/g, ""));
      if (isNaN(this.value)) {
        this._clearValue(oldValue);
      } else {
        this._setDisplayValue(this.value, oldValue);
      }
    } else {
      if (this.setNullToDefaultValue !== '') {
        let newValue = this._castValueToFloat(this.setNullToDefaultValue);
        this.value = newValue;
        this.displayValue = numeral(newValue).format('0,0.00');
      } else {
        this.value = null;
      }
    }
  }

  _castValueToFloat(value) {
    return Number(parseFloat(value).toFixed(2));
  }

  _setDisplayValue(newValue, oldValue) {
    if (this.onlyAllowPositiveNumbers && newValue < 0) {
      this._clearValue(oldValue);
    } else {
      this.displayValue = numeral(newValue).format('0,0.00');
    }
  }

  _clearValue(oldValue) {
    this.displayValue = oldValue;
    this.value = oldValue;
  }
}
@inject(EventAggregator)
@customElement('radio-button')
@bindable('label')
@bindable('selected')
@bindable('disabled')
@bindable('onselecting')
@bindable({
  attribute: 'group-name',
  name: 'groupName'
})
@bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
})
@bindable({
  name: 'iconFamilyClass',
  attribute: 'icon-family-class',
  defaultValue: 'fa'
})
@bindable({
  name: 'selectedIconClass',
  attribute: 'selected-icon-class',
  defaultValue: 'fa-circle'
})
export class RadioButton {

  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
    this.onselecting = () => true;
  }

  bind() {
    this.selectedEventSubscription = this.eventAggregator.subscribe(RadioButtonSelectedEvent, this._handleButtonSelected.bind(this));
  }

  unbind() {
    this.selectedEventSubscription.dispose();
  }

  clicked() {
    if (this.disabled !== true) {
      if (this.onselecting()) {
        this.selected = !this.selected;
        this.eventAggregator.publish(new RadioButtonSelectedEvent(this.groupName, this.label));
      }
    }
  }

  _handleButtonSelected(event) {
    if (event.groupName === this.groupName) {
      this.selected = (this.label === event.buttonLabel);
    }
  }
}
export class RadioButtonSelectedEvent {

  constructor(groupName, buttonLabel) {
    this.groupName = groupName;
    this.buttonLabel = buttonLabel;
  }
}
@customAttribute('selectonfocus')
@inject(Element)
export class SelectOnFocus {
  constructor(element) {
    this.element = element;
    this.blockMouseUp = false;

    this._boundOnFocus = this.onFocus.bind(this);
    this._boundOnMouseDown = this.onMouseDown.bind(this);
    this._boundOnMouseUp = this.onMouseUp.bind(this);
  }

  attached() {
    this.element.addEventListener('focus', this._boundOnFocus);
    this.element.addEventListener('mousedown', this._boundOnMouseDown);
    this.element.addEventListener('mouseup', this._boundOnMouseUp);

  }

  detached() {
    this.element.removeEventListener('focus', this._boundOnFocus);
    this.element.removeEventListener('mousedown', this._boundOnMouseDown);
    this.element.removeEventListener('mouseup', this._boundOnMouseUp);
  }

  onFocus() {
    this.element.select();
  }

  onMouseDown() {
    this.blockMouseUp = this.element !== document.activeElement;
  }

  onMouseUp(event) {
    if (this.blockMouseUp) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
@customElement('text-display-widget')
@bindable('text')
@bindable({
  name: 'placeholder',
  defaultValue: '',
  defaultBindingMode: bindingMode.oneTime
})
@bindable('toolTipText')
@bindable({
  name: 'placement',
  defaultValue: 'auto top',
  defaultBindingMode: bindingMode.oneTime
})
@inject(Element)
export class TextDisplayWidget {

  constructor(element) {
    this.element = element;
  }

  bind() {
    this.toolTipElement = $(this.element.querySelector('.text-display-widget-label'));
    this.toolTipElement.attr('title', '');
    this.toolTipElement.tooltip({
      container: 'body',
      placement: this.placement,
      html: true,
      title: this.toolTipText || this.text
    });
  }

  unbind() {
    this.toolTipElement.tooltip('destroy');
  }
    
  textChanged(newValue) {
    if (!this.toolTipText) {
      this._updateToolTip(newValue); 
    }
  }

  toolTipTextChanged(newValue) {
    this._updateToolTip(newValue);
  }

  _updateToolTip(newValue) {
    this.toolTipElement.attr('data-original-title', newValue);
  }

}
const ANIMATION_LENGTH = 200; //ms

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
@bindable({
  name: 'readonly',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
})
@bindable({
  name: 'maxLength',
  attribute: 'max-length',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: null
})
@inject(Element, VelocityAnimator)
export class TextWidget {

  constructor(element, animator) {
    this.element = element;
    this.animator = animator;
    this.boundExpand = this._expand.bind(this);
    this.boundShrink = this._shrink.bind(this);
    this.boundResize = this._resize.bind(this);

    this.maxHeight = window.innerHeight - 200;
  }

  attached() {
    if (this.multiline) {
      this.input = this.element.querySelector('textarea');

      this.minSize = Math.max(this._calcCurrentHeight(), 52);

      this.input.addEventListener('input', this.boundResize);
      this.input.addEventListener('focus', this.boundExpand);
      this.input.addEventListener('blur', this.boundShrink);
      document.addEventListener('resize', this.boundResize);

      this.optimalHeight = this._calcOptimalHeight();
      if (this.optimalHeight > this.minSize && this.textValue) {
        this.input.style.overflowY = 'scroll';
      }
    }
    else {
      this.input = this.element.querySelector('input');
    }

    if (this.maxLength) {
      this.input.setAttribute('maxlength', this.maxLength);
    }
  }

  detached() {
    if (this.multiline) {
      this.input.removeEventListener('input', this.boundResize);
      this.input.removeEventListener('focus', this.boundExpand);
      this.input.removeEventListener('blur', this.boundShrink);
      document.removeEventListener('resize', this.boundResize);
    }
  }

  _calcCurrentHeight() {
    let rect = this.input.getBoundingClientRect();
    return rect.bottom - rect.top;
  }

  _calcOptimalHeight() {
    this.input.style.height = 'auto';
    let scrollHeight = this.input.scrollHeight;
    if (scrollHeight > this.maxHeight) {
      this.input.style.overflowY = 'scroll';
      return this.maxHeight;
    }

    this.input.style.overflowY = 'hidden';
    return scrollHeight;
  }

  _resize() {
    let originalX = window.pageXOffset;
    let originalY = window.pageYOffset;
    this.optimalHeight = this._calcOptimalHeight();
    this.input.style.height = `${this.optimalHeight}px`;
    window.scrollTo(originalX, originalY);
  }

  _expand(e) {
    if (this.optimalHeight > this.minSize) {
      this.animator.animate(this.input, { height: `${this.optimalHeight}px` }, { duration: ANIMATION_LENGTH });
    }
  }

  _shrink(e) {
    if (this.optimalHeight > this.minSize) {
      this.animator.animate(this.input, { height: `${this.minSize}px`}, { duration: ANIMATION_LENGTH });
      if (this.textValue) {
        this.input.style.overflowY = 'scroll';
      }
    }
  }
}
import 'bootstrap-toggle/css/bootstrap-toggle.css!';

@bindable({
  name: 'onText',
  attribute:'on-text',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: 'On'
})
@bindable({
  name: 'offText',
  attribute:'off-text',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: 'Off'
})
@bindable({
  name: 'width',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: null
})
@bindable({
  name: 'label',
  attribute: 'label',
  defaultBindingMode: bindingMode.oneTime,
  defaultValue: ''
})
@bindable({
  name: 'checked',
  defaultBindingMode: bindingMode.twoWay
})
@bindable({
  name: 'disabled',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
})
@inject(Element)
@customElement('toggle-button')
export class ToggleButton {

  constructor(element) {
    this.element = element;
  }

  bind() {
    this.toggleElement = $(this.element.querySelector('[data-toggle="toggle"]'));
    this.toggleElement.bootstrapToggle({
      on: this.onText,
      off: this.offText,
      width: this.width
    });
    this.toggleElement.change(() => {
      this.checked = this.toggleElement.prop('checked');
    })
    this.checkedChanged(this.checked);
    this.disabledChanged(this.disabled);
  }

  unbind() {
    this.toggleElement.bootstrapToggle('destroy');
  }

  checkedChanged(newValue) {
    if (newValue) {
      this.toggleElement.bootstrapToggle('on');
    } else {
      this.toggleElement.bootstrapToggle('off');
    }
  }

  disabledChanged(newValue) {
    if (newValue) {
      this.toggleElement.bootstrapToggle('disable');
    } else {
      this.toggleElement.bootstrapToggle('enable');
    }
  }
}
// todo: change this to a bindable property
const TOOLTIP_PLACEMENT = 'auto top';

@customAttribute('tooltip')
@inject(Element)
export class Tooltip {
  constructor(element) {
    this.element = element;
  }

  bind() {
    if(this.value)
      this._createTooltip(this.value);      
  }

  unbind() {
    this._destroyToolTip(); 
  }
    
  valueChanged(newValue, oldValue) {
    if (newValue) {
      this._updateToolTip(newValue); 
    } else
      this._destroyToolTip();
  }

  _updateToolTip(newValue) {
    if(!this.toolTipElement)
      this._createTooltip(newValue);
    else
      this.toolTipElement.attr('data-original-title', newValue);
  }

  _createTooltip(value) {
    this.toolTipElement = $(this.element);
    this.toolTipElement.attr('title', '');
    this.toolTipElement.tooltip({
      container: 'body',
      placement: TOOLTIP_PLACEMENT,
      html: true,
      title: this.value
    });
  }

  _destroyToolTip() {
    this.toolTipElement.tooltip('destroy');
    this.toolTipElement = null;
  }
}