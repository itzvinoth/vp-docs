## Radio


Radio buttons are used when only one choice needs to be selected in a list of options.

### Usage

```vue
<su-radio-group v-model="fruits">
	<su-radio label="Apple" value="apple"/>
	<su-radio label="Orange" value="orange"/>
</su-radio-group>

<script>
import { RadioGroup, Radio } from 'slim-ui'

export default {
	components: {
		'su-radio-group': RadioGroup,
		'su-radio': Radio
	},
	data () {
		return {
			fruits: 'orange'
		}
	}
}
</script>
```
### Demo

<br>
<su-radio-group v-model="fruits">
	<su-radio label="Apple" value="apple"/>
	<su-radio label="Orange" value="orange"/>
</su-radio-group>

<script>
import Vue from 'vue'
export default {
	data () {
		return {
			fruits: 'orange',
			isDisabled: true
		}
	}
}
</script>

### Props

#### label
Will place label text to the right of the input.

#### html attributes
Any valid attribute will be added to the input.

```vue
<su-radio
  v-model="checked"
  :value="true"
  label="disabled"
  disabled />
```

#### v-model - required
Use `v-model` to bind the `checked` state of the underlying `<input />` tag. The `v-model` binds to the value prop of the component and sets current checked state of the input.

