import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import SoftUIDashboard from "./soft-ui-dashboard";

createApp(App)
    .use(store)
    .use(router)
    .use(VueSweetalert2)
    .use(SoftUIDashboard)
    .mount('#app')
