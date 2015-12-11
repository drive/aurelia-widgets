'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
      var toolTipElement = (0, _jquery2['default'])(this.element.querySelector('[data-toggle="tooltip"]'));
      toolTipElement.attr('title', this.toolTipText || this.text);
      toolTipElement.tooltip({
        container: 'body',
        placement: 'auto top',
        html: true
      });
      this._updateToolTip(this.toolTipText || this.text);
    }
  }, {
    key: 'unbind',
    value: function unbind() {
      (0, _jquery2['default'])(this.element.querySelector('[data-toggle="tooltip"]')).tooltip('destroy');
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
      var tooltip = newValue;
      if (this.formatToolTip) {
        tooltip = formatToolTip();
      }
      (0, _jquery2['default'])(this.element.querySelector('[data-toggle="tooltip"]')).attr('title', tooltip).tooltip('fixTitle');
    }
  }]);

  var _TextDisplayWidget = TextDisplayWidget;
  TextDisplayWidget = (0, _aureliaDependencyInjection.inject)(Element)(TextDisplayWidget) || TextDisplayWidget;
  TextDisplayWidget = (0, _aureliaTemplating.bindable)({
    name: 'placement',
    defaultValue: 'auto'
  })(TextDisplayWidget) || TextDisplayWidget;
  TextDisplayWidget = (0, _aureliaTemplating.bindable)('toolTipText')(TextDisplayWidget) || TextDisplayWidget;
  TextDisplayWidget = (0, _aureliaTemplating.bindable)('text')(TextDisplayWidget) || TextDisplayWidget;
  TextDisplayWidget = (0, _aureliaTemplating.customElement)('text-display-widget')(TextDisplayWidget) || TextDisplayWidget;
  return TextDisplayWidget;
})();

exports.TextDisplayWidget = TextDisplayWidget;