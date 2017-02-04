<template>
	<div id="plan">
		<div id="bar">
			<span class="text-size-lg">{{nnow}} / {{allcount}}</span>
		</div>
		<div id="nform">{{nform}}</div>
		<div id="nipa">{{nipa}}</div>
		<div id="nmeaning">{{nmeaning}}</div>
		<div id="notic">学习模式</div>
		<img src="../assets/images/sound.png" id="soundlogo">
		<audio id="bgMusic" autoplay="true">
		</audio>
		<div id="autoplaydiv" v-show="autopaly" @click="beginStudy">
			<div class="text-size-lg text-align-center">学习模式</div>
			<div class="text-size-lg text-align-center">单词会自动播放</div>
			<div class="text-size-lg text-align-center">请用心记忆</div>
			<div class="text-size-lg text-align-center">Go</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'plan',
		data() {
			return {
				nform:'abuse',
				nipa:'[ə’bju:z], [ə’bju:s]',
				nmeaning:'vt.滥用；虐待 n.滥用',
				now:0,
				allcount:12,
				autopaly:true,
				forms:[],
				returnPlay:0,
				nnow:1
			}
		},
		methods: {
			beginStudy() {
				this.autopaly = false;
				this.playreturn();
			},
			playreturn() {
				this.nform = this.forms[this.now].form;
				this.nipa = this.forms[this.now].ipa;
				this.nmeaning = this.forms[this.now].meaning;
				this.nnow = this.now+1;
				var audio = document.getElementById('bgMusic');
				/*audio.src = 'http://'+ this.$store.state.serverIP +'/sound/'+ this.nform +'.mp3';*/
				setInterval(() => {
					if (this.returnPlay < 3 && audio.ended == true) {
						audio.play();
						this.returnPlay++;
					}
				},1000)
			}
		},
		beforeMount() {
			this.forms = [];
		},
		mounted() {
			this.$http.get('/api/plan').then((response) => {
				response = response.body
				var formsTemp = eval(response.data);
				for (var i in formsTemp) {
					this.forms.push(formsTemp[i])
				}
				this.allcount = this.forms.length;
			},(aaa) => {
					console.log('err');
			})
		},
		watch: {
			returnPlay(val,oldval) {
				if (val == 3) {
					setTimeout(() => {
						if (this.now < this.allcount-1) {
							this.now++;						
							this.playreturn();
							this.returnPlay = 0;
						} else {
							this.$router.push({path : '/index'})
						}
					},5000)
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/variables.less';
	#plan {
		#bar {
			position: fixed;
			right: 20px;
			top: 20px;
		}
		#nform {
			position: fixed;
			left: 30px;
			top: 100px;
			font-size: 300%;
			color:red;
		}
		#nipa {
			position: fixed;
			left: 30px;
			top: 160px;
			font-size: 100%;
			color:#ddd;
		}
		#nmeaning {
			position: fixed;
			left: 30px;
			top: 180px;
			font-size: 120%;
		}
		#notic {
			position: fixed;
			left: 20px;
			bottom: 20px;
			font-size: 75%;
		}
		#soundlogo {
			position: fixed;
			right: 20px;
			bottom: 20px;
			width: 50px;
		}
		#autoplaydiv {
			background-color: @gray-darker;
			width: 100%;
			height:100%;
			z-index:9;
			position: fixed;
			color: @white;
			padding-top:50px;
			opacity: 0.9;
			div {
				margin-bottom: 10px;
			}
		}
	}
</style>