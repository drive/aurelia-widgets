define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
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
        this.combo.addEventListener('change', this._boundChange);
      }
    }, {
      key: 'detached',
      value: function detached() {
        this.combo.removeEventListener('change', this._boundChange);
      }
    }, {
      key: '_change',
      value: function _change(change) {
        this.selected = change.target.value;
      }
    }]);

    var _Combo = Combo;
    Combo = (0, _aureliaFramework.inject)(Element)(Combo) || Combo;
    Combo = (0, _aureliaFramework.bindable)({
      name: 'selected',
      attribute: 'selected',
      defaultBindingMode: _aureliaFramework.bindingMode.twoWay
    })(Combo) || Combo;
    Combo = (0, _aureliaFramework.bindable)({
      name: 'options',
      attribute: 'options',
      defaultBindingMode: _aureliaFramework.bindingMode.oneTime
    })(Combo) || Combo;
    Combo = (0, _aureliaFramework.bindable)({
      name: 'title',
      attribute: 'title',
      defaultBindingMode: _aureliaFramework.bindingMode.oneTime
    })(Combo) || Combo;
    Combo = (0, _aureliaFramework.customElement)('combo')(Combo) || Combo;
    return Combo;
  })();

  exports.Combo = Combo;
});