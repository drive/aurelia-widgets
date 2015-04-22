define(['exports', 'aurelia-framework', 'jquery', 'select2'], function (exports, _aureliaFramework, _jquery, _select2) {
  'use strict';

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _$ = _interopRequire(_jquery);

  var _select22 = _interopRequire(_select2);

  var LookupWidget = (function () {
    var _instanceInitializers = {};

    function LookupWidget(element) {
      _classCallCheck(this, _LookupWidget);

      this.title = _instanceInitializers.title.call(this);
      this.placeholder = _instanceInitializers.placeholder.call(this);

      this.element = element;
    }

    var _LookupWidget = LookupWidget;

    _createDecoratedClass(_LookupWidget, [{
      key: 'title',
      decorators: [_aureliaFramework.bindable],
      initializer: function () {},
      enumerable: true
    }, {
      key: 'placeholder',
      decorators: [_aureliaFramework.bindable],
      initializer: function () {},
      enumerable: true
    }, {
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
    }], null, _instanceInitializers);

    LookupWidget = _aureliaFramework.bindable({
      name: 'selectedItem',
      attribute: 'selected-item',
      defaultBindingMode: _aureliaFramework.TWO_WAY
    })(LookupWidget) || LookupWidget;
    LookupWidget = _aureliaFramework.bindable({
      name: 'controller',
      attribute: 'controller',
      defaultBindingMode: _aureliaFramework.TWO_WAY
    })(LookupWidget) || LookupWidget;
    LookupWidget = _aureliaFramework.customElement('lookup-widget')(LookupWidget) || LookupWidget;
    LookupWidget = _aureliaFramework.inject(Element)(LookupWidget) || LookupWidget;
    return LookupWidget;
  })();

  exports.LookupWidget = LookupWidget;
});