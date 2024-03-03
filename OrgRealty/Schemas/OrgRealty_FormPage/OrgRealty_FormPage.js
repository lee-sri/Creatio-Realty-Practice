define("OrgRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "OrgRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "2db2a949-98f0-4baa-99f2-e1dcb4fcdf73",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "OrgTitle",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.OrgName",
					"control": "$OrgName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrgPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_OrgPrice_ka5r3ox",
					"labelPosition": "auto",
					"control": "$PDS_OrgPrice_ka5r3ox"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OrgArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_OrgArea_tyehgxv",
					"labelPosition": "auto",
					"control": "$PDS_OrgArea_tyehgxv"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OrgRealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_OrgRealtyType_d1eixrd",
					"labelPosition": "auto",
					"control": "$PDS_OrgRealtyType_d1eixrd",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrgRealtyOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_OrgRealtyOfferType_0jetz8y",
					"labelPosition": "auto",
					"control": "$PDS_OrgRealtyOfferType_0jetz8y",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_9ntyrl4",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_9ntyrl4_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OrgRealtyOfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrgComment",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_OrgComment_5faihnx",
					"labelPosition": "auto",
					"control": "$PDS_OrgComment_5faihnx",
					"multiline": true,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Details_RealtyVisits",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_7w739q9_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": true,
					"titleWidth": "70",
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "small",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_2e3mmv0",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "Details_RealtyVisits",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_a5sys9v",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_2e3mmv0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_RealtyVisits",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_RealtyVisits_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "accent",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "OrgRealtyVisits",
							"defaultValues": [
								{
									"attributeName": "OrgParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_a5sys9v",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_ffs16z7",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_ffs16z7_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_6vsc994DS"
						}
					}
				},
				"parentName": "FlexContainer_a5sys9v",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_fa91mpg",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_fa91mpg_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_a5sys9v",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_g37qmj6",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_g37qmj6_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_6vsc994"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_fa91mpg",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_gdxaudf",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_gdxaudf_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "OrgRealtyVisits"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_fa91mpg",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_j4d6tzx",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_j4d6tzx_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_6vsc994"
					]
				},
				"parentName": "FlexContainer_a5sys9v",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_ipuiw23",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "Details_RealtyVisits",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_RealtyVisits",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_6vsc994",
					"activeRow": "$GridDetail_6vsc994_ActiveRow",
					"selectionState": "$GridDetail_6vsc994_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_6vsc994_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_6vsc994DS_Id",
					"columns": [
						{
							"id": "80540866-b1fb-57e1-425f-f419e62fa7f4",
							"code": "GridDetail_6vsc994DS_OrgVisitDateTime",
							"path": "OrgVisitDateTime",
							"caption": "#ResourceString(GridDetail_6vsc994DS_OrgVisitDateTime)#",
							"dataValueType": 7,
							"width": 153
						},
						{
							"id": "37af888c-eafc-3136-5533-593b1287d488",
							"code": "GridDetail_6vsc994DS_OrgPotentialCustomer",
							"path": "OrgPotentialCustomer",
							"caption": "#ResourceString(GridDetail_6vsc994DS_OrgPotentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 174
						},
						{
							"id": "49e097ba-f3d1-3e6c-c6a4-136e42054aec",
							"code": "GridDetail_6vsc994DS_OrgOwner",
							"path": "OrgOwner",
							"caption": "#ResourceString(GridDetail_6vsc994DS_OrgOwner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 114
						},
						{
							"id": "b5ebf34f-5bfe-3f7f-8af9-10d8f508762f",
							"code": "GridDetail_6vsc994DS_OrgComment",
							"path": "OrgComment",
							"caption": "#ResourceString(GridDetail_6vsc994DS_OrgComment)#",
							"dataValueType": 30
						}
					],
					"bulkActions": []
				},
				"parentName": "GridContainer_ipuiw23",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_6vsc994_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_6vsc994DS",
							"filters": "$GridDetail_6vsc994 | crt.ToCollectionFilters : 'GridDetail_6vsc994' : $GridDetail_6vsc994_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_6vsc994_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "GridDetail_RealtyVisits",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_6vsc994_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_6vsc994DS",
							"filters": "$GridDetail_6vsc994 | crt.ToCollectionFilters : 'GridDetail_6vsc994' : $GridDetail_6vsc994_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_6vsc994_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_6vsc994_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_6vsc994_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_6vsc994",
							"filters": "$GridDetail_6vsc994 | crt.ToCollectionFilters : 'GridDetail_6vsc994' : $GridDetail_6vsc994_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_6vsc994_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_RealtyVisits",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_6vsc994_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_6vsc994DS",
							"filters": "$GridDetail_6vsc994 | crt.ToCollectionFilters : 'GridDetail_6vsc994' : $GridDetail_6vsc994_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_6vsc994_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_RealtyVisits",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"OrgName": {
						"modelConfig": {
							"path": "PDS.OrgTitle"
						}
					},
					"PDS_OrgPrice_ka5r3ox": {
						"modelConfig": {
							"path": "PDS.OrgPrice"
						}
					},
					"PDS_OrgArea_tyehgxv": {
						"modelConfig": {
							"path": "PDS.OrgArea"
						}
					},
					"PDS_OrgRealtyType_d1eixrd": {
						"modelConfig": {
							"path": "PDS.OrgRealtyType"
						}
					},
					"PDS_OrgRealtyOfferType_0jetz8y": {
						"modelConfig": {
							"path": "PDS.OrgRealtyOfferType"
						}
					},
					"PDS_OrgComment_5faihnx": {
						"modelConfig": {
							"path": "PDS.OrgComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"GridDetail_jymqvaj": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_jymqvajDS",
							"filterAttributes": []
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_jymqvajDS_Name": {
									"modelConfig": {
										"path": "GridDetail_jymqvajDS.Name"
									}
								},
								"GridDetail_jymqvajDS_Id": {
									"modelConfig": {
										"path": "GridDetail_jymqvajDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_jymqvaj_PredefinedFilter": {
						"value": null
					},
					"GridDetail_6vsc994": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_6vsc994DS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_6vsc994DS_OrgVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_6vsc994DS.OrgVisitDateTime"
									}
								},
								"GridDetail_6vsc994DS_OrgPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_6vsc994DS.OrgPotentialCustomer"
									}
								},
								"GridDetail_6vsc994DS_OrgOwner": {
									"modelConfig": {
										"path": "GridDetail_6vsc994DS.OrgOwner"
									}
								},
								"GridDetail_6vsc994DS_OrgComment": {
									"modelConfig": {
										"path": "GridDetail_6vsc994DS.OrgComment"
									}
								},
								"GridDetail_6vsc994DS_Id": {
									"modelConfig": {
										"path": "GridDetail_6vsc994DS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_6vsc994DS": [
							{
								"attributePath": "OrgParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "OrgRealty"
						},
						"scope": "page"
					},
					"GridDetail_jymqvajDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Account",
							"attributes": {
								"Name": {
									"path": "Name"
								}
							}
						}
					},
					"GridDetail_6vsc994DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "OrgRealtyVisits",
							"attributes": {
								"OrgVisitDateTime": {
									"path": "OrgVisitDateTime"
								},
								"OrgPotentialCustomer": {
									"path": "OrgPotentialCustomer"
								},
								"OrgOwner": {
									"path": "OrgOwner"
								},
								"OrgComment": {
									"path": "OrgComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
					
					if (request.attributeName === 'PDS_OrgPrice_ka5r3ox') {
						const price = await request.$context.PDS_OrgPrice_ka5r3ox;

						/* Check the price range */
						if (price > 50000) {
							request.$context.enableAttributeValidator('PDS_OrgComment_5faihnx', 'required');
						} else {
							request.$context.disableAttributeValidator('PDS_OrgComment_5faihnx', 'required');
						}
					}
					return next?.handle(request);
        		}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});