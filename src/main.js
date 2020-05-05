import Vue from 'vue'
import Vuetify from'./plugins/vuetify'
import App from './App.vue'
import router from './router';
import store from './store/store';
import './plugins/axios'
Vue.config.productionTip = false

Vue.filter('currency', value => {
	return 'R$ ' + value.toLocaleString()
})
new Vue({
	store,
	router,
	Vuetify,
	render: h => h(App),
}).$mount('#app')