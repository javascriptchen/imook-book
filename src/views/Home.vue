<template>
  <div class="home">
    <div class="test">abcd</div>
    <div class="test">abcd</div>
    <div class="test">abcd</div>
    <div class="test">abcd</div>
    <div class="test">abcd</div>
    <div class="test">abcd</div>
    <div class="test">abcd</div>
    <div class="test">abcd</div>
    <div class="test">abcd</div>
    <div class="test">abcd</div>
    <div class="test">abcd</div>
    <i class="icon-back"></i>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["test"])
  },
  mounted() {
    this.$store.dispatch("setTest", 9).then(() => {
      console.log(this.test);
    });
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/element.scss";
.home {
  @include flex(row);
  font-size: 40px;

  .test {
    box-sizing: border-box;
    width: 750px;
    height: 200px;
    border: 1px solid #000;
    color: green;
  }
}
</style>
