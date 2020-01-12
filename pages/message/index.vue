<template>
	<view class="message">
		<Item v-for="item in 10"></Item>
	</view>
</template>

<script>
	import Item from "./item.vue"
	export default {
		components: {
			Item
		},
		data() {
		  return {
		   
		  }
		},
		mounted() {
			let token=uni.getStorageSync('token')
			this.$http.people(token).then(res=>{
				
			})
		}
	}
</script>

<style lang="scss" scoped>
	
		
</style>
