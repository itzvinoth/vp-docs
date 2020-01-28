## Row events

When you want to work with row events you need to enable `row-events`. That will be described in this section, and on each row events we are getting row details.

### Usage
```vue
<template>
  <div>
    <su-table :headers="dataHoldingsHeader" :data="dataHoldings" row-events @rowEnter="onRowEnter" @rowLeave="onRowLeave" @rowClick="onRowClick" @rowKeyDown="onRowKeyDown">
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
    </su-table>
  </div>
</template>

<script>
export default {
  components: {
    "su-table": DataTable
  },
  data() {
    return {
      // headers and data arrays are presented in the above
      dataHoldingsHeader: headers,
      dataHoldings: data
    }
  },
  methods: {
    onRowEnter({ row }) {
      console.log('get row details when mouse pointer is moved onto an row element ', row)
    },
    onRowLeave({ row }) {
      console.log('get row details when mouse pointer is moved out of an row element ', row)
    },
    onRowClick ({ row }) {
      console.log('get row details on mouse click ', row)
    },
    onRowKeyDown ({ row }) {
      console.log('row key down')
    }
  },
}
</script>
```

<div>
  <su-table :headers="dataHoldingsHeader" :data="dataHoldings" row-events @rowEnter="onRowEnter" @rowLeave="onRowLeave" @rowClick="onRowClick" @rowKeyDown="onRowKeyDown">
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
  </su-table>
</div>

<script>
import DataTable from "../.vuepress/components/SimpleUI/components/DataTable"

export default {
  components: {
    "su-table": DataTable
  },
  data () {
    return {
      toolbar: false,
      dataHoldingsHeader: [{
        class: [],
        label: "Symbol",
        search: true,
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
      }]
    }
  },
  methods: {
    onRowEnter ({ row }) {
      console.log('get row details when mouse pointer is moved onto an row element ', row)
    },
    onRowLeave ({ row }) {
      console.log('get row details when mouse pointer is moved out of an row element ', row)
    },
    onRowClick ({ row }) {
      console.log('row click')
    },
    onRowKeyDown ({ row }) {
      console.log('row key down')
    }
  }
}
</script>
