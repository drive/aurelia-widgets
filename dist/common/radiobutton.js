'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var _aureliaEventAggregator = require('aurelia-event-aggregator');

var _radiobuttonselectedevent = require('./radiobuttonselectedevent');

var RadioButton = (function () {
  function RadioButton(eventAggregator) {
    _classCallCheck(this, _RadioButton);

    this.eventAggregator = eventAggregator;
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
        this.selected = !this.selected;
        this.eventAggregator.publish(new _radiobuttonselectedevent.RadioButtonSelectedEvent(this.groupName, this.label));
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
  RadioButton = (0, _aureliaFramework.bindable)({
    name: 'grabFocus',
    attribute: 'grab-focus',
    defaultValue: false
  })(RadioButton) || RadioButton;
  RadioButton = (0, _aureliaFramework.bindable)({
    attribute: 'group-name',
    name: 'groupName'
  })(RadioButton) || RadioButton;
  RadioButton = (0, _aureliaFramework.bindable)('disabled')(RadioButton) || RadioButton;
  RadioButton = (0, _aureliaFramework.bindable)('selected')(RadioButton) || RadioButton;
  RadioButton = (0, _aureliaFramework.bindable)('label')(RadioButton) || RadioButton;
  RadioButton = (0, _aureliaFramework.customElement)('radio-button')(RadioButton) || RadioButton;
  RadioButton = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator)(RadioButton) || RadioButton;
  return RadioButton;
})();

exports.RadioButton = RadioButton;