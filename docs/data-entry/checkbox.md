## Checkbox

Checkbox component is used in forms when a user needs to select multiple values from several options.

### Usage

```vue
<su-checkbox v-model="bike" label="Bike" />
<su-checkbox v-model="car" label="Car" />

<script>
import { Checkbox } from 'slim-ui'

export default {
    components: {
		'su-checkbox': Checkbox
	},
	data () {
        return {
            bike: false,
			car: true
        }
    }
}
</script>
```

<br>
<su-checkbox v-model="bike" label="Bike" />
<su-checkbox v-model="car" label="Car" />

<script>
import Vue from 'vue'
export default {
	data () {
        return {
            bike: false,
			car: true
        }
    }
}
</script>

### Props

#### v-model - required
Use `v-model` to bind the `checked` state of the underlying `<input />` tag. The `v-model` binds to the value prop of the component and sets current checked state of the input.

#### label
Will place label text to the right of the input.

#### html attributes
Any valid attribute will be added to the input.

```vue
<su-checkbox
    v-model="bike"
    label="Bike"
    disabled
    autofocus/>
```
