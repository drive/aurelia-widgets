System.register([], function (_export) {
	'use strict';

	_export('configure', configure);

	function configure(aurelia) {
		aurelia.globalResources(['lookup-widget', 'autocomplete-widget']);
	}

	return {
		setters: [],
		execute: function () {}
	};
});