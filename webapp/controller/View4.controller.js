sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("SalesOrder.SO.controller.View4", {
		onInit: function () {
			// var router = sap.ui.core.UIComponent.getRouterFor(this);
			// router.getRoute("RouteView3").attachPatternMatched(this._onObjectMatched, this);
		},
		onNavBack: function(){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("RouteView1", {});
		}
	});
});