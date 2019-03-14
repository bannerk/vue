// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from './axios'

Vue.prototype.$axios=Axios
//重置文件
import './common/style/resset.css'
Vue.config.productionTip = false

//图片路由懒加载
import LazyLoad from 'vue-lazyload'
Vue.use(LazyLoad,{
  loading: require('./assets/logo.png'),//在js 中通过require 加载图片
  attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
