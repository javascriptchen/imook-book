<template>
  <div class="menu-bar">
    <transition name="slide-up">
      <div
        :class="{'hide-box-shadow':!menuVisible||settingVisible >= 0}"
        class="menu-wrapper"
        v-show="menuVisible"
      >
        <div class="icon-wrapper">
          <span
            @click="showSetting(3)"
            class="icon-menu"
          ></span>
        </div>
        <div class="icon-wrapper">
          <span
            @click="showSetting(2)"
            class="icon-progress"
          ></span>
        </div>
        <div class="icon-wrapper">
          <span
            @click="showSetting(1)"
            class="icon-bright"
          ></span>
        </div>
        <div class="icon-wrapper">
          <span
            @click="showSetting(0)"
            class="icon-a"
          >A</span>
        </div>
      </div>
    </transition>
    <EbookSettingFont></EbookSettingFont>
  </div>
</template>

<script>
import { ebookMixin } from "utils/mixin.js";
import EbookSettingFont from "./EbookSettingFont";
export default {
  mixins: [ebookMixin],
  methods: {
    showSetting(key) {
      this.setSettingVisible(key);
    }
  },
  components: {
    EbookSettingFont
  }
};
</script>

<style lang='scss' scoped>
@import "../../assets/styles/global";

  .menu-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 200;
    display: flex;
    width: 100%;
    height: 48px;
    box-shadow: 0 -8px 8px rgba(0, 0, 0, .15);
    font-size: 22px;
    background: #fff;
    &.hide-box-shadow {
      box-shadow: none;
    }
    .icon-wrapper {
      flex: 1;
      @include center;
      .icon-progress {
        font-size: 24px;
      }
      .icon-A {
        font-size: 20px;
      }
    }
  }
</style>
