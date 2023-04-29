<template>
  <el-menu
    :default-active="defaultActive"
    background-color="#0c2135"
    text-color="#b7bdc3"
    active-text-color="#0a60bd"
    @select="handleMenu"
  >
    <template v-for="menu in routerList" :key="menu.path">
      <template v-if="!menu.children">
        <el-menu-item :index="menu.path">
          <!-- <el-icon><icon-menu /></el-icon> -->
          <span>{{ menu.name }}</span>
        </el-menu-item>
      </template>
      <template v-else>
        <el-sub-menu :index="menu.path">
          <template #title>
            <!-- <el-icon><message /></el-icon> -->
            <span>{{ menu.name }}</span>
          </template>
          <Aside :routerList="menu.children" />
        </el-sub-menu>
      </template>
    </template>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useRouter, useRoute,RouteRecordRaw } from 'vue-router'

export default defineComponent({
  name: 'Aside',
  props: {
    // 数据列表,递归调用
    routerList: {
      type: Array<RouteRecordRaw>,
      required: true
      // default: [],
    },
    // 默认激活菜单的index
    defaultActive: {
      type: String,
      default: '1'
    }
  },
  setup(props) {
    const router = useRouter()
    const route = useRoute()

    const handleMenu = (e: any) => {
      console.log(e, '222')
      router.push(e)
    }

    return {
      handleMenu
    }
  }
})
</script>

<style lang="less" scoped></style>
