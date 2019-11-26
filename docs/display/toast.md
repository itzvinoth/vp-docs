
## Toast

Display a toast message globally.

### When to use
To display a toast message at any of the four corners of the viewport. Typically it can be
used in the following cases:

> A notification with complex content.

> A notification providing a feedback based on the user interaction. Or it may show some details about upcoming steps the user may have to follow.

> A notification that is pushed by the application.

Example
```vue
<template>
	<su-button class="button button-blue" @click.native="successToast">Open success toast</su-button>
</template>

<script>
export default {
    methods: {
		successToast: function () {
			this.$toast.success({
				message: "I am a toast with success message",
				orientation: this.$toast.TOP_RIGHT
			})
		}
	}
}
</script>
```

<br>
<su-button class="button button-blue" @click.native="successToast">Open success toast</su-button><br><br>
<su-button class="button button-blue" @click.native="infoToast">Open info toast</su-button><br><br>
<su-button class="button button-blue" @click.native="warningToast">Open warning toast</su-button><br><br>
<su-button class="button button-blue" @click.native="errorToast">Open error toast</su-button>

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

|  Property  |  Description  |  Type  |  Accepted values  |  Default  |
|:------------- |:-----------|:-----:|:-------------|:-----:|
| type | Type of toast | Function | `success`, `info`, `warning`, `error`| - |
| message | Content of toast | String | - | - |
| duration | Duration of the notification | String | - | 3000(ms) |
| orientation | Position of Notification, can be like `this.$toast.TOP_RIGHT` | Object | - | - |
