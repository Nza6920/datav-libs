<template>
  <svg width="0" height="0" viewBox="0 0 100 100">
    <defs>
      <symbol id="more" viewBox="0 0 100 100">
        <circle r="5" cx="10" cy="25" fill="currentColor"/>
        <circle r="5" cx="10" cy="50" fill="currentColor"/>
        <circle r="5" cx="10" cy="75" fill="currentColor"/>
        <line x1="40" y1="25" x2="90" y2="25" stroke-width="8" stroke="currentColor"/>
        <line x1="40" y1="50" x2="90" y2="50" stroke-width="8" stroke="currentColor"/>
        <line x1="40" y1="75" x2="90" y2="75" stroke-width="8" stroke="currentColor"/>
      </symbol>
      <symbol id="filledArrowRight" viewBox="0 0 100 100">
        <polyline points="20 10, 80 50, 20 90" fill="currentColor"></polyline>
      </symbol>
      <symbol id="arrowRight" viewBox="0 0 100 100">
        <polyline points="30 20, 70 40, 20 60" fill="transparent" stroke="currentColor" stroke-width="4"></polyline>
      </symbol>
      <symbol id="mobile" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M725.333333 85.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v768a42.666667 42.666667 0 0 1-42.666667 42.666667H298.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V128a42.666667 42.666667 0 0 1 42.666667-42.666667h426.666666z m-21.333333 682.666667H320v106.666667h384v-106.666667z m-192 21.333333a32 32 0 1 1 0 64 32 32 0 0 1 0-64z m192-512H320v426.666667h384V277.333333z m0-128H320v64h384V149.333333z"></path>
      </symbol>
    </defs>
  </svg>
</template>
<script>
export default {
  name: 'TestComponentA',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>
