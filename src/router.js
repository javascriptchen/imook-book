/*
 * @Author: chenchen
 * @Date: 2019-03-04 01:39:30
 * @Last Modified by: chenchen
 * @Last Modified time: 2019-03-05 00:33:37
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [{
    path: "/",
    redirect: "ebook"
  }, {
    path: "/ebook",
    component: () => import("./views/ebook/index.vue"),
    children: [{
      path: ":fileName",
      component: () => import("./components/EbookReader.vue")
    }]
  }]
});
