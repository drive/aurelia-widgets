'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection'], function (_export, _context) {
  var customElement, bindable, bindingMode, inject, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, TextWidget;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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
      _export('TextWidget', TextWidget = (_dec = customElement('text-widget'), _dec2 = bindable({
        name: 'textValue',
        attribute: 'text-value',
        defaultBindingMode: bindingMode.twoWay
      }), _dec3 = bindable({
        name: 'disabled',
        attribute: 'disabled',
        defaultValue: false,
        defaultBindingMode: bindingMode.oneWay
      }), _dec4 = bindable('placeholder'), _dec5 = bindable('label'), _dec6 = bindable({
        name: 'grabFocus',
        attribute: 'grab-focus',
        defaultValue: false
      }), _dec7 = bindable({
        name: 'multiline',
        attribute: 'multiline',
        defaultValue: false,
        defaultBindingMode: bindingMode.oneTime
      }), _dec8 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = function () {
        function TextWidget(element) {
          _classCallCheck(this, TextWidget);

          this.element = element;
        }

        TextWidget.prototype.attached = function attached() {
          if (this.multiline) {
            this.input = this.element.querySelector('textarea');
          } else {
            this.input = this.element.querySelector('input');
          }
        };

        return TextWidget;
      }()) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class));

      _export('TextWidget', TextWidget);
    }
  };
});