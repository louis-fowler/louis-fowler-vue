import Vue from "vue";
import App from "./App.vue";

let VueFire = require("vuefire");
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(VueFire);

library.add(faLinkedin, faGithub);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
