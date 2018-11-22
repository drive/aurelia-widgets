define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'jquery', 'bootstrap', 'bootstrap-toggle'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _jquery) {
  'use strict';

  exports.__esModule = true;
  exports.ToggleButton = undefined;

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class;

  var ToggleButton = exports.ToggleButton = (_dec = (0, _aureliaTemplating.bindable)({
    name: 'onText',
    attribute: 'on-text',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
    defaultValue: 'On'
  }), _dec2 = (0, _aureliaTemplating.bindable)({
    name: 'offText',
    attribute: 'off-text',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
    defaultValue: 'Off'
  }), _dec3 = (0, _aureliaTemplating.bindable)({
    name: 'width',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
    defaultValue: null
  }), _dec4 = (0, _aureliaTemplating.bindable)({
    name: 'label',
    attribute: 'label',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
    defaultValue: ''
  }), _dec5 = (0, _aureliaTemplating.bindable)({
    name: 'checked',
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay
  }), _dec6 = (0, _aureliaTemplating.bindable)({
    name: 'disabled',
    defaultValue: false,
    defaultBindingMode: _aureliaBinding.bindingMode.oneWay
  }), _dec7 = (0, _aureliaDependencyInjection.inject)(Element), _dec8 = (0, _aureliaTemplating.customElement)('toggle-button'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = function () {
    function ToggleButton(element) {
      _classCallCheck(this, ToggleButton);

      this.element = element;
    }

    ToggleButton.prototype.bind = function bind() {
      var _this = this;

      this.toggleElement = (0, _jquery2.default)(this.element.querySelector('[data-toggle="toggle"]'));
      this.toggleElement.bootstrapToggle({
        on: this.onText,
        off: this.offText,
        width: this.width
      });
      this.toggleElement.change(function () {
        _this.checked = _this.toggleElement.prop('checked');
      });
      this.checkedChanged(this.checked);
      this.disabledChanged(this.disabled);
    };

    ToggleButton.prototype.unbind = function unbind() {
      this.toggleElement.bootstrapToggle('destroy');
    };

    ToggleButton.prototype.checkedChanged = function checkedChanged(newValue) {
      if (newValue) {
        this.toggleElement.bootstrapToggle('on');
      } else {
        this.toggleElement.bootstrapToggle('off');
      }
    };

    ToggleButton.prototype.disabledChanged = function disabledChanged(newValue) {
      if (newValue) {
        this.toggleElement.bootstrapToggle('disable');
      } else {
        this.toggleElement.bootstrapToggle('enable');
      }
    };

    return ToggleButton;
  }()) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
});
//# sourceMappingURL=togglebutton.js.map
