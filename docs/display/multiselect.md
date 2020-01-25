
## Multi Select

<div>
    <su-multi-select :options="options" :selected-values="selectedValues" :width="450" :track-by="name" :label="label" :placeholder="placeholder"></su-multi-select>
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
      selectedValues: [{ name: 'MN', label: 'Mongolia' }],
      name: 'name',
      label: 'label',
      placeholder: 'Search your text'
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
    <su-multi-select :options="options" :selected-values="selectedValues" width="350" :track-by="name" :label="label" :placeholer="placeholder"></su-multi-select>
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
      selectedValues: [],
      name: 'name',
      label: 'label',
      placeholder: 'Search your text'
    }
  }
}
</script>
```

### Options
| Properties   | Type   | Description  | Required  |
|--------------|------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| label      | String | Will be visible in the dropdown, and selected options are visible as tags | Yes |
| track-by      | String | Used to compare objects. Will be used only if options are objects. | Yes |
| options    | Array   | Array of available options: `Objects`. Visible label will default to `option.label`. | Yes |
| placeholder  | String | Same like normal `placeholder` attribute | No |
| width  | Number | Width of the `Select` container | No |
