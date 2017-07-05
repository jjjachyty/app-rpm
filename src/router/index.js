import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Home from '@/components/Home'


import Cust from '@/components/cust/Cust'
import AddCust from '@/components/cust/AddCust'
Vue.use(Router)

const routes = [{
        path: '/',
        component: Main,
        children: [
            { path: '/', name: 'home', component: Home },

            { path: '/cust', name: 'cust', component: Cust },



            { path: '/list', name: 'list', component: Home },

            { path: '/seting', name: 'seting', component: Home },

        ]
    }, { path: '/login', name: 'login', component: Login },
    { path: '/addcust', name: 'addcust', component: AddCust }
]



const router = new Router({
    //mode: 'history', //这样url就没有/#/XXX,而是常见的url形式 //cordova 不能使用history模式
    routes: routes, // short for routes: routes
    linkActiveClass: 'active', //router-link的选中状态的class，也有一个默认的值
    //history: true //cordova 不能使用history模式
});




export default router