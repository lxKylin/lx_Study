<template>
  <div class="watermark-container" ref="parentRef">
    <slot></slot>
    <!-- 添加div，填充满整个区域，设置水印图片，重复 -->
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watchEffect } from 'vue'
import useWatermarkBg from '@/hooks/useWatermark'

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'WaterMark'
  },
  fontSize: {
    type: Number,
    default: 40
  },
  // 间隙
  gap: {
    type: Number,
    default: 20
  }
})

const bg = useWatermarkBg(props)
const parentRef: any = ref(null)
const flag = ref<number>(0)
console.log(bg.value)

let div: any
watchEffect(() => {
  // 收集依赖，依赖改变就会执行
  flag.value

  if (!parentRef.value) {
    return
  }
  // 如果节点有值，进行删除
  if (div) {
    div.remove()
  }
  const { base64, styleSize } = bg.value

  /**
   * 创建div
   * 不可直接在页面创建div
   * 被删除时，需要重新生成，直接创建，被删除后，不可重新生成
   */
  div = document.createElement('div')
  div.style.backgroundImage = `url(${base64})`
  div.style.backgroundSize = `${styleSize} px ${styleSize}px`
  div.style.backgroundRepeat = 'repeat'
  div.style.zIndex = '9999'
  div.style.position = 'absolute'
  // 与父元素四边的距离
  div.style.inset = '0'
  div.style.pointerEvents = 'none'

  parentRef.value.appendChild(div)
})

let observer: any
onMounted(() => {
  // 创建监听器
  observer = new MutationObserver((records) => {
    console.log(records)
    for (const record of records) {
      // 删除水印
      for (const dom of record.removedNodes) {
        if (dom === div) {
          // 有删除操作
          console.log('删除了水印')
          flag.value++
          return
        }
      }

      // 监控修改
      if (record.target === div) {
        console.log('修改了水印样式')
        flag.value++

        return
      }
    }
  })
  // 监听谁--父元素
  observer.observe(parentRef.value, {
    // 监听配置：监听什么
    // 元素内容
    childList: true,
    // 本身属性
    attributes: true,
    // 整个子树
    subtree: true
  })
})

onUnmounted(() => {
  observer && observer.disconnect() // 取消监听
  div = null
})
</script>

<style lang="less" scoped>
.watermark-container {
  position: relative;
}
</style>
