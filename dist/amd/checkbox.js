define(['exports', 'babel-runtime/helpers/define-decorated-property-descriptor', 'babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'aurelia-templating', 'aurelia-binding'], function (exports, _babelRuntimeHelpersDefineDecoratedPropertyDescriptor, _babelRuntimeHelpersCreateDecoratedClass, _babelRuntimeHelpersClassCallCheck, _aureliaTemplating, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var Checkbox = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};
    (0, _babelRuntimeHelpersCreateDecoratedClass['default'])(Checkbox, [{
      key: 'ontoggle',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function Checkbox() {
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, _Checkbox);
      (0, _babelRuntimeHelpersDefineDecoratedPropertyDescriptor['default'])(this, 'ontoggle', _instanceInitializers);

      this.checked = false;
      this.enabled = true;
    }

    (0, _babelRuntimeHelpersCreateDecoratedClass['default'])(Checkbox, [{
      key: 'checkboxSelected',
      value: function checkboxSelected() {
        if (!this.enabled) return;

        this.checked = !this.checked;
        if (this.ontoggle) {
          this.ontoggle({ checked: this.checked });
        }
      }
    }], null, _instanceInitializers);
    var _Checkbox = Checkbox;
    Checkbox = (0, _aureliaTemplating.bindable)({
      name: 'grabFocus',
      attribute: 'grab-focus',
      defaultValue: false
    })(Checkbox) || Checkbox;
    Checkbox = (0, _aureliaTemplating.bindable)({
      name: 'checked',
      attribute: 'checked',
      defaultBindingMode: _aureliaBinding.bindingMode.twoWay
    })(Checkbox) || Checkbox;
    Checkbox = (0, _aureliaTemplating.bindable)({
      name: 'enabled',
      attribute: 'enabled',
      defaultBindingMode: _aureliaBinding.bindingMode.oneWay
    })(Checkbox) || Checkbox;
    Checkbox = (0, _aureliaTemplating.bindable)({
      name: 'labelText',
      attribute: 'label-text',
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })(Checkbox) || Checkbox;
    return Checkbox;
  })();

  exports.Checkbox = Checkbox;
});