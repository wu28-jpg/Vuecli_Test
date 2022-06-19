<template>
	<div id="app">
		<el-container style="background: #808695;height: 100%;min-height:100vh;" direction="vertical">
			<el-header>
				头部
			</el-header>
			<el-container>
				<el-aside>
					<el-menu style="background: #808695" id="navMenu" :router="true" unique-opened>
						<el-submenu index="0">
							<template slot="title">公告</template>
							<el-menu-item-group>
								<el-menu-item>
									<router-link to="/gonggao">公告</router-link>
								</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="1">
							<template slot="title">库存管理</template>
							<el-menu-item-group>
								<el-menu-item>
									<router-link to="/About">出库信息</router-link>
								</el-menu-item>
								<el-menu-item>
									<router-link to="/Home">入库信息</router-link>
								</el-menu-item>
								<el-menu-item>
									<router-link to="/test">test</router-link>
								</el-menu-item>
								<el-menu-item>
									<router-link to="">产品库存信息管理</router-link>
								</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="2">
							<template slot="title">采购管理</template>
							<el-menu-item-group>
								<el-menu-item>
									<router-link to="/rlsbTest">人脸识别test</router-link>
								</el-menu-item>
								<el-menu-item>
									<router-link to="/About">出库信息</router-link>
								</el-menu-item>
								<el-menu-item>
									<router-link to="/Home">入库信息</router-link>
								</el-menu-item>
								<el-menu-item>
									<router-link to="">产品库存信息管理</router-link>
								</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-container>
					<el-main style="background: #808695">
						<div>
							<router-view v-if="isRouter" />
						</div>


					</el-main>
					<el-footer></el-footer>
				</el-container>

			</el-container>
		</el-container>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name: 'app',
		provide() {
			return {
				reload: this.reload
			}
		},
		data() {
			return {
				tableData: [],
				isRouter: true
			}
		},

		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			deleteRow(index, rows) {
				rows.splice(index, 1);
			},
			reload() {
				this.isRouter = false

				this.$nextTick(function() {
					this.isRouter = true
				})
			}
		},
		mounted() {
			axios({
					url: '',
					methods: "get"
				}).then(response => (this.tableData = response))
				.catch(function(error) { // 请求失败处理
					console.log(error);
				});

		}
	}
</script>

<style>
	.el-table {
		width: 100%;

		.el-table__header-wrapper table,
		.el-table__body-wrapper table {
			width: 100% !important;
		}

		.el-table__body,
		.el-table__footer,
		.el-table__header {
			table-layout: auto;
		}
	}

	a {
		text-decoration: none;
	}

	.el-menu {
		border-right: 0 !important;
	}

	.el-container {
		height: 100%;
		width: auto;
		/* background-color:#000 */
	}
</style>
