<template>
  <transition name="slide-up">
    <div
      class="setting-wrapper"
      v-show="menuVisible && settingVisible===0"
    >
      <div
        class="setting-font-size"
        v-if="showTag === 0"
      >
        <div
          :style="{fontSize: fontSizeList[0].fontSize + 'px'}"
          class="preview"
        >A</div>
        <div class="select">
          <div
            :key="index"
            @click="setFontSize(item.fontSize)"
            class="select-wrapper"
            v-for="(item, index) in fontSizeList"
          >
            <div class="line"></div>
            <div class="point-wrapper">
              <div
                class="point"
                v-show="defaultFontSize === item.fontSize"
              >
                <div class="small-point"></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div
          :style="{fontSize: fontSizeList[fontSizeList.length - 1].fontSize + 'px'}"
          class="preview"
        >A</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import { ebookMixin } from "@/utils/mixin";

export default {
  mixins: [ebookMixin],
  methods: {
    isSelected(item) {
      return this.defaultFontFamily === item.font;
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";

.setting-wrapper {
    position: absolute;
    bottom: 48px;
    left: 0;
    z-index: 101;
    width: 100%;
    height: 60px;
    background: white;
    box-shadow: 0 -8px 8px rgba(0, 0, 0, 0.15);
    .setting-font-size {
      display: flex;
      height: 100%;
      .preview {
        flex: 0 0 40px;
        @include center;
      }
      .select {
        display: flex;
        flex: 1;
        .select-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          &:first-child {
            .line {
              &:first-child {
                border-top: none;
              }
            }
          }
          &:last-child {
            .line {
              &:last-child {
                border-top: none;
              }
            }
          }
          .line {
            flex: 1;
            height: 0;
            border-top: 1px solid #ccc;
          }
          .point-wrapper {
            position: relative;
            flex: 0 0 0;
            width: 0;
            height: 7px;
            border-left: 1px solid #ccc;
            .point {
              position: absolute;
              top: -8px;
              left: -10px;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: white;
              border: 1px solid #ccc;
              box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
              @include center;
              .small-point {
                width: 5px;
                height: 5px;
                background: black;
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
  }
</style>
