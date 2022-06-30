import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          icon: 'Message'
        },
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/mock',
        name: 'mock',
        meta: {
          icon: 'Message'
        },
        component: () => import('@/views/Mock.vue')
      },
      {
        path: '/about',
        name: 'about',
        meta: {
          icon: 'IconMenu'
        },
        component: () => import('@/views/About.vue'),
        children: [
          {
            path: '/about/xxx',
            name: 'about',
            component: () => import('@/views/About.vue')
          },
          {
            path: '/about/ccc',
            name: 'ccc',
            component: () => import('@/views/Home.vue'),
            children: [
              {
                path: '/about/ccc/ddd',
                name: 'ddd',
                meta: {
                  icon: 'IconMenu'
                },
                component: () => import('@/views/Home.vue')
              }
            ]
          }
        ]
      },
      {
        path: '/fff',
        name: 'Kylin',
        meta: {
          icon: 'UserOutlined'
        },
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
