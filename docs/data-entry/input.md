
## Input

<div ref="pageTopElem">
Input component. `su-input`
</div>

<div v-if="propertyInput === 'basic'">

#### Basic

A basic input field, if `static-label` present, then the label is statically fixed on top of the input field.

```html
<su-input type="text" v-model="name" placeholder="Enter your name"></su-input>
```

<su-input type="text" v-model="name" placeholder="Enter your name"></su-input>
<br>
</div>

<div v-if="propertyInput === 'autofocus'">

#### Auto focus

A Boolean attribute which, if present, indicates that the input should automatically have [focus](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autofocus) when the page has finished loading.

```html
<su-input type="text" v-model="afocus" autofocus static-label label="Auto focus"></su-input>
```

<su-input type="text" v-model="afocus" autofocus static-label label="Auto focus"></su-input>
<br>
</div>

<div v-if="propertyInput === 'staticlabel'">

#### Static label

If `static-label` present, then the animated label appears.

```html
<su-input type="text" v-model="mname" static-label label="Father name" placeholder="Father name"></su-input>
```
<su-input type="text" v-model="mname" static-label label="Father name" placeholder="Father name"></su-input>
<br>
</div>

<div v-if="propertyInput === 'dynamiclabel'">

#### Dynamic label

If `dynamic-label` present, then the animated label appears.

```html
<su-input type="text" v-model="mname" dynamic-label label="Father name" placeholder="Father name"></su-input>
```
<su-input type="text" v-model="mname" dynamic-label label="Father name" placeholder="Father name"></su-input>
<br>
</div>

<div v-if="propertyInput === 'maxlength'">

#### Maximum length

Specifies the maximum number of characters that can be entered in a text-type input.

```html
<su-input type="text" v-model="maxLen" :maxlength=6 static-label label="Maximum length"></su-input>
```

<su-input type="text" v-model="maxLen" :maxlength=6 static-label label="Maximum length"></su-input>
<br>
</div>

<div v-if="propertyInput === 'eventhandling'">

#### Event handling

Listen to DOM events and run some JavaScript when they’re triggered.

```html
<su-input type="text" v-model="fname" static-label @focus="onFocus" @blur="onBlur" @input="handleInput"></su-input>
```

<!-- adding input events -->
<su-input type="text" v-model="fname" static-label @focus="onFocus" @blur="onBlur" @input="handleInput"></su-input>
<br>
</div>

<div v-if="propertyInput === 'minmax'">

#### Min & Max

Supports the range by `min` and `max`
```html
<!-- type number with min value 28 -->
<su-input type="number" v-model="age" static-label no-error label="Enter age" :min="28"></su-input>
```

<su-input type="number" v-model="age" static-label no-error :min="28" label="Age"></su-input>
<br>
</div>

<div v-if="propertyInput === 'step'">

#### Step

A numeric input box whose values can be increased or decreased using a value step.<br> The default `step` takes integer 1.

```html
<su-input type="number" v-model="volumn" :min="28" :step="3" label="Volume"></su-input>
```

<su-input type="number" v-model="volumn" static-label :min="28" :step="3" label="Volume"></su-input>
<br>
</div>

<div v-if="propertyInput === 'hidespinner'">

#### Hide number spinners

In some use cases number field spinner looks ugly. For that case include `hide-spinner` attribute to hide the spinner from the number field.<br> To make the spinner dynamically hide and show, you need to use `:hideSpinner='true || false'`.
```html
<su-input type="number" hide-spinner v-model="nospin" static-label label="Enter age"></su-input>
```

<su-input type="number" hide-spinner v-model="nospin" static-label label="Enter age"></su-input>
<br>
</div>


| |  Property  |  Description  |  Type  |  Accepted values  |  Default  |
| -|:------------- |:-----------|:-----:|:-------------|:-----:|
| <su-radio-group v-model="propertyInput"><su-radio value="basic"> </su-radio></su-radio-group> | type, id, name, placeholder | same as like in native input | String | - | - |
| <su-radio-group v-model="propertyInput"><su-radio value="maxlength"> </su-radio></su-radio-group> | maxlength | Specifies max number of characters can be entered in a text-input field | Number | - | - |
| <su-radio-group v-model="propertyInput"><su-radio value="staticlabel"> </su-radio></su-radio-group> | static-label | Label text for the input field | Boolean | - | - |
| <su-radio-group v-model="propertyInput"><su-radio value="dynamiclabel"> </su-radio></su-radio-group> | dynamic-label | Animated label text appears for the input field | Boolean | - | - |
| <su-radio-group v-model="propertyInput"><su-radio value="autofocus"> </su-radio></su-radio-group> | autofocus | same as like in native input | Boolean | - | - |
| <su-radio-group v-model="propertyInput"><su-radio value="eventhandling"> </su-radio></su-radio-group> | `@focus`, `@blur`, `@input` |  |  | - | - |
| <su-radio-group v-model="propertyInput"><su-radio value="minmax"> </su-radio></su-radio-group> | min & max | Supports the range by `min` and `max` | Number | - | - |
| <su-radio-group v-model="propertyInput"><su-radio value="step"> </su-radio></su-radio-group> | step | A numeric input box whose values can be increased or decreased using a value step | Number | - | - |
| <su-radio-group v-model="propertyInput"><su-radio value="hidespinner"> </su-radio></su-radio-group> | hide-spinner | In some use cases number field spinner looks ugly. For that case include `hide-spinner` attribute to hide the spinner from the number field. | Boolean | - | - |


<script>
import Vue from 'vue'
export default {
	data: function () {
		return {
			propertyInput: 'basic',
			name: 'Bob',
			age: 30,
			fname: '',
			mname: '',
			afocus: '',
			maxLen: 'WX9090',
			volumn: 28,
			username: '',
			nospin: 0,
			pin: 123456
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
	},
	watch: {
		propertyInput: function (val, pval) {
			if (val !== pval) {
				let pageTopElement = this.$refs.pageTopElem
      			pageTopElement.scrollIntoView()
			}
		}
	}
}
</script>
