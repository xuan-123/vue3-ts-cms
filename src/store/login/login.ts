import { Module } from 'vuex'
import { IRootState, ILoginState } from '../type'
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
    accountLoginAction({ commit }, payload: any) {}
  }
}

export default loginModule
