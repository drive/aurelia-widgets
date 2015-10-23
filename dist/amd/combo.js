define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Combo = (function () {
    function Combo(element) {
      _classCallCheck(this, _Combo);

      this.element = element;
      this._boundChange = this._change.bind(this);
    }

    _createClass(Combo, [{
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
    }]);

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
      name: 'title',
      attribute: 'title',
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })(Combo) || Combo;
    Combo = (0, _aureliaTemplating.customElement)('combo')(Combo) || Combo;
    return Combo;
  })();

  exports.Combo = Combo;
});