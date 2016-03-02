System.register(['babel-runtime/helpers/create-class', 'babel-runtime/helpers/class-call-check', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection'], function (_export) {
  var _createClass, _classCallCheck, customElement, bindable, bindingMode, inject, TextWidget;

  return {
    setters: [function (_babelRuntimeHelpersCreateClass) {
      _createClass = _babelRuntimeHelpersCreateClass['default'];
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck['default'];
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }],
    execute: function () {
      'use strict';

      TextWidget = (function () {
        function TextWidget(element) {
          _classCallCheck(this, _TextWidget);

          this.element = element;
        }

        _createClass(TextWidget, [{
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
        TextWidget = inject(Element)(TextWidget) || TextWidget;
        TextWidget = bindable({
          name: 'multiline',
          attribute: 'multiline',
          defaultValue: false,
          defaultBindingMode: bindingMode.oneTime
        })(TextWidget) || TextWidget;
        TextWidget = bindable({
          name: 'grabFocus',
          attribute: 'grab-focus',
          defaultValue: false
        })(TextWidget) || TextWidget;
        TextWidget = bindable('label')(TextWidget) || TextWidget;
        TextWidget = bindable('placeholder')(TextWidget) || TextWidget;
        TextWidget = bindable({
          name: 'disabled',
          attribute: 'disabled',
          defaultValue: false,
          defaultBindingMode: bindingMode.oneWay
        })(TextWidget) || TextWidget;
        TextWidget = bindable({
          name: 'textValue',
          attribute: 'text-value',
          defaultBindingMode: bindingMode.twoWay
        })(TextWidget) || TextWidget;
        TextWidget = customElement('text-widget')(TextWidget) || TextWidget;
        return TextWidget;
      })();

      _export('TextWidget', TextWidget);
    }
  };
});