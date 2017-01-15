<template>
	<div class="header-md">
		<h4>{{smallTitle}}</h4>
		<div v-show="moreshow" id="menu" @click="leftmenuOpen">
			<img src="../assets/images/menu.png" height="32" width="42" alt="三">
		</div>
	</div>
</template>

<script>
	export default {
		name:'header-md',
		props: [
			'smallTitle',
			'show'
		],
		methods: {
			leftmenuOpen() {
				this.$store.state.leftmenuShow = true;
			}
		},
		computed: {
			moreshow() {
				if (this.show == 'y') {
					return this.moreshow = true;
				} else {
					return this.moreshow = false;
				}
			}
		}
	};
</script>

<style lang='less' scoped>
	@import '../assets/css/variables.less';
	.header-md {
		height: 35px;
		width: 100%;
		position: relative;
		box-shadow: #ddd 0 3px;
		background: linear-gradient(270deg,@green 0%,@turquoise 100%);
		color:@white;
		padding: 40px 0 0 20px;
		h4{
			font-size: 140%;
			positive: relative;
			margin-top: -10px;
		}
		#menu {
			position: absolute;
			top: 24PX;
			right: 35PX;
		}
	}
</style>