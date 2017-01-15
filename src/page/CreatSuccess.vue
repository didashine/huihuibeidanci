<template>
	<div id="creat">
		<header-md smallTitle='CET-4' show='N'></header-md>
		<div class="text-text padding-md">
			<div class="padding-lg"></div>
			<div class="text-size-lg padding-sm text-align-center">注册成功</div>
			<div class="text-size-sm text-align-center">
				<span class="text-orange">+600</span> 经验值
			</div>

		</div>
		<bottomBtn @click.native='toCreatSelect' value='查看计划' color='orange' class="bottomBtn"></bottomBtn>
	</div>
</template>

<script>
	import headerMd from '../components/header-md.vue'
	import bottomBtn from '../components/bottomBtn.vue'
	export default {
		name:'CreatSuccess',
		components: {
			headerMd,
			bottomBtn
		},
		methods: {
			toCreatSelect() {
				this.$router.push({path:'/index'});
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/variables.less';

</style>