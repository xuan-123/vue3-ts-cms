<template>
  <div class="login-phone">
    <el-form label-width="70px" :rules="rules" :model="phone" ref="formRef">
      <el-form-item label="手机号" prop="tel">
        <el-input v-model="phone.tel"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="vCode">
        <div class="get-code">
          <el-input v-model="phone.vCode"></el-input>
          <el-button type="primary" class="get-code-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { rules } from '../config/phone-config'
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import LocalCache from '@/utils/cache'
export default defineComponent({
  setup() {
    const store = useStore()
    const phone = reactive({
      tel: LocalCache.getCache('tel') ?? '',
      vCode: ''
    })
    const formRef = ref()
    const phoneLogin = (isKeepPassword) => {
      formRef.value.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            //手机号保存到本地
            LocalCache.setCache('tel', phone.tel)
            store.dispatch('login/phoneLoginAction', { ...phone })
          }
        }
      })
    }
    return {
      phone,
      rules,
      formRef,
      phoneLogin
    }
  }
})
</script>

<style scoped>
.get-code {
  display: flex;
}
.get-code-btn {
  margin-left: 8px;
}
</style>
