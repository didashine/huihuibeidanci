<template>
	<div id="index">
		<header-md smallTitle='CET-4' show='y'></header-md>
		<leftMenu v-show="this.$store.state.leftmenuShow"></leftMenu>
		<face></face>
		<div class="more"></div>
	</div>
</template>

<script>
	import headerMd from '../components/header-md.vue'
	import leftMenu from '../components/leftmenu.vue'
	import face from '../components/face.vue'
	export default {
		name:'index',
		data() {
			return {

			}
		},
		components: {
			headerMd,leftMenu,face
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
	#index {

	}
</style>