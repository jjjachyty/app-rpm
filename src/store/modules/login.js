import * as types from '../mutation-types'
import api from '../../api/index'


// actions
const actions = {
    userLogin({ dispatch, rootState, commit }, loginUser) {
        var ssourl = rootState.ssoApiRoot
        console.log("loginUser----", loginUser, rootState)
        api.login(ssourl + "/App/appValidLogin", loginUser, (auth) => {
            commit(types.LOGIN_SUCCESS, { rootState, auth })
            dispatch('rpmAuth')
        }, (data) => {
            var toast = { value: true, text: data.msg }
            commit(types.SET_TOAST, { toast })
        })
    },
    rpmAuth({ dispatch, rootState, commit ,route}) {
        var auth = JSON.parse(sessionStorage.getItem('user'))
        console.log("auth.data[0].user_id", auth.data[0].user_id)
        var params = { userid: auth.data[0].user_id }
        api.post('/am/authdata', params, (rpmauth) => {
            var toast = { value: false, text: "登录成功",code:"200" }
            commit(types.SET_TOAST, { toast })
        }, (data) => {
            var toast = { value: true, text: data.RstMsg }
            commit(types.SET_TOAST, { toast })
        })
    },
    loginOut({ rootState, commit }, loginUser) {
        api.post(loginUser, (auth) => {
            console.log("退出登录----", auth, rootState)
            commit(types.LOGOUT_SUCCESS, { rootState, auth })
            router.push({ path: "/" })
        }, () => {

            commit(types.LOGOUT_FAILED)
        })
    }
}

// mutations
const mutations = {
    //登录成功
    [types.LOGIN_SUCCESS](state, { rootState, auth }) {
        sessionStorage.setItem('user', JSON.stringify(auth))
    },
    //登录失败
    [types.LOGIN_FAILED](state, { rootState, data }) {
        rootState.message.code = data.code
        rootState.message.msg = data.msg
    },
    [types.LOGOUT_SUCCESS](state, { rootState, auth }) {
        sessionStorage.setItem('user', "")
    },
    //登录失败
    [types.LOGOUT_FAILED](state) {
        //state.currentUser = ""
        console.log("登出失败")
    }

}


export default {
    actions,
    mutations
}