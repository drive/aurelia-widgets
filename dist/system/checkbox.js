System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, Checkbox;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      Checkbox = (function () {
        function Checkbox() {
          _classCallCheck(this, _Checkbox);
        }

        _createClass(Checkbox, [{
          key: 'checkboxSelected',
          value: function checkboxSelected() {
            this.selected = !this.selected;
          }
        }]);

        var _Checkbox = Checkbox;
        Checkbox = bindable()(Checkbox) || Checkbox;
        return Checkbox;
      })();

      _export('Checkbox', Checkbox);
    }
  };
});