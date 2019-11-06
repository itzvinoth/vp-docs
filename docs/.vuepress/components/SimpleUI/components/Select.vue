<template>
	<div class="su-select">
		<select v-model="selected"
			ref="select"
			:multiple="multiple"
			:size="nativeSize"
			v-bind="$attrs"
			@change="onChange($event)"
			@blur="onBlur($event)"
			@focus="onFocus($event)">

			<option
				v-if="placeholder"
				:value="null"
				selected
				disabled
				hidden>
				{{ placeholder }}
			</option>
			<slot></slot>
		</select>

		<chevron-bottom-icon class="icon" width="16" height="16"></chevron-bottom-icon>
	</div>
</template>

<script>
import { ChevronBottomIcon } from 'vue-bytesize-icons'
	export default {
		name: "su-select",
		inheritAttrs: false,
		components: {
			ChevronBottomIcon
		},
		props: {
			value: {
				type: [String, Number, Boolean, Object, Array, Symbol, Function],
				default: null
			},
			placeholder: String,
			multiple: Boolean,
			nativeSize: [String, Number]
		},
		data () {
			return {
				selected: this.value,
				_isSelect: true,
				_elementRef: "select"
			}
		},
		methods: {
			onBlur (event) {
				this.isFocused = false
				this.$emit('blur', event)
			},
			onChange (event) {
				this.$emit('change', event)
			},
			onFocus (event) {
				this.isFocused = true
				this.$emit('focus', event)
			}
		},
		watch: {
			value (value) {
				this.selected = value
				!this.isValid
			},
			selected (value) {
				this.$emit("input", value)
				!this.isValid
			}
		}
	}
</script>
