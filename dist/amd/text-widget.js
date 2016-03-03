define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var TextWidget = (function () {
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