// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
	import * as echarts from '../assets/echarts-5.3.3/package/core';
	// 引入柱状图图表，图表后缀都为 Chart
	import { BarChart } from '../assets/echarts-5.3.3/package/charts';
	// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
	import {
	  TitleComponent,
	  TooltipComponent,
	  GridComponent,
	  DatasetComponent,
	  TransformComponent
	} from '../assets/echarts-5.3.3/package/components';
	// 标签自动布局，全局过渡动画等特性
	import { LabelLayout, UniversalTransition } from '../assets/echarts-5.3.3/package/features';
	// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
	import { CanvasRenderer } from '../assets/echarts-5.3.3/package/renderers';
	
	// 注册必须的组件
	echarts.use([
	  TitleComponent,
	  TooltipComponent,
	  GridComponent,
	  DatasetComponent,
	  TransformComponent,
	  BarChart,
	  LabelLayout,
	  UniversalTransition,
	  CanvasRenderer
	]);
// 导出
export default echarts;