<template>
	<div id="bottomBtn">
		<button class='btn text-size-md' :class='colorName'>{{value}}</button>
	</div>
</template>

<script>
	export default {
		name: 'bottomBtn',
		props: [
			'value',
			'color'
		],
		computed: {
			colorName() {
				if (this.color == 'orange') {
					return this.colorName = 'orange';
				} else if (this.color == 'green'){
					return this.color = 'green';
				}
			}
		}
	};
</script>

<style lang='less' scoped>
	@import '../assets/css/variables.less';
	#bottomBtn {
		width: 100%;
		height: 50px;
		text-align: center;
		padding: 10px 0 10px 0;
		background-image: url(../assets/images/opacity.png);
		.btn {
			width: 80%;
			height: 45px;
			color: #fff;
			border: 0;
			letter-spacing: 1px;
			border-radius: @border-radius;
			outline: none;
		}
	}
	.orange {
		background-color: @orange;
	}
	.green {
		background-color: @green;
	}
</style>