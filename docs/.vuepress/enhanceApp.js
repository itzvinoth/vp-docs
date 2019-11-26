import './styles/index.scss';
// import NumberModifier from './components/NumberModifier.vue'
import Events from './events'
import SimpleUI from './components/SimpleUI'
import VTooltip from 'v-tooltip'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // Vue.component('NumberModifier', require('./components/NumberModifier.vue'));
  // Vue.use(NumberModifier)
  Vue.use(SimpleUI)
  Vue.use(VTooltip)
  // Register events and pass it as prop to all child components
  let eventsInstance = new Events()
  Vue.prototype.$events = eventsInstance

  Vue.prototype.$toast = new SimpleUI.Toast(eventsInstance.eventBus)
}
