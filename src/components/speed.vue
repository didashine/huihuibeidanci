<template>
	<div id="speed">
		<div class="tempText">{{percentText}}</div>
		<div id="main">
			<div id="da" v-show="da"></div>
			<div id="xiao" v-show="xiao"></div>
			<div id="hui"></div>
			<div id="circlestext">{{percentTextSay}}</div>
			<div id="circles">
				<div id="percent" class="bg-master-gradient">			
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'speed',
		data () {
			return{
				da:true,
				xiao:true,
				percentTextSay:'已完成',
				percent:this.$store.state.percent,
				state:''
			}
		},
		computed: {
			percentText() {
				if( this.state.percent == 0){
					this.percentTextSay = '点击这里开始'
				}
				return this.state.percent + '%'
			}
		},
		methods:{
			change(){
				console.log(this.$parent.state)
				if(this.percent < 50){
					var xiao = parseInt(180-this.percent*1.8)
					document.getElementById("xiao").style.transform = "rotate(-"+xiao+"deg)";
				} else {
					var da = parseInt((this.percent-50)*3.6);
					document.getElementById("xiao").style.background = "#90d5b9";
					document.getElementById("xiao").style.transform = "rotate(-180deg)";
					document.getElementById("da").style.transform = "rotate("+ da +"deg)";
				}
			}
		},
		created() {
	    this.$http.get('/api/users').then((response) => {
	      response = response.body;
	      if (response.errno === 0) {
	        this.state = response.data;
	      }
	    });
	  },
		mounted() {
			this.change()
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/variables.less';
	.bg-master-gradient {
		background: linear-gradient(270deg,@green 0%,@turquoise 100%);
		left:107px;
	}
	.tempText{
		//  color:#fff;
		position:absolute;
		z-index:80;
		width:100%;
		text-align: center;
		margin-top:65px;
		font-size: 150%;
	}
	#da {
		position: absolute;
		z-index: 4;
		width: 180px;
		height: 179px;
		margin-top: -1px;
		border-radius: 180px;
		background-color: #eee;
		clip:rect(0px,90px,180px,0);
	}
	#xiao {
		position: absolute;
		z-index: 5;
		width: 180px;
		height: 177px;
		margin-top: -1px;
		transform: rotate(90deg);
		clip:rect(0px,90px,180px,0);
		border-radius: 180px;
		background-color: #eee;
	}	
	#circlestext {
		position: absolute;
		z-index: 20;
		color:#fff;
		margin-top: 90px;
		margin:0 auto;
		line-height: 210px;
		width: 180px;
		text-align: center;
	}
	#circles {
		width: 155px;
		height: 153px;
		padding: 10px;
		border-radius: 155px;
		border: 2px solid #90d5b9;
		background: #90d5b9;
	}
	#percent {
		width: 150px;
		height:150px;
		border-radius: 150%;
		line-height:150px;
		text-align: center;
		color: #fff;
		font-size: 150%;
		margin: 0 auto;
		position:absolute;
		z-index:5;
	}
	#main {
		margin-left: 94px;
	}

</style>