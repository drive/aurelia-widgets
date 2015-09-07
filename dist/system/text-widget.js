System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var customElement, inject, bindable, bindingMode, TextWidget;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
    }],
    execute: function () {
      TextWidget = (function () {
        function TextWidget(element) {
          _classCallCheck(this, _TextWidget);

          this.element = element;
        }

        var _TextWidget = TextWidget;
        TextWidget = inject(Element)(TextWidget) || TextWidget;
        TextWidget = bindable('label')(TextWidget) || TextWidget;
        TextWidget = bindable('placeholder')(TextWidget) || TextWidget;
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