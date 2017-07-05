<template>
  <div class="">
    <swipeout>

      <swipeout-item  :disabled="disabled" ref="swipeoutItem" :right-menu-width="210" :sensitivity="15">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary" :width="70">Fav</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn" :width="70">Delete</swipeout-button>
          <swipeout-button @click.native="onButtonClick('ignore')" type="default" :width="70">Ignore</swipeout-button>
        </div>

        <div slot="left-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary">Fav</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn">'Delete</swipeout-button>
        </div>

        <div slot="content" class="">

         <div class="cust-item">
    <div class="card horizontal">
      <div class="card-image">
       <!--<img src="static/avatar/cust/lhdc.png"/>-->
       	
<avatar class="avatar1" 
                background-color="#8bc34a"
                :size="80"
                initials="龙湖"
                :rounded="false"
                color="#fff"></avatar>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>重庆龙湖地产股份有限公司</p>
        </div>
        <div class="card-content-1">
          <p>CUST1234567899874465</p>
        </div>
         <div class="card-content-1">
          <img src="../../assets/icon/cust-state-02.svg" />
          <img src="../../assets/icon/cust-impl-hx.svg" />
          <span class="cust-credit">AAA</span>
        </div>
      </div>
    </div>
  </div>


        </div>
      </swipeout-item>

    
<br>


      <swipeout-item :disabled="disabled" ref="swipeoutItem" :right-menu-width="210" :sensitivity="15">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary" :width="70">Fav</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn" :width="70">Delete</swipeout-button>
          <swipeout-button @click.native="onButtonClick('ignore')" type="default" :width="70">Ignore</swipeout-button>
        </div>

        <div slot="left-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary">Fav</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn">'Delete</swipeout-button>
        </div>

        <div slot="content" class="">

         <div class="cust-item">
    <div class="card horizontal">
      <div class="card-image">
       <avatar username="Hubert-Félix Thiéfaine GDDD   FFDD"></avatar>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>重庆长安汽车股份有限公司</p>
        </div>
        <div class="card-content-1">
          <p>CUST1234567899874465</p>
        </div>
      </div>
    </div>
  </div>


        </div>
      </swipeout-item>

<!--<div class="divider"></div>-->



      </swipeout>
  </div>
</template>

<script>
import { GroupTitle, Swipeout, SwipeoutItem, SwipeoutButton, XButton,Panel, Group, Radio,Grid, GridItem } from 'vux'
import Avatar from 'vue-avatar/dist/Avatar'
export default {
  components: {
      Avatar,
    GroupTitle,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    XButton,
    Panel, Group, Radio,Grid, GridItem
  },
  data () {
    return {
            list: [{
        src: 'static/avatar/zl.png',
        title: '张力',
        desc: 'EVA 106万 RAROC 9.8% 定价水平 8.3%',
      }],      footer: {
        title: '查看更多',
        url: ''
      }
    }
  }
}
</script>

<style scoped lang="less">
@import '~vux/src/styles/1px.less';
.card {
    position: relative;
    margin: .5rem 0 .5rem 0;
    background-color: #fff;
    transition: box-shadow .25s;
    border-radius: 2px;
}
.card.horizontal {
    display: -webkit-flex;
    // display: -ms-flexbox;
    display: -webkit-box;
    //  display: flex;
}
.card.horizontal .card-image {
    max-width: 50%;
    margin-right: 20px;
    padding-left:20px;
}
.card.horizontal .card-image  img{
    height: 39px;
    width:100px;
    padding-top: 20px;
    padding-left: 10px;
}
.card.horizontal .card-stacked {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
}
.card.horizontal .card-stacked .card-content {

}
.card .card-content p {
    white-space:nowrap; 
    text-overflow:ellipsis;
    overflow:hidden;
    color:#666666;
    margin: 0;
    font-size:14px;
}
.card .card-content-1 p {
    color:#999999;
    margin: 0;
    font-size: 12px;
}
.divider{
    border-bottom:1px solid #888888;
    margin-bottom:10px;
}
.cust-item{
            background-color: #ffffff;
         border:1px solid #999999;
            //  border-top:1px solid #999999;
    // padding:16px;
}
.content{
    padding:16px;
}
.cust-credit{font-size:35px;color:#4db6ac/*FF*/;text-shadow:0 0 0px currentColor,
1px  0   1px #4db6ac,  0   1px  1px #083058,  1px  1px  1px #98c0e8,  1px  1px  1px #083058,  1px  1px  1px #487098,
}


</style>