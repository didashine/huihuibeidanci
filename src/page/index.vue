<template>
	<div id="index">
		<header-md smallTitle='CET-4' show='y'></header-md>
		<leftMenu v-show="this.state.leftmenuShow"></leftMenu>
		<face></face>
		<speed class="animated pulse" @click.native="go([$router,'plan'])"></speed>
		<!-- 按钮 -->
		<div id="btn">
			<div id="btn_main">
				<div id="btn_border_left" @click="go([$router,'plan'])"></div>
				<div id="btn_left" class="btnStyle" @click="go([$router,'plan'])">继续计划</div>
				<div id="btn_right" class="btnStyle" @click="go([$router,'ReviseBegin'])">复习加经验</div>
				<div id="btn_border_right" @click="go([$router,'ReviseBegin'])"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapMutations} from 'vuex'
	import headerMd from '../components/header-md.vue'
	import leftMenu from '../components/leftmenu.vue'
	import face from '../components/face.vue'
	import speed from '../components/speed.vue'
	export default {
		name:'index',
		data() {
			return {
				state: ''
			}
		},
		components: {
			headerMd,leftMenu,face,speed
		},
		methods: {
			toCreatSelect() {
				this.$router.push({path:'/index'});
			},
			...mapMutations([
					"go"
				])
		},
		computed: {
			...mapGetters([
					"stime"
				])
		},
		created() {
	    this.$http.get('/api/users').then((response) => {
	      response = response.body;
	      if (response.errno === 0) {
	        this.state = response.data;
	      }
	    });
	  },
		mounted() {
			if (this.$parent.come != 0) {
				/*var state,xmlhttp
				xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function() {
					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
						state = eval('(' + xmlhttp.responseText + ')')
					} else {
						console.log('err');
					}
				}
		 	  xmlhttp.open("GET","http://" +this.$store.state.serverIp + "/json/users.php?date="+this.stime,true);
			  xmlhttp.send();*/
			  this.$http.get('/api/users').then((response) => {
		      response = response.body;
		      if (response.errno === 0) {
		        this.state = response.data;
		      }
		    });
				this.state.percent = state.percent;
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/variables.less';
	#btn {
		position: fixed;
		left:0;
		bottom:0;
		height: 50px;
		width: 100%;
		text-align: center;
		#btn_main {
			width: 80%;
			height: 45px;
			color: #fff;
			border: 0;
			letter-spacing: 1px;
			outline: none;
			line-height: 45px;
			margin-left: 33px;
			#btn_border_left {
				display: inline-block;
				width: 10%;
				height:45px;
				border-radius: 50%;
				background-color: @green;
				vertical-align: top;
				margin-right: -20px;
			}
			#btn_left {
				display: inline-block;
				width:30%;
				height:45px;
				line-height:45px;
				background-color: @green;
				padding: 0 20px 0 20px;
			}
			#btn_right {
				display: inline-block;
				width:30%;
				height:45px;
				line-height:45px;
				background-color: @orange;
				padding: 0 20px 0 20px;
				margin-left: -5px;
			}
			#btn_border_right {
				display: inline-block;
				width: 10%;
				height:45px;
				border-radius: 50%;
				background-color: @orange;
				vertical-align: top;
				margin-left: -20px;
			}
		}
	}
</style>