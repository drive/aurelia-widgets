System.register([], function (_export) {
	'use strict';

	_export('configure', configure);

	function configure(aurelia) {
		aurelia.globalResources(['lookup-widget', 'autocomplete-widget', 'combo', 'text-widget', 'checkbox', 'radiobutton', 'currency-input']);
	}

	return {
		setters: [],
		execute: function () {}
	};
});