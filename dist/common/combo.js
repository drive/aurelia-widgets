'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var Combo = (function () {
  var _instanceInitializers = {};
  var _instanceInitializers = {};

  _createDecoratedClass(Combo, [{
    key: 'onchange',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function Combo(element) {
    _classCallCheck(this, _Combo);

    _defineDecoratedPropertyDescriptor(this, 'onchange', _instanceInitializers);

    this.element = element;
    this._boundChange = this._change.bind(this);
  }

  _createDecoratedClass(Combo, [{
    key: 'attached',
    value: function attached() {
      this.combo = this.element.querySelector('select');

      if (this.selected || this.selected === 0) this._setComboValue(this.selected);

      this.combo.addEventListener('change', this._boundChange);
    }
  }, {
    key: 'detached',
    value: function detached() {
      this.combo.removeEventListener('change', this._boundChange);
    }
  }, {
    key: 'getSelectedId',
    value: function getSelectedId(item) {
      if (item && typeof item === 'object') return item.id;

      return item;
    }
  }, {
    key: '_change',
    value: function _change(change) {
      this._setSelected(change.target);

      if (this.onchange) {
        this.onchange(this.selected);
      }
    }
  }, {
    key: '_handleSelectedChanged',
    value: function _handleSelectedChanged(newValue) {
      if (this.combo) this._setComboValue(newValue);
    }
  }, {
    key: '_setComboValue',
    value: function _setComboValue(newValue) {
      if (newValue && typeof newValue === 'object') this.combo.value = newValue.id;else this.combo.value = newValue;
    }
  }, {
    key: '_setSelected',
    value: function _setSelected(item) {
      if (typeof this.selected === 'object') {
        this.selected.id = item.value;

        this.selected.description = item.selectedOptions[0].text;
      } else {
        this.selected = item.value;
      }
    }
  }], null, _instanceInitializers);

  var _Combo = Combo;
  Combo = (0, _aureliaDependencyInjection.inject)(Element)(Combo) || Combo;
  Combo = (0, _aureliaTemplating.bindable)({
    name: 'grabFocus',
    attribute: 'grab-focus',
    defaultValue: false
  })(Combo) || Combo;
  Combo = (0, _aureliaTemplating.bindable)({
    name: 'selected',
    attribute: 'selected',
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay,
    changeHandler: '_handleSelectedChanged'
  })(Combo) || Combo;
  Combo = (0, _aureliaTemplating.bindable)({
    name: 'options',
    attribute: 'options',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  })(Combo) || Combo;
  Combo = (0, _aureliaTemplating.bindable)({
    name: 'disabled',
    attribute: 'disabled',
    defaultValue: false,
    defaultBindingMode: _aureliaBinding.bindingMode.oneWay
  })(Combo) || Combo;
  Combo = (0, _aureliaTemplating.bindable)({
    name: 'title',
    attribute: 'title',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  })(Combo) || Combo;
  Combo = (0, _aureliaTemplating.bindable)({
    name: 'size',
    attribute: 'size',
    defaultValue: 'medium',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  })(Combo) || Combo;
  Combo = (0, _aureliaTemplating.customElement)('combo')(Combo) || Combo;
  return Combo;
})();

exports.Combo = Combo;