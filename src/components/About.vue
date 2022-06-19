<template>

	<div id="About">
		{{tableAbout}}
		<el-table :data="tableAbout" style="width: 100%">
			<el-table-column prop="userId" label="名称" width="180">
			</el-table-column>
			<el-table-column prop="username" label="热度" width="180">
			</el-table-column>
			<el-table-column prop="password" label="taste">
			</el-table-column>
			<el-table-column>
				<template slot="header" slot-scope="scope">
					<el-input v-model="search" size="mini" placeholder="请输入查找内容" />
				</template>
			</el-table-column>
			<el-table-column align="right">
				<template slot="header">
					<el-button size="mini" type="danger" @click="dialogFormVisible = true" round>新增</el-button>
				</template>
			</el-table-column>
			<el-table-column label="操作" align="right">
				<template slot-scope="scope">
					<el-button size="mini" type="danger" @click="update(scope.$index, scope.row)" round>编辑</el-button>
					<el-button size="mini" type="danger" @click="deleteData(scope.$index,scope.row) ">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!--弹出新增界面-->
		<el-dialog title="新增" :visible.sync="dialogFormVisible">
			<el-form :model="food">
				<el-form-item label="foodId" :label-width="formLabelWidth">
					<el-input v-model="food.foodId" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="foodName" :label-width="formLabelWidth">
					<el-input v-model="food.foodName" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="shopId" :label-width="formLabelWidth">
					<el-input v-model="food.shopId" autocomplete="off"></el-input>
				</el-form-item>
				<!-- 		<el-form-item label="taste" :label-width="formLabelWidth">
					<el-select v-model="food.taste" placeholder="口味">
						<el-option label="水果、奶油、面包、鸡蛋	" value="shanghai"></el-option>
						<el-option label="玫瑰花、奶油、鸡蛋" value="beijing"></el-option>
					</el-select>
				</el-form-item> -->
				<!-- <el-form-item label="saleNum" :label-width="formLabelWidth">
					<el-input v-model="food.saleNum" autocomplete="off"></el-input>
				</el-form-item> -->
				<el-form-item label="count" :label-width="formLabelWidth">
					<el-input v-model="food.count" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="addData(),dialogFormVisible = false,open()">确 定</el-button>
			</div>
		</el-dialog>
		<!-- 修改界面-->
		<el-dialog title="修改" :visible.sync="updateCk" width="50%">
			<el-form :model="editObj" ref="editFormRef" label-width="70px">
				<el-form-item label="foodId">
					<el-input v-model="editObj.foodId" disabled></el-input>
				</el-form-item>
				<el-form-item label="foodName" prop="email">
					<el-input v-model="editObj.foodName"></el-input>
				</el-form-item>
				<el-form-item label="shopId" prop="mobile">
					<el-input v-model="editObj.shopId"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="updateCk = false">取 消</el-button>
				<el-button type="primary" @click="updateDate(),updateCk=false,open()">确 定</el-button>
			</span>
		</el-dialog>
	</div>

</template>

<script>
	
	import axios from 'axios'
	export default {
		inject: ['reload'],
		name: 'About',
		data(){
			
			return {
				search: "",
				tableAbout: [],
				dialogFormVisible: false,
				dialogTableVisible: false,
				updateCk:false,
				food: {
					foodId: '',
					foodName: '',
					shopId: '',
					saleNum: '',
					price: '',
					count: '',
					taste: '',

				},
				editObj: {
					foodId: '',
					foodName: '',
					shopId: '',
					saleNum: '',
					price: '',
					count: '',
					taste: '',
				},
				formLabelWidth: '120px',
				formLabelWidth1: '100px'
			}
		},
		mounted() {

			// this.load()
			axios({
					url: "http://172.21.97.150:8080/erpw/listUserJson",
					
					// url:"http://172.21.71.35:9092/user/list",
					methods: "get"
				}).then(response => (this.tableAbout = response.data))
				.catch(function(error) { // 请求失败处理
					console.log(error);
				});
		},

		methods: {
			//界面传值方法
			employeesdetails(tableAbout){
			      this.$router.push(
			      {
			      //添加需要传值到那个页面的路径
			      path:'../components/test', 
			      //携带需要传递的参数
			      query:{tableAbout:tableAbout}
			      })
			    },

			updateDate(){
				var editObj=this.editObj
				console.log(editObj)
				axios({
					url:'http://localhost:8080/rs/updateFood',
					method:"put",
					data:this.editObj
				})				  
				.then(function (response) {
				console.log(0);
				})
				.catch(function (error) {
				console.log(1);
				});			
			},
			// load() {
			// 	axios({
			// 			// url: 'https://tenapi.cn/douyinresou/',
			// 			url: "http://localhost:8080/rs/listFoodJson",
			// 			methods: "get"
			// 		}).then(response => (this.tableAbout = response.data))
			// 		.catch(function(error) { // 请求失败处理
			// 			console.log(error);
			// 		});
			// },
			editUserInfo() {
				this.$refs.editFormRef.validate(async valid => {
					console.log(valid)
					if (!valid) return
					// 发起修改用户信息的数据请求
					const {
						data: res
					} = await this.$http.put('users/' + this.editForm.id, {
						email: this.editForm.email,
						mobile: this.editForm.mobile
					})
					if (res.meta.status !== 200) {
						return this.$message.error('更新用户信息失败！')
					}
					// 关闭对话框
					this.editDialogVisible = false
					// 更新数据列表
					this.getUserList()
					// 提示修改成功
					this.$message.success('更新用户信息成功！')
				})
			},

			update(index, row) {
				
				
				//记录索引
				this.listIndex = index;
				//记录数据
				this.editObj = row;
				//显示弹窗
				this.updateCk = true;
			},
			// editDo() {
			// 	let _index = this.listIndex
			// 	//根据索引，赋值到list制定的数
			// 	this.tableAbout[index] = editObj;
			// 	//关闭弹窗
			// 	this.dialogFormVisible = false;
			// },

			open() {
				// this.$message({
				// 	type: 'success',
				// 	message: '添加成功!',				
				// });
				// this.reload()
				this.$confirm('确定执行?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '成功!',

					});
					this.reload()
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '失败'
					});
				});
			},
			deleteData(index, row) {
				//this.tableData.splice(index, 1)
				console.log("商品编号：", row.foodId)
				this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					var params = new URLSearchParams()
					params.append("foodId", row.foodId)
					axios.get('http://localhost:8080/rs/deleteFood?id=' + row.foodId)
						.then(function(response) {
							console.log(0);
							this.load()
						}).catch(function(error) {
							console.log(1);
						});
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
					this.reload()

					// this.$router.push("/About");  //页面刷新
					// this.load();
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			addData() {
				var food = this.food;
				console.log(food.foodId);
				// axios({
				// 	url:'http://localhost:8080/rs/addFood',
				// 	method:"POST",
				// 	data:{
				// 	"food":food,
				// 	}
				// })
				axios.post('http://localhost:8080/rs/addFood', {
						foodId: food.foodId,
						foodName: food.foodName,
						shopId: food.shopId,
						saleNum: food.saleNum,
						count: food.count,
						price: food.price,
						taste: food.taste,
					})
					.then(function(response) {
						// console.log(this.food.foodId);
						console.log(0);
						this.reload()
					})
					.catch(function(error) {
						console.log(this.food.foodId);
						console.log(1);

					});
			},
		},
		// del(foodId) {
		// 	axios.get('http://localhost:8080/rs/deleteFood?id=', {
		// 			params: {
		// 				ID: 12345
		// 			}
		// 		})
		// 		.then(function(response) {
		// 			console.log(response);
		// 		})
		// 		.catch(function(error) {
		// 			console.log(error);
		// 		});
		// }

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
</style>
