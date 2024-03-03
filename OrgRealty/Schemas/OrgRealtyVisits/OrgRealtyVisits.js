define("OrgRealtyVisits", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "OrgVisitDateTime",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.OrgRealtyVisitsDS_OrgVisitDateTime_nsxxohl",
					"labelPosition": "above",
					"control": "$OrgRealtyVisitsDS_OrgVisitDateTime_nsxxohl",
					"pickerType": "datetime"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrgPotentialCustomer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.OrgRealtyVisitsDS_OrgPotentialCustomer_ksk2hzy",
					"labelPosition": "above",
					"control": "$OrgRealtyVisitsDS_OrgPotentialCustomer_ksk2hzy",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OrgOwner",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.OrgRealtyVisitsDS_OrgOwner_5ozmuap",
					"labelPosition": "above",
					"control": "$OrgRealtyVisitsDS_OrgOwner_5ozmuap",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OrgComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.OrgRealtyVisitsDS_OrgComment_3yju3zr",
					"labelPosition": "above",
					"control": "$OrgRealtyVisitsDS_OrgComment_3yju3zr",
					"multiline": true,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"OrgRealtyVisitsDS_OrgVisitDateTime_nsxxohl": {
						"modelConfig": {
							"path": "OrgRealtyVisitsDS.OrgVisitDateTime"
						}
					},
					"OrgRealtyVisitsDS_OrgPotentialCustomer_ksk2hzy": {
						"modelConfig": {
							"path": "OrgRealtyVisitsDS.OrgPotentialCustomer"
						}
					},
					"OrgRealtyVisitsDS_OrgOwner_5ozmuap": {
						"modelConfig": {
							"path": "OrgRealtyVisitsDS.OrgOwner"
						}
					},
					"OrgRealtyVisitsDS_OrgComment_3yju3zr": {
						"modelConfig": {
							"path": "OrgRealtyVisitsDS.OrgComment"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"OrgRealtyVisitsDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "OrgRealtyVisits"
							}
						}
					},
					"primaryDataSourceName": "OrgRealtyVisitsDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});