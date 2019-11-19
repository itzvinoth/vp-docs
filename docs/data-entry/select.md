## Select

```vue
<su-select v-model="gender">
	<option value="male" key="male">Male</option>
	<option value="female" key="female">Female</option>
</su-select>
```

<br>
<su-select v-model="gender">
	<option value="male" key="male">Male</option>
	<option value="female" key="female">Female</option>
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