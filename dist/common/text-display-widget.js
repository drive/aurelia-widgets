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

var TextDisplayWidget = (function () {
  function TextDisplayWidget(element) {
    _classCallCheck(this, _TextDisplayWidget);

    this.element = element;
  }

  _createClass(TextDisplayWidget, [{
    key: 'bind',
    value: function bind() {
      this.toolTipElement = (0, _jquery2['default'])(this.element.querySelector('.text-display-widget-label'));
      this.toolTipElement.attr('title', '');
      this.toolTipElement.tooltip({
        container: 'body',
        placement: this.placement,
        html: true,
        title: this.toolTipText || this.text
      });
    }
  }, {
    key: 'unbind',
    value: function unbind() {
      this.toolTipElement.tooltip('destroy');
    }
  }, {
    key: 'textChanged',
    value: function textChanged(newValue) {
      if (!this.toolTipText) {
        this._updateToolTip(newValue);
      }
    }
  }, {
    key: 'toolTipTextChanged',
    value: function toolTipTextChanged(newValue) {
      this._updateToolTip(newValue);
    }
  }, {
    key: '_updateToolTip',
    value: function _updateToolTip(newValue) {
      this.toolTipElement.attr('data-original-title', newValue);
    }
  }]);

  var _TextDisplayWidget = TextDisplayWidget;
  TextDisplayWidget = (0, _aureliaDependencyInjection.inject)(Element)(TextDisplayWidget) || TextDisplayWidget;
  TextDisplayWidget = (0, _aureliaTemplating.bindable)({
    name: 'placement',
    defaultValue: 'auto top',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  })(TextDisplayWidget) || TextDisplayWidget;
  TextDisplayWidget = (0, _aureliaTemplating.bindable)('toolTipText')(TextDisplayWidget) || TextDisplayWidget;
  TextDisplayWidget = (0, _aureliaTemplating.bindable)({
    name: 'placeholder',
    defaultValue: '',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  })(TextDisplayWidget) || TextDisplayWidget;
  TextDisplayWidget = (0, _aureliaTemplating.bindable)('text')(TextDisplayWidget) || TextDisplayWidget;
  TextDisplayWidget = (0, _aureliaTemplating.customElement)('text-display-widget')(TextDisplayWidget) || TextDisplayWidget;
  return TextDisplayWidget;
})();

exports.TextDisplayWidget = TextDisplayWidget;