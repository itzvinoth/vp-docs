## Download CSV

```vue
<div>
	<DataTable :headers="dataHoldingsHeader" :data="dataHoldings" download-csv="table.csv">
		<template slot-scope="props">
			<td>
				{{ props.row.tradingsymbol }}
			</td>
			<td>
				{{ props.row.collateral_value }}
			</td>
			<td>
				{{ props.row.pledge_qty }}
			</td>
			<td>
				{{ props.row.loan_value }}
			</td>
		</template>
	</DataTable>
</div>

<script>
export default {
	data () {
		return {
			// headers and data arrays are presented in the above 
			dataHoldingsHeader: headers,
			dataHoldings: data
		}
	},

}
</script>
```

<div>
	<DataTable :headers="dataHoldingsHeader" :data="dataHoldings" download-csv="table.csv">
		<template slot-scope="props">
			<td>
				{{ props.row.tradingsymbol }}
			</td>
			<td>
				{{ props.row.collateral_value }}
			</td>
			<td>
				{{ props.row.pledge_qty }}
			</td>
			<td>
				{{ props.row.loan_value }}
			</td>
		</template>
	</DataTable>
</div>

<script>
export default {
	data () {
		return {
			dataHoldingsHeader: [{
				class: [],
				label: "Symbol",
				field: "tradingsymbol"
			}, {
				class: [],
				label: "Max available (₹)",
				field: "collateral_value"
			}, {
				class: [],
				label: "Pledge Qty",
				field: "pledge_qty"
			}, {
				class: [],
				label: "Amount required (₹)",
				field: "loan_value"
			}],
			dataHoldings: [{
	          "tradingsymbol": "QUICKHEAL",
	          "loan_value": 253.25,
	          "quantity": 1.0,
	          "pledge_qty": 1.0,
	          "collateral_value": 127.0
	        }, {
	          "tradingsymbol": "UPL",
	          "loan_value": 734.85,
	          "quantity": 1.0,
	          "pledge_qty": 1.0,
	          "collateral_value": 367.0
	        }, {
	          "tradingsymbol": "L&TFH",
	          "loan_value": 330.9,
	          "quantity": 2.0,
	          "pledge_qty": 2.0,
	          "collateral_value": 165.0
	        }, {
	          "tradingsymbol": "AXISBANK",
	          "loan_value": 7011.4,
	          "quantity": 11.0,
	          "pledge_qty": 11.0,
	          "collateral_value": 3506.0
	        }, {
	          "tradingsymbol": "WONDERLA",
	          "loan_value": 309.15,
	          "quantity": 1.0,
	          "pledge_qty": 1.0,
	          "collateral_value": 155.0
	        }, {
	          "tradingsymbol": "IDFCBANK",
	          "loan_value": 44.9,
	          "quantity": 1.0,
	          "pledge_qty": 1.0,
	          "collateral_value": 22.0
	        }],
		}
	},

}
</script>
