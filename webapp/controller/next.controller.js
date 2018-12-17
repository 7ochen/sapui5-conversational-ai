sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("test.cai_integration.controller.next", {
		onInit: function () {

			//delete conversational AI
			var s = document.getElementById("recast-webchat-div");
			console.log("recast-webchat-div:",s);
			if (s === null) {} else {
				document.body.removeChild(s);
			}
		},
		onNavBack: function (oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Targetcai", true);
			}
		}
	});

});