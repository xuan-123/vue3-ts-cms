<template>
  <div class="login-account">
    <el-form label-width="70px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { rules } from '../config/account-config'
import { defineComponent, reactive, ref } from 'vue'
import LocalCache from '@/utils/cache'
// import { ElForm } from 'element-plus'
export default defineComponent({
  setup() {
    const account = reactive({
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })
    const formRef = ref()
    const accountLogin = (isKeepPassword) => {
      formRef.value.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            //用户名密码存到本地
            LocalCache.setCache('name', account.name)
            LocalCache.setCache('password', account.password)
          }
        }
      })
    }
    return {
      account,
      rules,
      formRef,
      accountLogin
    }
  }
})
</script>

<style></style>
