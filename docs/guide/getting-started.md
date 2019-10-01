# Getting Started

::: tip
This section is a step-by-step tutorial with some concepts, and we recommend that you read it completely before using
this plugin.
:::

## Document Classifier

`Document classifier` is a set of functions that can classify pages with the same characteristics. For a blog developer, the same characteristics may exist between different pages as follows:

- Pages put in a directory (e.g. `_post`)
- Pages containing the same specific frontmatter key value (e.g. `tag: js`).

Of course, both of them may be related to another common requirement, `pagination`.

So, how to combine them skillfully? Next, let's take a look at how this plugin solve these problems.

<!-- _coverpage.md -->

## Button

Clickable button can be used in forms or anywhere in a document to perform an operation.

```html
<su-button class="button button-blue">Primary</su-button>
<su-button class="button button-grey" :disabled="true">Disabled</su-button>
<su-button class="button button-outline">Cancel</su-button>
<su-button class="button button-blue" :processing=true></su-button>
```
<su-button class="button button-blue">Primary</su-button>
<su-button class="button button-grey" :disabled="true">Disabled</su-button>
<su-button class="button button-outline">Cancel</su-button>
<su-button class="button button-blue" :processing="true"></su-button>

## Input
Input component. `su-input`

#### Demo
```html
<su-input type="text" v-model="name"  static-label no-error label="Enter name" placeholder="Enter your name"></su-input>

<!-- type number with min value 28 -->
<su-input type="number" v-model="age" static-label no-error label="Enter age" :min="28"></su-input>

<!-- step -->
<su-input type="number" v-model="volumn" :min="28" :step="step" label="Volume"></su-input>

<!-- rules -->
<!-- not working, needs to check it later -->
<su-input type="number" v-model="username" static-label no-error :rules="rules.username"></su-input>

<!-- adding input events -->
<su-input type="text" v-model="fname" static-label no-error @focus="onFocus" @blur="onBlur" @input="handleInput" :min="28" label="Father name"></su-input>

<!-- dynamic label -->
<su-input type="text" v-model="mname" dynamic-label no-error label="Father name" placeholder="Father name" @input="handleInput"></su-input>

<!-- auto focus -->
<su-input type="text" v-model="afocus" autofocus static-label no-error label="Auto focus"></su-input>

<!-- Max & Min length -->
<su-input type="text" v-model="length" :maxlength="6" static-label no-error label="Auto focus"></su-input>

<script>
export default {
	methods: {
		onFocus: function () {
			console.log('on focus')
		},
		onBlur: function () {
			console.log('on blur')
		},
		handleInput: function ($event) {
			console.log('handleInput', $event)
		}
	}
}
</script>
```

<su-input type="text" v-model="name" static-label no-error label="Name" placeholder="Enter your name"></su-input>
<br>
<su-input type="number" v-model="age" static-label no-error :min="28" label="Age"></su-input>
<br>
<su-input type="number" v-model="volumn" static-label no-error :min="28" :step="step" label="Volume"></su-input>
<br>
<su-input type="text" v-model="username" :rules="rules.userName"></su-input>
<br>
<!-- adding input events -->
<su-input type="text" v-model="fname" static-label no-error @focus="onFocus" @blur="onBlur" @input="handleInput" :min="28" label="Father name"></su-input>
<br>
<su-input type="text" v-model="mname" dynamic-label :no-error="false" :message="'yes it error'" label="Father name" placeholder="Father name"></su-input>
<br>
<su-input type="text" v-model="afocus" autofocus static-label no-error label="Auto focus"></su-input>
<br>
<su-input type="text" v-model="length" :maxlength="6" static-label no-error label="Maximum length"></su-input>

## Select
<br>

<su-select v-model="gender">
	<option value="male">Male</option>
	<option value="female">Female</option>
</su-select>
<br>

<su-select v-model="maritalStatus" :multiple="true">
	<option value="married">Married</option>
	<option value="unmarried">Unmarried</option>
</su-select>
<br>
<su-radio-group v-model="fruits">
	<su-radio label="Apple" value="apple"> Apple </su-radio>
	<su-radio label="Orange" value="orange"> Orange </su-radio>
</su-radio-group>

## Checkbox
<br>
<su-checkbox v-model="bike" label="Bike"></su-checkbox>
<su-checkbox v-model="car" label="Car"></su-checkbox>

## Switch
<br>
<su-switch v-model="order" state-on-label="Sell" state-off-label="Buy" state-on="SELL" state-off="BUY"></su-switch>

## Toast


<script>
import Vue from 'vue'
export default {
	data () {
		let minMaxValidate = (rule, value) => {
			if (rule.min) {
				if (value.length < rule.min) {
					return new Error(rule.label + " should be minimum " + rule.min + " characters.")
				}
			}
		}
		return {
			name: 'Bob',
			age: 30,
			fname: '',
			mname: '',
			afocus: '',
			length: '',
			volumn: 28,
			step: 3,
			username: '',
			rules: {
				userName: [{
					validator: minMaxValidate,
					min: 6,
					label: "User Name"
				}]
			},
			gender: 'male',
			maritalStatus: ['married'],
			fruits: 'orange',
			bike: false,
			car: true,
			order: 'BUY'
		}
	},
	methods: {
		onFocus: function () {
			console.log('on focus')
		},
		onBlur: function () {
			console.log('on blur')
		},
		handleInput: function ($event) {
			console.log('handleInput', $event)
		}
	}
}
</script>

<style lang="scss" src="../.vuepress/styles/index.scss" scoped></style>
