# Multi Select

<div>
    <su-multi-select :options="options" :selected-values="selectedValues" width="350" track-by="name" label="label"></su-multi-select>
</div>

<script>
export default {
  data() {
    return {
      options: [
      	{ name: 'AF', label: 'Afghanistan' },
        { name: 'BS', label: 'Bahamas' },
        { name: 'FR', label: 'France' },
        { name: 'IN', label: 'India' },
        { name: 'MC', label: 'Monaco' },
        { name: 'MN', label: 'Mongolia' },
        { name: 'MV', label: 'Maldives' },
        { name: 'PL', label: 'Poland' },
        { name: 'SG', label: 'Singapore' },
        { name: 'GB', label: 'United Kingdom' },
        { name: 'US', label: 'United States' }
      ],
      selectedValues: []
    }
  },
  methods: {
    onDropDownClick (value) {
      this.sValue = value
    }
  }
}
</script>

```html
<template>
  <div>
    <su-multi-select :options="options" :selected-values="selectedValues" width="350" track-by="name" label="label"></su-multi-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
      	{ name: 'AF', label: 'Afghanistan' },
        { name: 'BS', label: 'Bahamas' },
        { name: 'FR', label: 'France' },
        { name: 'IN', label: 'India' },
        { name: 'MC', label: 'Monaco' },
        { name: 'MN', label: 'Mongolia' },
        { name: 'MV', label: 'Maldives' },
        { name: 'PL', label: 'Poland' },
        { name: 'SG', label: 'Singapore' },
        { name: 'GB', label: 'United Kingdom' },
        { name: 'US', label: 'United States' }
      ],
      // set with initial selected values as like this [{ name: 'PL', label: 'Poland' }]
      selectedValues: []
    }
  }
}
</script>
```
