define(['exports', 'aurelia-templating', 'aurelia-binding'], function (exports, _aureliaTemplating, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var Checkbox = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(Checkbox, [{
      key: 'ontoggle',
      decorators: [_aureliaTemplating.bindable],
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
          this.ontoggle();
        }
      }
    }], null, _instanceInitializers);

    var _Checkbox = Checkbox;
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