<template>
	<div :class="classes">

		<label v-if="this.staticLabel || this.animate" :class="labelClasses">{{ currentLabel }}</label>

		<input :type="type" ref="input" v-bind="$props" :placeholder="currentPlaceholder"
			@focus="onFocus()" @blur="onBlur()" @input="handleInput" :class="spinnerClasses" :value="currentValue" :readonly="readonly" autocorrect="off" autocapitalize="none">
		<checkmark-icon :class="iconStatusClasses" v-if="hasStatus" width="16" height="16"></checkmark-icon>

		<div>
			<span class="su-message" v-if="!noError && message">{{ message }}</span>
		</div>

	</div>
</template>

<script>
export default {
	props: {
		name: Number,
		minlength: Number,
		maxlength: Number,
		min: Number,
		max: Number,
		step: Number,
		value: [String, Number, Boolean],
		disabled: Boolean,
		readonly: Boolean,
		autofocus: Boolean,
		rows: Number,
		cols: Number,
		title: String,
		noerror: Boolean,
		errormessage: String,
		staticLabel: Boolean,
		hasStatus: {
			type: Boolean,
			default: false
		},
		hideSpinner: {
			type: Boolean,
			default: false
		},
		animate: {
			type: Boolean,
			default: true
		},
		type: {
			type: String,
			default: "text"
		},
		placeholder: {
			type: String,
			default: ""
		},
		label: {
			type: String,
			default: ""
		},
		rules: {
			type: Array,
			default: function () {
				return []
			}
		}
	},
	data () {
		return {
			currentValue: this.value,
			currentLabel: this.label,
			currentPlaceholder: this.placeholder,
			labelVisible: false,
			message: this.errormessage,
			noError: this.noerror
		}
	},
	watch: {
		value (newVal, oldVal, e) {
			// console.log(newVal, oldVal, e)
			if (oldVal !== newVal) {
				this.currentValue = newVal
			}

		// 	// Number min / max validation.
			// if (this.max && newVal > this.max) {
			// 	this.currentValue = this.max
			// }
		},
		placeholder (newVal, oldVal) {
			if (oldVal !== newVal) {
				this.currentPlaceholder = newVal
			}
		},
		label (newVal, oldVal) {
			if (oldVal !== newVal) {
				this.currentLabel = newVal
			}
		}
	},
	created () {
	},
	mounted () {
		this.$nextTick(() => {
			if (!this.label) {
				this.currentLabel = this.currentPlaceholder
			}

			if (this.currentValue) {
				this.onFocus()
			}
		})
	},
	computed: {
		classes () {
			return {
				"su-input-group": true,
				"su-error-state": false,
				"su-static-label": this.staticLabel,
				"disabled": this.disabled
			}
		},
		labelClasses () {
			return ["su-input-label", {"su-visible": this.labelVisible, "su-dynamic-label": !this.staticLabel}]
		},
		spinnerClasses () {
			return {
				"su-spinner": this.hideSpinner
			}
		},
		iconStatusClasses () {
			return {
				"icon": this.hasStatus
			}
		}
	},
	methods: {
		// Events.
		onFocus (event) {
			if (!this.currentValue) {
				this.labelVisible = true && this.animate
				if (this.animate) {
					this.currentPlaceholder = ""
				}
			}
			this.$emit("focus", event)
		},
		onBlur (event) {
			if (!this.currentValue) {
				this.labelVisible = false
				this.currentPlaceholder = this.placeholder
			}
			this.$emit("blur", event)
		},
		handleInput (event) {
			const v = event.target.value
			this.$emit("input", v)
			this.currentValue = v
			this.$emit("change", event)

			// Clear the error message when the value has changed.
			this.hideError()
		},
		// UI helpers.
		showLabel () {
			this.labelVisible = true
		},
		hideLabel () {
			this.labelVisible = false
		},
		showError (message) {
			this.classes["su-error-state"] = true
			this.message = message
		},
		hideError (message) {
			this.classes["su-error-state"] = false
			this.message = ""
		},
		validate () {
			this.hideError()

			// Go through each rule for the element.
			let okay = true
			for (let rule of this.rules) {
				if (rule instanceof Object && (rule.validator || rule.required)) {
					let err = null
					if (rule.required && (!this.currentValue || this.currentValue.toString().trim().length === 0)) {
						// Required field?
						if (rule.message) {
							err = Error(rule.message)
						} else {
							err = Error(this.currentLabel + " is required")
						}
					} else if (rule.validator) {
						// Execute the custom validator.
						err = rule.validator(rule, this.currentValue)
					}

					// There was an error. Show it and stop further error checks.
					if (err instanceof Error) {
						this.showError(err.message)
						this.$emit("error", err)

						okay = false
						break
					}
				}
			}

			return okay
		}
	}
}
</script>
