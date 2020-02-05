
## Tabs

Vuejs wrapper for [Tinytabs](https://github.com/knadh/tinytabs) which is a super tiny javascript plugin for rendering tabs.

<br>
<div>
  <su-tiny-tabs id="mytabs" :anchor="false" :closable="true" :hideTitle="false" @on-close="onClose" @on-before="onBefore" @on-after="onAfter">
    <div class="section" id="example">
      <h3 class="title">Example code</h3>
      <h3>Javascript</h3>
    </div>
    <div class="section" id="options">
      <h3 class="title">Options table</h3>
      <h3>Options</h3>
    </div>
    <div class="section" id="components">
      <h3 class="title">Components</h3>
      <h3>Options</h3>
    </div>
  </su-tiny-tabs>
</div>

<script>
export default {
  methods: {
    onClose (id) {
      console.log('Callback function that gets evaluated while closing the tab', id)
    },
    onBefore (id, tab) {
      console.log('Callback function that gets evaluated before a tab is activated', id, tab)
    },
    onAfter (id, tab) {
      console.log('Callback function that gets evaluated after a tab is activated', id, tab)
    }
  }
}
</script>

<style>
.tinytabs .tabs {
  border-color: #e1e1e1;
  border-style: solid;
  border-width: 1px 1px 0 1px;
  display: flex;
  flex-flow: row wrap;

}
.tinytabs .tabs .tab .close {
  padding-left: 5px;
}
.tinytabs .tabs .tab {
  display: block;
  padding: 6px 15px;
  text-decoration: none;
  color: #666;
  border-color: #e1e1e1;
  border-style: solid;
  border-width: 0 1px 1px 1px;
  border-radius: 3px 3px 0 0;
}
.tinytabs .tabs .tab:hover {
  text-decoration: none;
}
.tinytabs .section {
  border-color: #e1e1e1;
  border-style: solid;
  border-width: 0 1px 1px 1px;
  overflow: hidden;
  padding: 15px;
  clear: both;
  border-radius: 3px;
}
.tinytabs .tab.sel {
  border-color: #e1e1e1;
  border-style: solid;
  border-width: 0 0 0 0;
  color: #333;
  text-shadow: none;
}
</style>

### Sample code

For testing purpose use below code. Above tabs shown will be based on this code.

:::: tabs
::: tab template

```html
<template>
  <su-tiny-tabs id="mytabs" :anchor="false" :closable="true" :hideTitle="false" @on-close="onClose" @on-before="onBefore" @on-after="onAfter">
    <div class="section" id="example">
      <h3 class="title">Example code</h3>
      <h3>Javascript</h3>
    </div>
    <div class="section" id="options">
      <h3 class="title">Options table</h3>
      <h3>Options</h3>
    </div>
    <div class="section" id="components">
      <h3 class="title">Components</h3>
      <h3>Options</h3>
    </div>
  </su-tiny-tabs>
</template>
```
:::

::: tab script
```js
import { TinyTabs } from 'slim-ui'

export default {
  components: {
    'su-tiny-tabs': TinyTabs
  },
  methods: {
    onClose (id) {
      console.log('Callback function that gets evaluated while closing the tab', id)
    },
    onBefore (id, tab) {
      console.log('Callback function that gets evaluated before a tab is activated', id, tab)
    },
    onAfter (id, tab) {
      console.log('Callback function that gets evaluated after a tab is activated', id, tab)
    }
  },
}
```
:::

::: tab css
```css
.tinytabs .tabs {
  border-color: #e1e1e1;
  border-style: solid;
  border-width: 1px 1px 0 1px;
  display: flex;
  flex-flow: row wrap;

}
.tinytabs .tabs .tab .close {
  padding-left: 5px;
}
.tinytabs .tabs .tab {
  display: block;
  padding: 6px 15px;
  text-decoration: none;
  color: #666;
  border-color: #e1e1e1;
  border-style: solid;
  border-width: 0 1px 1px 1px;
  border-radius: 3px 3px 0 0;
}
.tinytabs .tabs .tab:hover {
  text-decoration: none;
}
.tinytabs .section {
  border-color: #e1e1e1;
  border-style: solid;
  border-width: 0 1px 1px 1px;
  overflow: hidden;
  padding: 15px;
  clear: both;
  border-radius: 3px;
}
.tinytabs .tab.sel {
  border-color: #e1e1e1;
  border-style: solid;
  border-width: 0 0 0 0;
  color: #333;
  text-shadow: none;
}
```
:::

::::

<br>

### Options
| Properties   | Description
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| anchor       | false (default) or true. If enabled, when a tab is clicked, it's id is set in url's fragment so that the tab is retained on page reloads.                                                                                       |
| hideTitle    | false (default) or true. Hide the title element within section elements.                                                                                                                                                          |
| sectionClass | Section element's class. Default is section.                                                                                                                                                                                    |
| tabsClass    | Tab (ul) container's class. Default is tabs.                                                                                                                                                                                    |
| tabClass     | Individual tab's (li) class. Default is tab.                                                                                                                                                                                    |
| titleClass   | Title element's tag. Default is title.                                                                                                                                                                                          |
| onBefore       | function(id, tab). Callback function that gets evaluated before a tab is activated. The first arg is the id of the tab and the second is the DOM element of the tab.                                                            |
| onAfter        | function(id, tab). Callback function that gets evaluated after a tab is activated. The first arg is the id of the tab and the second is the DOM element of the tab.                                                             |
| onClose        | function(id). Callback function that gets evaluated while closing the tab. The argument is the id of the tab.                                                             |

