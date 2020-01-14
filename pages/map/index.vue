<template>
            <view class="page-map">
				
                <map style="width: 100%; height: 100%;" :latitude="latitude" :longitude="longitude" :markers="covers" @markertap="openLocation()">
                </map>
            </view>
</template>
<script>
	export default {
	    data() {
	        return {
	            title: 'map',
	          latitude: 25.02406361,
	          longitude: 102.6498778,
	            covers: [{
					id:'point1',
					width:15,
					height:18,
	                latitude: 25.02406361,
	                longitude: 102.6498778,
	                iconPath: '../../static/location.png'
	            }]
	        }
	    },
	    methods: {
	 openLocation: function (e) {
	 	 console.log(e)
	 	// var value = e.target.value
	 	uni.openLocation({
	 		latitude: 25.02406361,
	 		longitude: 102.6498778,
	 		name: "昆明融创文旅城",
	 		address: "昆明市西山区碧鸡路和益宁路交叉口"
	 	})
	 }
	    },
		onLoad() {
			uni.getLocation({
			    success: (res) => {
			      console.log(res);
			    },
			    fail: (err) => {
			        
			    }
			})
		}
	}
</script>

<style>
	.page-map{
		height: 100%;
		height: 100%;
	}
</style>
