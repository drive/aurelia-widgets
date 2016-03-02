define(['exports', 'babel-runtime/helpers/create-class', 'babel-runtime/helpers/class-call-check', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-event-aggregator', './radiobuttonselectedevent'], function (exports, _babelRuntimeHelpersCreateClass, _babelRuntimeHelpersClassCallCheck, _aureliaTemplating, _aureliaDependencyInjection, _aureliaEventAggregator, _radiobuttonselectedevent) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var RadioButton = (function () {
    function RadioButton(eventAggregator) {
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, _RadioButton);

      this.eventAggregator = eventAggregator;
      this.onselecting = function () {
        return true;
      };
    }

    (0, _babelRuntimeHelpersCreateClass['default'])(RadioButton, [{
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
});