## Pagination


`su-table` supports basic pagination. So pagination controls how many rows are displayed per page. Below attributes are needed to add to the `su-table`

```vue
<su-table :headers="dataHoldingsHeader" :data="dataHoldings" pagination :per-page="perPage" :current-page="currentPage">
...
</su-table>

<script>
export default {
  data () {
    return {
      perPage: 2,
      currentPage: 1,
      // headers and data arrays are available in the table introduction section
      dataHoldingsHeader: headers,
      dataHoldings: data
    }
  }
}
</script>
```

<div>
  <su-table :headers="dataHoldingsHeader" :data="dataHoldings" pagination :per-page="perPage" :current-page="currentPage">
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
      perPage: 2,
      currentPage: 1,
      dataHoldingsHeader: [{
        class: [],
        label: "Symbol",
        field: "tradingsymbol",
        sort: false,
        tableBorder: false
      }, {
        class: [],
        label: "Max available (₹)",
        field: "collateral_value",
        tableBorder: false
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

<hr/>

### Pagination related props

We need to add below props to set pagination

|  Property  |  Description  |  Type  |  Default  |  Required  |
| ------------- | ------------- |:-----:| -----:| -----:|
|  pagination  | Enable pagination  |  Boolean  |  false  |  true  |
|  per-page  | Maximum number of rows displayed per page (Starts from 1)  |  Number  |  false  |  true  |
|  current-page  | Current page number (Starts from 1) |  Number  |  false  |  true  |
|  next-text  | Text for the next. |  String  |  Next  |  false  |
|  prev-text  | Text for the prev. |  String  |  Prev  |  false  |

