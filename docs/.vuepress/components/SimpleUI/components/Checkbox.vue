<template>
	<div class="su-checkbox-group" :class="groupClass">
        <input :checked="isChecked" :id="id" v-bind="$props" @change="handleInput" :value="currentValue" class="su-checkbox" type="checkbox">
        <label :for="id" class="su-checkbox-label">
			<span class="su-checkbox-box"><span class="su-checkbox-tick"></span></span>
			<span class="su-checkbox-value" v-if="currentLabel">{{ currentLabel }}</span>
		</label>
	</div>
</template>

<script>
	export default {
		name: "suCheckbox",
		componentName: "suCheckbox",
		props: {
			name: String,
			tabindex: Number,
			value: Boolean,
			disabled: Boolean,
			autofocus: Boolean,
			title: String,
			checked: Boolean,
			indeterminate: Boolean,

			label: {
				type: String,
				default: ""
			}
		},
		data () {
			return {
				attrs: {},
				id: "checkbox-0",
				currentLabel: this.label,
				currentValue: this.value,
				isChecked: this.checked,
				isIndeterminate: this.indeterminate
			}
		},
		mounted () {
			// Vue gives every component a unique id, _uid.
			this.id = "checkbox-" + this._uid

			if (this.value) {
				this.isChecked = true
			}
		},
		computed: {
			groupClass () {
				return {
					"indeterminate": this.isIndeterminate
				}
			}
		},
		watch: {
			label (newVal, oldVal) {
				if (oldVal !== newVal) {
					this.currentLabel = newVal
				}
			},
			value (value) {
				this.currentValue = value
				this.$emit("change", value)
				this.$emit("input", value)

				if (value) {
					this.isChecked = true
				} else {
					this.isChecked = false
				}
			},
			indeterminate (value) {
				this.isIndeterminate = value
			}
		},
		methods: {
			handleInput (event) {
				const v = event.target.checked
				this.isChecked = v
				this.currentValue = v

				this.$emit("input", v)
				this.$emit("change", event)
			}
		}
	}
</script>
