<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from "epubjs";
import { ebookMixin } from "utils/mixin.js";
import {
  getFontFamily,
  saveFontFamily,
  getFontSize,
  saveFontSize
} from "../../utils/localStorage";
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
    initFontFamily() {
      let font = getFontFamily(this.fileName);
      if (!font) {
        saveFontFamily(this.fileName, this.defaultFontFamily);
      } else {
        this.rendition.themes.font(font);
        this.setDefaultFontFamily(font);
      }
    },
    initFontSize() {
      let fontSize = getFontSize(this.fileName);
      if (!fontSize) {
        saveFontSize(this.fileName, this.defaultFontSize);
      } else {
        this.rendition.themes.fontSize(fontSize);
        this.setDefaultFontSize(fontSize);
      }
    },
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
      this.setFontFamilyVisible(false);
    },
    toggleTitleAndMenu() {
      this.setMenuVisible(!this.menuVisible);
      this.setSettingVisible(-1);
      this.setFontFamilyVisible(false);
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
      this.rendition.display().then(() => {
        this.initFontFamily();
        this.initFontSize();
      });
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
      this.rendition.hooks.content.register(contents => {
        Promise.all([
          contents.addStylesheet(
            `${process.env.VUE_APP_RES_URL}/fonts/daysOne.css`
          ),
          contents.addStylesheet(
            `${process.env.VUE_APP_RES_URL}/fonts/cabin.css`
          ),
          contents.addStylesheet(
            `${process.env.VUE_APP_RES_URL}/fonts/montserrat.css`
          ),
          contents.addStylesheet(
            `${process.env.VUE_APP_RES_URL}/fonts/tangerine.css`
          )
        ]).then(() => {});
      });
    }
  }
};
</script>
<style lang='scss' >
</style>
