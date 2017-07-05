<template>
    <div>
<tabbar>
      <tabbar-item selected link="/">
        <img slot="icon" src="../assets/icon/home.svg">
                <img slot="icon-active" src="../assets/icon/home-active.svg">
        <span slot="label">主页</span>
      </tabbar-item>
      <tabbar-item link="/cust">
        <img slot="icon" src="../assets/icon/cust.svg">
        <img slot="icon-active" src="../assets/icon/cust-active.svg">
        <span slot="label">客户</span>
      </tabbar-item>
      <tabbar-item  >
        <img slot="icon" src="../assets/icon/list.svg">
        <img slot="icon-active" src="../assets/icon/list-active.svg">
        <span slot="label">业务</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../assets/icon/me.svg">
        <img slot="icon-active" src="../assets/icon/me-active.svg">
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>

    </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
    components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  data () {
    return {
     
    }
  },
  methods: {
   
  },mounted(){
    
  }
}

</script>
<style>

</style>