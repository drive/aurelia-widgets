define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-event-aggregator', './radiobuttonselectedevent'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaEventAggregator, _radiobuttonselectedevent) {
  'use strict';

  exports.__esModule = true;
  exports.RadioButton = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class;

  var RadioButton = exports.RadioButton = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaEventAggregator.EventAggregator), _dec2 = (0, _aureliaTemplating.customElement)('radio-button'), _dec3 = (0, _aureliaTemplating.bindable)('label'), _dec4 = (0, _aureliaTemplating.bindable)('selected'), _dec5 = (0, _aureliaTemplating.bindable)('disabled'), _dec6 = (0, _aureliaTemplating.bindable)('onselecting'), _dec7 = (0, _aureliaTemplating.bindable)({
    attribute: 'group-name',
    name: 'groupName'
  }), _dec8 = (0, _aureliaTemplating.bindable)({
    name: 'grabFocus',
    attribute: 'grab-focus',
    defaultValue: false
  }), _dec9 = (0, _aureliaTemplating.bindable)({
    name: 'iconFamilyClass',
    attribute: 'icon-family-class',
    defaultValue: 'fa'
  }), _dec10 = (0, _aureliaTemplating.bindable)({
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
      this.selectedEventSubscription = this.eventAggregator.subscribe(_radiobuttonselectedevent.RadioButtonSelectedEvent, this._handleButtonSelected.bind(this));
    };

    RadioButton.prototype.unbind = function unbind() {
      this.selectedEventSubscription.dispose();
    };

    RadioButton.prototype.clicked = function clicked() {
      if (this.disabled !== true) {
        if (this.onselecting()) {
          this.selected = !this.selected;
          this.eventAggregator.publish(new _radiobuttonselectedevent.RadioButtonSelectedEvent(this.groupName, this.label));
        }
      }
    };

    RadioButton.prototype._handleButtonSelected = function _handleButtonSelected(event) {
      if (event.groupName === this.groupName) {
        this.selected = this.label === event.buttonLabel;
      }
    };

    return RadioButton;
  }()) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
});
//# sourceMappingURL=radiobutton.js.map
