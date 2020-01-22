# Installation

### CDN
::: tip
```html
<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/slim-ui/dist/styles/slimui.css">
<!-- import iView -->
<script src="//unpkg.com/slim-ui/dist/slimui.min.js"></script>
```
:::

### Node package

Install `slim-ui` with the npm or yarn. It can work with webpack and ES2015 very well.

```bash
# npm
npm install slim-ui
```

```bash
# yarn
yarn add slim-ui
```

Install its peer dependencies.
```bash
# npm
npm install --save-dev node-sass sass-loader
```

```bash
# yarn
yarn add -D node-sass sass-loader
```


### Module Loader
This is the recommended way if your application uses vue-cli or has a webpack based build with vue-loader configured. Import the components as .vue files for seamless integration within your project where path of each component is available at the "import" section of a component documentation.

```vue
import { Button } from 'slim-ui';
```

In the next step, register the component with the tag name you'd like to use.

```vue
Vue.component('su-button', Button);
```

Then you'll be able to utilize the component in your application.

```template
<su-button class="button button-blue">Primary</su-button>
```



### Script Tag
Other alternative is utilizing the components directly within the browser with UMD packages.

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/slimui/components/slimui.umd.js"></script>

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
