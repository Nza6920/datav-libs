<template>
  <div class="my-fly-box" :ref="refName">
    <svg :width="width" :height="height">
      <defs>
        <path
            :id="pathId"
            :d="path"
            fill="none"
        />
        <radialGradient
            :id="radialGradientId"
            cx="50%"
            cy="50%"
            fx="100%"
            fy="50%"
            r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
        </radialGradient>
        <mask :id="maskId">
          <circle :r="starLength" cx="0" cy="0" :fill="`url(#${radialGradientId})`">
            <animateMotion :dur="`${duration}s`"
                           :path="path"
                           rotate="auto"
                           repeatCount="indefinite"/>
          </circle>
        </mask>
      </defs>
      <use :href="`#${pathId}`"
           stroke-width="1"
           :stroke="lineColor"></use>
      <use :href="`#${pathId}`"
           stroke-width="3"
           :stroke="starColor"
           :mask="`url(#${maskId})`"></use>
    </svg>
    <div class="fly-box-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import {computed, getCurrentInstance, onMounted, ref} from 'vue'
import {v4 as uuidv4} from 'uuid'

export default {
  name: 'MyFlyBox',
  props: {
    lineColor: {
      type: String,
      default: '#235fa7'
    },
    starColor: {
      type: String,
      default: '#4fd2dd'
    },
    starLength: {
      type: [String, Number],
      default: 50
    },
    duration: {
      type: Number,
      default: 3
    }
  },
  setup(ctx) {
    const uuid = uuidv4()
    const width = ref(0)
    const height = ref(0)
    const refName = 'myFlyBox'
    const pathId = `${refName}-path-${uuid}`
    const radialGradientId = `${refName}-gradient-${uuid}`
    const maskId = `${refName}-maskId-${uuid}`

    const path = computed(() =>
        `M5 5 L${width.value - 5} 5 L${width.value - 5} ${height.value - 5} L5 ${height.value - 5} Z`
    )

    const init = () => {
      // 获取运行时实例
      const instant = getCurrentInstance()
      const dom = instant.ctx.$refs[refName]
      width.value = dom.clientWidth
      height.value = dom.clientHeight
    }

    onMounted(() => {
      init()
    })
    return {
      width,
      height,
      path,
      refName,
      pathId,
      radialGradientId,
      maskId
    }
  }
}
</script>
<style lang="scss" scoped>
.my-fly-box {
  position: relative;
  width: 100%;
  height: 100%;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .fly-box-content {
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
}
</style>
