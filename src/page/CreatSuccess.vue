<template>
	<div id="creat">
		<header-lg bigTitle='CET-4' noteTitle='四级单词记忆管理'></header-lg>
		<div class="text-text padding-md" >
			<p class="text-size-md">Hi,</p>
			<p class="text-indent">亲爱的你，距离大学英语四级（COL-LEGE ENGLISH TEST 4/6）还有 356 天，根据考试大纲要求，你需要记忆 3441 个单词和 360 个短语。你每天需要记忆 12 个单词。 让我帮你规划记忆管理。</p>
			<p class="text-indent">当然你不会感觉到枯燥，养成式记忆办法，规划了单词的遗忘曲线，同时，你可以邀请更多的小伙伴一起参与，或加入更多社区。有趣的单词接龙，谜语猜猜看，作文漂流瓶，更多的活动游戏美哒哒的学英语吧。</p>
		</div>
		<bottomBtn @click.native='toCreatSelect' value='创建计划' color='orange' class="bottomBtn"></bottomBtn>
	</div>
</template>

<script>
	import headerLg from '../components/header-lg.vue'
	import bottomBtn from '../components/bottomBtn.vue'
	export default {
		name:'Creat',
		components: {
			headerLg,
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
		font-size: 110%
	}
	p{
		margin-bottom:10px;
	}
</style>