import hyRequest from '../index'

import { IAccount, ILoginRes, IDataType } from './type'
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenu = '/role/'
}
//登录
export function accountLoginRequest(account: IAccount): any {
  //服务器返回的结果加上类型
  return hyRequest.post<IDataType<ILoginRes>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
//获取用户信息
export function UserInfoRequest(id: number): any {
  //服务器返回的结果加上类型
  return hyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}
//获取用户菜单
export function UserMenuRequest(id: number): any {
  //服务器返回的结果加上类型
  return hyRequest.get<IDataType>({
    url: LoginAPI.UserMenu + id + '/menu'
  })
}
