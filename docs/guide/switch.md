## Switch

```vue
<su-switch v-model="order" state-on-label="Sell" state-off-label="Buy" state-on="SELL" state-off="BUY"></su-switch>
```

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