# Installation

### CDN
::: tip
```html
<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/simple-ui/dist/styles/simpleui.css">
<!-- import iView -->
<script src="//unpkg.com/simple-ui/dist/simpleui.min.js"></script>
```
:::

### NPM

Install `simpleUI` with the node package manager. It can work with webpack and ES2015 very well.

:::tip
$ npm install simple-ui --save
:::

### Module Loader
This is the recommended way if your application uses vue-cli or has a webpack based build with vue-loader configured. Import the components as .vue files for seamless integration within your project where path of each component is available at the "import" section of a component documentation.

```vue
import { Checkbox } from 'simpleui/checkbox';
```

In the next step, register the component with the tag name you'd like to use.

```vue
Vue.component('su-checkbox', Checkbox);
```

Then you'll be able to utilize the component in your application.

```template
<su-checkbox></su-checkbox>
```



### Script Tag
Other alternative is utilizing the components directly within the browser with UMD packages.

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/simpleui/components/simpleui.umd.js"></script>

<div id="app">
  <su-checkbox></su-checkbox>
</div>

<script>
new Vue({
  components: {
    'su-checkbox': Checkbox
  }
}).$mount('#app')
</script>
```

<style lang="scss" src="../.vuepress/styles/index.scss" scoped></style>
