System.register(['babel-runtime/helpers/create-class', 'babel-runtime/helpers/class-call-check', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-event-aggregator', './radiobuttonselectedevent'], function (_export) {
  var _createClass, _classCallCheck, customElement, bindable, inject, EventAggregator, RadioButtonSelectedEvent, RadioButton;

  return {
    setters: [function (_babelRuntimeHelpersCreateClass) {
      _createClass = _babelRuntimeHelpersCreateClass['default'];
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck['default'];
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_radiobuttonselectedevent) {
      RadioButtonSelectedEvent = _radiobuttonselectedevent.RadioButtonSelectedEvent;
    }],
    execute: function () {
      'use strict';

      RadioButton = (function () {
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
            this.selectedEventSubscription = this.eventAggregator.subscribe(RadioButtonSelectedEvent, this._handleButtonSelected.bind(this));
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
                this.eventAggregator.publish(new RadioButtonSelectedEvent(this.groupName, this.label));
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
        RadioButton = bindable({
          name: 'grabFocus',
          attribute: 'grab-focus',
          defaultValue: false
        })(RadioButton) || RadioButton;
        RadioButton = bindable({
          attribute: 'group-name',
          name: 'groupName'
        })(RadioButton) || RadioButton;
        RadioButton = bindable('onselecting')(RadioButton) || RadioButton;
        RadioButton = bindable('disabled')(RadioButton) || RadioButton;
        RadioButton = bindable('selected')(RadioButton) || RadioButton;
        RadioButton = bindable('label')(RadioButton) || RadioButton;
        RadioButton = customElement('radio-button')(RadioButton) || RadioButton;
        RadioButton = inject(EventAggregator)(RadioButton) || RadioButton;
        return RadioButton;
      })();

      _export('RadioButton', RadioButton);
    }
  };
});