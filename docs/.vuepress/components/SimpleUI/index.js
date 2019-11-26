import Vue from "vue"
import Form from "./components/Form"
import Input from "./components/Input"
import Radio from "./components/Radio"
import Checkbox from "./components/Checkbox"
import Button from "./components/Button"
import Switch from "./components/Switch"
import Loader from "./components/Loader"
import Modal from "./components/Modal"
import Toast from "./components/Toast.vue"
import Select from "./components/Select.vue"
import RadioGroup from "./components/RadioGroup"
import TinyTabs from "./components/TinyTabs"
// import Avatar from "./components/Avatar"
// import tooltip from "src/directives/tooltip"
import DataTable from "./components/DataTable"

export default class SimpleUI {}

SimpleUI.install = function (Vue, options) {
	// let eventBus = new Vue()

	Vue.component("su-form", Form)
	Vue.component("su-input", Input)
	Vue.component("su-radio-group", RadioGroup)
	Vue.component("su-radio", Radio)
	Vue.component("su-checkbox", Checkbox)
	Vue.component("su-button", Button)
	Vue.component("su-switch", Switch)
	Vue.component("su-loader", Loader)
	Vue.component("su-modal", Modal)
	Vue.component("su-tiny-tabs", TinyTabs)
	// Vue.component("su-avatar", Avatar)
	Vue.component("su-select", Select)
	Vue.component("su-table", DataTable)
	// Vue.directive("tooltip", tooltip)
}

let ToastConstructor = Vue.extend(Toast)

SimpleUI.Toast = class ToastClass {
	constructor (eventBus) {
		this.eventBus = eventBus
		this.component = this.mountComponent(eventBus)

		// Orientation constants.
		this.TOP_LEFT = this.component.orientations.TOP_LEFT
		this.TOP_CENTER = this.component.orientations.TOP_CENTER
		this.TOP_RIGHT = this.component.orientations.TOP_RIGHT
		this.BOTTOM_LEFT = this.component.orientations.BOTTOM_LEFT
		this.BOTTOM_CENTER = this.component.orientations.BOTTOM_CENTER
		this.BOTTOM_RIGHT = this.component.orientations.BOTTOM_RIGHT
	}

	mountComponent (eventBus) {
		let instance = new ToastConstructor({
			propsData: {
				eventBus: eventBus
			}
		})

		instance.vm = instance.$mount()
		document.body.appendChild(instance.vm.$el)
		return instance
	}

	open (options) {
		this.eventBus.$emit("su-toast", options)
	}

	success (options) {
		options.type = this.component.types.SUCCESS
		this.eventBus.$emit("su-toast", options)
	}

	error (options) {
		options.type = this.component.types.ERROR
		this.eventBus.$emit("su-toast", options)
	}

	info (options) {
		options.type = this.component.types.INFO
		this.eventBus.$emit("su-toast", options)
	}

	warning (options) {
		options.type = this.component.types.WARNING
		this.eventBus.$emit("su-toast", options)
	}

	loading (options) {
		options.type = this.component.types.LOADING
		this.eventBus.$emit("su-toast", options)
	}
}

