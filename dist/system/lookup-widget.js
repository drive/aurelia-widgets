System.register(['aurelia-framework', 'jquery', 'select2'], function (_export) {
  var inject, bindable, customElement, bindingMode, $, select2, _classCallCheck, _createClass, LookupWidget;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
      customElement = _aureliaFramework.customElement;
      bindingMode = _aureliaFramework.bindingMode;
    }, function (_jquery) {
      $ = _jquery['default'];
    }, function (_select2) {
      select2 = _select2['default'];
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      LookupWidget = (function () {
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
            $(this.element).find('input').select2('destroy');
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
            $(this.element).find('input').select2({
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

            $(this.element).find('input').select2('val', this.selectedItem);
            $(this.element).find('input').on('change', function () {
              _this.selectedItem = $(_this.element).find('input').select2('val');
            });
          }
        }]);

        LookupWidget = bindable('placeholder')(LookupWidget) || LookupWidget;
        LookupWidget = bindable('title')(LookupWidget) || LookupWidget;
        LookupWidget = bindable({
          name: 'selectedItem',
          attribute: 'selected-item',
          defaultBindingMode: bindingMode.twoWay
        })(LookupWidget) || LookupWidget;
        LookupWidget = bindable({
          name: 'controller',
          attribute: 'controller',
          defaultBindingMode: bindingMode.twoWay
        })(LookupWidget) || LookupWidget;
        LookupWidget = customElement('lookup-widget')(LookupWidget) || LookupWidget;
        LookupWidget = inject(Element)(LookupWidget) || LookupWidget;
        return LookupWidget;
      })();

      _export('LookupWidget', LookupWidget);
    }
  };
});