System.register(['aurelia-framework', 'jquery', 'devbridge/jQuery-Autocomplete'], function (_export) {
  var inject, bindable, customElement, bindingMode, computedFrom, $, autocomplete, _classCallCheck, _createDecoratedClass, AutoCompleteWidget;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
      customElement = _aureliaFramework.customElement;
      bindingMode = _aureliaFramework.bindingMode;
      computedFrom = _aureliaFramework.computedFrom;
    }, function (_jquery) {
      $ = _jquery['default'];
    }, function (_devbridgeJQueryAutocomplete) {
      autocomplete = _devbridgeJQueryAutocomplete['default'];
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      AutoCompleteWidget = (function () {
        function AutoCompleteWidget(element) {
          _classCallCheck(this, _AutoCompleteWidget);

          this.element = element;
        }

        var _AutoCompleteWidget = AutoCompleteWidget;

        _createDecoratedClass(_AutoCompleteWidget, [{
          key: 'bind',
          value: function bind() {
            this.apply();
          }
        }, {
          key: 'isShowing',
          decorators: [computedFrom('title')],
          get: function () {
            return this.title != undefined && this.title.length > 0;
          }
        }, {
          key: 'apply',
          value: function apply() {
            $(this.element).find('input').autocomplete({
              lookup: this.lookup.bind(this),
              onSelect: this.onSelect.bind(this)
            });
          }
        }, {
          key: 'lookup',
          value: function lookup(query, done) {
            this.controller.search(query).then(function (results) {
              done(results);
            });
          }
        }, {
          key: 'onSelect',
          value: function onSelect(suggestion) {
            this.selectedItem = suggestion.data;
          }
        }]);

        AutoCompleteWidget = bindable('title')(AutoCompleteWidget) || AutoCompleteWidget;
        AutoCompleteWidget = bindable({
          name: 'selectedItem',
          attribute: 'selected-item',
          defaultBindingMode: bindingMode.twoWay
        })(AutoCompleteWidget) || AutoCompleteWidget;
        AutoCompleteWidget = bindable({
          name: 'controller',
          attribute: 'controller',
          defaultBindingMode: bindingMode.twoWay
        })(AutoCompleteWidget) || AutoCompleteWidget;
        AutoCompleteWidget = customElement('autocomplete-widget')(AutoCompleteWidget) || AutoCompleteWidget;
        AutoCompleteWidget = inject(Element)(AutoCompleteWidget) || AutoCompleteWidget;
        return AutoCompleteWidget;
      })();

      _export('AutoCompleteWidget', AutoCompleteWidget);
    }
  };
});