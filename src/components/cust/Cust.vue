<template>
  <div class="">
    <x-header :left-options="{showBack: false}">客户 <a href="#/addcust" slot="right"><icon name="user-plus"></icon></a></x-header>

 
    <search placeholder="客户号/客户名称" @on-submit="onSubmit" :auto-fixed="false" v-model="value2" @on-focus="onFocus" @on-cancel="onCancel"></search>

    <CustItem></CustItem>
  </div>
</template>

<script>
  import CustItem from '@/components/cust/CustItem'
  import { Search, Group, Cell, XButton,XHeader } from 'vux'
export default {
  components: {
      CustItem,
          Search,
    Group,
    Cell,
    XButton,
    XHeader
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">


</style>