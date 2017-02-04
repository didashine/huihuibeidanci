<template>
	<div id="Revise">
		<div class="xp text-font-sm">经验值 {{this.$parent.state.xp}}</div>
		<div id="addxp" class="color-orange" v-show="xpshow">+1</div>

		<div class="padding-lg"></div>
		<div>
			<div class="text-size-lg">请输入听到的单词</div>
			<div class="padding-md"></div>
			<input type="text" id="form" :placeholder="form" v-model='formWrite'>
			<img src="../assets/images/sound.png" id="soundlogo" @click="play">
			<div>{{ meaning }}</div>
			<audio id="bgMusic" autoplay="true" >
				<source :src="nsrc" type="audio/mp3">
			</audio>
		</div>
		<bottomBtn @click.native='check' value='下一题' color='green' class="bottomBtn"></bottomBtn>
	</div>
</template>

<script>
	import bottomBtn from '../components/bottomBtn.vue'
	export default {
		name: 'Revise',
		components: {bottomBtn},
		data() {
			return {
				form:'',
				meaning: '',
				nsrc:'',
				formWrite:'',
				xpshow: false,
				num: 5,
				state: ''
			}
		},
		mounted() {
			this.getform();
		}, 
		methods: {
			getform() {
/*				var state,xmlhttp
				xmlhttp = new XMLHttpRequest();
				xmlhttp.open('get','http://192.168.0.110/json/Revise.php',false);
				xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					state = eval('(' + xmlhttp.responseText + ')');
				}else{
						state = {form:'',meaning: ''};
					}
				}
				xmlhttp.send();*/
				this.$http.get('/api/Revise').then((response) => {
	      	response = response.body;
	     	  if (response.errno === 0) {
	     	    this.state = response.data;
	     	    this.form = this.state.form;	
						this.meaning = this.state.meaning;
						/*this.nsrc = 'http://192.168.0.110/sound/'+this.state.form+'.mp3';*/
						this.num --;
	   	    }
	    	});
				
			},
			play() {
				var audio = document.getElementById('bgMusic');
				audio.currentTime = 0;
				audio.play();
			},
			check() {
				if (this.form == this.formWrite) {
					this.xpshow = true;
					this.getform()
					this.state.xp = parseInt(this.state.xp) +1;
					this.formWrite = '';
					setInterval(() => {
						this.xpshow = false;
					},2000)
				} else {
					this.$router.push({path : '/index'});
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/variables.less';
	#Revise {
		padding:20px;
		#addxp {
			position: fixed;
			top: 20px;
			right: 20px;
		}
		#form{
			width: 100%;
			height: 55%;
			font-size: 150%;
			border: 0px;
			border-bottom: 1px solid @gray-light;
			outline: none;
			text-indent: 10px;
			color: @orange
		}
		#soundlogo {
			width:70%;
			margin-left: 15%;
		}
	}
</style>