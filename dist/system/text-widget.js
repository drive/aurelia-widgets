'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-animator-velocity'], function (_export, _context) {
  "use strict";

  var customElement, bindable, bindingMode, inject, VelocityAnimator, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, ANIMATION_LENGTH, TextWidget;

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
      ANIMATION_LENGTH = 200;

      _export('TextWidget', TextWidget = (_dec = customElement('text-widget'), _dec2 = bindable({
        name: 'textValue',
        attribute: 'text-value',
        defaultBindingMode: bindingMode.twoWay,
        changeHandler: '_textValueChanged'
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
      }), _dec8 = bindable({
        name: 'readonly',
        defaultValue: false,
        defaultBindingMode: bindingMode.oneWay
      }), _dec9 = bindable({
        name: 'maxLength',
        attribute: 'max-length',
        defaultBindingMode: bindingMode.oneTime,
        defaultValue: null
      }), _dec10 = inject(Element, VelocityAnimator), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = _dec10(_class = function () {
        function TextWidget(element, animator) {
          _classCallCheck(this, TextWidget);

          this.element = element;
          this.animator = animator;
          this.boundExpand = this._expand.bind(this);
          this.boundShrink = this._shrink.bind(this);
          this.boundResize = this._resize.bind(this);

          this.maxHeight = window.innerHeight - 200;
        }

        TextWidget.prototype.attached = function attached() {
          if (this.multiline) {
            this.input = this.element.querySelector('textarea');

            this.minSize = Math.max(this._calcCurrentHeight(), 52);

            this.input.addEventListener('input', this.boundResize);
            this.input.addEventListener('focus', this.boundExpand);
            this.input.addEventListener('blur', this.boundShrink);
            document.addEventListener('resize', this.boundResize);

            this.optimalHeight = this._calcOptimalHeight();
            if (this.optimalHeight > this.minSize && this.textValue) {
              this.input.style.overflowY = 'scroll';
            }
          } else {
            this.input = this.element.querySelector('input');
          }

          if (this.maxLength) {
            this.input.setAttribute('maxlength', this.maxLength);
          }
        };

        TextWidget.prototype.detached = function detached() {
          if (this.multiline) {
            this.input.removeEventListener('input', this.boundResize);
            this.input.removeEventListener('focus', this.boundExpand);
            this.input.removeEventListener('blur', this.boundShrink);
            document.removeEventListener('resize', this.boundResize);
          }
        };

        TextWidget.prototype._calcCurrentHeight = function _calcCurrentHeight() {
          var rect = this.input.getBoundingClientRect();
          return rect.bottom - rect.top;
        };

        TextWidget.prototype._calcOptimalHeight = function _calcOptimalHeight() {
          this.input.style.height = 'auto';
          var scrollHeight = this.input.scrollHeight;
          if (scrollHeight > this.maxHeight) {
            this.input.style.overflowY = 'scroll';
            return this.maxHeight;
          }

          this.input.style.overflowY = 'hidden';
          return scrollHeight;
        };

        TextWidget.prototype._resize = function _resize() {
          var originalX = window.pageXOffset;
          var originalY = window.pageYOffset;
          this.optimalHeight = this._calcOptimalHeight();
          this.input.style.height = this.optimalHeight + 'px';
          window.scrollTo(originalX, originalY);
        };

        TextWidget.prototype._expand = function _expand(e) {
          if (this.optimalHeight > this.minSize) {
            this.animator.animate(this.input, { height: this.optimalHeight + 'px' }, { duration: ANIMATION_LENGTH });
          }
        };

        TextWidget.prototype._shrink = function _shrink(e) {
          if (this.optimalHeight > this.minSize) {
            this.animator.animate(this.input, { height: this.minSize + 'px' }, { duration: ANIMATION_LENGTH });
            if (this.textValue) {
              this.input.style.overflowY = 'scroll';
            }
          }
        };

        TextWidget.prototype._textValueChanged = function _textValueChanged() {
          this._resize();
        };

        return TextWidget;
      }()) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class));

      _export('TextWidget', TextWidget);
    }
  };
});