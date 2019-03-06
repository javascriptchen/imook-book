/*
 * @Author: chenchen
 * @Date: 2019-03-04 01:36:02
 * @Last Modified by: chenchen
 * @Last Modified time: 2019-03-04 23:26:11
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/icon.css";
import "@/assets/styles/global.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
