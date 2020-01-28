## Form


Form validation is the process of ensuring that user input is clean, correct, and useful.
Typical validation tasks are: <br>

> has the user filled in all required fields?

> has the user entered a valid data?<br>


<div style="text-align: right;">
    <su-switch v-model="validationView" state-on-label="Basic" state-off-label="Advance" state-on="BASIC" state-off="ADVANCE"></su-switch>
</div>

<br>

<div v-if="validationView === 'BASIC'">

```vue
<su-form @submit.prevent="doProceed" ref="contactForm">
    <su-input type="text" :rules="fnRules" v-model="firstname" static-label no-error label="First name" placeholder="Enter first name"></su-input>
    <su-input type="text" :rules="lnRules" v-model="lastname" static-label no-error label="Last name" placeholder="Enter last name"></su-input>

    <su-button class="button button-blue" type="submit">Next</su-button>
</su-form>

<script>
export default {
    data () {
        return {
            firstname: '',
            lastname: '',
            fnRules: [{ required: true }],
            lnRules: [{
                required: true, message: "Please enter your last name"
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

</div>

<div v-if="validationView === 'ADVANCE'">

```vue
<su-form @submit.prevent="doProceed" ref="contactForm">
    <su-input type="text" :rules="userRules" v-model="user" static-label no-error label="User ID" placeholder="Enter user id"></su-input>
    <su-input type="number" :rules="mobileRules" v-model="mobile" hide-spinner static-label no-error label="Phone no" placeholder="Enter phone no"></su-input>

    <su-button class="button button-blue" type="submit">Next</su-button>
</su-form>

<script>
export default {
    data () {
        let lengthValidator = (rule, value) => {
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
            user: '',
            mobile: '',
            userRules: [
                { validator: lengthValidator, min: 6 }
            ],
            mobileRules: [
                { required: true, message: "Please enter your mobile no." }
            ],
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

</div>


<br>
<div v-if="validationView === 'BASIC'">
    <su-form @submit.prevent="doProceed" ref="contactNameForm">
        <div>
            <su-input type="text" v-model="firstname" static-label no-error label="First name" placeholder="Enter first name" :rules="fnRules"></su-input>
            <su-input type="text" v-model="lastname" static-label no-error label="Last name" placeholder="Enter last name" :rules="lnRules"></su-input>
        </div>
        <su-button class="button button-blue" type="submit">Next</su-button>
    </su-form>
</div>
<div v-if="validationView === 'ADVANCE'">
    <su-form @submit.prevent="proceedDetail" ref="contactDetailForm">
        <div>
            <su-input type="text" v-model="user" static-label no-error label="User ID" placeholder="Enter user id" :rules="userRules"></su-input>
            <su-input type="number" v-model="mobile" hide-spinner static-label no-error label="Phone no" placeholder="Enter phone no" :rules="mobileRules"></su-input>
        </div>
        <su-button class="button button-blue" type="submit">Next</su-button>
    </su-form>
</div>

<script>
import Vue from 'vue'
export default {
    data: function () {
        let lengthValidator = (rule, value) => {
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
            firstname: '',
            lastname: '',
            user: '',
            mobile: '',
            fnRules: [{ required: true }],
            lnRules: [{
                required: true, message: "Please enter your last name"
            }],
            userRules: [
                { validator: lengthValidator, min: 6, label: "User ID" }
            ],
            mobileRules: [
                { required: true, message: "Please enter your mobile no." }
            ],
            validationView: 'BASIC'
        }
    },
    methods: {
        doProceed () {
            if (!this.$refs["contactNameForm"].validate()) {
                return
            }
            console.log("Entered details are correct please proceed to next step..")
        },
        proceedDetail () {
            if (!this.$refs["contactDetailForm"].validate()) {
                return
            }
        }
    }
}
</script>
