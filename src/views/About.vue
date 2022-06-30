<template>
  <div>
    <h1>步骤条</h1>
    <HorizonTimeLine />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import HorizonTimeLine from '@/components/horizon-time-line'

export default defineComponent({
  component: {
    HorizonTimeLine
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped></style>
