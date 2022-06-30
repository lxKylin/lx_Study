<template>
  <div>
    <h2>Mockjs</h2>
    <div @click="btnClick" class="btn">测试mock</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import axios from 'axios'

export default defineComponent({
  setup() {
    const btnClick = async () => {
      const res = await axios.get('/user/list')
      console.log(res.data.data)
    }
    return {
      btnClick
    }
  }
})
</script>

<style lang="less" scoped></style>
