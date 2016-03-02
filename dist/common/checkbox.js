'use strict';

var _defineDecoratedPropertyDescriptor = require('babel-runtime/helpers/define-decorated-property-descriptor')['default'];

var _createDecoratedClass = require('babel-runtime/helpers/create-decorated-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var Checkbox = (function () {
  var _instanceInitializers = {};
  var _instanceInitializers = {};

  _createDecoratedClass(Checkbox, [{
    key: 'ontoggle',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function Checkbox() {
    _classCallCheck(this, _Checkbox);

    _defineDecoratedPropertyDescriptor(this, 'ontoggle', _instanceInitializers);

    this.checked = false;
    this.enabled = true;
  }

  _createDecoratedClass(Checkbox, [{
    key: 'checkboxSelected',
    value: function checkboxSelected() {
      if (!this.enabled) return;

      this.checked = !this.checked;
      if (this.ontoggle) {
        this.ontoggle({ checked: this.checked });
      }
    }
  }], null, _instanceInitializers);

  var _Checkbox = Checkbox;
  Checkbox = (0, _aureliaTemplating.bindable)({
    name: 'grabFocus',
    attribute: 'grab-focus',
    defaultValue: false
  })(Checkbox) || Checkbox;
  Checkbox = (0, _aureliaTemplating.bindable)({
    name: 'checked',
    attribute: 'checked',
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay
  })(Checkbox) || Checkbox;
  Checkbox = (0, _aureliaTemplating.bindable)({
    name: 'enabled',
    attribute: 'enabled',
    defaultBindingMode: _aureliaBinding.bindingMode.oneWay
  })(Checkbox) || Checkbox;
  Checkbox = (0, _aureliaTemplating.bindable)({
    name: 'labelText',
    attribute: 'label-text',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  })(Checkbox) || Checkbox;
  return Checkbox;
})();

exports.Checkbox = Checkbox;