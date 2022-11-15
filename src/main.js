import Vue from 'vue';
import Notifications from 'vue-notification';
import App from './App.vue';
import store from './store';

Vue.use(Notifications);

new Vue({
  render: (h) => h(App),
  store: store,
}).$mount('#app');
