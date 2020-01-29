## OTP

```vue
<su-otp :otp-length="otpLength" :otp-values="otpValues" box-height="32" box-width="36" @update-otp="updateOtp"></su-otp>
```

```js
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
```
<br>
<su-otp :otp-length="otpLength" :otp-values="otpValues" box-height="32" box-width="36" @update-otp="updateOtp"></su-otp>

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

### Props

#### otp-length (required)
type `Number`

Use to specify length of the OTP.

#### otp-value (required)
type `Array of integers` example `[2,1,3,5,6]`

Use to assign values to the otp field.

#### box-height (not required)
type `Number`

Use to specify `otp` field height.

#### box-width (not required)
type `Number`

Use to specify `otp` field width.