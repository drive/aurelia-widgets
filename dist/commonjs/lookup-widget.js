'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _inject$bindable$customElement$bindingMode = require('aurelia-framework');

var _$ = require('jquery');

var _$2 = _interopRequireWildcard(_$);

var _select2 = require('select2');

var _select22 = _interopRequireWildcard(_select2);

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
    key: 'unbind',
    value: function unbind() {
      _$2['default'](this.element).find('input').select2('destroy');
    }
  }, {
    key: 'isShowing',
    get: function () {
      return this.title.length > 0;
    }
  }, {
    key: 'apply',
    value: function apply() {
      var _this = this;

      var self = this;
      _$2['default'](this.element).find('input').select2({
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

      _$2['default'](this.element).find('input').select2('val', this.selectedItem);
      _$2['default'](this.element).find('input').on('change', function () {
        _this.selectedItem = _$2['default'](_this.element).find('input').select2('val');
      });
    }
  }]);

  LookupWidget = _inject$bindable$customElement$bindingMode.bindable('placeholder')(LookupWidget) || LookupWidget;
  LookupWidget = _inject$bindable$customElement$bindingMode.bindable('title')(LookupWidget) || LookupWidget;
  LookupWidget = _inject$bindable$customElement$bindingMode.bindable({
    name: 'selectedItem',
    attribute: 'selected-item',
    defaultBindingMode: _inject$bindable$customElement$bindingMode.bindingMode.twoWay
  })(LookupWidget) || LookupWidget;
  LookupWidget = _inject$bindable$customElement$bindingMode.bindable({
    name: 'controller',
    attribute: 'controller',
    defaultBindingMode: _inject$bindable$customElement$bindingMode.bindingMode.twoWay
  })(LookupWidget) || LookupWidget;
  LookupWidget = _inject$bindable$customElement$bindingMode.customElement('lookup-widget')(LookupWidget) || LookupWidget;
  LookupWidget = _inject$bindable$customElement$bindingMode.inject(Element)(LookupWidget) || LookupWidget;
  return LookupWidget;
})();

exports.LookupWidget = LookupWidget;