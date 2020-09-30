import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/tailwind.css";
import "@/firebase/init";
import firebase from "firebase/app";
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false;

let app = null;
/* prevent the app from initializing multiple times */
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }  
});
