<template>
  <div class="">
<swiper loop auto :list="homeList" v-model="home_index" @on-index-change="home_onIndexChange"></swiper>


    <group-title>公告</group-title>
    <swiper auto height="30px" direction="vertical" :interval=3000 class="text-scroll" :show-dots="false">
      <swiper-item><p>关于我行客户关系定价系统上线说明</p></swiper-item>
      <swiper-item><p>关于央行基准利率调整说明</p></swiper-item>
      <swiper-item><p>定价系统贷款新增产品说明</p></swiper-item>
      <swiper-item><p>关于我行机构合并撤销说明</p></swiper-item>
    </swiper>
        <grid :rows="2">
      <grid-item link="/component/cell" label="贷款测算">
        <img slot="icon" src="../assets/icon/home-ln.svg">
      </grid-item>
      <grid-item :link="{ path: '/component/cell'}" label="存款测算">
        <img slot="icon" src="../assets/icon/home-dp.svg">
      </grid-item>
    </grid>
    <group>
    <panel header="客户经理排名" :footer="footer" :list="list" :type="type"></panel>
    </group>

  </div>
</template>

<script>
import { Swiper, GroupTitle, SwiperItem, XButton, Divider,Panel, Group, Radio,Grid, GridItem } from 'vux'

const baseList = [{
  url: 'javascript:',
  img: 'static/img/slogin.png',
  title: '客户关系定价系统移动版上线'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '送你一次旅行'
}]

export default { 
   components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider,
    Panel,
    Group,
    Radio,Grid, GridItem
  },
  data () {
    return {
      home_index:0,
       type: '1',
      homeList:baseList,
      list: [{
        src: 'static/avatar/zl.png',
        title: '张力',
        desc: 'EVA 106万 RAROC 9.8% 定价水平 8.3%',
      }, {
        src: 'static/avatar/lt.png',
        title: '刘铁',
        desc: 'EVA 101万 RAROC 9.3% 定价水平 8.1%',
      }],      footer: {
        title: '查看更多',
        url: ''
      }
    }
  },methods:{
    home_onIndexChange (index) {
      this.home_index = index
    },
  },created:function(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
</style>
