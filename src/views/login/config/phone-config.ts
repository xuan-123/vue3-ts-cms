// 编写好规则
export const rules = {
  tel: [
    {
      required: true,
      message: '用户名是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{11}$/,
      message: '用户名必须是11个数字~',
      trigger: 'blur'
    }
  ],
  vCode: [
    {
      required: true,
      message: '短信验证码是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6}$/,
      message: '短信验证码必须是6位',
      trigger: 'blur'
    }
  ]
}
