<template>
  <div id="my-container" :ref="containerRef">
    <template v-if="ready">
      <slot></slot>
    </template>
  </div>
</template>
<script>
import {getCurrentInstance, onMounted, onUnmounted, ref, nextTick} from 'vue'
import { debounce } from "../../utils";

export default {
  name: 'MyContainer',
  props: {
    options: {
      type: Object
    }
  },
  setup(ctx) {
    let context, dom, observer
    const containerRef = 'container'

    const width = ref(0)
    const height = ref(0)
    const originalWidth = ref(0)
    const originalHeight = ref(0)
    const ready = ref(false)

    // 初始化
    const initSize = () => {
      return new Promise((resolve) => {
        nextTick(() => {
          const dom = context.$refs[containerRef];
          if (context.options && context.options.width && context.options.height) {
            width.value = context.options.width
            height.value = context.options.height
          } else {
            width.value = dom.clientWidth
            height.value = dom.clientHeight
          }

          // 获取当前画布大小
          if (!originalWidth.value || !originalHeight.value) {
            originalWidth.value = window.screen.width
            originalHeight.value = window.screen.height
          }
          console.log(width.value, height.value, originalWidth.value, originalHeight.value)

          // 标记执行完毕
          resolve()
        })
      })

    }

    // 更新dom尺寸
    const updateDomSize = () => {
      if (width.value && height.value) {
        dom.style.width = `${width.value}px`
        dom.style.height = `${height.value}px`
      } else {
        dom.style.width = `${originalWidth.value}px`
        dom.style.height = `${originalHeight.value}px`
      }
    }

    // 压缩尺寸
    const updateDomScaleSize = () => {
      // 获取当前可视区域大小
      const curWidth = document.body.clientWidth
      const curHeight = document.body.clientHeight

      // 获取大屏最终宽高
      const realWidth = width.value || originalWidth.value
      const realHeight = height.value || originalHeight.value

      const widthScale = curWidth / realWidth
      const heightScale = curHeight / realHeight
      dom && (dom.style.transform = `scale(${widthScale}, ${heightScale}))`)
    }

    // 初始化 MutationObserver
    const initMutationObserver = () => {
      const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
      observer = new MutationObserver(onResize)
      observer.observe(dom, {
        attributes: true,
        attributeFilter: ['style'],
        attributeOldValue: true
      })
    }
    // 销毁 MutationObserver
    const removeMutationObserver = () => {
      if (observer) {
        observer.disconnect()
        observer.takeRecords()
        observer = null
      }
    }

    const onResize = async (e) => {
      console.log('onresize', e)
      await initSize()
      updateDomScaleSize()
    }

    // 事件方法
    onMounted(async () => {
      ready.value = false
      context = getCurrentInstance().ctx
      dom = context.$refs[containerRef]

      await initSize()
      updateDomSize()
      updateDomScaleSize()

      // 绑定 resize 事件
      window.addEventListener('resize', debounce(200, onResize))

      // 兼容其他内核
      initMutationObserver()

      ready.value = true
    })

    // 事件方法
    onUnmounted(() => {
      // 解绑事件
      window.removeEventListener('resize', onResize)
      removeMutationObserver()
    })

    return {
      containerRef,
      ready
    }
  }
}
</script>
<style lang="scss" scoped>
#my-container {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transform-origin: left top;
  z-index: 999;
}
</style>
