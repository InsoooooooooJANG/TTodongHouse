import Vue from 'vue';
import App from './components/Main.vue';

Vue.config.productionTip = true;

new Vue({
    render: h => h(App)
}).$mount('#mainvue');
