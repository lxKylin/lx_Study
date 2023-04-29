<template>
  <div>
    <h2>Mockjs</h2>
    <div @click="btnClick" class="btn">测试mock</div>
    <img :src="test_img" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import test_img from '@/assets/image/test_img.jpeg'

import axios from 'axios'

export default defineComponent({
  setup() {
    const btnClick = async () => {
      const res = await axios.get('/user/list')
      console.log(res.data.data)
    }
    return {
      btnClick,
      test_img
    }
  }
})
</script>

<style lang="less" scoped></style>
