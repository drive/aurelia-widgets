System.register([], function (_export) {
	'use strict';

	_export('configure', configure);

	function configure(aurelia) {
		aurelia.globalizeResources('./lookup-widget');
		aurelia.globalizeResources('./autocomplete-widget');
	}

	return {
		setters: [],
		execute: function () {}
	};
});