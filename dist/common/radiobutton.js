'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaEventAggregator = require('aurelia-event-aggregator');

var _radiobuttonselectedevent = require('./radiobuttonselectedevent');

var RadioButton = (function () {
  function RadioButton(eventAggregator) {
    _classCallCheck(this, _RadioButton);

    this.eventAggregator = eventAggregator;
    this.onselecting = function () {
      return true;
    };
  }

  _createClass(RadioButton, [{
    key: 'bind',
    value: function bind() {
      this.selectedEventSubscription = this.eventAggregator.subscribe(_radiobuttonselectedevent.RadioButtonSelectedEvent, this._handleButtonSelected.bind(this));
    }
  }, {
    key: 'unbind',
    value: function unbind() {
      this.selectedEventSubscription.dispose();
    }
  }, {
    key: 'clicked',
    value: function clicked() {
      if (this.disabled !== true) {
        if (this.onselecting()) {
          this.selected = !this.selected;
          this.eventAggregator.publish(new _radiobuttonselectedevent.RadioButtonSelectedEvent(this.groupName, this.label));
        }
      }
    }
  }, {
    key: '_handleButtonSelected',
    value: function _handleButtonSelected(event) {
      if (event.groupName === this.groupName) {
        this.selected = this.label === event.buttonLabel;
      }
    }
  }]);

  var _RadioButton = RadioButton;
  RadioButton = (0, _aureliaTemplating.bindable)({
    name: 'grabFocus',
    attribute: 'grab-focus',
    defaultValue: false
  })(RadioButton) || RadioButton;
  RadioButton = (0, _aureliaTemplating.bindable)({
    attribute: 'group-name',
    name: 'groupName'
  })(RadioButton) || RadioButton;
  RadioButton = (0, _aureliaTemplating.bindable)('onselecting')(RadioButton) || RadioButton;
  RadioButton = (0, _aureliaTemplating.bindable)('disabled')(RadioButton) || RadioButton;
  RadioButton = (0, _aureliaTemplating.bindable)('selected')(RadioButton) || RadioButton;
  RadioButton = (0, _aureliaTemplating.bindable)('label')(RadioButton) || RadioButton;
  RadioButton = (0, _aureliaTemplating.customElement)('radio-button')(RadioButton) || RadioButton;
  RadioButton = (0, _aureliaDependencyInjection.inject)(_aureliaEventAggregator.EventAggregator)(RadioButton) || RadioButton;
  return RadioButton;
})();

exports.RadioButton = RadioButton;