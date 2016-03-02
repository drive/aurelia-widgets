define(['exports', 'babel-runtime/helpers/define-decorated-property-descriptor', 'babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection'], function (exports, _babelRuntimeHelpersDefineDecoratedPropertyDescriptor, _babelRuntimeHelpersCreateDecoratedClass, _babelRuntimeHelpersClassCallCheck, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var Combo = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};
    (0, _babelRuntimeHelpersCreateDecoratedClass['default'])(Combo, [{
      key: 'onchange',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function Combo(element) {
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, _Combo);
      (0, _babelRuntimeHelpersDefineDecoratedPropertyDescriptor['default'])(this, 'onchange', _instanceInitializers);

      this.element = element;
      this._boundChange = this._change.bind(this);
    }

    (0, _babelRuntimeHelpersCreateDecoratedClass['default'])(Combo, [{
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
          this.selected = this.options.find(function (x) {
            return x.id == item.value;
          });
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
});