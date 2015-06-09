define(['exports', 'aurelia-framework', 'jquery', 'select2'], function (exports, _aureliaFramework, _jquery, _select2) {
  'use strict';

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _$ = _interopRequire(_jquery);

  var _select22 = _interopRequire(_select2);

  var LookupWidget = (function () {
    function LookupWidget(element) {
      _classCallCheck(this, _LookupWidget);

      this.element = element;
    }

    var _LookupWidget = LookupWidget;

    _createClass(_LookupWidget, [{
      key: 'bind',
      value: function bind() {
        this.apply();
      }
    }, {
      key: 'apply',
      value: function apply() {
        var _this = this;

        var self = this;
        _$(this.element).find('input').select2({
          initSelection: function initSelection(element, callback) {
            callback(self.controller.setDefaultSelection());
          },
          id: self.controller.id,
          placeholder: this.placeholder,
          formatSelection: self.controller.formatSelection,
          formatResult: self.controller.formatItem,
          query: (function (_query) {
            function query(_x) {
              return _query.apply(this, arguments);
            }

            query.toString = function () {
              return _query.toString();
            };

            return query;
          })(function (query) {
            self.controller.search(query.term).then(function (result) {
              query.callback({ results: result });
            });
          }),
          width: '100%'
        });

        _$(this.element).find('input').select2('val', this.selectedItem);
        _$(this.element).find('input').on('change', function () {
          _this.selectedItem = _$(_this.element).find('input').select2('val');
        });
      }
    }]);

    LookupWidget = _aureliaFramework.bindable('placeholder')(LookupWidget) || LookupWidget;
    LookupWidget = _aureliaFramework.bindable('title')(LookupWidget) || LookupWidget;
    LookupWidget = _aureliaFramework.bindable({
      name: 'selectedItem',
      attribute: 'selected-item',
      defaultBindingMode: _aureliaFramework.bindingMode.twoWay
    })(LookupWidget) || LookupWidget;
    LookupWidget = _aureliaFramework.bindable({
      name: 'controller',
      attribute: 'controller',
      defaultBindingMode: _aureliaFramework.bindingMode.twoWay
    })(LookupWidget) || LookupWidget;
    LookupWidget = _aureliaFramework.customElement('lookup-widget')(LookupWidget) || LookupWidget;
    LookupWidget = _aureliaFramework.inject(Element)(LookupWidget) || LookupWidget;
    return LookupWidget;
  })();

  exports.LookupWidget = LookupWidget;
});