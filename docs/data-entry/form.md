## Form


Form validation is the process of ensuring that user input is clean, correct, and useful.
Typical validation tasks are: <br>
-> has the user filled in all required fields?<br>
-> has the user entered a valid date?<br>


```vue
<su-form @submit.prevent="doProceed" ref="contactForm">
    <su-input type="email" v-model="email"  static-label no-error label="Email ID" placeholder="Enter email ID" :rules="emailRules"></su-input>
    <su-input type="number" v-model="mobile" hide-spinner static-label no-error label="Phone no" placeholder="Enter phone number" :rules="mobileRules"></su-input>

    <su-button class="button button-blue" type="submit">Next</su-button>
</su-form>

<script>
export default {
    data () {
        return {
            emailRules: [{ required: true }],
            mobileRules: [{
                required: true, message: "Please enter your mobile no."
            }]
        }
    },
    methods: {
        doProceed () {
            if (!this.$refs["contactForm"].validate()) {
                return
            }
        }
    }
}
</script>
```

<br>
<su-form @submit.prevent="doProceed" ref="contactForm">
    <div>
        <su-input type="text" v-model="email" placeholder="Email ID" :rules="emailRules"></su-input>
        <su-input type="number" v-model="mobile" hide-spinner static-label no-error label="Phone no" placeholder="Enter phone number" :rules="mobileRules"></su-input>
    </div>
    <su-button class="button button-blue" type="submit">Next</su-button>
</su-form>

<script>
import Vue from 'vue'
export default {
    data: function () {
        let lengthValidator = (rule, value) => {
			if (rule.length && value.length !== rule.length) {
				console.log(rule, value)
				return new Error(rule.label + " should be exactly " + rule.length + " characters.")
			}

			if (rule.min) {
				if (value.length < rule.min) {
					return new Error(rule.label + " should be minimum of " + rule.min + " characters.")
				}
			} else if (rule.max) {
				if (value.length > rule.max) {
					return new Error(rule.label + " should be more than " + rule.max + " characters.")
				}
			}
		}
        return {
            email: '',
            mobile: '',
            emailRules: [
                { validator: lengthValidator, min: 6 }
            ],
            mobileRules: [
                { required: true, message: "Please enter your mobile no." }
            ]
        }
    },
    methods: {
        doProceed () {
            if (!this.$refs["contactForm"].validate()) {
                return
            }
        }
    }
}
</script>