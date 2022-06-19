<template>
	<div id="app">
		<!-- <div v-for="food in tableAbout" >
			{{food.z}}
		</div> -->
		<div id="myChart" style="width: 600px;height:400px;">
			
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name: "app",
		data() {

			// var tableAbout = this.$route.query.tableAbout;
			return {
				// foodId:[],
				tableAbout: [],
			}
		},
		methods: {

			drawChart() {
				// var tableAbout = this.$route.query.tableAbout;
				// 基于准备好的dom，初始化echarts实例【这里存在一个问题，请看到最后】
				console.log(this.tableAbout)
				let myChart = this.$echarts.init(document.getElementById("myChart"));
				// 指定图表的配置项和数据
				let option = {
					title: {
						text: "ECharts 入门示例"
					},
					tooltip: {},
					legend: {
						data: ["销量"]
					},
					xAxis: {
						data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
					},
					yAxis: {},
					series: [{
						name: "销量",
						type: "bar",
						data: this.tableAbout
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			}
		},
		mounted() {
			axios({
					url: "http://localhost:8080/rs/listFoodJson",
					methods: "get"
				}).then(response => (this.tableAbout = response.data))
				.catch(function(error) { // 请求失败处理
					console.log(error);
				});
			this.drawChart();
		}

	};
</script>
