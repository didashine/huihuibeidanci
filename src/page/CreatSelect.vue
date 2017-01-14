<template>
		<div class="CreatSelect">
			<div class="padding-lg">
				<div class="text-size-lg">请选择考试时间</div>
				<div class="padding-sm"></div>
				<div class="text-size-lg-note">
					CET考试时间定于每年6月和12月的第三个星期六
				</div>
				<div class="padding-md"></div>
				<div class="text-size-md">2017年</div>
				<div class="padding-smsm"></div>
				<div @click="radioM" class="text-size-lg-note">选择其他的考试时间</div>
				<div class="padding-sm"></div>
				<div class="radio-wrapper">
					<ul class="radio-content">
						<li @click="dataSelect('data-2017-6-17')" id="data-2017-6-17" class="active radiolg">
							<div class="content">6月17日</div>
						</li>
						<li @click="dataSelect('data-2017-12-16')" id="data-2017-12-16" class="noactive radiolg">
							<div class="content">12月16日</div>
						</li>
					</ul>
					<div v-show = "radioMore">
						<div class="text-size-md">2018年</div>
						<ul class="radio-content">
						<li @click="dataSelect('data-2018-6-17')" id="data-2018-6-17" class="noactive radiolg">
							<div class="content">6月17日</div>
						</li>
						<li @click="dataSelect('data-2018-12-16')" id="data-2018-12-16" class="noactive radiolg">
							<div class="content">12月16日</div>
						</li>
					  </ul>
					  <div class="text-size-md">2019年</div>
						<ul class="radio-content">
							<li @click="dataSelect('data-2019-6-17')" id="data-2019-6-17" class="noactive radiolg">
								<div class="content">6月17日</div>
							</li>
							<li @click="dataSelect('data-2019-12-16')" id="data-2019-12-16" class="noactive radiolg">
								<div class="content">12月16日</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="padding-md"></div>
				<div class="text-size-md">预留备考时间</div>
				<div class="padding-smsm"></div>
				<div @click="radioM" class="text-size-lg-note">设置考试前多少天完成单词计划</div>
				<div class="padding-sm"></div>
				<div class="days-wrapper">
					<ul class="days-content">
						<li class="dayss active" @click="daysSelect('data-90')" id="data-90">
							<div class="content">90天</div>
						</li>
						<li class="dayss noactive" @click="daysSelect('data-60')" id="data-60">
							<div class="content">60天</div>
						</li>
						<li class="dayss noactive" @click="daysSelect('data-30')" id="data-30">
							<div class="content">30天</div>
						</li>
					</ul>
				</div>
			</div>
			<bottomBtn @click.native='toCreatSelect'value='开始吧' color='orange' ></bottomBtn>
		</div>
</template>

<script>
	import bottomBtn from '../components/bottomBtn.vue'
	export default {
		name:'CreatSelect',
		data() {
			return {
				radioMore: false
			}
		},
		components: {
			bottomBtn
		},
		methods: {
			toCreatSelect() {
				this.$router.push({path:'/CreatFinish'});
			},
			dataSelect(id) {
				let obj = document.getElementsByClassName('radiolg');
				for( let i =0 ; i < obj.length ; i++){
					obj[i].setAttribute("class","noactive radiolg");
				}
				document.getElementById(id).setAttribute("class","active radiolg");
				this.$parent.preExamDay = id.replace(/data-/g,'');
			},
			radioM() {
				this.radioMore = !this.radioMore;
			},
			daysSelect(days) {
				let obj = document.getElementsByClassName('dayss');
				for( let i =0 ; i < obj.length ; i++){
					obj[i].setAttribute("class","noactive dayss");
				}
				document.getElementById(days).setAttribute("class","active dayss");
				this.$parent.studyTime = days.replace(/data-/g,'');
			},
			radioM() {
				this.radioMore = !this.radioMore;
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/variables.less';
	.radio-wrapper {
		.radio-content {
			width: 100%;
			text-align:center;
			margin-bottom: 10px;
			.active {
				display: inline-block;
				border: 1px solid @green;
				padding: 5px;
				width: 120px;
				height: 120px;
				.content {
					text-align: center;
					width: 120px;
					line-height: 120px;
					background-color: @green;
				}
			}
			.noactive {
				display: inline-block;
				border: 1px solid @white;
				padding:5px;
				width: 120px;
				height: 120px;
				.content {
					text-align: center;
					width: 120px;
					line-height: 120px;
					background-color: @gray-lighter;
				}
			}
		}
	}
	.days-wrapper {
		.days-content {
			width: 100%;
			text-align:center;
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