System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'jquery', 'bootstrap', 'bootstrap-toggle', 'bootstrap-toggle/css/bootstrap-toggle.css!'], function (_export) {
  'use strict';

  var customElement, bindable, bindingMode, inject, $, ToggleButton;

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
    }, function (_bootstrap) {}, function (_bootstrapToggle) {}, function (_bootstrapToggleCssBootstrapToggleCss) {}],
    execute: function () {
      ToggleButton = (function () {
        function ToggleButton(element) {
          _classCallCheck(this, _ToggleButton);

          this.element = element;
        }

        _createClass(ToggleButton, [{
          key: 'bind',
          value: function bind() {
            var _this = this;

            this.toggleElement = $(this.element.querySelector('[data-toggle="toggle"]'));
            this.toggleElement.bootstrapToggle({
              on: this.onText,
              off: this.offText,
              width: this.width
            });
            this.toggleElement.change(function () {
              _this.checked = _this.toggleElement.prop('checked');
            });
            this.checkedChanged(this.checked);
          }
        }, {
          key: 'checkedChanged',
          value: function checkedChanged(newValue) {
            if (newValue) {
              this.toggleElement.bootstrapToggle('on');
            } else {
              this.toggleElement.bootstrapToggle('off');
            }
          }
        }, {
          key: 'unbind',
          value: function unbind() {
            this.toggleElement.bootstrapToggle('destroy');
          }
        }]);

        var _ToggleButton = ToggleButton;
        ToggleButton = customElement('toggle-button')(ToggleButton) || ToggleButton;
        ToggleButton = inject(Element)(ToggleButton) || ToggleButton;
        ToggleButton = bindable({
          name: 'checked',
          defaultBindingMode: bindingMode.twoWay
        })(ToggleButton) || ToggleButton;
        ToggleButton = bindable({
          name: 'width',
          defaultBindingMode: bindingMode.oneTime,
          defaultValue: null
        })(ToggleButton) || ToggleButton;
        ToggleButton = bindable({
          name: 'offText',
          attribute: 'off-text',
          defaultBindingMode: bindingMode.oneTime,
          defaultValue: 'Off'
        })(ToggleButton) || ToggleButton;
        ToggleButton = bindable({
          name: 'onText',
          attribute: 'on-text',
          defaultBindingMode: bindingMode.oneTime,
          defaultValue: 'On'
        })(ToggleButton) || ToggleButton;
        return ToggleButton;
      })();

      _export('ToggleButton', ToggleButton);
    }
  };
});