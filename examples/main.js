import Vue from "vue";
import App from "./App.vue";
import FileSelect from "../src/index.js";

Vue.use(FileSelect);
Vue.use(FileSelect.service);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
