import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Subtitle from "./views/Subtitle.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/subtitle",
      name: "subtitle",
      component: Subtitle
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
