<template>
	<div id="creat">
		<div class="text-text padding-md">
			<p class="text-size-md">请选择考试时间</p>
			<p class="text-lg-note">CET考试时间定于每年6月和12月的第三个星期六</p>
			<p class="text-size-sm">2017年</p>
			<p class="text-md-note">选择其他的考试时间</p>
			<p class="text-size-sm">预留备考时间</p>
			<p class="text-md-note">设置考试前多少天完成单词计划</p>
		</div>
		<bottomBtn @click.native='toCreatSelect'value='开始吧' color='orange' class="bottomBtn"></bottomBtn>
	</div>
</template>

<script>
	import bottomBtn from '../components/bottomBtn.vue'
	export default {
		name:'CreatSelect',
		components: {
			bottomBtn
		},
		methods: {
			toCreatSelect() {
				this.$router.push({path:'/CreatSelect'});
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/variables.less';
	.text-text{
		font-size: 110%;
		margin-top:30px;
	}
	p{
		margin-bottom:10px;
	}
</style>