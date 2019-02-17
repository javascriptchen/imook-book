<template>
  <div class="ebook">
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
    <ebook-menu></ebook-menu>
  </div>
</template>

<script>
import EbookReader from "components/ebook/ebookReader.vue";
import EbookTitle from "components/ebook/ebookTitle.vue";
import EbookMenu from "components/ebook/ebookMenu.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    EbookReader,
    EbookTitle,
    EbookMenu
  }
};
</script>
<style lang='scss' scoped>
</style>
