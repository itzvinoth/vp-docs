
## Toast

<br>
<su-button class="button button-blue" @click.native="successToast">Success</su-button><br><br>
<su-button class="button button-blue" @click.native="infoToast">Info</su-button><br><br>
<su-button class="button button-blue" @click.native="warningToast">Warning</su-button><br><br>
<su-button class="button button-blue" @click.native="errorToast">Error</su-button>

<script>
import Vue from 'vue'
export default {
	methods: {
		successToast: function () {
			this.$toast.success({
				message: "I am a toast with success message",
				orientation: this.$toast.TOP_RIGHT
			})
		},
		infoToast: function () {
			this.$toast.info({
				message: "I am a toast with info message",
				orientation: this.$toast.TOP_RIGHT
			})
		},
		warningToast: function () {
			this.$toast.warning({
				message: "I am a toast with warning message",
				orientation: this.$toast.TOP_RIGHT
			})
		},
		errorToast: function () {
			this.$toast.error({
				message: "I am a toast with error message",
				orientation: this.$toast.TOP_RIGHT
			})
		}
	}
}
</script>