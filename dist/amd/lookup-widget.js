define(["exports", "aurelia-framework", "jquery", "select2"], function (exports, _aureliaFramework, _jquery, _select2) {
   "use strict";

   var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

   var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

   Object.defineProperty(exports, "__esModule", {
      value: true
   });
   var Behavior = _aureliaFramework.Behavior;

   var $ = _interopRequire(_jquery);

   var select2 = _interopRequire(_select2);

   var LookupWidget = exports.LookupWidget = (function () {
      function LookupWidget(element) {
         _classCallCheck(this, LookupWidget);

         this.element = element;
      }

      _createClass(LookupWidget, {
         bind: {
            value: function bind() {
               this.apply();
            }
         },
         apply: {
            value: function apply() {
               var _this = this;

               setTimeout(function () {
                  //normally we dont need to do this but the query function on the select2, this becomes the jquery object on the callback
                  var self = _this;
                  $(_this.element).find("input").select2({
                     initSelection: function initSelection(element, callback) {
                        callback(self["interface"].setDefaultSelection());
                     },
                     placeholder: _this.placeholder,
                     formatSelection: self["interface"].formatSelection,
                     formatResult: self["interface"].formatItem,
                     query: (function (_query) {
                        var _queryWrapper = function query(_x) {
                           return _query.apply(this, arguments);
                        };

                        _queryWrapper.toString = function () {
                           return _query.toString();
                        };

                        return _queryWrapper;
                     })(function (query) {
                        self["interface"].search(query.term).then(function (result) {
                           query.callback({ results: result });
                        });
                     }),
                     width: "100%"
                  });

                  $(_this.element).find("input").select2("val", _this.value);
                  $(_this.element).find("input").on("change", function () {
                     _this.value = $(_this.element).find("input").select2("val");
                  });
               }, 100);
            }
         }
      }, {
         metadata: {
            value: function metadata() {
               return Behavior.customElement("lookup-widget").withProperty("interface").withProperty("title").withProperty("placeholder").withProperty("value");
            }
         },
         inject: {
            value: function inject() {
               return [Element];
            }
         }
      });

      return LookupWidget;
   })();
});