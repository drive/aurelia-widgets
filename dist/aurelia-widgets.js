import numeral from 'numeral';
import $ from 'jquery';
import {bindable,customElement,customAttribute} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {customElement,bindable,bindingMode,computedFrom,TaskQueue,inject,customAttribute} from 'aurelia-framework';
import {DOM} from 'aurelia-pal';
import {inject} from 'aurelia-dependency-injection';
import {EventAggregator} from 'aurelia-event-aggregator';
import {VelocityAnimator} from 'aurelia-animator-velocity';

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
  @bindable small = false;
  @bindable label = '';

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
import { inject } from 'aurelia-dependency-injection'

@customElement('combo')
@bindable({
  name: 'selected',
  attribute: 'selected',
  defaultBindingMode: bindingMode.twoWay,
  changeHandler: '_handleSelectedChanged'
})
@bindable({
  name: 'options',
  attribute: 'options',
  defaultBindingMode: bindingMode.oneWay,
  changeHandler: '_handleOptionsChanged'
})
@bindable({
  name: 'size',
  attribute: 'size',
  defaultValue: 'medium',
  defaultBindingMode: bindingMode.oneTime
})
@bindable({
  name: 'title',
  attribute: 'title',
  defaultBindingMode: bindingMode.oneTime
})
@bindable({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
})
@bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
})
@bindable({
  name: 'noSelectionOption',
  attribute: 'no-selection-option',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneTime
})
@bindable({
  name: 'noSelectionText',
  attribute: 'no-selection-text',
  defaultValue: 'Choose...',
  defaultBindingMode: bindingMode.oneTime
})
@inject(Element)
export class Combo {

  @bindable horizontal = false;

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.combo = this.element.querySelector('select');
  }

  detached() {
    this.combo = null;
  }

  _handleSelectedChanged(newValue) {
    // if (this.onchange) {
    //   this.onchange({selected: this.selected});
    // }
  }

  _handleOptionsChanged(newValue) {
    if (this.selected) {
      if (typeof this.selected === 'object') {
        if (!this.options.some(x => x.id == this.selected.id)) {
          this.combo.value = this.selected = null;
        }
      } else {
        if (!this.options.some(x => x == this.selected)) {
          this.combo.value = this.selected = null;
        }
      }
    }
  }
}
import { inject } from 'aurelia-dependency-injection'
const KEY_A = 65;
const KEY_Z = 90;

let nextID = 0;

@customElement('currency-input')
@bindable({
  name: 'value',
  attribute: 'value',
  defaultBindingMode: bindingMode.twoWay,
  changeHandler: 'valueChanged'
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
  name: 'cssClasses',
  attribute: 'css-classes',
  defaultValue: '',
  defaultBindingMode: bindingMode.oneWay
})
@bindable({
  name: 'placeholder',
  defaultValue: '0.00',
  defaultBindingMode: bindingMode.oneTime
})
@bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
})
@inject(Element, TaskQueue)
export class CurrencyInput {

  @bindable label = '';
  @bindable small = false;

  id = nextID++;

  constructor(element, taskQueue) {
    this.element = element;
    this.taskQueue = taskQueue;

    this.displayValue = '';
  }

  attached() {
    this.input = this.element.querySelector('input');
  }

  valueChanged(newValue, oldValue) {
    this._updateDisplay(!Number.isNaN(Number.parseFloat(newValue)) ? newValue.toString() : '', !Number.isNaN(Number.parseFloat(oldValue)) ? oldValue.toString() : '');
  }

  blur() {
    this._updateDisplay(this.displayValue, this.value);

    this.taskQueue.queueMicroTask(() => this.element.dispatchEvent(DOM.createCustomEvent('blur')));
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
  defaultValue: 'top',
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
    const options = {
      container: 'body',
      placement: this.placement,
      html: true,
      title: this.toolTipText || this.text || ''
    }
    this.toolTipElement.tooltip(options);
  }

  unbind() {
    this.toolTipElement.tooltip('dispose');
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
  name: 'textValue',
  attribute: 'text-value',
  defaultBindingMode: bindingMode.twoWay,
  defaultValue: null,
  changeHandler: '_textValueChanged'
})
@bindable({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: bindingMode.oneWay
})
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
@inject(Element, VelocityAnimator, TaskQueue)
export class TextWidget {

  @bindable small = false;
  @bindable placeholder = '';
  @bindable label = '';
  @bindable small = false;
  @bindable horizontal = false;

  constructor(element, animator, taskQueue) {
    this.element = element;
    this.animator = animator;
    this.taskQueue = taskQueue;

    this.boundExpand = this._expand.bind(this);
    this.boundResize = this._resize.bind(this);

    this.maxHeight = window.innerHeight - 200;
  }

  attached() {
    if (this.multiline) {
      this.input = this.element.querySelector('textarea');

      this.minSize = Math.max(this._calcCurrentHeight(), 52);

      this.input.addEventListener('input', this.boundResize);
      this.input.addEventListener('focus', this.boundExpand);
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

  blur(e) {
    if (this.optimalHeight > this.minSize) {
      this.animator.animate(this.input, { height: `${this.minSize}px` }, { duration: ANIMATION_LENGTH });
      if (this.textValue) {
        this.input.style.overflowY = 'scroll';
      }
    }

    this.taskQueue.queueMicroTask(() => this.element.dispatchEvent(DOM.createCustomEvent('blur')));
  }

  _textValueChanged() {
    if (this.multiline && this.input)
      this._resize();
  }
}
// todo: change this to a bindable property
const TOOLTIP_PLACEMENT = 'top';

@customAttribute('tooltip')
@inject(Element)
export class Tooltip {
  constructor(element) {
    this.element = element;
  }

  bind() {
    if (this.value) {
      this._createTooltip(this.value);
    }
  }

  unbind() {
    this._destroyToolTip();
  }

  valueChanged(newValue, oldValue) {
    if (newValue) {
      this._updateToolTip(newValue);
    } else {
      this._destroyToolTip();
    }
  }

  _updateToolTip(newValue) {
    if (!this.toolTipElement)
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
      title: this.value || ''
    });
  }

  _destroyToolTip() {
    if (this.toolTipElement) {
      this.toolTipElement.tooltip('dispose');
      this.toolTipElement = null;
    }
  }
}