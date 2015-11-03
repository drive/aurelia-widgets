import {customElement, bindable, inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {RadioButtonSelectedEvent} from './radiobuttonselectedevent';

@inject(EventAggregator)
@customElement('radio-button')
@bindable('label')
@bindable('selected')
@bindable('disabled')
@bindable({
  attribute: 'group-name',
  name: 'groupName'
})
@bindable({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
})
export class RadioButton {

  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
  }

  bind() {
    this.selectedEventSubscription = this.eventAggregator.subscribe(RadioButtonSelectedEvent, this._handleButtonSelected.bind(this));
  }

  unbind() {
    this.selectedEventSubscription.dispose();
  }

  clicked() {
    if (this.disabled !== true) {
      this.selected = !this.selected;
      this.eventAggregator.publish(new RadioButtonSelectedEvent(this.groupName, this.label));
    }
  }

  _handleButtonSelected(event) {
    if (event.groupName === this.groupName) {
      this.selected = (this.label === event.buttonLabel);
    }
  }
}