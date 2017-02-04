// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/index.js'
import VueRouter from 'vue-router'
import Vueresource from 'vue-resource';
import index from './page/index.vue'
import Creat from './page/Creat.vue'
import CreatSelect from './page/CreatSelect.vue'
import CreatFinish from './page/CreatFinish.vue'
import CreatSuccess from './page/CreatSuccess.vue'
import ReviseBegin from './page/ReviseBegin.vue'
import Revise from './page/Revise.vue'
import plan from './page/plan.vue'
import ErrorPage from './page/ErrorPage.vue'

Vue.use(VueRouter)
Vue.use(Vueresource);
/* eslint-disable no-new */
require("!style!css!less!./assets/css/main.less")
require("!style!css!less!./assets/css/animate.min.css")

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes:[
		{path:'/',component:index},
		{path:'/index',component:index},
		{path:'/Creat',component:Creat},
		{path:'/CreatSelect',component:CreatSelect},
		{path:'/CreatFinish',component:CreatFinish},
		{path:'/CreatSuccess',component:CreatSuccess},
		{path:'/ReviseBegin',component:ReviseBegin},
		{path:'/Revise',component:Revise},
		{path:'/plan',component:plan},
		{path:'/ErrorPage',component:ErrorPage},
		{path:'*',component:index}
	]
})

var vm = new Vue({
	router,
	store,
	data: {
		preExamDay:'2017-6-17',
		studyTime:'90',
		come:0,
		state:''
	},
  template: `
		<div>
			<transition name='fade' mode='out-in'>
				<router-view></router-view>
			</transition>
		</div>
  `,
  beforeCreate() {
  	this.$http.get('/api/users').then((response) => {
	    response = response.body;
	    if (response.errno === 0) {
	      this.state = response.data;
	    }
	  });    	
  },
  created() {
  	// 和服务器链接 跳转
  	if (this.state.serverIP == 0) {
  		router.push({path:'/error'});
  	}
  	// 判断是否为注册用户
  	if (this.state.newbi ==1) {
  		router.push({path:'/index'});
  	} else {
  		router.push({path:'/index'});
  	}
  }
}).$mount("#app");
