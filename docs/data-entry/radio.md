## Radio

```vue
<su-radio-group v-model="fruits">
	<su-radio label="Apple" value="apple"> Apple </su-radio>
	<su-radio label="Orange" value="orange"> Orange </su-radio>
</su-radio-group>
```
<br>
<su-radio-group v-model="fruits">
	<su-radio label="Apple" value="apple"> Apple </su-radio>
	<su-radio label="Orange" value="orange"> Orange </su-radio>
</su-radio-group>

<script>
import Vue from 'vue'
export default {
	data () {
        return {
            fruits: 'orange'
        }
    }
}
</script>