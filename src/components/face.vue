<template>
	<div id="face">
		<div class="fl faceimg">
			<img :src="state.headerimgurl">
		</div>
		<div class="fl shwox">
			<h3 id="showname">
				{{showname}}
				<notice :num='this.state.notice' v-show="noticeShow" class="notice"></notice>
			</h3>
			<h4>
				记忆力：<span class="text-orange">{{state.memory}}</span>
				经验值：<span class="text-green">{{state.xp}}</span>
			</h4>
		</div>
		<div class="cf"></div>
	</div>
</template>

<script>
	import notice from '../components/notice.vue'
	export default {
		data() {
			return {
				state: ''
			}
		},
		name:'face',
		components: {notice},
		props: ['openid'],
		computed:{
			noticeShow() {
				if (this.$parent.state.notice == 0) {
					return false
				} else {
					return true
				}
			},
			showname() {
				var showname = this.state.name;
/*				if (showname.length>15) {
					showname = showname.substring(0,8) + '...'
				}*/
	/*			console.log(showname)*/
				return showname;
			}
		},
		created() {
	    this.$http.get('/api/users').then((response) => {
	      response = response.body;
	      if (response.errno === 0) {
	        this.state = response.data;
	      }
	    });
	  },
/*		mounted() {
			if (this.showname.length < 5) {
				document.getElementById("showname").style.fontSize="200%";
			}
		}*/
	}
</script>

<style lang="less" scoped>
	#face{
		padding:20px;
		width: 100%;
	}
	.faceimg{
		width: 20%;
	}
	img{
		width:100%;
		border:6px solid #eae9e9;
	}
	.shwox{
		margin-top: 10px;
		margin-left: 20px;
		width: 70%;
		h3{
			font-size: 200%;
			width: 100%;
		}
		h4{
			margin-top: 5px;
			font-size: 100%;
		}
		span{
			margin-right: 10px;
		}
	}
	.notice{
		position:absolute;
		margin-bottom: -10px;
		margin-left: 5px;
	}
</style>