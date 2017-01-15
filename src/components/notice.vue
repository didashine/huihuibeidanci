<template>
	<span id="notice">
		{{numText}}
	</span>
</template>

<script>
	export default {
		name: 'notice',
		props: ['num'],
		computed: {
			numText() {
				var tempNum = parseInt(this.num)
				if(tempNum > 99){
					return 99
				}else{
					return tempNum
				}
			}
		}
	}
</script>

<style scoped>
	#notice{
		background-color: #eb6419;
		color: #fff;
		font-size: 40%;
		text-align: center;
		border-radius: 20px;
		padding: 5px;
		min-width: 15px;
		min-height: 15px;
	}
</style>