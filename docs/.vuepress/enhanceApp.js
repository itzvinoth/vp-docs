import './styles/index.scss';
import Button from './components/Button.vue'
import Loader from './components/Loader.vue'
import Input from './components/Input.vue'
import Select from './components/Select.vue'
import RadioGroup from './components/RadioGroup.vue'
import Radio from './components/Radio.vue'
import NumberModifier from './components/NumberModifier.vue'
import DataTable from './components/DataTable.vue'
import deepClone from "lodash/cloneDeep"
import VTooltip from 'v-tooltip'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // Vue.component('NumberModifier', require('./components/NumberModifier.vue'));
  Vue.component("su-button", Button)
  Vue.component("su-loader", Loader)
  Vue.component("su-input", Input)
  Vue.component("su-select", Select)
  Vue.component("su-radio-group", RadioGroup)
  Vue.component("su-radio", Radio)
  Vue.use(NumberModifier)
  Vue.use(DataTable)
  Vue.use(VTooltip)
  Vue.prototype.$clone = deepClone
}