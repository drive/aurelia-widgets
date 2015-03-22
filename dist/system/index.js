System.register(["./widgets/lookup-widget", "./models/lookup-models"], function (_export) {
  return {
    setters: [function (_widgetsLookupWidget) {
      _export("LookupWidget", _widgetsLookupWidget.LookupWidget);
    }, function (_modelsLookupModels) {
      _export("LookupAbstract", _modelsLookupModels.LookupAbstract);
    }],
    execute: function () {
      "use strict";
    }
  };
});