<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h2>lx_study</h2>
    <h3>网页置灰</h3>
    <div>
      <img :src="test_img" alt="" />
      <img :src="test_img" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'

import test_img from '@/assets/image/test_img.jpeg'
</script>

<style lang="less" scoped></style>
