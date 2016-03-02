System.register(['babel-runtime/helpers/create-class', 'babel-runtime/helpers/class-call-check', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'jquery'], function (_export) {
  var _createClass, _classCallCheck, customElement, bindable, bindingMode, inject, $, TextDisplayWidget;

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
    }, function (_jquery) {
      $ = _jquery['default'];
    }],
    execute: function () {
      'use strict';

      TextDisplayWidget = (function () {
        function TextDisplayWidget(element) {
          _classCallCheck(this, _TextDisplayWidget);

          this.element = element;
        }

        _createClass(TextDisplayWidget, [{
          key: 'bind',
          value: function bind() {
            this.toolTipElement = $(this.element.querySelector('.text-display-widget-label'));
            this.toolTipElement.attr('title', '');
            this.toolTipElement.tooltip({
              container: 'body',
              placement: this.placement,
              html: true,
              title: this.toolTipText || this.text
            });
          }
        }, {
          key: 'unbind',
          value: function unbind() {
            this.toolTipElement.tooltip('destroy');
          }
        }, {
          key: 'textChanged',
          value: function textChanged(newValue) {
            if (!this.toolTipText) {
              this._updateToolTip(newValue);
            }
          }
        }, {
          key: 'toolTipTextChanged',
          value: function toolTipTextChanged(newValue) {
            this._updateToolTip(newValue);
          }
        }, {
          key: '_updateToolTip',
          value: function _updateToolTip(newValue) {
            this.toolTipElement.attr('data-original-title', newValue);
          }
        }]);

        var _TextDisplayWidget = TextDisplayWidget;
        TextDisplayWidget = inject(Element)(TextDisplayWidget) || TextDisplayWidget;
        TextDisplayWidget = bindable({
          name: 'placement',
          defaultValue: 'auto top',
          defaultBindingMode: bindingMode.oneTime
        })(TextDisplayWidget) || TextDisplayWidget;
        TextDisplayWidget = bindable('toolTipText')(TextDisplayWidget) || TextDisplayWidget;
        TextDisplayWidget = bindable({
          name: 'placeholder',
          defaultValue: '',
          defaultBindingMode: bindingMode.oneTime
        })(TextDisplayWidget) || TextDisplayWidget;
        TextDisplayWidget = bindable('text')(TextDisplayWidget) || TextDisplayWidget;
        TextDisplayWidget = customElement('text-display-widget')(TextDisplayWidget) || TextDisplayWidget;
        return TextDisplayWidget;
      })();

      _export('TextDisplayWidget', TextDisplayWidget);
    }
  };
});