<template>
	<el-carousel :interval="2000" type="card" height="300px">
		<!-- 	    <el-carousel-item v-for="item in 6" :key="item">
	      <h3 class="medium">{{ item }}</h3>
	    </el-carousel-item> -->
		<el-carousel-item v-for="item in images" :key="item">
			<img :src="item.url" alt=""  />
		</el-carousel-item>
	</el-carousel>
</template>

<script>
	export default {
		name: 'gonggao',
		data() {
			return {
				images: [{
						// url: require("../assets/logo.png")
						url: "https://tenapi.cn/acg"
						
					},
					{
						// url: require("../assets/1.jpg")
						url: "https://tenapi.cn/bing/"
						
					},
					{
						// url: require("../assets/2.jpeg")
						// url: "https://tenapi.cn/ipinfo/"
						// url: "https://v.api.aa1.cn/api/api-gqsh/index.php"
						url:"http://img.xjh.me/random_img.php"
					},
				],
			};
		},
	}
</script>

<style>
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
	img{
		width: 100%;
		height: 100%;
	}
</style>
