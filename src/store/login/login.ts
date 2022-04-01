import { Module } from 'vuex'
import { IRootState, ILoginState } from '../type'
import { IAccount } from '@/service/login/type'
import localCache from '@/utils/cache'
import {
  accountLoginRequest,
  UserInfoRequest,
  UserMenuRequest
} from '@/service/login/login'
import router from '@/router'
//***模块仓库要有自己对应的类，泛型，<当前模块类，根模块类>
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    //获取登录token
    getUserToken(state, payload) {
      state.token = payload
    },
    getUserInfo(state, payload) {
      state.userInfo = payload
    },
    getUserMenu(state, payload) {
      state.userMenus = payload
    }
  },
  actions: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    //账号登录
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)
      if (loginResult.code === 0) {
        const { id, token } = loginResult.data
        //保存token到state
        commit('getUserToken', token)
        //保存到本地用于赋给权限
        localCache.setCache('token', token)
        //登录成功请求用户信息
        const userInfoRes = await UserInfoRequest(id)
        const userInfo = userInfoRes.data
        //保存到state和本地
        commit('getUserInfo', userInfo)
        localCache.setCache('userInfo', userInfo)
        //获取用户菜单
        const userMenuRes = await UserMenuRequest(userInfo.role.id)
        const usermenu = userMenuRes.data
        //保存到state本地
        commit('getUserMenu', usermenu)
        localCache.setCache('usermenus', usermenu)
        //跳转到主页
        router.push('/main')
      }
    },
    //将本地登录数据重新存入vuex中一次，防止刷新丢失
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('getUserToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('getUserInfo', userInfo)
      }
      const usermenus = localCache.getCache('usermenus')
      if (usermenus) {
        commit('getUserMenu', usermenus)
      }
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log(payload)
    }
  }
}

export default loginModule
