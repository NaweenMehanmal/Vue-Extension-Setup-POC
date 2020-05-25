import Vue from "vue";
import App from "./../App.vue";

const root = document.createElement("div");
root.setAttribute("id", "gd-sync-image-upload-app");
document.body.prepend(root);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#gd-sync-image-upload-app");

console.log("coming from content...");
