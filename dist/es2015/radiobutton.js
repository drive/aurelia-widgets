var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class;

import { customElement, bindable } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { EventAggregator } from 'aurelia-event-aggregator';
import { RadioButtonSelectedEvent } from './radiobuttonselectedevent';

export let RadioButton = (_dec = inject(EventAggregator), _dec2 = customElement('radio-button'), _dec3 = bindable('label'), _dec4 = bindable('selected'), _dec5 = bindable('disabled'), _dec6 = bindable('onselecting'), _dec7 = bindable({
  attribute: 'group-name',
  name: 'groupName'
}), _dec8 = bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
}), _dec9 = bindable({
  name: 'iconFamilyClass',
  attribute: 'icon-family-class',
  defaultValue: 'fa'
}), _dec10 = bindable({
  name: 'selectedIconClass',
  attribute: 'selected-icon-class',
  defaultValue: 'fa-circle'
}), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = _dec10(_class = class RadioButton {

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
      this.selected = this.label === event.buttonLabel;
    }
  }
}) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);