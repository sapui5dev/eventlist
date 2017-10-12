sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./utilities",
	"sap/ui/core/routing/History"
], function(BaseController, MessageBox, Utilities, History) {
	"use strict";

	return BaseController.extend("com.sap.build.standard.fmgConMonEventList.controller.ItemEdition1", {
		handleRouteMatched: function(oEvent) {

			var oParams = {};

			if (oEvent.mParameters.data.context) {
				this.sContext = oEvent.mParameters.data.context;
				var oPath;
				if (this.sContext) {
					oPath = {
						path: "/" + this.sContext,
						parameters: oParams
					};
					this.getView().bindObject(oPath);
				}
			}

		},
		_onInputValueHelpRequest4: function(oEvent) {

			var sDialogName = "Dialog2";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];
			var oSource = oEvent.getSource();
			var oBindingContext = oSource.getBindingContext();
			var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
			var oView;
			if (!oDialog) {
				this.getOwnerComponent().runAsOwner(function() {
					oView = sap.ui.xmlview({
						viewName: "com.sap.build.standard.fmgConMonEventList.view." + sDialogName
					});
					this.getView().addDependent(oView);
					oView.getController().setRouter(this.oRouter);
					oDialog = oView.getContent()[0];
					this.mDialogs[sDialogName] = oDialog;
				}.bind(this));
			}

			return new Promise(function(fnResolve) {
				oDialog.attachEventOnce("afterOpen", null, fnResolve);
				oDialog.open();
				if (oView) {
					oDialog.attachAfterOpen(function() {
						oDialog.rerender();
					});
				} else {
					oView = oDialog.getParent();
				}

				var oModel = this.getView().getModel();
				if (oModel) {
					oView.setModel(oModel);
				}
				if (sPath) {
					var oParams = oView.getController().getBindingParameters();
					oView.bindObject({
						path: sPath,
						parameters: oParams
					});
				}
			}.bind(this)).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onInputValueHelpRequest5: function(oEvent) {

			var sDialogName = "Dialog2";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];
			var oSource = oEvent.getSource();
			var oBindingContext = oSource.getBindingContext();
			var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
			var oView;
			if (!oDialog) {
				this.getOwnerComponent().runAsOwner(function() {
					oView = sap.ui.xmlview({
						viewName: "com.sap.build.standard.fmgConMonEventList.view." + sDialogName
					});
					this.getView().addDependent(oView);
					oView.getController().setRouter(this.oRouter);
					oDialog = oView.getContent()[0];
					this.mDialogs[sDialogName] = oDialog;
				}.bind(this));
			}

			return new Promise(function(fnResolve) {
				oDialog.attachEventOnce("afterOpen", null, fnResolve);
				oDialog.open();
				if (oView) {
					oDialog.attachAfterOpen(function() {
						oDialog.rerender();
					});
				} else {
					oView = oDialog.getParent();
				}

				var oModel = this.getView().getModel();
				if (oModel) {
					oView.setModel(oModel);
				}
				if (sPath) {
					var oParams = oView.getController().getBindingParameters();
					oView.bindObject({
						path: sPath,
						parameters: oParams
					});
				}
			}.bind(this)).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onInputValueHelpRequest6: function(oEvent) {

			var sDialogName = "Dialog2";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];
			var oSource = oEvent.getSource();
			var oBindingContext = oSource.getBindingContext();
			var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
			var oView;
			if (!oDialog) {
				this.getOwnerComponent().runAsOwner(function() {
					oView = sap.ui.xmlview({
						viewName: "com.sap.build.standard.fmgConMonEventList.view." + sDialogName
					});
					this.getView().addDependent(oView);
					oView.getController().setRouter(this.oRouter);
					oDialog = oView.getContent()[0];
					this.mDialogs[sDialogName] = oDialog;
				}.bind(this));
			}

			return new Promise(function(fnResolve) {
				oDialog.attachEventOnce("afterOpen", null, fnResolve);
				oDialog.open();
				if (oView) {
					oDialog.attachAfterOpen(function() {
						oDialog.rerender();
					});
				} else {
					oView = oDialog.getParent();
				}

				var oModel = this.getView().getModel();
				if (oModel) {
					oView.setModel(oModel);
				}
				if (sPath) {
					var oParams = oView.getController().getBindingParameters();
					oView.bindObject({
						path: sPath,
						parameters: oParams
					});
				}
			}.bind(this)).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onInputValueHelpRequest7: function(oEvent) {

			var sDialogName = "Dialog2";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];
			var oSource = oEvent.getSource();
			var oBindingContext = oSource.getBindingContext();
			var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
			var oView;
			if (!oDialog) {
				this.getOwnerComponent().runAsOwner(function() {
					oView = sap.ui.xmlview({
						viewName: "com.sap.build.standard.fmgConMonEventList.view." + sDialogName
					});
					this.getView().addDependent(oView);
					oView.getController().setRouter(this.oRouter);
					oDialog = oView.getContent()[0];
					this.mDialogs[sDialogName] = oDialog;
				}.bind(this));
			}

			return new Promise(function(fnResolve) {
				oDialog.attachEventOnce("afterOpen", null, fnResolve);
				oDialog.open();
				if (oView) {
					oDialog.attachAfterOpen(function() {
						oDialog.rerender();
					});
				} else {
					oView = oDialog.getParent();
				}

				var oModel = this.getView().getModel();
				if (oModel) {
					oView.setModel(oModel);
				}
				if (sPath) {
					var oParams = oView.getController().getBindingParameters();
					oView.bindObject({
						path: sPath,
						parameters: oParams
					});
				}
			}.bind(this)).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onUploadCollectionUploadComplete1: function(oEvent) {

			var oFile = oEvent.getParameter("files")[0];
			var iStatus = oFile ? oFile.status : 500;
			var sResponseRaw = oFile ? oFile.responseRaw : "";
			var oSourceBindingContext = oEvent.getSource().getBindingContext();
			var sSourceEntityId = oSourceBindingContext ? oSourceBindingContext.getProperty("ID") : null;
			var oModel = this.getView().getModel();

			return new Promise(function(fnResolve, fnReject) {
				if (iStatus !== 200) {
					fnReject(new Error("Upload failed"));
				} else if (oModel.hasPendingChanges()) {
					fnReject(new Error("Please save your changes, first"));
				} else if (!sSourceEntityId) {
					fnReject(new Error("No source entity key"));
				} else {
					try {
						var oResponse = JSON.parse(sResponseRaw);
						var oNewEntityInstance = {};

						oNewEntityInstance[""] = oResponse["ID"];
						oNewEntityInstance[""] = sSourceEntityId;
						oModel.createEntry("", {
							properties: oNewEntityInstance
						});
						oModel.submitChanges({
							success: function(oResponse) {
								var oChangeResponse = oResponse.__batchResponses[0].__changeResponses[0];
								if (oChangeResponse && oChangeResponse.response) {
									oModel.resetChanges();
									fnReject(new Error(oChangeResponse.message));
								} else {
									oModel.refresh();
									fnResolve();
								}
							},
							error: function(oError) {
								fnReject(new Error(oError.message));
							}
						});
					} catch (err) {
						var message = typeof err === "string" ? err : err.message;
						fnReject(new Error("Error: " + message));
					}
				}
			}).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onUploadCollectionChange1: function(oEvent) {

			var oUploadCollection = oEvent.getSource();
			var aFiles = oEvent.getParameter('files');

			if (aFiles && aFiles.length) {
				var oFile = aFiles[0];
				var sFileName = oFile.name;

				var oDataModel = this.getView().getModel();
				if (oUploadCollection && sFileName && oDataModel) {
					var sXsrfToken = oDataModel.getSecurityToken();
					var oCsrfParameter = new sap.m.UploadCollectionParameter({
						name: "x-csrf-token",
						value: sXsrfToken
					});
					oUploadCollection.addHeaderParameter(oCsrfParameter);
					var oContentDispositionParameter = new sap.m.UploadCollectionParameter({
						name: "content-disposition",
						value: "inline; filename=\"" + encodeURIComponent(sFileName) + "\""
					});
					oUploadCollection.addHeaderParameter(oContentDispositionParameter);
				} else {
					throw new Error("Not enough information available");
				}
			}
		},
		_onUploadCollectionTypeMissmatch1: function() {
			return new Promise(function(fnResolve) {
				sap.m.MessageBox.warning(
					"The file you are trying to upload does not have an authorized file type (JPEG, JPG, GIF, PNG, TXT, PDF, XLSX, DOCX, PPTX).", {
						title: "Invalid File Type",
						onClose: function() {
							fnResolve();
						}
					});
			}).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err);
				}
			});

		},
		_onUploadCollectionFileSizeExceed1: function() {
			return new Promise(function(fnResolve) {
				sap.m.MessageBox.warning("The file you are trying to upload is too large (10MB max).", {
					title: "File Too Large",
					onClose: function() {
						fnResolve();
					}
				});
			}).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err);
				}
			});

		},
		_onButtonPress14: function(oEvent) {

			oEvent = jQuery.extend(true, {}, oEvent);
			return new Promise(function(fnResolve) {
					fnResolve(true);
				})
				.then(function(result) {
					var oView = this.getView();
					var oController = this;

					return new Promise(function(fnResolve, fnReject) {
						var oModel = oController.oModel;

						var fnResetChangesAndReject = function(sMessage) {
							oModel.resetChanges();
							fnReject(new Error(sMessage));
						};
						if (oModel && oModel.hasPendingChanges()) {
							oModel.submitChanges({
								success: function(oResponse) {
									var oBatchResponse = oResponse.__batchResponses[0];
									var oChangeResponse = oBatchResponse.__changeResponses && oBatchResponse.__changeResponses[0];
									if (oChangeResponse && oChangeResponse.data) {
										var sNewContext = oModel.getKey(oChangeResponse.data);
										oView.unbindObject();
										oView.bindObject({
											path: "/" + sNewContext
										});
										if (window.history && window.history.replaceState) {
											window.history.replaceState(undefined, undefined, window.location.hash.replace(encodeURIComponent(oController.sContext),
												encodeURIComponent(sNewContext)));
										}
										oModel.refresh();
										fnResolve();
									} else if (oChangeResponse && oChangeResponse.response) {
										fnResetChangesAndReject(oChangeResponse.message);
									} else if (!oChangeResponse && oBatchResponse.response) {
										fnResetChangesAndReject(oBatchResponse.message);
									} else {
										oModel.refresh();
										fnResolve();
									}
								},
								error: function(oError) {
									fnReject(new Error(oError.message));
								}
							});
						} else {
							fnResolve();
						}
					});

				}.bind(this))
				.then(function(result) {
					if (result === false) {
						return false;
					} else {

						var oBindingContext = oEvent.getSource().getBindingContext();

						return new Promise(function(fnResolve) {

							this.doNavigate("list", oBindingContext, fnResolve, "");
						}.bind(this));

					}
				}.bind(this)).catch(function(err) {
					if (err !== undefined) {
						MessageBox.error(err.message);
					}
				});
		},
		doNavigate: function(sRouteName, oBindingContext, fnPromiseResolve, sViaRelation) {

			var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
			var oModel = (oBindingContext) ? oBindingContext.getModel() : null;

			var sEntityNameSet;
			if (sPath !== null && sPath !== "") {
				if (sPath.substring(0, 1) === "/") {
					sPath = sPath.substring(1);
				}
				sEntityNameSet = sPath.split("(")[0];
			}
			var sNavigationPropertyName;
			var sMasterContext = this.sMasterContext ? this.sMasterContext : sPath;

			if (sEntityNameSet !== null) {
				sNavigationPropertyName = sViaRelation || this.getOwnerComponent().getNavigationPropertyForNavigationWithContext(sEntityNameSet,
					sRouteName);
			}
			if (sNavigationPropertyName !== null && sNavigationPropertyName !== undefined) {
				if (sNavigationPropertyName === "") {
					this.oRouter.navTo(sRouteName, {
						context: sPath,
						masterContext: sMasterContext
					}, false);
				} else {
					oModel.createBindingContext(sNavigationPropertyName, oBindingContext, null, function(bindingContext) {
						if (bindingContext) {
							sPath = bindingContext.getPath();
							if (sPath.substring(0, 1) === "/") {
								sPath = sPath.substring(1);
							}
						} else {
							sPath = "undefined";
						}

						// If the navigation is a 1-n, sPath would be "undefined" as this is not supported in Build
						if (sPath === "undefined") {
							this.oRouter.navTo(sRouteName);
						} else {
							this.oRouter.navTo(sRouteName, {
								context: sPath,
								masterContext: sMasterContext
							}, false);
						}
					}.bind(this));
				}
			} else {
				this.oRouter.navTo(sRouteName);
			}

			if (typeof fnPromiseResolve === "function") {
				fnPromiseResolve();
			}
		},
		_onButtonPress15: function(oEvent) {

			oEvent = jQuery.extend(true, {}, oEvent);
			return new Promise(function(fnResolve) {
					fnResolve(true);
				})
				.then(function(result) {
					return new Promise(function(fnResolve) {
						sap.m.MessageBox.confirm("Are you sure you want to cancel your changes?", {
							title: "Cancel changes?",
							actions: ["Yes", "No"],
							onClose: function(sActionClicked) {
								fnResolve(sActionClicked === "Yes");
							}
						});
					});

				}.bind(this))
				.then(function(result) {
					if (result === false) {
						return false;
					} else {
						return new Promise(function(fnResolve) {
							var aChangedEntitiesPath, oChangedBindingContext;
							var oModel = this.oModel;
							if (oModel && oModel.hasPendingChanges()) {
								aChangedEntitiesPath = Object.keys(oModel.mChangedEntities);

								for (var j = 0; j < aChangedEntitiesPath.length; j++) {
									oChangedBindingContext = oModel.getContext("/" + aChangedEntitiesPath[j]);
									if (oChangedBindingContext && oChangedBindingContext.bCreated) {
										oModel.deleteCreatedEntry(oChangedBindingContext);
									}
								}
								oModel.resetChanges();
							}
							fnResolve();
						}.bind(this));

					}
				}.bind(this))
				.then(function(result) {
					if (result === false) {
						return false;
					} else {

						var oBindingContext = oEvent.getSource().getBindingContext();

						return new Promise(function(fnResolve) {

							this.doNavigate("list", oBindingContext, fnResolve, "");
						}.bind(this));

					}
				}.bind(this)).catch(function(err) {
					if (err !== undefined) {
						MessageBox.error(err.message);
					}
				});
		},
		onInit: function() {

			this.mBindingOptions = {};
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("ItemEdition1").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

			this.oModel = this.getOwnerComponent().getModel();

		}
	});
}, /* bExport= */ true);