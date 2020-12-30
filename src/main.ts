import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import SnackbarPlugin from "./common/plugins/snackbar";
import { router } from "./router";
import App from "./App.vue";
import "vuetify/dist/vuetify.min.css";

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(SnackbarPlugin);
const vuetify = new Vuetify();

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#root");