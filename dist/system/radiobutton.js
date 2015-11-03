System.register(['aurelia-framework', 'aurelia-event-aggregator', './radiobuttonselectedevent'], function (_export) {
  'use strict';

  var customElement, bindable, inject, EventAggregator, RadioButtonSelectedEvent, RadioButton;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_radiobuttonselectedevent) {
      RadioButtonSelectedEvent = _radiobuttonselectedevent.RadioButtonSelectedEvent;
    }],
    execute: function () {
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