System.register(['aurelia-framework', 'jquery', 'devbridge/jQuery-Autocomplete'], function (_export) {
  var inject, bindable, customAttribute, bindingMode, computedFrom, $, autocomplete, _classCallCheck, _createClass, AutoCompleteWidget;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
      customAttribute = _aureliaFramework.customAttribute;
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

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      AutoCompleteWidget = (function () {
        function AutoCompleteWidget(element) {
          _classCallCheck(this, _AutoCompleteWidget);

          this.element = element;
        }

        var _AutoCompleteWidget = AutoCompleteWidget;

        _createClass(_AutoCompleteWidget, [{
          key: 'bind',
          value: function bind() {
            this.apply();
          }
        }, {
          key: 'apply',
          value: function apply() {
            $(this.element).autocomplete({
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
        AutoCompleteWidget = customAttribute('autocomplete-widget')(AutoCompleteWidget) || AutoCompleteWidget;
        AutoCompleteWidget = inject(Element)(AutoCompleteWidget) || AutoCompleteWidget;
        return AutoCompleteWidget;
      })();

      _export('AutoCompleteWidget', AutoCompleteWidget);
    }
  };
});