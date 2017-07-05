<template>
    <div>
        <x-header :left-options="{backText: ''}">添加客户</a>
        </x-header>
    
        <group>
    
            <x-input title="客户号" v-model="cust.CustCode" readonly></x-input>
        </group>
        <group>
            <x-input title="客户名称" placeholder="请输入客户名称" v-model="cust.CustName"></x-input>
     <Divider>客户类型</Divider>
                <div class="div-checker">

      <checker v-model="cust.CustType" default-item-class="item" selected-item-class="item-selected">
      <checker-item value="1">自然人</checker-item>
      <checker-item value="2">法人</checker-item>
      </checker>  
                </div>
           <Divider>客户级别</Divider>
           <div class="div-checker">
        <checker v-model="cust.CustImplvl" default-item-class="item" selected-item-class="item-selected">

  <checker-item value="1">核心客户</checker-item>
      <checker-item value="2">潜力客户</checker-item>
      <checker-item value="3">非目标客户</checker-item>
       </checker>
           </div>

      <popup-picker title="信用评级" :data="list" v-model="value5" value-text-align="left"></popup-picker>


        </group>
    </div>
</template>

<script>
import { Group, Cell, XInput, XHeader,Checker,CheckerItem,Divider } from 'vux'

export default {
    components: {
        Group,
        Cell,
        XInput,
        Checker,
        CheckerItem,
        XHeader,Divider
    },
    data() {
        return {
            cust: {}
        }
    }, created() {
        if (this.$store.state.editOrAdd == "edit") {
            this.cust = this.$store.state.editCust
        } else {
            this.cust.CustCode = 'CUSTAPP' + (new Date().getTime().toString())
            // this.cust.Branch.OrganName = this.$store.state.auth.org_unit_desc
            // this.cust.Branch.OrganCode = this.$store.state.auth.org_unit_id

        }

    }
}
</script>

<style>
.item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}

.item-selected {
  border: 2px solid green;
}


.div-checker{
    text-align: center;
}
</style>
