System.register(['aurelia-framework', 'jquery', 'select2'], function (_export) {
  var inject, bindable, customElement, TWO_WAY, $, select2, _classCallCheck, _createDecoratedClass, LookupWidget;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
      customElement = _aureliaFramework.customElement;
      TWO_WAY = _aureliaFramework.TWO_WAY;
    }, function (_jquery) {
      $ = _jquery['default'];
    }, function (_select2) {
      select2 = _select2['default'];
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      LookupWidget = (function () {
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
          decorators: [bindable],
          initializer: function () {},
          enumerable: true
        }, {
          key: 'placeholder',
          decorators: [bindable],
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

            setTimeout(function () {
              var self = _this;
              $(_this.element).find('input').select2({
                initSelection: function initSelection(element, callback) {
                  callback(self.controller.setDefaultSelection());
                },
                placeholder: _this.placeholder,
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

              $(_this.element).find('input').select2('val', _this.selectedItem);
              $(_this.element).find('input').on('change', function () {
                _this.selectedItem = $(_this.element).find('input').select2('val');
              });
            }, 100);
          }
        }], null, _instanceInitializers);

        LookupWidget = bindable({
          name: 'selectedItem',
          attribute: 'selected-item',
          defaultBindingMode: TWO_WAY
        })(LookupWidget) || LookupWidget;
        LookupWidget = bindable({
          name: 'controller',
          attribute: 'controller',
          defaultBindingMode: TWO_WAY
        })(LookupWidget) || LookupWidget;
        LookupWidget = customElement('lookup-widget')(LookupWidget) || LookupWidget;
        LookupWidget = inject(Element)(LookupWidget) || LookupWidget;
        return LookupWidget;
      })();

      _export('LookupWidget', LookupWidget);
    }
  };
});