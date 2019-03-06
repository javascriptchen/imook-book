<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
import { ebookMixin } from "@/utils/mixin";
import Epub from "epubjs";
global.ePub = Epub;
export default {
  mixins: [ebookMixin],
  data() {
    return {};
  },
  methods: {
    initEpub() {
      const baseUrl = "http://192.168.61.100:8088/epub/";
      const url = `${baseUrl}${this.fileName}.epub`;
      this.book = new Epub(url);
      this.rendition = this.book.renderTo("read", {
        width: innerWidth,
        height: innerHeight,
        method: "default"
      });
      this.rendition.display();
      this.rendition.on("touchstart", event => {
        console.log(event);
        this.touchStartX = event.changedTouches[0].clientX;
        this.touchStartTime = event.timeStamp;
      });
      this.rendition.on("touchend", event => {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX;
        const time = event.timeStamp - this.touchStartTime;
        console.log(offsetX, time);
        if (offsetX > 50 && time < 500) {
          this.prevPage();
        }
        if (offsetX < 50 && time < 500) {
          this.nextPage();
        }
      });
    },
    prevPage() {
      if (this.rendition) {
        this.rendition.prev();
      }
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next();
      }
    }
  },
  mounted() {
    this.setFileName(this.$route.params.fileName.split("|").join("/")).then(
      () => {
        this.initEpub();
      }
    );
  }
};
</script>
<style lang='scss' scoped>
</style>
