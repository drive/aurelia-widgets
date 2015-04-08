"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
* Abstract class for lookup widget
* Extend this class with your implementation that consumes your search API
*
* @class LookupAbstract
* @constructor HttpClient
*/

var LookupAbstract = exports.LookupAbstract = (function () {
    function LookupAbstract() {
        _classCallCheck(this, LookupAbstract);
    }

    _createClass(LookupAbstract, {
        setDefaultSelection: {
            value: function setDefaultSelection() {
                return { id: this.value, text: this.value };
            }
        },
        search: {
            value: function search(item) {
                //Override this class with your API to execute the query
                return new Promise(function (resolve) {
                    resolve({ response: [{ code: 1234, description: "Test" }] });
                });
            }
        },
        formatItem: {
            value: function formatItem(item) {
                return "<div class=\"select2-user-result\"><strong>" + item.code + "</strong> " + item.description + "</div>";
            }
        },
        formatSelection: {
            value: function formatSelection(item) {
                return item.code;
            }
        }
    });

    return LookupAbstract;
})();