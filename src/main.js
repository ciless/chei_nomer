import VueTheMask from 'vue-the-mask';
import Vue from 'vue';
import VueSlideoutPanel from 'vue2-slideout-panel';
import Ripple from 'vue-ripple-directive';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css';
import './registerServiceWorker';
import 'vue-height-tween-transition/index.css';

Vue.component('height-tween', require('vue-height-tween-transition'));

Vue.use(VueSlideoutPanel);
Vue.use(VueTheMask);
Ripple.color = 'rgba(255, 255, 255, 0.35)';
Ripple.zIndex = 55;
Vue.directive('ripple', Ripple);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
