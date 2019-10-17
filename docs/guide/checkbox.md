## Checkbox

```vue
<su-checkbox v-model="bike" label="Bike"></su-checkbox>
<su-checkbox v-model="car" label="Car"></su-checkbox>
```

<br>
<su-checkbox v-model="bike" label="Bike"></su-checkbox>
<su-checkbox v-model="car" label="Car"></su-checkbox>

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
