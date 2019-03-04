<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("setTest", 10);
  }
};
document.addEventListener("DOMContentLoaded", () => {
  let fontSize = window.innerWidth / 10;
  fontSize = fontSize > 50 ? 50 : fontSize;
  const html = document.querySelector("html");
  html.style.fontSize = fontSize + "px";
});
</script>

<style>
</style>
