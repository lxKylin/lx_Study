<template>
  <el-steps :active="1">
    <el-step title="检测开始" :icon="CircleCheck" />
    <el-step title="Step 2" :icon="Upload" />
    <el-step title="Step 3" :icon="Picture" />
  </el-steps>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import { CircleCheck, Edit, Picture, Upload } from '@element-plus/icons-vue'
</script>
<style scoped lang="less">
.timeaxis {
  width: 800px;
  height: 200px;
}
.box {
  float: left;
  width: 180px;
}
.circular {
  border: 2px solid #67c23a;
  width: 100px;
  height: 10px;
  border-radius: 10px;
  background: hotpink;
  margin: auto;
  margin-bottom: -4px;
  position: relative;
  top: -8px;
  left: 85px;
}
.item {
  border-bottom: 1px solid #409eff;
  position: relative;
  .left {
    position: absolute;
    left: 55px;
    top: -25px;
  }
  .center {
    position: absolute;
    left: 165px;
    top: 12px;
  }
}
.item2 {
  position: relative;

  .bottom {
    position: absolute;
    left: 75px;
    top: 0px;
  }
}
</style>
