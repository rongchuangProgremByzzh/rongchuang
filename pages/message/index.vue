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
		}
	}
</script>

<style lang="scss" scoped>
	
		
</style>
