System.register([], function (_export) {
    'use strict';

    var LookupAbstract;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            LookupAbstract = (function () {
                function LookupAbstract() {
                    _classCallCheck(this, LookupAbstract);
                }

                _createClass(LookupAbstract, [{
                    key: 'setDefaultSelection',
                    value: function setDefaultSelection() {
                        return { id: this.value, text: this.value };
                    }
                }, {
                    key: 'search',
                    value: function search(item) {
                        return new Promise(function (resolve) {
                            resolve({ response: [{ code: 1234, description: 'Test' }] });
                        });
                    }
                }, {
                    key: 'formatItem',
                    value: function formatItem(item) {
                        return '<div class="select2-user-result"><strong>' + item.code + '</strong> ' + item.description + '</div>';
                    }
                }, {
                    key: 'formatSelection',
                    value: function formatSelection(item) {
                        return item.code;
                    }
                }, {
                    key: 'id',
                    value: function id(item) {
                        return item.id;
                    }
                }]);

                return LookupAbstract;
            })();

            _export('LookupAbstract', LookupAbstract);
        }
    };
});