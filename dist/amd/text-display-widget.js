define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'jquery'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _jquery) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _$ = _interopRequireDefault(_jquery);

  var TextDisplayWidget = (function () {
    function TextDisplayWidget(element) {
      _classCallCheck(this, _TextDisplayWidget);

      this.element = element;
    }

    _createClass(TextDisplayWidget, [{
      key: 'bind',
      value: function bind() {
        this.toolTipElement = (0, _$['default'])(this.element.querySelector('.text-display-widget-label'));
        this.toolTipElement.attr('title');
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
});