System.register([], function (_export) {
	_export("install", install);

	function install(aurelia) {
		aurelia.withResources("./lookup-widget");
	}

	return {
		setters: [],
		execute: function () {
			"use strict";
		}
	};
});