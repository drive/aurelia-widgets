'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-animator-velocity'], function (_export, _context) {
  var customElement, bindable, bindingMode, inject, VelocityAnimator, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, elasticEvents, ANIMATION_LENGTH, TextWidget;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaAnimatorVelocity) {
      VelocityAnimator = _aureliaAnimatorVelocity.VelocityAnimator;
    }],
    execute: function () {
      _createClass = function () {
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

      elasticEvents = ['keyup', 'cut', 'paste', 'change'];
      ANIMATION_LENGTH = 200;

      _export('TextWidget', TextWidget = (_dec = customElement('text-widget'), _dec2 = bindable({
        name: 'textValue',
        attribute: 'text-value',
        defaultBindingMode: bindingMode.twoWay
      }), _dec3 = bindable({
        name: 'disabled',
        attribute: 'disabled',
        defaultValue: false,
        defaultBindingMode: bindingMode.oneWay
      }), _dec4 = bindable('placeholder'), _dec5 = bindable('label'), _dec6 = bindable({
        name: 'grabFocus',
        attribute: 'grab-focus',
        defaultValue: false
      }), _dec7 = bindable({
        name: 'multiline',
        attribute: 'multiline',
        defaultValue: false,
        defaultBindingMode: bindingMode.oneTime
      }), _dec8 = inject(Element, VelocityAnimator), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = function () {
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
            this.minSize = this.input.scrollHeight;

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
          this.animator.animate(this.input, { height: this.optimalHeight + 'px' }, { duration: ANIMATION_LENGTH });
        };

        TextWidget.prototype._shrink = function _shrink(e) {
          this.animator.animate(this.input, { height: this.minSize + 'px' }, { duration: ANIMATION_LENGTH });
          this.input.style.overflow = 'scroll';
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
      }()) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class));

      _export('TextWidget', TextWidget);
    }
  };
});