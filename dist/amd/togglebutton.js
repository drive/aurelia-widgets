define(['exports', 'babel-runtime/helpers/create-class', 'babel-runtime/helpers/class-call-check', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'jquery', 'babel-runtime/helpers/interop-require-default', 'bootstrap', 'bootstrap-toggle', 'bootstrap-toggle/css/bootstrap-toggle.css!'], function (exports, _babelRuntimeHelpersCreateClass, _babelRuntimeHelpersClassCallCheck, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _jquery, _babelRuntimeHelpersInteropRequireDefault, _bootstrap, _bootstrapToggle, _bootstrapToggleCssBootstrapToggleCss) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _$ = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_jquery);

  var ToggleButton = (function () {
    function ToggleButton(element) {
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, _ToggleButton);

      this.element = element;
    }

    (0, _babelRuntimeHelpersCreateClass['default'])(ToggleButton, [{
      key: 'bind',
      value: function bind() {
        var _this = this;

        this.toggleElement = (0, _$['default'])(this.element.querySelector('[data-toggle="toggle"]'));
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
    ToggleButton = (0, _aureliaTemplating.customElement)('toggle-button')(ToggleButton) || ToggleButton;
    ToggleButton = (0, _aureliaDependencyInjection.inject)(Element)(ToggleButton) || ToggleButton;
    ToggleButton = (0, _aureliaTemplating.bindable)({
      name: 'checked',
      defaultBindingMode: _aureliaBinding.bindingMode.twoWay
    })(ToggleButton) || ToggleButton;
    ToggleButton = (0, _aureliaTemplating.bindable)({
      name: 'label',
      attribute: 'label',
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
      defaultValue: ''
    })(ToggleButton) || ToggleButton;
    ToggleButton = (0, _aureliaTemplating.bindable)({
      name: 'width',
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
      defaultValue: null
    })(ToggleButton) || ToggleButton;
    ToggleButton = (0, _aureliaTemplating.bindable)({
      name: 'offText',
      attribute: 'off-text',
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
      defaultValue: 'Off'
    })(ToggleButton) || ToggleButton;
    ToggleButton = (0, _aureliaTemplating.bindable)({
      name: 'onText',
      attribute: 'on-text',
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
      defaultValue: 'On'
    })(ToggleButton) || ToggleButton;
    return ToggleButton;
  })();

  exports.ToggleButton = ToggleButton;
});