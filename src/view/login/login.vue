<template>
  <div>
    login{{ $store.state.name }}<el-switch v-model="a" />
    <el-button type="t">默认按钮</el-button>
    <div class="slider-demo-block">
      <span class="demonstration">Default value</span>
      <el-slider v-model="a" />{{ a }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
var a = ref(1)
</script>

<style lang="less"></style>
