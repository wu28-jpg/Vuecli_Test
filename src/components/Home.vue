<template>
 	<div>
 		<el-breadcrumb separator="/">
 		  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
 		  <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
 		  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
 		  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
 		</el-breadcrumb>
		<div class="tooolBy">
			<el-input
			
			  placeholder="请输入内容"
			  v-model="input"
			  clearable>
			  <el-button slot="append" icon="el-icon-search"/>
			</el-input>
		</div>
		
 	</div>
 	
 </template>
 
<style>
	.tooolBy{
		display: flex;
		justify-content: space-between;
		margin: 15px 0px;
	}
	.el-input{
		width: 260px;
	}
</style>


<script>
	export default {
	    data() {
	      return {
	        input: ''
	      }
	    }
	  }
  
</script>