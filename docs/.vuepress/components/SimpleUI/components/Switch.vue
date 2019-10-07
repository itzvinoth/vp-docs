<template>
	<div class="su-switch-group">
		<span v-if="stateOffLabel" class="su-switch-label su-switch-state-off">{{ stateOffLabel }}</span>

		<input :checked="isChecked" :id="id" v-bind="$props" @change="handleInput"
			:value="currentValue" class="su-switch" type="checkbox">

		<label :for="id" class="su-switch-control">{{ currentLabel }}</label>

		<span v-if="stateOnLabel" class="su-switch-label su-switch-state-on">{{ stateOnLabel }}</span>
	</div>
</template>

<script>
	export default {
		name: "suSwitch",
		componentName: "suSwitch",
		props: {
			name: String,
			tabindex: Number,
			disabled: Boolean,
			autofocus: Boolean,
			title: String,

			value: String || Boolean,
			stateOn: String || Boolean,
			stateOff: String || Boolean,
			stateOnLabel: String,
			stateOffLabel: String,

			label: {
				type: String,
				default: ""
			}
		},
		data () {
			return {
				currentValue: this.value,
				isChecked: (this.value === this.stateOn),
				currentLabel: this.label,
				id: "switch-0",
				attrs: {}
			}
		},
		mounted () {
			// Vue gives every component a unique id, _uid.
			this.id = "switch-" + this._uid

			// 'on' or checked state. Switch toggled to the right.
			this.isChecked = (this.value === this.stateOn)
		},
		watch: {
			value (val) {
				this.currentValue = val
				this.isChecked = (val === this.stateOn)
			}
		},
		methods: {
			handleInput (event) {
				this.isChecked = event.target.checked
				this.currentValue = event.target.checked ? this.stateOn : this.stateOff

				this.$emit("input", this.currentValue)
				this.$emit("change", event)
			}
		}
	}
</script>
