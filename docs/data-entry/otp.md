## OTP

```vue
<su-otp :otp-length="otpLength" :otp-values="otpValues" @update-otp="updateOtp"></su-otp>
```

<br>
<su-otp :otp-length="otpLength" :otp-values="otpValues" @update-otp="updateOtp"></su-otp>

<script>
import Vue from 'vue'
export default {
	data () {
    return {
      otpLength: 5,
      otpValues: []
    }
  },
  methods: {
    updateOtp (val) {
      console.log('val: ', val)
    }
  }
}
</script>