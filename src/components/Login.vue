<template>
  <div class="container">
    <!--<divider>客户关系定价</divider>-->
 
          <flexbox justify="center">
              <flexbox-item :span="4" ></flexbox-item>

        <flexbox-item :span="4" ><img class="logo" src="../assets/img/login_header.png"></flexbox-item>
                      <flexbox-item :span="4" ></flexbox-item>

    </flexbox>
  


      <x-input  placeholder="账号" v-model="loginUser.username" >
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/icon/account.svg" width="24" height="24">
      </x-input>
            <x-input  type="password" placeholder="密码"  v-model="loginUser.password">
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/icon/password.svg" width="24" height="24">
      </x-input>
   
         <br>
     <x-button type="primary"  @click.native="logining">登录</x-button>
    <divider>@2017 重庆天健金管科技</divider>
    <toast v-model="toast.value" type="text" :time="3000" is-show-mask :text="toast.text" position="bottom" width="20em"></toast>

  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
 import { XButton,XInput,Flexbox,FlexboxItem,Divider,Group,Toast } from 'vux'
  export default {
    components: {
          Flexbox,
    FlexboxItem,
    Divider,
    Group,
    XInput,
    XButton,
    Toast
    },
    data() {
      return {
        loginUser:{username:'',password:''}
      }
    },
    computed:{
            ...mapGetters({
              toast:'checkOutToast'
            })
    },
    methods: {
      logining(){
        if(""!=this.loginUser.username&&""!=this.loginUser.password){
             this.$store.dispatch('userLogin',this.loginUser)
        }else{
          var toast={value:true,text:"用户名和密码不能为空"}
          this.$store.commit('SET_TOAST',{toast})
        }
      }

    },watch:{
         'toast':function(val){
           if (val.code=="200"){
             this.$router.push("/")
           }
         }
    }
  }
</script>
<style>
.container{
  padding: 16px;
}
  
  .mu-footer {
    /*background-color: #fff;*/
    text-align: center;
    color: #212121;
    padding: 1.5%
  }
  
  .login {
    /*background-color: #fbf9fe;*/
    align-content: center;
    text-align: center;
    padding-top: calc(100vh - 96vh)
  }
  
  .logo {
    padding-top: 50%;
    width: 100%;
    height: 100px
  }

</style>