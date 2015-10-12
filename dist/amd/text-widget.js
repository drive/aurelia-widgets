define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
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
        this.input = this.element.querySelector('input');
      }
    }, {
      key: 'selectAll',
      value: function selectAll() {
        this.input.select();
      }
    }]);

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
});