define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'jquery', 'select2'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _jquery, _select2) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _$ = _interopRequireDefault(_jquery);

  var _select22 = _interopRequireDefault(_select2);

  var LookupWidget = (function () {
    function LookupWidget(element) {
      _classCallCheck(this, _LookupWidget);

      this.element = element;
    }

    _createClass(LookupWidget, [{
      key: 'bind',
      value: function bind() {
        this.apply();
      }
    }, {
      key: 'unbind',
      value: function unbind() {
        (0, _$['default'])(this.element).find('input').select2('destroy');
      }
    }, {
      key: 'apply',
      value: function apply() {
        var _this = this;

        var self = this;
        (0, _$['default'])(this.element).find('input').select2({
          initSelection: function initSelection(element, callback) {
            callback(self.controller.setDefaultSelection());
          },
          id: self.controller.id,
          placeholder: this.placeholder,
          formatSelection: self.controller.formatSelection,
          formatResult: self.controller.formatItem,
          query: function query(_query) {
            self.controller.search(_query.term).then(function (result) {
              _query.callback({ results: result });
            });
          },
          width: '100%'
        });

        (0, _$['default'])(this.element).find('input').select2('val', this.selectedItem);
        (0, _$['default'])(this.element).find('input').on('change', function () {
          _this.selectedItem = (0, _$['default'])(_this.element).find('input').select2('val');
        });
      }
    }, {
      key: 'isShowing',
      get: function get() {
        return this.title.length > 0;
      }
    }]);

    var _LookupWidget = LookupWidget;
    LookupWidget = (0, _aureliaTemplating.bindable)('placeholder')(LookupWidget) || LookupWidget;
    LookupWidget = (0, _aureliaTemplating.bindable)('title')(LookupWidget) || LookupWidget;
    LookupWidget = (0, _aureliaTemplating.bindable)({
      name: 'selectedItem',
      attribute: 'selected-item',
      defaultBindingMode: _aureliaBinding.bindingMode.twoWay
    })(LookupWidget) || LookupWidget;
    LookupWidget = (0, _aureliaTemplating.bindable)({
      name: 'controller',
      attribute: 'controller',
      defaultBindingMode: _aureliaBinding.bindingMode.twoWay
    })(LookupWidget) || LookupWidget;
    LookupWidget = (0, _aureliaTemplating.customElement)('lookup-widget')(LookupWidget) || LookupWidget;
    LookupWidget = (0, _aureliaDependencyInjection.inject)(Element)(LookupWidget) || LookupWidget;
    return LookupWidget;
  })();

  exports.LookupWidget = LookupWidget;
});