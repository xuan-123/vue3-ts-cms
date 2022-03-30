/* eslint-disable vue/no-unused-components */
<template>
  <div class="login-panel">
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Calendar /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane label="手机登录">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Calendar, Iphone } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
export default defineComponent({
  components: {
    Calendar,
    // eslint-disable-next-line vue/no-unused-components
    Iphone,
    // eslint-disable-next-line vue/no-unused-components
    LoginAccount,
    // eslint-disable-next-line vue/no-unused-components
    LoginPhone
  },
  setup() {
    let isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>() //取当前组件的类型
    const phoneRef = ref<InstanceType<typeof LoginPhone>>() //取当前组件的类型
    const handleLoginClick = () => {
      //在父组件中调用子组件（账号登录）方法
      accountRef.value?.accountLogin()
      phoneRef.value?.phoneLogin()
    }
    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      handleLoginClick
    }
  }
})
</script>
<style scoped>
.login-panel {
  width: 320px;
}
.account-control {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.login-btn {
  width: 100%;
  height: 40px;
}
</style>
