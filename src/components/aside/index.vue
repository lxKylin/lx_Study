<template>
  <!-- <el-menu
    :default-active="defaultValueString"
    class="el-menu-vertical-demo"
    background-color="#0c2135"
    text-color="#b7bdc3"
    active-text-color="#0a60bd"
    @select="handleMenu"
  >
    <template v-for="menu in routerList" :key="menu.path">
      <template v-if="menu.children">
        <el-sub-menu :index="menu.path">
          <template #title>
            <span>
              <component :is="menu.meta?.show" />
              <span>{{ menu.name }}</span>
            </span>
          </template>
          <el-menu-item
            v-for="subMenu in menu.children"
            :key="subMenu.path"
            :index="subMenu.path"
          >
            >
            <span>{{ subMenu.name }}</span>
          </el-menu-item>
        </el-sub-menu>
      </template>
      <template v-else>
        <el-menu-item :index="menu.path">
          <component :is="menu.meta?.show" />
          <span>{{ menu.name }}</span>
        </el-menu-item>
      </template>
    </template>
  </el-menu> -->

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
import { defineComponent, ref, watch, computed } from 'vue'

import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'Aside',
  props: {
    // 数据列表,递归调用
    routerList: {
      type: Array,
      required: true
      // default: [],
    },
    // 默认激活菜单的index
    defaultActive: {
      type: String,
      default: '1'
    }
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    // console.log(route, '22222')
    // const routerList = router.options.routes[0].children
    // console.log(routerList, '333')
    // console.log(router.options.routes[0], '444')
    // const defaultValue: any = ref([])

    // const handleMenuItemClick = () => {
    //   router.push({
    //     path: '/main/system/user' ?? '/not-found'
    //   })
    // }
    // const handleMenu = (item: any) => {
    //   console.log(item, '11111')
    //   // router.push(item.index)
    //   router.push({
    //     path: item ?? '/not-found'
    //   })
    // }

    const handleMenu = (e: any) => {
      console.log(e, '222')
      router.push(e)
    }

    // watch(route, (val) => {
    //   defaultValue.value[0] = val.path
    // })

    // const defaultValueString = computed(() => defaultValue.value.join(''))

    return {
      // routerList,
      handleMenu
      // defaultValue,
      // defaultValueString
      // handleMenuItemClick
    }
  }
})
</script>

<style lang="less" scoped></style>
