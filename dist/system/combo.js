System.register(['babel-runtime/helpers/define-decorated-property-descriptor', 'babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection'], function (_export) {
  var _defineDecoratedPropertyDescriptor, _createDecoratedClass, _classCallCheck, customElement, bindable, bindingMode, inject, Combo;

  return {
    setters: [function (_babelRuntimeHelpersDefineDecoratedPropertyDescriptor) {
      _defineDecoratedPropertyDescriptor = _babelRuntimeHelpersDefineDecoratedPropertyDescriptor['default'];
    }, function (_babelRuntimeHelpersCreateDecoratedClass) {
      _createDecoratedClass = _babelRuntimeHelpersCreateDecoratedClass['default'];
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck['default'];
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }],
    execute: function () {
      'use strict';

      Combo = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(Combo, [{
          key: 'onchange',
          decorators: [bindable],
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
              this.selected = this.options.find(function (x) {
                return x.id == item.value;
              });
            } else {
              this.selected = item.value;
            }
          }
        }], null, _instanceInitializers);

        var _Combo = Combo;
        Combo = inject(Element)(Combo) || Combo;
        Combo = bindable({
          name: 'grabFocus',
          attribute: 'grab-focus',
          defaultValue: false
        })(Combo) || Combo;
        Combo = bindable({
          name: 'selected',
          attribute: 'selected',
          defaultBindingMode: bindingMode.twoWay,
          changeHandler: '_handleSelectedChanged'
        })(Combo) || Combo;
        Combo = bindable({
          name: 'options',
          attribute: 'options',
          defaultBindingMode: bindingMode.oneTime
        })(Combo) || Combo;
        Combo = bindable({
          name: 'disabled',
          attribute: 'disabled',
          defaultValue: false,
          defaultBindingMode: bindingMode.oneWay
        })(Combo) || Combo;
        Combo = bindable({
          name: 'title',
          attribute: 'title',
          defaultBindingMode: bindingMode.oneTime
        })(Combo) || Combo;
        Combo = bindable({
          name: 'size',
          attribute: 'size',
          defaultValue: 'medium',
          defaultBindingMode: bindingMode.oneTime
        })(Combo) || Combo;
        Combo = customElement('combo')(Combo) || Combo;
        return Combo;
      })();

      _export('Combo', Combo);
    }
  };
});