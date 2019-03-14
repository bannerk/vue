<template>
  <div id="app">
     <m-header></m-header>
     <tab></tab>
       <router-view></router-view> 
  </div>
</template>

<script>
import Tab from './components/common/tab/tab';
import MHeader from './components/common/m-header/m-header'
export default {
  name: 'App',
  components:{
  	MHeader,
  	Tab
  }
}
</script>

<style lang='less' scope>
@import '~style/index.less';
</style>
