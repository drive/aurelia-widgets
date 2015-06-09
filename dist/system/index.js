System.register([], function (_export) {
	_export('configure', configure);

	function configure(aurelia) {
		aurelia.globalizeResources('./lookup-widget');
	}

	return {
		setters: [],
		execute: function () {
			'use strict';
		}
	};
});