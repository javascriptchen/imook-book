<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
#app {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
