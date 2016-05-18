'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-event-aggregator', './radiobuttonselectedevent'], function (_export, _context) {
  var customElement, bindable, inject, EventAggregator, RadioButtonSelectedEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, RadioButton;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaTemplating) {
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
      _export('RadioButton', RadioButton = (_dec = inject(EventAggregator), _dec2 = customElement('radio-button'), _dec3 = bindable('label'), _dec4 = bindable('selected'), _dec5 = bindable('disabled'), _dec6 = bindable('onselecting'), _dec7 = bindable({
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
      }), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = _dec10(_class = function () {
        function RadioButton(eventAggregator) {
          _classCallCheck(this, RadioButton);

          this.eventAggregator = eventAggregator;
          this.onselecting = function () {
            return true;
          };
        }

        RadioButton.prototype.bind = function bind() {
          this.selectedEventSubscription = this.eventAggregator.subscribe(RadioButtonSelectedEvent, this._handleButtonSelected.bind(this));
        };

        RadioButton.prototype.unbind = function unbind() {
          this.selectedEventSubscription.dispose();
        };

        RadioButton.prototype.clicked = function clicked() {
          if (this.disabled !== true) {
            if (this.onselecting()) {
              this.selected = !this.selected;
              this.eventAggregator.publish(new RadioButtonSelectedEvent(this.groupName, this.label));
            }
          }
        };

        RadioButton.prototype._handleButtonSelected = function _handleButtonSelected(event) {
          if (event.groupName === this.groupName) {
            this.selected = this.label === event.buttonLabel;
          }
        };

        return RadioButton;
      }()) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class));

      _export('RadioButton', RadioButton);
    }
  };
});