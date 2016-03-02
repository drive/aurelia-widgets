System.register(['babel-runtime/helpers/define-decorated-property-descriptor', 'babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'aurelia-templating', 'aurelia-binding'], function (_export) {
  var _defineDecoratedPropertyDescriptor, _createDecoratedClass, _classCallCheck, bindable, bindingMode, Checkbox;

  return {
    setters: [function (_babelRuntimeHelpersDefineDecoratedPropertyDescriptor) {
      _defineDecoratedPropertyDescriptor = _babelRuntimeHelpersDefineDecoratedPropertyDescriptor['default'];
    }, function (_babelRuntimeHelpersCreateDecoratedClass) {
      _createDecoratedClass = _babelRuntimeHelpersCreateDecoratedClass['default'];
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck['default'];
    }, function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }],
    execute: function () {
      'use strict';

      Checkbox = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(Checkbox, [{
          key: 'ontoggle',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function Checkbox() {
          _classCallCheck(this, _Checkbox);

          _defineDecoratedPropertyDescriptor(this, 'ontoggle', _instanceInitializers);

          this.checked = false;
          this.enabled = true;
        }

        _createDecoratedClass(Checkbox, [{
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
        Checkbox = bindable({
          name: 'grabFocus',
          attribute: 'grab-focus',
          defaultValue: false
        })(Checkbox) || Checkbox;
        Checkbox = bindable({
          name: 'checked',
          attribute: 'checked',
          defaultBindingMode: bindingMode.twoWay
        })(Checkbox) || Checkbox;
        Checkbox = bindable({
          name: 'enabled',
          attribute: 'enabled',
          defaultBindingMode: bindingMode.oneWay
        })(Checkbox) || Checkbox;
        Checkbox = bindable({
          name: 'labelText',
          attribute: 'label-text',
          defaultBindingMode: bindingMode.oneTime
        })(Checkbox) || Checkbox;
        return Checkbox;
      })();

      _export('Checkbox', Checkbox);
    }
  };
});