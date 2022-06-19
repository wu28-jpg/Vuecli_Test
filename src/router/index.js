import Myrouter from 'vue-router'
import Vue from 'vue'
import About from '../components/About.vue'
import Home from '../components/Home.vue'
import gongao from '../components/gonggao'
import rlsbTest from '../components/rlsbTest'
import test from '../components/test'
Vue.use(Myrouter)
export default new Myrouter({
	mode:'history',
	routes: [
		{
			path:'/',
			component:gongao
		},
		{
			path: '/gonggao',
			component: gongao,
		},
		{
			path: '/about',
			component: About,

		},
		{
			path: '/home',
			component: Home,
		},
		{
			path: '/rlsbTest',
			component: rlsbTest,
		},
		{
			path: '/test',
			component: test,
		},
	]
})
