/*
 * @Author: chenchen
 * @Date: 2019-03-04 01:39:30
 * @Last Modified by:   chenchen
 * @Last Modified time: 2019-03-04 01:39:30
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    }
  ]
});
