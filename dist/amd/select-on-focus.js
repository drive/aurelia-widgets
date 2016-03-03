define(['exports', 'aurelia-templating', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var SelectOnFocus = (function () {
    function SelectOnFocus(element) {
      _classCallCheck(this, _SelectOnFocus);

      this.element = element;
      this.blockMouseUp = false;

      this._boundOnFocus = this.onFocus.bind(this);
      this._boundOnMouseDown = this.onMouseDown.bind(this);
      this._boundOnMouseUp = this.onMouseUp.bind(this);
    }

    _createClass(SelectOnFocus, [{
      key: 'attached',
      value: function attached() {
        this.element.addEventListener('focus', this._boundOnFocus);
        this.element.addEventListener('mousedown', this._boundOnMouseDown);
        this.element.addEventListener('mouseup', this._boundOnMouseUp);
      }
    }, {
      key: 'detached',
      value: function detached() {
        this.element.removeEventListener('focus', this._boundOnFocus);
        this.element.removeEventListener('mousedown', this._boundOnMouseDown);
        this.element.removeEventListener('mouseup', this._boundOnMouseUp);
      }
    }, {
      key: 'onFocus',
      value: function onFocus() {
        this.element.select();
      }
    }, {
      key: 'onMouseDown',
      value: function onMouseDown() {
        this.blockMouseUp = this.element !== document.activeElement;
      }
    }, {
      key: 'onMouseUp',
      value: function onMouseUp(event) {
        if (this.blockMouseUp) {
          event.preventDefault();
        }
      }
    }]);

    var _SelectOnFocus = SelectOnFocus;
    SelectOnFocus = (0, _aureliaDependencyInjection.inject)(Element)(SelectOnFocus) || SelectOnFocus;
    SelectOnFocus = (0, _aureliaTemplating.customAttribute)('selectonfocus')(SelectOnFocus) || SelectOnFocus;
    return SelectOnFocus;
  })();

  exports.SelectOnFocus = SelectOnFocus;
});