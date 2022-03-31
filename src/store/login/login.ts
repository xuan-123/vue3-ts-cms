import { Module } from 'vuex'
import { IRootState, ILoginState } from '../type'
import { IAccount } from '@/service/login/type'
import { accountLoginRequest } from '@/service/login/login'
//***模块仓库要有自己对应的类，泛型，<当前模块类，根模块类>
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '1',
      userInfo: {}
    }
  },
  actions: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginLogin = await accountLoginRequest(payload)
      console.log(loginLogin)
    },
    phoneLoginAction({ commit }, payload: any) {
      //
      console.log(payload)
    }
  }
}

export default loginModule
