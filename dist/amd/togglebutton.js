define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'jquery', 'bootstrap', 'bootstrap-toggle', 'bootstrap-toggle/css/bootstrap-toggle.css!'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _jquery, _bootstrap, _bootstrapToggle, _bootstrapToggleCssBootstrapToggleCss) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _$ = _interopRequireDefault(_jquery);

  var ToggleButton = (function () {
    function ToggleButton(element) {
      _classCallCheck(this, _ToggleButton);

      this.element = element;
    }

    _createClass(ToggleButton, [{
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