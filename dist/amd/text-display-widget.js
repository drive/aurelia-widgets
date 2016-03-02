define(['exports', 'babel-runtime/helpers/create-class', 'babel-runtime/helpers/class-call-check', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'jquery', 'babel-runtime/helpers/interop-require-default'], function (exports, _babelRuntimeHelpersCreateClass, _babelRuntimeHelpersClassCallCheck, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _jquery, _babelRuntimeHelpersInteropRequireDefault) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _$ = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_jquery);

  var TextDisplayWidget = (function () {
    function TextDisplayWidget(element) {
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, _TextDisplayWidget);

      this.element = element;
    }

    (0, _babelRuntimeHelpersCreateClass['default'])(TextDisplayWidget, [{
      key: 'bind',
      value: function bind() {
        this.toolTipElement = (0, _$['default'])(this.element.querySelector('.text-display-widget-label'));
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
});