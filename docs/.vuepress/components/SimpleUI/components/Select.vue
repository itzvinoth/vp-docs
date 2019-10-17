<template>
	<div class="su-select">
		<select v-model="selected"
			ref="select"
			:multiple="multiple"
			:size="nativeSize"
			v-bind="$attrs"
			@blur="$emit('blur', $event)"
			@focus="$emit('focus', $event)">

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

		<span class="arrow arrow-show arrow desc"></span>
	</div>
</template>

<script>
	export default {
		name: "su-select",
		inheritAttrs: false,
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
