## Sorting

Enable sorting for columns by setting the `sort` attribute.

```vue
<su-table :headers="dataHoldingsHeader" :data="dataHoldings" sort>
...
</su-table>
```

### Sort related props

We can add below props to enable sorting on any column.

|  Property  |  Description  |  Type  |  Default  |
| ------------- | ------------- |:-----:| -----:|
|  sort  | To enable sorting on any column  |  Boolean  |  false  |
|  sortArrow  | Use up or down arrow to represent "sort ascending or descending" at table header  |  Boolean  |  false  |
|  arrowShowDefault  | Arrow to show default or else it shows on mouseover |  Boolean  |  false  |


```js
let dataHoldingsHeader = [{
  // Here enabled sorting on tradingsymbol column only
  class: [],
  label: "Symbol",
  field: "tradingsymbol",
  sort: true,
  sortArrow: true,
  arrowShowDefault: true
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
}]
```

```vue
<div>
  <su-table :headers="dataHoldingsHeader" :data="dataHoldings" sort>
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
export default {
  components: {
    "su-table": DataTable
  },
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
  <su-table :headers="dataHoldingsHeader" :data="dataHoldings" sort>
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
      dataHoldingsHeader: [{
        class: [],
        label: "Symbol",
        field: "tradingsymbol",
        sort: true,
        sortArrow: true,
        arrowShowDefault: true
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
