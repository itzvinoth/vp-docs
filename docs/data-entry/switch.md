## Switch

If you need to toggling between two states or on-off state.

### Usage

```vue
<su-switch v-model="order" state-on-label="Sell" state-off-label="Buy" state-on="SELL" state-off="BUY">
</su-switch>

<script>
import { Switch } from 'slim-ui'

export default {
	components: {
		'su-switch': Switch
	},
	data () {
		return {
			order: 'BUY'
		}
	}
}
</script>
```

### Demo

<br>
<su-switch v-model="order" state-on-label="Sell" state-off-label="Buy" state-on="SELL" state-off="BUY"></su-switch>

<script>
import Vue from 'vue'
export default {
	data () {
        return {
            order: 'BUY'
        }
    }
}
</script>

### Props

#### v-model - required
Use `v-model` to bind the `checked` state of the underlying `<input />` tag. The `v-model` binds to the value prop of the component and sets current checked state of the input.

#### label
Will place label text to the (right/left) of the switch using `state-on-label` and `state-off-label`.

#### Switch background color
You can change the checked background color of the switch by overwriting css and we are not supporting HTML attributes to change background color on switching states.

