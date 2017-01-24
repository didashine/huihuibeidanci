<template>
	<div class="CreatFinish">
		<header-lg bigTitle='CET-4' noteTitle='四级单词记忆管理'></header-lg>
		<div class="padding-md">
			<div class="text-size-lg">真实姓名</div>
			<div><input type="text" class="inputs" v-model="name"></div>
			<div class="padding-sm"></div>
			<div class="text-size-lg">注册手机号</div>
			<div><input type="text" class="inputs" v-model="mobile" onkeyup="this.value = this.value.replace(/\D/g,'')"></div>
			<div class="padding-sm"></div>
			<div class="text-size-lg">性别</div>
			<div class="padding-sm"></div>
			<div class="days-wrapper">
					<ul class="days-content">
						<li class="sexx active" @click="sexSelect('data-1')" id="data-1">
							<div class="content">男</div>
						</li>
						<li class="sexx noactive" @click="sexSelect('data-0')" id="data-0">
							<div class="content">女</div>
						</li>
					</ul>
				</div>
		</div>
		<bottomBtn @click.native='toCreatSuccess' value='开始吧' color='orange' class="bottomBtn"></bottomBtn>
	</div>
</template>
	
<script>
	import Vue from 'vue'
	import VueResource from 'vue-resource'
	import headerLg from '../components/header-lg.vue'
	import bottomBtn from '../components/bottomBtn.vue'
	Vue.use(VueResource)
	export default {
		name:'CreatFinish',
		data() {
			return {
				mobile:'',
				name:'',
				sex:'1'
			}
		},
		components: {
			headerLg,
			bottomBtn
		},
		methods: {
			toCreatSuccess() {
				if(this.name != '' && this.mobile != ''){
					var formData = new FormData();
					formData.append('name',this.name);
					formData.append('mobile',this.mobile);
					formData.append('preExamDay',this.$parent.preExamDay);
					formData.append('studyTime',this.$parent.studyTime);
					formData.append('sex',this.sex);
					/*
						this.$http.post("http://" + this.$store.state.serverIP +"/json/post_reguser.php",formData)
					*/
					this.$http.get("/api/post_reguser").then((response) => {
						response = response.body;
						if (response.data ==1) {
							this.$router.push({ path: '/CreatSuccess'});
						}
					},(err) => {
						this.$router.push({ path: '/ErrorPage'});
					})
				}
				
			},
			sexSelect(id) {
				let obj = document.getElementsByClassName('sexx');
				for( let i =0 ; i < obj.length ; i++){
					obj[i].setAttribute("class","noactive sexx");
				}
				document.getElementById(id).setAttribute("class","active sexx");
				this.sex = id.replace(/data-/g,'');
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/variables.less';
	.inputs {
		font-size: 100%;
		border: 1px solid @gray-lighter;
		width: 100%;
		height:	35px;
		color: @gray-dark;
		margin-top: 20px;
		outline: none;
		text-indent: 5px;

	}
	.days-wrapper {
		.days-content {
			width: 100%;
			margin-bottom: 10px;
			.dayss {
				margin-right: 10px;
			}
			.active {
				display: inline-block;
				border: 1px solid @green;
				padding: 5px;
				width: 60px;
				height: 60px;
				.content {
					text-align: center;
					width: 60px;
					line-height: 60px;
					background-color: @green;
				}
			}
			.noactive {
				display: inline-block;
				border: 1px solid @white;
				padding:5px;
				width: 60px;
				height: 60px;
				.content {
					text-align: center;
					width: 60px;
					line-height: 60px;
					background-color: @gray-lighter;
				}
			}
		}
	}

</style>