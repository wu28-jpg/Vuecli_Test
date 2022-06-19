<template>
  <el-form :model="ruleForm"
           :rules="rules"
           ref="ruleForm"
           label-width="100px"
           class="demo-ruleForm">
    <el-form-item label="姓名"
                  prop="username">
      <el-input v-model="ruleForm.username"></el-input>
    </el-form-item>
    <el-form-item label="年龄"
                  prop="age">
      <el-input v-model="ruleForm.age"></el-input>
    </el-form-item>
    <el-form-item label="性别"
                  prop="gender">
      <el-radio-group v-model="ruleForm.gender">
        <el-radio label="0"></el-radio>
        <el-radio label="1"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="邮箱"
                  prop="email">
      <el-input v-model="ruleForm.email"></el-input>
    </el-form-item>
    <el-form-item label="爱好"
                  prop="hobby">
      <el-input v-model="ruleForm.hobby"></el-input>
    </el-form-item>
    <el-form-item label="介绍"
                  prop="introduce">
      <el-input type="textarea"
                v-model="ruleForm.introduce"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        username: '',
        age: '',
        gender: '',
        email: '',
        hobby: '',
        introduction: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    submitForm (formName) {
      const that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('http://localhost:8181/user/save', this.ruleForm)
            .then(function (response) {
              if (response.data == "success") {
                that.$alert('《' + that.ruleForm.username + '》 添加成功', '消息', {
                  confirmButtonText: '确定',
                  callback: action => {
                    that.$router.push('/pageOne');
                  }
                })
              }
            })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>