## OTP

```vue
<su-otp></su-otp>
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
    updateOtp (e) {
      console.log('e: ', e)
    }
  }
}
</script>