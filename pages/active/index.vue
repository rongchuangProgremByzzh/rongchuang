<template>
	<view class="list">
		<card-item v-for="item in 5" :key='item'></card-item>
	</view>
</template>

<script>
	import CardItem from '@/components/active_card.vue'
	export default{
		components:{
			CardItem
		},
		data(){
			return{
				
			}
		}
		
	}
	
</script>

<style>
</style>
