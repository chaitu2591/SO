jQuery.sap.require("sap.m.MessageToast");
jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("jquery.sap.global");
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("SalesOrder.SO.controller.View2", {
		onInit: function () {
			// var router = sap.ui.core.UIComponent.getRouterFor(this);
			// router.getRoute("RouteView2").attachPatternMatched(this._onObjectMatched, this);
				
		
		},			//End of onInit
		onNavBack: function(){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("RouteView1", {});
		},
		deleteRow: function(){
			var table = this.getView().byId("__table1");
			var selected = table.getSelectedItems();
			var msg;
			if (selected["length"] === 0){
			msg = "Please select atleast one row";
					sap.m.MessageBox.show(msg, {
					icon: sap.m.MessageBox.Icon.ERROR,
					title: "Error"
			});
			}else{
			var length = selected.length;
			for (var i = 0; i <= length; i++) {
				selected[i].destroy();
			}
			}
		},			//Delete row EOM
		addRow: function(){
		var fnCreateSimpleDialogColumns = function(){
		return[
			new sap.m.Column({
					hAlign: "Begin",
					header: new sap.m.Label({
							text: "Item No",
							width: "50%"
					})
			}),
			new sap.m.Column({
					header: new sap.m.Label({
							text: "Material",
					})
			}),
			new sap.m.Column({
					header: new sap.m.Label({
							text: "Plant",
					})
			}),
			new sap.m.Column({
					header: new sap.m.Label({
							text: "Storage Location",
					})
			}),
			new sap.m.Column({
					header: new sap.m.Label({
							text: "Quantity",
					})
			}),
			new sap.m.Column({
					header: new sap.m.Label({
							text: "Gross Weight",
					})
			}),
			new sap.m.Column({
					header: new sap.m.Label({
							text: "Net Weight",
					})
			}),
			new sap.m.Column({
					header: new sap.m.Label({
							text: "Unit",
					})
			})
			];
		};					//simple dialog eom
		var oItemTemplate2 = new sap.m.ColumnListItem({
		type: "Active",
		unread: false,
		cells: [
			new sap.m.Label({
						text: "{ItmNumber}"
						}),
			new sap.m.Label({
						text: "{Material}"
						}),
			new sap.m.Label({
						text: "{Plant}"
						}),
			new sap.m.Label({
						text: "{StoreLoc}"
						}),
			new sap.m.Label({
						text: "{TargetQty}"
						}),
			new sap.m.Label({
						text: "{GrossWght}"
						}),	
			new sap.m.Label({
						text: "{NetWeight}"
						}),				
			new sap.m.Label({
						text: "{UntofWght}"
						}),				
		]
		});			//end of item template
	var table = this.getView().byId("__table1");
	var data = new sap.m.ColumnListItem({
		cells: [
		new sap.m.Input({
		width: "50%",
		editable: true
		}),
		new sap.m.Input({
			showValueHelp: false,
			width: "70%",
			// showTableSuggestionValueHelp: true,
			// getTableIndex: function fget(){
			// var contexts = sap.ui.getCore().byId("__table1").getSelectedContexts();
			// if (contexts === "") {
			// 	sap.m.MessageToast.show("Please Select a row to get index");
			// 	} else {
			// 	var oTable = sap.ui.getCore().byId("__table1");
			// 	var oSelectedItem = oTable.getSelectedItem();
			// 	var index = oTable.indexOfItem(oSelectedItem);
			// 	sap.m.MessageToast.show("Selected Index is : " + index);
			// 	}	
			// }
			// valueHelpRequest: function f4mat(id){
			// 	var field = id.getParameters();
			// 	window.gvar = field.id;
			// 	var oDialog = new sap.m.TableSelectDialog("Dialog1", {
			// 	title: "Material Search",
			// 	noDataText: "No Search Found",
			// 	cancel: function() {
			// 	sap.ui.getCore().byId("Dialog1").destroy();
			// 	columns: [fnCreateSimpleDialogColumns()],
			// 	liveChange: function(oEvent) {
			// 	var sValue = oEvent.getParameter("value");
			// 	var filters = [ new sap.ui.model.Filter("Matnr", sap.ui.model.FilterOperator.Contains, sValue)];
			// 	var oFilter = new sap.ui.model.Filter(filters, false);
			// 	var oBinding = oEvent.getSource().getBinding("items");
			// 	oBinding.filter([oFilter]);
			// 	},
			// 	confirm: function(oEvent){
			// 	var valueSel = oEvent.getParameters().selectedItem.mAggregations.cells[0].mProperties.text;
			// 	var unit = oEvent.getParameters().selectedItem.mAggregations.cells[2].mProperties.text;
			// 	var first = window.gvar.split("t")[0];
			// 	first = first + "t";
			// 	var newinput = parseInt(window.gvar.split("t")[1]);
			// 	newinput = newinput + 2;
			// 	first = first + newinput;
			// 	var quan = sap.ui.getCore().byId(first);
			// 	quan.setValue(unit);
			// 	var type = sap.ui.getCore().byId(window.gvar);
			// 	type.setValue(valueSel);
			// 	sap.ui.getCore().byId("Dialog1").destroy();

			// 	} //end of confirm function
			// 	}
			// 	});	//end of oDilaog
			// }
		}),
		new sap.m.Input({
		width: "50%",
		editable: true
		}),
		new sap.m.Input({
		width: "50%",
		editable: true
		}),
		new sap.m.Input({
		width: "50%",
		editable: true
		}),
		new sap.m.Input({
		width: "50%",
		editable: true
		}),
		new sap.m.Input({
		width: "50%",
		editable: true
		}),
		new sap.m.Input({
		width: "50%",
		editable: true
		}),
		]
		});		//end of data
	table.addItem(data);
	},		//End of addrow Method
	
		onCreateSO: function(){
			var oView = this.getView();
			var msg;
			var oResults = {};
			var header = oView.byId("__table0");
			var headDetail = header.getItems();
			var table = oView.byId("__table1");
			var items = table.getItems();
			if (items.length > 0) {
				for (var i = 0; i < items.length; i++){
					if (items[i].mAggregations.cells[1].mProperties.value === "") {
					msg = "Please Enter a Material in item " + (i + 1);
					sap.m.MessageBox.show(msg, {
					icon: sap.m.MessageBox.Icon.ERROR,
					title: "Error"
					});
				}else if (items[i].mAggregations.cells[4].mProperties.value === ""){
					msg = "Please Enter a Quantity in item " + (i + 1);
					sap.m.MessageBox.show(msg, {
					icon: sap.m.MessageBox.Icon.ERROR,
					title: "Error"
				});
			}else{
			//	create the final data table
			var itemNo = 10;
			for (var i = 0; i < items.length; i++){
				var head = headDetail[0].getCells();
				oResults.SalesOrg = "H001";
				oResults.DistrChan = "01";
				oResults.Division = "01";
				oResults.DocType = "TA";
				oResults.PurchNoC = "ARYA";
				oResults.PartnNumb = "EXCUSHP01";
				var data = items[i].getCells();
				oResults.ItmNumber = data[0]._lastValue;
				oResults.Material = data[1]._lastValue;
				oResults.Plant = data[2]._lastValue;
				oResults.StoreLoc = data[3]._lastValue;
				oResults.TargetQty = data[4]._lastValue;
				oResults.GrossWght = data[5]._lastValue;
				oResults.NetWeight = data[6]._lastValue;
				oResults.UntofWght = data[7]._lastValue;
				oResults.Flag = "";
				if (i === items.length - 1) {
				oResults.Flag = "X";
				}
				this.onClickCreate(oResults);
				itemNo = itemNo + 10;
			}
			}
		}
		}
		},		//End of Create SO method
	onClickCreate: function(oResults) {
		var oContext = this;
		var oView = this.getView();
		var oModel = new sap.ui.model.json.JSONModel();
		oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZRKB_SO_INFO_SRV/");
		// oModel.setUseBatch	(true);
		var message;
		oModel.create("/ZSalesOrder_setSet", oResults, {
			async: true,
			success: function(oData, response) {
			//success
			var mess = response.headers["sap-message"];
			var temp = mess.split("<message>")[1];
			var vbeln = temp.split("</message>")[0];
			// var vbeln = temp.slice(6,16);
		
			message = "Sales Order " + vbeln + " created succesfully";
			
			sap.m.MessageBox.show(message, {
				icon: sap.m.MessageBox.Icon.SUCCESS,
				title: "Success",
				onClose: function onOkay(){
				// var oRouter = sap.ui.core.UIComponent.getRouterFor(oContext);
				// oRouter.navTo("RouteView1", {});
			
		// 		oModel.refresh(true);
				var table = oView.byId("__table0");
				var headDetail = table.getItems();
				for (var i = 0; i < headDetail.length; i++) {
				// var head = headDetail[0].getCells();
				headDetail[i].mAggregations.cells[4].mProperties.value = "";
				headDetail[i].mAggregations.cells[5].mProperties.value = "";
				// head[5]._lastValue = "";
				// head[4]._lastValue = "";
			}
		// var table1 = oView.byId("__table1");
		// var itemDetail = table.getItems();
		// for (var i = 0; i < itemDetail.length; i++){
		// 	var item = itemDetail[0].getCells();
		// 	item[0]._lastValue = " ";
		// 	item[1]._lastValue = " ";
		// 	item[2]._lastValue = " ";
		// 	item[3]._lastValue = " ";
		// 	item[4]._lastValue = " ";
		// 	item[5]._lastValue = " ";
		// }
		 	}
			});
			},
				error: function(oError) {
				message = oError.message;
				//oError.response.body.substring(oError.response.body.indexOf(":lang"), oError.response.body.indexOf("</message>")).slice(11);
				
				sap.m.MessageBox.show(message, {
					icon: sap.m.MessageBox.Icon.ERROR,
					title: "Error"
				});
				}

				
			});

		
	}					//End of onClickCreate mthod
	
});
});