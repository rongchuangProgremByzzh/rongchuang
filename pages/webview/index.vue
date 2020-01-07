<template>
	<div class="content">
		<web-view :src="vr"></web-view>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				vr:''
			}
		},
		mounted() {
			this.$http.vr(1).then(res=>{
				console.log(res);
				 this.vr=res.data.vrUrl;
			})
		}
	}
</script>

<style>
</style>
