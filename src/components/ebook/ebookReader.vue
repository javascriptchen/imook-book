<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from "epubjs";
import { ebookMixin } from "utils/mixin.js";
global.ePub = Epub;
export default {
  data() {
    return {};
  },
  mixins: [ebookMixin],
  mounted() {
    const fileName = this.$route.params.fileName.split("|").join("/");
    console.log(fileName);
    this.setFileName(fileName).then(() => {
      this.initEpub();
    });
  },
  methods: {
    prevPage() {
      if (this.rendition) {
        this.rendition.prev();
        this.hideMenuVisible();
      }
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next();
        this.hideMenuVisible();
      }
    },
    hideMenuVisible() {
      this.setMenuVisible(false);
      this.setSettingVisible(-1);
    },
    toggleTitleAndMenu() {
      this.setMenuVisible(!this.menuVisible);
      this.setSettingVisible(-1);
    },
    initEpub() {
      const url = "http://192.168.61.107:8088/epub/" + this.fileName + ".epub";
      this.book = new Epub(url);
      this.setCurrentBook(this.book);
      this.rendition = this.book.renderTo("read", {
        width: window.innerWidth,
        height: window.innerHeight,
        method: "default"
      });
      this.rendition.display();
      this.rendition.on("touchstart", event => {
        this.touchStartX = event.changedTouches[0].clientX;
        this.touchStartTime = event.timeStamp;
      });
      this.rendition.on("touchend", event => {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX;
        const time = event.timeStamp - this.touchStartTime;
        if (offsetX > 50 && time < 500) {
          this.prevPage();
        } else if (offsetX < -50 && time < 500) {
          this.nextPage();
        } else {
          this.toggleTitleAndMenu();
        }
      });
    }
  }
};
</script>
<style lang='scss' >
</style>
