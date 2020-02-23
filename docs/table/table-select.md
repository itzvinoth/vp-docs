## Table select

- Rows can be selectable by making first column as a selectable column. To perform selections you need to use `uid`, `select` and `row-events` attributes.
- values inside `tradingsymbol` are unique so that we added it to `uid`. and it prevents from selecting same elements multiple times.

### Usage

```vue
<template>
  <div>
    <su-table :headers="dataHoldingsHeader" :data="dataHoldings" :uid="uid" row-events select @selected="onSelect">
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
  data () {
    return {
      // values inside 'tradingsymbol' are unique. and it prevents from selecting same elements multiple times.
      uid: "tradingsymbol",
      // headers and data arrays are available in the table introduction section
      dataHoldingsHeader: headers,
      dataHoldings: data
    }
  },
  methods: {
    onSelect (value) {
      console.log('value as array ', value)
    }
  }
}
</script>
```

<div>
  <su-table :headers="dataHoldingsHeader" :data="dataHoldings" :uid="uid" row-events select @selected="onSelect">
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
      uid: "tradingsymbol",
      dataHoldingsHeader: [{
        class: [],
        search: true,
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
      }]
    }
  },
  methods: {
    onSelect (value) {
      console.log('value as array ', value)
    }
  }

}
</script>
