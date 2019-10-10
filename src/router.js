import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Subtitle from "./views/Subtitle.vue";
import Codec from "./views/Codec.vue";

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
      path: "/codec",
      name: "codec",
      component: Codec
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
