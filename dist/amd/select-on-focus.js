define(['exports', 'aurelia-templating', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SelectOnFocus = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var SelectOnFocus = exports.SelectOnFocus = (_dec = (0, _aureliaTemplating.customAttribute)('selectonfocus'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function () {
    function SelectOnFocus(element) {
      _classCallCheck(this, SelectOnFocus);

      this.element = element;
      this.blockMouseUp = false;

      this._boundOnFocus = this.onFocus.bind(this);
      this._boundOnMouseDown = this.onMouseDown.bind(this);
      this._boundOnMouseUp = this.onMouseUp.bind(this);
    }

    SelectOnFocus.prototype.attached = function attached() {
      this.element.addEventListener('focus', this._boundOnFocus);
      this.element.addEventListener('mousedown', this._boundOnMouseDown);
      this.element.addEventListener('mouseup', this._boundOnMouseUp);
    };

    SelectOnFocus.prototype.detached = function detached() {
      this.element.removeEventListener('focus', this._boundOnFocus);
      this.element.removeEventListener('mousedown', this._boundOnMouseDown);
      this.element.removeEventListener('mouseup', this._boundOnMouseUp);
    };

    SelectOnFocus.prototype.onFocus = function onFocus() {
      this.element.select();
    };

    SelectOnFocus.prototype.onMouseDown = function onMouseDown() {
      this.blockMouseUp = this.element !== document.activeElement;
    };

    SelectOnFocus.prototype.onMouseUp = function onMouseUp(event) {
      if (this.blockMouseUp) {
        event.preventDefault();
      }
    };

    return SelectOnFocus;
  }()) || _class) || _class);
});