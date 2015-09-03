System.register([], function (_export) {
	'use strict';

	_export('configure', configure);

	function configure(aurelia) {
		aurelia.globalResources(['lookup-widget', 'autocomplete-widget', 'combo']);
	}

	return {
		setters: [],
		execute: function () {}
	};
});