'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var TextWidget = (function () {
  function TextWidget(element) {
    _classCallCheck(this, _TextWidget);

    this.element = element;
  }

  var _TextWidget = TextWidget;
  TextWidget = (0, _aureliaFramework.inject)(Element)(TextWidget) || TextWidget;
  TextWidget = (0, _aureliaFramework.bindable)('label')(TextWidget) || TextWidget;
  TextWidget = (0, _aureliaFramework.bindable)('placeholder')(TextWidget) || TextWidget;
  TextWidget = (0, _aureliaFramework.bindable)({
    name: 'textValue',
    attribute: 'text-value',
    defaultBindingMode: _aureliaFramework.bindingMode.twoWay
  })(TextWidget) || TextWidget;
  TextWidget = (0, _aureliaFramework.customElement)('text-widget')(TextWidget) || TextWidget;
  return TextWidget;
})();

exports.TextWidget = TextWidget;