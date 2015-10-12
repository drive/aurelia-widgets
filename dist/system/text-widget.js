System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection'], function (_export) {
  'use strict';

  var customElement, bindable, bindingMode, inject, TextWidget;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }],
    execute: function () {
      TextWidget = (function () {
        function TextWidget(element) {
          _classCallCheck(this, _TextWidget);

          this.element = element;
        }

        _createClass(TextWidget, [{
          key: 'attached',
          value: function attached() {
            this.input = this.element.querySelector('input');
          }
        }, {
          key: 'selectAll',
          value: function selectAll() {
            this.input.select();
          }
        }]);

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