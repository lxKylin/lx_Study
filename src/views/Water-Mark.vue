<template>
  <div class="container">
    <!-- <div>1、生成水印</div>
    <div>
      在某区域，加div，且该div填充满该区域，再给这个div一个背景图，并让这个背景图重复，这个背景图可使用canvas来画
    </div> -->

    <Watermark text="这只猪是我的" :fontSize="16" class="container__watermark">
      <div class="image">
        <img :src="qing_zi" alt="我的清子" />
      </div>
    </Watermark>
    <Watermark text="要照顾好小鬼" :fontSize="25" class="container__watermark">
      <div class="content">
        幼稚园小鬼， 幼稚园小鬼，幼稚园小鬼， 幼稚园小鬼，
        幼稚园小鬼，幼稚园小鬼， 幼稚园小鬼， 幼稚园小鬼，幼稚园小鬼，
        幼稚园小鬼， 幼稚园小鬼，幼稚园小鬼， 幼稚园小鬼，
        幼稚园小鬼，幼稚园小鬼， 幼稚园小鬼， 幼稚园小鬼，幼稚园小鬼，
        幼稚园小鬼， 幼稚园小鬼，幼稚园小鬼， 幼稚园小鬼，
        幼稚园小鬼，幼稚园小鬼， 幼稚园小鬼， 幼稚园小鬼，幼稚园小鬼，
        幼稚园小鬼， 幼稚园小鬼，幼稚园小鬼， 幼稚园小鬼，
        幼稚园小鬼，幼稚园小鬼， 幼稚园小鬼， 幼稚园小鬼，幼稚园小鬼，
        幼稚园小鬼， 幼稚园小鬼，幼稚园小鬼， 幼稚园小鬼，
        幼稚园小鬼，幼稚园小鬼， 幼稚园小鬼， 幼稚园小鬼，幼稚园小鬼，
        幼稚园小鬼， 幼稚园小鬼，幼稚园小鬼， 幼稚园小鬼，
        幼稚园小鬼，幼稚园小鬼， 幼稚园小鬼，幼稚园小鬼，
        幼稚园小鬼，幼稚园小鬼， 幼稚园小鬼，幼稚园小鬼，
        幼稚园小鬼，幼稚园小鬼， 幼稚园小鬼，幼稚园小鬼，
        幼稚园小鬼，幼稚园小鬼， 幼稚园小鬼，幼稚园小鬼，
        幼稚园小鬼，幼稚园小鬼， 幼稚园小鬼，幼稚园小鬼，
        幼稚园小鬼，幼稚园小鬼， 幼稚园小鬼，幼稚园小鬼，
        幼稚园小鬼，幼稚园小鬼， 幼稚园小鬼，幼稚园小鬼，
        幼稚园小鬼，幼稚园小鬼， 幼稚园小鬼，幼稚园小鬼，
      </div>
    </Watermark>
  </div>

  <div>
    <div>2、防篡改</div>
    <div>
      2.1、如何监控
      <div>
        MutationObserver：可以监控元素变化（本身和监控元素里的所有子元素）
      </div>
    </div>
    <div>2.2、重新生成</div>
  </div>
</template>

<script lang="ts" setup>
import Watermark from '@/components/watermark.vue'
import qing_zi from '@/assets/image/qingzi.jpg'
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  &__watermark {
    width: 520px;
    .image {
      margin: 20px;
      img {
        width: 100%;
      }
    }
    .content {
      margin: 20px;
      padding: 20px;
      background-color: pink;
    }
  }
}
</style>
