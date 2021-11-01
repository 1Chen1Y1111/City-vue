import Vue from 'vue/dist/vue.js'
import App from './App'
new Vue({
  el:'#app',
  render: h=>h(App) //寻找解析器的loader
})
//components注册组件，template解析，但是vue导入需要导入带解析器的版本 vue.esm.js