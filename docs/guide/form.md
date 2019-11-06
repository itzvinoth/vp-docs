## Form

```vue
<template>
    <su-form @submit.prevent="doProceed" ref="contactForm">
        <div>
            <su-input type="email" v-model="email"  static-label no-error label="Email ID" placeholder="Enter email ID" :rules="emailRules"></su-input>
            <su-input type="number" v-model="mobile" static-label no-error label="Phone no" placeholder="Enter phone number" :rules="mobileRules"></su-input>
        </div>

        <div class="contactform-btn-container">
            <su-button class="btn btn-blue" type="submit">Next</su-button>
        </div>
    </su-form>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            mobile: '',
            emailRules: [
                { required: true }
            ],
            mobileRules: [
                { required: true, message: "Please enter your mobile no." }
            ]
        }
    }
}
</script>
```
<br>
<su-form @submit.prevent="doProceed" ref="contactForm">
    <div>
        <su-input type="email" v-model="email"  static-label no-error label="Email ID" placeholder="Enter email ID" :rules="emailRules"></su-input>
        <su-input type="number" v-model="mobile" static-label no-error label="Phone no" placeholder="Enter phone number" :rules="mobileRules"></su-input>
    </div>
    <div class="contactform-btn-container">
        <su-button class="button button-blue" type="submit">Next</su-button>
    </div>
</su-form>

<script>
import Vue from 'vue'
export default {
    data () {
        return {
            email: '',
            mobile: '',
            emailRules: [
                { required: true }
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
            let contactDetail = {
                'email': this.email,
                'mobile': this.mobile
            }
        }
    }
}
</script>