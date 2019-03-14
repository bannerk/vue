import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
//组件引入
import Recommend from 'page/Recommend/Recommend'
import Singer from 'page/Singer/Singer'
import Rank from 'page/Rank/Rank'
import Search from 'page/Search/Search'
import Detail from 'page/Detail/Detail'                                                                                     

export default new Router({
  routes: [
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend,
      children:[
      {path:'detail',component:Detail}
      ]//子路由
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },   
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/',
      redirect:'/recommend'
    }
  ]
})
