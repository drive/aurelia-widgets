'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('bootstrap');

require('bootstrap-toggle');

require('bootstrap-toggle/css/bootstrap-toggle.css!');

var ToggleButton = (function () {
  function ToggleButton(element) {
    _classCallCheck(this, _ToggleButton);

    this.element = element;
  }

  _createClass(ToggleButton, [{
    key: 'bind',
    value: function bind() {
      var _this = this;

      this.toggleElement = (0, _jquery2['default'])(this.element.querySelector('[data-toggle="toggle"]'));
      this.toggleElement.bootstrapToggle({
        on: this.onText,
        off: this.offText,
        width: this.width
      });
      this.toggleElement.change(function () {
        _this.checked = _this.toggleElement.prop('checked');
      });
      this.checkedChanged(this.checked);
    }
  }, {
    key: 'checkedChanged',
    value: function checkedChanged(newValue) {
      if (newValue) {
        this.toggleElement.bootstrapToggle('on');
      } else {
        this.toggleElement.bootstrapToggle('off');
      }
    }
  }, {
    key: 'unbind',
    value: function unbind() {
      this.toggleElement.bootstrapToggle('destroy');
    }
  }]);

  var _ToggleButton = ToggleButton;
  ToggleButton = (0, _aureliaTemplating.customElement)('toggle-button')(ToggleButton) || ToggleButton;
  ToggleButton = (0, _aureliaDependencyInjection.inject)(Element)(ToggleButton) || ToggleButton;
  ToggleButton = (0, _aureliaTemplating.bindable)({
    name: 'checked',
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay
  })(ToggleButton) || ToggleButton;
  ToggleButton = (0, _aureliaTemplating.bindable)({
    name: 'label',
    attribute: 'label',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
    defaultValue: ''
  })(ToggleButton) || ToggleButton;
  ToggleButton = (0, _aureliaTemplating.bindable)({
    name: 'width',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
    defaultValue: null
  })(ToggleButton) || ToggleButton;
  ToggleButton = (0, _aureliaTemplating.bindable)({
    name: 'offText',
    attribute: 'off-text',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
    defaultValue: 'Off'
  })(ToggleButton) || ToggleButton;
  ToggleButton = (0, _aureliaTemplating.bindable)({
    name: 'onText',
    attribute: 'on-text',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
    defaultValue: 'On'
  })(ToggleButton) || ToggleButton;
  return ToggleButton;
})();

exports.ToggleButton = ToggleButton;