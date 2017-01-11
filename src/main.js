// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/index.js'
import VueRouter from 'vue-router'
import index from './page/index.vue'
import Creat from './page/Creat.vue'
Vue.use(VueRouter)
/* eslint-disable no-new */
require("!style!css!less!./assets/css/main.less")

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes:[
		{path:'/',component:index},
		{path:'/index',component:index},
		{path:'/Creat',component:Creat},
		{path:'*',component:index}
	]
})

var vm = new Vue({
	router,
	store,
  template: `
		<div>
			<transition name='fade' mode='out-in'>
				<router-view></router-view>
			</transition>
		</div>
  `,
  beforeCreate() {
  	// 和服务器链接 跳转
  	if (this.$store.state.serverIP == 0) {
  		router.push({path:'/error'});
  	}
  	// 判断是否为注册用户
  	if (this.$store.state.newbi ==1) {
  		router.push({path:'/index'});
  	} else {
  		router.push({path:'/Creat'});
  	}
  }
}).$mount("#app");
