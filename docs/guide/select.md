
## Select
<br>

<su-select v-model="gender">
	<option value="male">Male</option>
	<option value="female">Female</option>
</su-select>
<br>

<su-select v-model="maritalStatus" :multiple="true">
	<option value="married">Married</option>
	<option value="unmarried">Unmarried</option>
</su-select>

<script>
import Vue from 'vue'
export default {
	data () {
        return {
			gender: 'male',
            maritalStatus: ['married']
        }
    }
}
</script>