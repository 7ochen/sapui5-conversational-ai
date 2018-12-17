sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("test.cai_integration.controller.cai", {
		onPress: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("TargetNext", {} );
		},
		onAfterRendering: function () {
			//called at first time.  not called when navigated from other views
			this.renderRecastChatBot();
		},
		
		//Show Conversational AI
		renderRecastChatBot: function () {
			if (!document.getElementById("recast-webchat")) {
				var s = document.createElement("script");
				s.setAttribute("src", "https://cdn.recast.ai/webchat/webchat.js");
				s.setAttribute("id", "recast-webchat");
				s.setAttribute("token", "1535e2e72ac4aa5c9831337b439d5bcf");
				s.setAttribute("channelId", "170e9ea4-92e2-46ce-bf37-01b3b6f7147a");
				document.body.appendChild(s);
			}
		}
	});
});