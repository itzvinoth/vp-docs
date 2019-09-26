<template>
	<button :disabled="isDisabled" :type="type" :title="title">
		<slot v-if="!isProcessing"></slot>
		<su-loader v-if="isProcessing" :size="12"></su-loader>
	</button>
</template>

<script>
	export default {
		props: {
			disabled: Boolean,
			processing: Boolean,
			title: String,

			type: {
				type: String,
				default: "button"
			}
		},
		data () {
			return {
				isProcessing: this.processing,
				isDisabled: this.disabled
			}
		},
		watch: {
			processing (newVal, oldVal) {
				this.isProcessing = newVal
			},
			disabled (newVal, oldVal) {
				this.isDisabled = newVal
			}
		}
	}
</script>
