<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-show="!collapse" class="title">可视化后台管理</span>
    </div>
    <!-- <Aside /> -->
    <Aside :routerList="routerList" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Aside from '@/components/aside'

// import {
//   Collection,
//   Document,
//   Menu as IconMenu,
//   Setting
// } from '@element-plus/icons-vue'

// import { useRouter, useRoute } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
  components: {
    Aside
  },
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    // router
    // const router = useRouter()
    // const route = useRoute()
    // // console.log(route.meta, '2222')
    // // 事件树

    const router = useRouter()
    const route = useRoute()
    // console.log(route, '22222')
    const routerList = router.options.routes[0].children

    // console.log(routerList, 'router')

    return {
      routerList
      // Setting,
      // Collection
    }
  }
})
</script>
<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
