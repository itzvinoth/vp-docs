
## Toast

<br>
<su-button class="button button-blue" @click.native="btnClick">SUCCESS</su-button>

<script>
import Vue from 'vue'
export default {
	methods: {
		btnClick: function () {
			this.$toast.success({
				message: "I am a toast with success message",
				orientation: this.$toast.TOP_RIGHT
			})
		}
	}
}
</script>