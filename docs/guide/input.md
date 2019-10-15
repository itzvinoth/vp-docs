
## Input
Input component. `su-input`

#### Basic

A basic input field, if `static-label` present, then the label is statically fixed on top of the input field.
```html
<su-input type="text" v-model="name" static-label label="Enter name" placeholder="Enter your name"></su-input>
```

<su-input type="text" v-model="name" static-label label="Enter name" placeholder="Enter your name"></su-input>
<br>

#### Auto focus

A Boolean attribute which, if present, indicates that the input should automatically have [focus](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autofocus) when the page has finished loading.

```html
<su-input type="text" v-model="afocus" autofocus static-label label="Auto focus"></su-input>
```

<su-input type="text" v-model="afocus" autofocus static-label label="Auto focus"></su-input>
<br>

#### Dynamic label

If `dynamic-label` present, then the animated label appears.

```html
<su-input type="text" v-model="mname" dynamic-label label="Father name" placeholder="Father name"></su-input>
```
<su-input type="text" v-model="mname" dynamic-label label="Father name" placeholder="Father name"></su-input>
<br>

#### Max length
```html
<su-input type="text" v-model="maxLen" :maxlength="6" static-label label="Auto focus"></su-input>
```

<su-input type="text" v-model="maxLen" :maxlength="6" static-label label="Maximum length"></su-input>
<br>

#### Events
```html
<su-input type="text" v-model="fname" static-label @focus="onFocus" @blur="onBlur" @input="handleInput" :min="28" label="Father name"></su-input>
```

<!-- adding input events -->
<su-input type="text" v-model="fname" static-label @focus="onFocus" @blur="onBlur" @input="handleInput" :min="28" label="Father name"></su-input>
<br>

#### Min & Max

Supports the range by `min` and `max`
```html
<!-- type number with min value 28 -->
<su-input type="number" v-model="age" static-label no-error label="Enter age" :min="28"></su-input>
```

<su-input type="number" v-model="age" static-label no-error :min="28" label="Age"></su-input>
<br>

#### Step

A numeric input box whose values can be increased or decreased using a value step. The default `step` takes integer 1.

```html
<su-input type="number" v-model="volumn" :min="28" :step="3" label="Volume"></su-input>
```

<su-input type="number" v-model="volumn" static-label :min="28" :step="3" label="Volume"></su-input>
<br>

#### Rules
```html
<!-- not working, needs to check it later -->
<su-input type="number" v-model="username" static-label :rules="rules.username"></su-input>
```

<su-input type="text" v-model="username" static-label :rules="rules.userName"></su-input>
<br>

#### Hide number spinners

In some use cases number field spinner looks ugly. For that case include `hide-spinner` attribute to hide the spinner from the number field.
```html
<su-input type="number" hide-spinner v-model="nospin" static-label label="Enter age"></su-input>
```

<su-input type="number" hide-spinner v-model="nospin" static-label label="Enter age"></su-input>
<br>

#### Maximum length for type number

```html
<su-input type="number" v-model="pin" :maxlength="6" static-label label="PIN"></su-input>
```

<su-input type="number" v-model="pin" :maxlength="6" static-label label="PIN"></su-input>
<br>


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
			maxLen: 'WX9090',
			volumn: 28,
			username: '',
			nospin: 0,
			pin: 123456,
			rules: {
				userName: [{
					validator: minMaxValidate,
					min: 6,
					label: "User Name"
				}]
			}
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
