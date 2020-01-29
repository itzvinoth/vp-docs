
## Toast

Display a toast message globally.

### When to use
To display a toast message at any of the four corners of the viewport. Typically it can be
used in the following cases:

> A notification with complex content.

> A notification providing a feedback based on the user interaction. Or it may show some details about upcoming steps the user may have to follow.

> A notification that is pushed by the application.

### Usage
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
				orientation: this.$toast.TOP_RIGHT,
				duration: 4000
			})
		}
	}
}
</script>
```

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

<br>
<div class="container">
  <div class="row">
		<div class="three columns">
			<su-button class="button button-green" @click.native="successToast">success</su-button>
		</div>
		<div class="three columns">
			<su-button class="button button-blue" @click.native="infoToast">info</su-button>
		</div>
		<div class="three columns">
			<su-button class="button button-yellow" @click.native="warningToast">warning</su-button>
		</div>
		<div class="three columns">
			<su-button class="button button-orange" @click.native="errorToast">error</su-button>
		</div>
	</div>
</div>
<br><br><br><br>

|  Property  |  Description  |  Type  |  Accepted values  |  Default  |
|:------------- |:-----------|:-----:|:-------------|:-----:|
| type | Type of toast | Function | `success`, `info`, `warning`, `error`| - |
| message | Content of toast | String | - | - |
| duration | Duration of the notification | String | - | 3000(ms) |
| orientation | Position of Notification, can be like `this.$toast.TOP_RIGHT` | Object | - | - |


<style src="../.vuepress/styles/grid.css" scoped></style>
<style scoped>
	.button {
		padding: 10px 20px !important;
		width: 100%;
	}
</style>