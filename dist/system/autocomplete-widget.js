System.register(['aurelia-framework', 'jquery', 'devbridge/jQuery-Autocomplete'], function (_export) {
  'use strict';

  var inject, bindable, customElement, bindingMode, $, autocomplete, AutoCompleteWidget;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
      customElement = _aureliaFramework.customElement;
      bindingMode = _aureliaFramework.bindingMode;
    }, function (_jquery) {
      $ = _jquery['default'];
    }, function (_devbridgeJQueryAutocomplete) {
      autocomplete = _devbridgeJQueryAutocomplete['default'];
    }],
    execute: function () {
      AutoCompleteWidget = (function () {
        function AutoCompleteWidget(element) {
          var _this = this;

          _classCallCheck(this, _AutoCompleteWidget);

          this.element = element;
          this._keyUpListener = (function (event) {
            if (_this.input.value.trim() === '') {
              _this.selectedItem = null;
              _this.displayedText = '';
            }
          }).bind(this);
        }

        _createClass(AutoCompleteWidget, [{
          key: 'bind',
          value: function bind() {
            this.input = this.element.querySelector('input');
            this.apply();
          }
        }, {
          key: 'unbind',
          value: function unbind() {
            $(this.input).autocomplete('dispose');
            this.input.removeEventListener('keyup', this._keyUpListener);
          }
        }, {
          key: 'apply',
          value: function apply() {
            $(this.input).autocomplete({
              lookup: this.lookup.bind(this),
              onSelect: this.onSelect.bind(this)
            });
            this.input.addEventListener('keyup', this._keyUpListener);
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

            this.displayedText = suggestion.value;
          }
        }]);

        var _AutoCompleteWidget = AutoCompleteWidget;
        AutoCompleteWidget = bindable('placeholder')(AutoCompleteWidget) || AutoCompleteWidget;
        AutoCompleteWidget = bindable('title')(AutoCompleteWidget) || AutoCompleteWidget;
        AutoCompleteWidget = bindable({
          name: 'displayedText',
          attribute: 'displayed-text',
          defaultBindingMode: bindingMode.twoWay
        })(AutoCompleteWidget) || AutoCompleteWidget;
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