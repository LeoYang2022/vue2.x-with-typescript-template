import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import colorDirective from './directives/ColorDirective';
import ElementUI from 'element-ui'
import ApiPack from './network/request';
import MyFilter from "./filters/UpperCase";

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.prototype.$axios = axios;
Vue.prototype.$request = new ApiPack();
Vue.directive("globalColorDirective", colorDirective);
Vue.filter("globalStrToUpper", MyFilter.strToUpper);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
