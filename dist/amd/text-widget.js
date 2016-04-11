define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-animator-velocity'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _aureliaAnimatorVelocity) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TextWidget = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class;

  var elasticEvents = ['keyup', 'cut', 'paste', 'change'];
  var ANIMATION_LENGTH = 200;var TextWidget = exports.TextWidget = (_dec = (0, _aureliaTemplating.customElement)('text-widget'), _dec2 = (0, _aureliaTemplating.bindable)({
    name: 'textValue',
    attribute: 'text-value',
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay
  }), _dec3 = (0, _aureliaTemplating.bindable)({
    name: 'disabled',
    attribute: 'disabled',
    defaultValue: false,
    defaultBindingMode: _aureliaBinding.bindingMode.oneWay
  }), _dec4 = (0, _aureliaTemplating.bindable)('placeholder'), _dec5 = (0, _aureliaTemplating.bindable)('label'), _dec6 = (0, _aureliaTemplating.bindable)({
    name: 'grabFocus',
    attribute: 'grab-focus',
    defaultValue: false
  }), _dec7 = (0, _aureliaTemplating.bindable)({
    name: 'multiline',
    attribute: 'multiline',
    defaultValue: false,
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec8 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaAnimatorVelocity.VelocityAnimator), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = function () {
    function TextWidget(element, animator) {
      _classCallCheck(this, TextWidget);

      this.element = element;
      this.animator = animator;
      this.boundResize = this.resize.bind(this);
      this.boundExpand = this._expand.bind(this);
      this.boundShrink = this._shrink.bind(this);
    }

    TextWidget.prototype.attached = function attached() {
      var _this = this;

      if (this.multiline) {
        this.input = this.element.querySelector('textarea');
        elasticEvents.forEach(function (event) {
          _this.input.addEventListener(event, _this.boundResize);
        });
        document.addEventListener('resize', this.boundResize);

        this.input.addEventListener('focus', this.boundExpand);
        this.input.addEventListener('blur', this.boundShrink);
      } else {
        this.input = this.element.querySelector('input');
      }
    };

    TextWidget.prototype.detached = function detached() {
      var _this2 = this;

      if (this.multiline) {
        elasticEvents.forEach(function (event) {
          _this2.input.removeEventListener(event, _this2.boundResize);
        });
        document.removeEventListener('resize', this.boundResize);
        this.input.removeEventListener('focus', this.boundExpand);
        this.input.removeEventListener('blur', this.boundShrink);
      }
    };

    TextWidget.prototype.resize = function resize() {
      this.input.style.height = this.optimalHeight + 'px';
    };

    TextWidget.prototype._expand = function _expand(e) {
      if (!this.minSize) {
        this.minSize = this.input.scrollHeight;
      }
      var contentHeight = this.optimalHeight;
      if (contentHeight > this.minSize) {
        this.animator.animate(this.input, { height: contentHeight + 'px' }, { duration: ANIMATION_LENGTH });
      }
    };

    TextWidget.prototype._shrink = function _shrink(e) {
      var contentHeight = this.optimalHeight;
      if (contentHeight > this.minSize) {
        this.animator.animate(this.input, { height: this.minSize + 'px' }, { duration: ANIMATION_LENGTH });
        if (this.textValue) {
          this.input.style.overflowY = 'scroll';
        }
      }
    };

    _createClass(TextWidget, [{
      key: 'optimalHeight',
      get: function get() {
        this.input.style.overflow = 'hidden';
        this.input.style.height = 'auto';
        var newSize = this.input.scrollHeight;
        if (newSize > this.minSize) {
          newSize += 20;
        }
        return newSize;
      }
    }]);

    return TextWidget;
  }()) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
});