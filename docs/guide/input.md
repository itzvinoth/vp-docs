
## Input
Input component. `su-input`

#### Auto focus
```html
<su-input type="text" v-model="afocus" autofocus static-label no-error label="Auto focus"></su-input>
```

<su-input type="text" v-model="afocus" autofocus static-label no-error label="Auto focus"></su-input>
<br>

#### Normal
```html
<su-input type="text" v-model="name"  static-label no-error label="Enter name" placeholder="Enter your name"></su-input>
```

<su-input type="text" v-model="name" static-label no-error label="Name" placeholder="Enter your name"></su-input>
<br>

#### Min & Max
```html
<!-- type number with min value 28 -->
<su-input type="number" v-model="age" static-label no-error label="Enter age" :min="28"></su-input>
```

<su-input type="number" v-model="age" static-label no-error :min="28" label="Age"></su-input>
<br>

#### Step
```html
<!-- step -->
<su-input type="number" v-model="volumn" :min="28" :step="step" label="Volume"></su-input>
```

<su-input type="number" v-model="volumn" static-label no-error :min="28" :step="step" label="Volume"></su-input>
<br>

#### Rules
```html
<!-- not working, needs to check it later -->
<su-input type="number" v-model="username" static-label no-error :rules="rules.username"></su-input>
```

<su-input type="text" v-model="username" :rules="rules.userName"></su-input>
<br>

#### Events
```html
<su-input type="text" v-model="fname" static-label no-error @focus="onFocus" @blur="onBlur" @input="handleInput" :min="28" label="Father name"></su-input>
```

<!-- adding input events -->
<su-input type="text" v-model="fname" static-label no-error @focus="onFocus" @blur="onBlur" @input="handleInput" :min="28" label="Father name"></su-input>
<br>

#### Dynamic label
```html
<su-input type="text" v-model="mname" dynamic-label no-error label="Father name" placeholder="Father name" @input="handleInput"></su-input>
```
<su-input type="text" v-model="mname" dynamic-label :no-error="false" :message="'yes it error'" label="Father name" placeholder="Father name"></su-input>
<br>

#### Max length
```html
<su-input type="text" v-model="length" :maxlength="6" static-label no-error label="Auto focus"></su-input>
```

<su-input type="text" v-model="length" :maxlength="6" static-label no-error label="Maximum length"></su-input>
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
