<template>
	<div id="index">
		<header-md smallTitle='CET-4' show='y'></header-md>
		<leftMenu v-show="this.$store.state.leftmenuShow"></leftMenu>
		<face></face>
		<speed class="animated pulse"></speed>
		<!-- 按钮 -->
		<div id="btn">
			<div id="btn_main">
				<div id="btn_border_left"></div>
				<div id="btn_left" class="btnStyle">继续计划</div>
				<div id="btn_right" class="btnStyle" @click="go([$router,'ReviseBegin'])">复习加经验</div>
				<div id="btn_border_right"></div>
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
		mounted() {
			if (this.$parent.come != 0) {
				var state,xmlhttp
				xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function() {
					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
						state = eval('(' + xmlhttp.responseText + ')')
					} else {
						console.log('err');
					}
				}
		 	  xmlhttp.open("GET","http://" +this.$store.state.serverIp + "/json/users.php?date="+this.stime,true);
			  xmlhttp.send();
				this.$store.state.percent = state.percent;
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