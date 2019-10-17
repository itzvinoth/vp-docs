## Select

```vue
<su-select v-model="gender">
	<option v-for="(g, key) in gs" :key="key" :value="key"> {{ g }} </option>
</su-select>
```

<br>
<su-select v-model="gender">
	<option v-for="(g, key) in gs" :key="key" :value="key"> {{ g }} </option>
</su-select>

<script>
import Vue from 'vue'
export default {
	data () {
        return {
			gender: '',
			gs: {
				"male": "Male",
				"female": "Female"
			}
        }
    }
}
</script>