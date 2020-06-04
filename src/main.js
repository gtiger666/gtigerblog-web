import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.less";
import "./assets/styles/normalize.less";
import "./assets/styles/common.less";
import Antd from "ant-design-vue";

Vue.config.productionTip = false;
Vue.use(Antd);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
