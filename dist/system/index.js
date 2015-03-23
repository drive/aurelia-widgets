System.register(["./lookup-widget", "./lookup-models"], function (_export) {
	var LookupWidget;

	_export("install", install);

	function install(aurelia) {
		aurelia.withResources(LookupWidget);
	}

	return {
		setters: [function (_lookupWidget) {
			for (var _key in _lookupWidget) {
				_export(_key, _lookupWidget[_key]);
			}

			LookupWidget = _lookupWidget.LookupWidget;
		}, function (_lookupModels) {
			for (var _key2 in _lookupModels) {
				_export(_key2, _lookupModels[_key2]);
			}
		}],
		execute: function () {
			"use strict";
		}
	};
});