define(['exports', 'babel-runtime/helpers/create-class', 'babel-runtime/helpers/class-call-check', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection'], function (exports, _babelRuntimeHelpersCreateClass, _babelRuntimeHelpersClassCallCheck, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var TextWidget = (function () {
    function TextWidget(element) {
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, _TextWidget);

      this.element = element;
    }

    (0, _babelRuntimeHelpersCreateClass['default'])(TextWidget, [{
      key: 'attached',
      value: function attached() {
        if (this.multiline) {
          this.input = this.element.querySelector('textarea');
        } else {
          this.input = this.element.querySelector('input');
        }
      }
    }]);
    var _TextWidget = TextWidget;
    TextWidget = (0, _aureliaDependencyInjection.inject)(Element)(TextWidget) || TextWidget;
    TextWidget = (0, _aureliaTemplating.bindable)({
      name: 'multiline',
      attribute: 'multiline',
      defaultValue: false,
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })(TextWidget) || TextWidget;
    TextWidget = (0, _aureliaTemplating.bindable)({
      name: 'grabFocus',
      attribute: 'grab-focus',
      defaultValue: false
    })(TextWidget) || TextWidget;
    TextWidget = (0, _aureliaTemplating.bindable)('label')(TextWidget) || TextWidget;
    TextWidget = (0, _aureliaTemplating.bindable)('placeholder')(TextWidget) || TextWidget;
    TextWidget = (0, _aureliaTemplating.bindable)({
      name: 'disabled',
      attribute: 'disabled',
      defaultValue: false,
      defaultBindingMode: _aureliaBinding.bindingMode.oneWay
    })(TextWidget) || TextWidget;
    TextWidget = (0, _aureliaTemplating.bindable)({
      name: 'textValue',
      attribute: 'text-value',
      defaultBindingMode: _aureliaBinding.bindingMode.twoWay
    })(TextWidget) || TextWidget;
    TextWidget = (0, _aureliaTemplating.customElement)('text-widget')(TextWidget) || TextWidget;
    return TextWidget;
  })();

  exports.TextWidget = TextWidget;
});