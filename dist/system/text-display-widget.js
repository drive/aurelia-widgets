System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'jquery'], function (_export) {
  'use strict';

  var customElement, bindable, bindingMode, inject, $, TextDisplayWidget;

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
    }, function (_jquery) {
      $ = _jquery['default'];
    }],
    execute: function () {
      TextDisplayWidget = (function () {
        function TextDisplayWidget(element) {
          _classCallCheck(this, _TextDisplayWidget);

          this.element = element;
        }

        _createClass(TextDisplayWidget, [{
          key: 'bind',
          value: function bind() {
            $(this.element.querySelector('[data-toggle="tooltip"]')).attr('title', this.text).tooltip('fixTitle');
          }
        }, {
          key: 'textChanged',
          value: function textChanged(newValue) {
            $(this.element.querySelector('[data-toggle="tooltip"]')).attr('title', newValue).tooltip('fixTitle');
          }
        }]);

        var _TextDisplayWidget = TextDisplayWidget;
        TextDisplayWidget = inject(Element)(TextDisplayWidget) || TextDisplayWidget;
        TextDisplayWidget = bindable({
          name: 'placement',
          defaultValue: 'auto'
        })(TextDisplayWidget) || TextDisplayWidget;
        TextDisplayWidget = bindable('text')(TextDisplayWidget) || TextDisplayWidget;
        TextDisplayWidget = customElement('text-display-widget')(TextDisplayWidget) || TextDisplayWidget;
        return TextDisplayWidget;
      })();

      _export('TextDisplayWidget', TextDisplayWidget);
    }
  };
});