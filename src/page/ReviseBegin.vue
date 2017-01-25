<template>
	<div id="ReviseBegin">
		<face></face>
		<div class="padding-md"></div>
		<div class="text-text padding-md" >
			<p class="text-size-md">复习的规则,</p>
			<div class="padding-sm"></div>
			<p class="text-indent">单词记忆是有一定的遗忘曲线，通过复习征服自己的遗忘曲线。</p>
			<div class="padding-sm"></div>
			<ul>
				<li>1、如果正确，将获得1点经验；</li>
				<li>2、如果错误，将被扣除2点经验</li>
				<li>3、如果一个单词3次以上连续错误，该单词将移到任务区，进行重新考核。</li>
			</ul>
			<div class="padding-sm"></div>
			<p class="text-indent">你需要足够的经验才能启动计划</p>
			<div class="padding-lg"></div>
			<p>
				<input type="checkbox" id="checkbox" v-model="readReviseRule">
				以后不再提示
			</p>
		</div>
		<bottomBtn @click.native='toCreatSelect' value='开始吧' color='orange' class="bottomBtn"></bottomBtn>
	</div>
</template>

<script>
	import face from '../components/face.vue'
	import headerLg from '../components/header-lg.vue'
	import bottomBtn from '../components/bottomBtn.vue'
	export default {
		name:'ReviseBegin',
		data() {
			return {
				readReviseRule: false
			}
		},
		components: {
			headerLg,
			bottomBtn,
			face
		},
		methods: {
			toCreatSelect() {
				this.$router.push({path:'/Revise'});
			}
		},
/*		watch: {
			readReviseRule(newval) {
				var formData = new FormData();
				if ( newval == true) {
					formData.append('readReviseRule',1)
					this.$http.post("http://" + this.$store.state.serverIP + '/json/updateuser.php',formData).then(function(response){
						console.log(response.data);
					},function(err){
						this.$router.push({ path : '/ErrorPage' })
					})
				}
			}
		}*/
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/variables.less';
</style>