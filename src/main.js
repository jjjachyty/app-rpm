// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import store from './store'
import filter from './filter'
import App from './App'
import Main from './components/Main'
import VCharts from 'v-charts'

Vue.use(VCharts)

FastClick.attach(document.body)

Vue.config.productionTip = false


router.beforeEach(({ meta, path }, from, next) => {
    //var { auth = true } = meta
    var isLogin = Boolean(sessionStorage.getItem('user')) //true用户已登录， false用户未登录
    console.log("登录校验",isLogin)
    if (!isLogin && path !== '/login') {
        return next({ path: '/login' })
    }
    if (isLogin && path == '/login') {
        return next({ path: '/' })
    }
    next()
})

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app-rpm')