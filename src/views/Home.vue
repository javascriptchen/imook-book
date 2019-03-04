/*
 * @Author: chenchen
 * @Date: 2019-03-04 01:36:06
 * @Last Modified by: chenchen
 * @Last Modified time: 2019-03-04 01:37:24
 */
<template>
  <div class="home">
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from "epubjs";
global.ePub = Epub;
export default {
  mounted() {
    this.book = new Epub(
      "http://192.168.61.100:8088/epub/Biomedicine/2014_Book_Self-ReportedPopulationHealthA.epub"
    );
    this.book.renderTo("read", {
      width: window.innerWidth,
      height: window.innerHeight,
      method: "default"
    }).display();
  }
};
</script>
