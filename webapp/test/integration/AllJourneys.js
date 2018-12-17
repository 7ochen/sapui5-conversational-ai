/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"test/cai_integration/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"test/cai_integration/test/integration/pages/cai",
	"test/cai_integration/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "test.cai_integration.view.",
		autoWait: true
	});
});