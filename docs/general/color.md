## Color

SimpleUI recommends to use the colors of the palette below as the rule for design and development for ensuring the visual consistence among the pages and components.

<hr/>
<div class="container">
  <div class="row" v-for="c in total">
    <div class="six columns">
      <div class="color-circle" :style="`background-color: ${colors[c*2].code}`"></div>
      <div class="color-name">{{ colors[c*2].name }}</div>
      <div>{{ colors[c*2].code }}</div>
    </div>
    <div class="six columns">
      <div class="color-circle" :style="`background-color: ${colors[(c*2)+1].code}`"></div>
      <div class="color-name">{{ colors[(c*2)+1].name }}</div>
      <div>{{ colors[(c*2)+1].code }}</div>
    </div>
  </div>
</div>

<script>
export default {
  name: 'colormd',
  data () {
    return {
      total: 19,
      colors: [{
        'name': '$color-solid-white',
        'code': '#ffffff'
      }, {
        'name': '$color-seashell-white',
        'code': '#f1f1f1'
      }, {
        'name': '$color-regal-blue',
        'code': '#013779'
      }, {
        'name': '$color-kite-blue',
        'code': '#0059c1'
      }, {
        'name': '$chart-blue',
        'code': '#387ed1'
      }, {
        'name': '$color-lochmara-blue',
        'code': '#0089D0'
      }, {
        'name': '$color-havelock-blue',
        'code': '#387ed1'
      }, {
        'name': '$color-dodger-aqua',
        'code': '#00B0FF'
      },{
        'name': '$color-jewel-green',
        'code': '#167F39'
      }, {
        'name': '$color-fruit-salad-green',
        'code': '#4caf50'
      }, {
        'name': '$color-profit-green',
        'code': '#10b983'
      }, {
        'name': '$chart-green',
        'code': '#4bc0c0'
      }, {
        'name': '$color-solid-grey',
        'code': '#444444'
      }, {
        'name': '$color-tundora-grey',
        'code': '#4a4a4a'
      }, {
        'name': '$color-dove-grey',
        'code': '#666666'
      }, {
        'name': '$color-dusty-grey',
        'code': '#9b9b9b'
      }, {
        'name': '$color-silver-grey',
        'code': '#cccccc'
      }, {
        'name': '$chart-grey',
        'code': '#c9cbcf'
      }, {
        'name': '$color-alto-grey',
        'code': '#DDDDDD'
      }, {
        'name': '$color-border-grey',
        'code': '#e1e1e1'
      }, {
        'name': '$color-mercury-grey',
        'code': '#e3e3e3'
      },  {
        'name': '$color-gallery-grey',
        'code': '#eeeeee'
      }, {
        'name': '$color-wild-sand-grey',
        'code': '#f4f4f4'
      }, {
        'name': '$color-athens-grey',
        'code': '#fafafb'
      }, {
        'name': '$color-lemon-yellow',
        'code': '#fffacd'
      }, {
        'name': '$color-candlelight-yellow',
        'code': '#fed51c'
      }, {
        'name': '$chart-yellow',
        'code': '#ffcd56'
      }, {
        'name': '$color-light-orange',
        'code': '#f8ab00'
      }, {
        'name': '$chart-orange',
        'code': '#ff9f40'
      }, {
        'name': '$color-solid-amber',
        'code': '#FF8F00'
      }, {
        'name': '$color-solid-orange',
        'code': '#ff5722'
      }, {
        'name': '$color-pomegranate-red',
        'code': '#f6461a'
      }, {
        'name': '$color-profit-red',
        'code': '#f35631'
      }, {
        'name': '$color-wellread-red',
        'code': '#B73737'
      }, {
        'name': '$chart-red',
        'code': 'rgb(255, 99, 132)'
      }, {
        'name': '$color-french-rose',
        'code': '#EC407A'
      }, {
        'name': '$chart-purple',
        'code': 'rgb(153, 102, 255)'
      }, {
        'name': '$color-solid-indigo',
        'code': '#673AB7'
      }, {
        'name': '$color-solid-teal',
        'code': '#009688'
      }, {
        'name': '$color-solid-black',
        'code': '#000000'
      }]
    }
  }
}
</script>

### Secondary Colors

### Neutral Colors
<style src="../.vuepress/styles/grid.css" scoped></style>
<style>
.container {
  padding-top: 25px !important;
}
.container .row .six.columns {
  padding-bottom: 20px;
}
</style>
