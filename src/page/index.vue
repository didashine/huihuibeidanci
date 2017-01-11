<template>
	<div id="index" @click="goCreat">
		my is index
	</div>
</template>

<script>
	export default {
		name:'index',
		methods: {
			goCreat() {
				this.$router.push({path:'/Creat'});
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/varables.less';
	#index{
		width: 100%;
		height: 2000px;
		background-color: @orange;
		}	
</style>