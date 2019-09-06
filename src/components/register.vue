<template>
<div class="all">
<div class="registerhtml">
<p>快速注册QuickRegister</p>
<el-input
    placeholder="输入您的邮箱(小写)"
    prefix-icon="el-icon-message"
    v-model="email">
  </el-input>
  <p></p>
  <el-input
    type="password"
    placeholder="输入您的新密码(最多16位)"
    prefix-icon="el-icon-view"
    maxlength="16"
    v-model="newpwd">
  </el-input>
  <p></p>
  <el-input
    type="password"
    placeholder="确认您的新密码"
    prefix-icon="el-icon-view"
    maxlength="16"
    v-model="renewpwd">
  </el-input>
  <p></p>
  <el-button size="middle" type="primary" @click="getemail">点击获取验证码</el-button>
  <p></p>
  <el-input
    placeholder="输入收到的验证码"
    suffix-icon="el-icon-mobile-phone"
    maxlength="16"
    v-model="code">
  </el-input>
  <p></p>
  <el-button size="middle" type="success" @click="submitinfor">提交</el-button>
</div>
</div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
    name:'registercom',
    data(){
        return {
            code:'',
            email:'',
            username:'',
            newpwd:'',
            renewpwd:''
        }
    },
    methods:{
        getemail(){
            let emailnum = this.email;
            let emailpwd = this.newpwd;
            if( !emailnum.endsWith('@qq.com') || emailpwd.length==0){
                    Toast("邮箱格式错误且密码不能为空")
            }else{
                this.axios.post("http://192.168.1.213:8080/getemailcode",{
                email:this.email
                }).then(res => {
                console.log(res)
            })
 
            }
            
            
        },
        submitinfor(){
            if( this.newpwd != this.renewpwd){
                Toast("两次密码输入不一样")
            }else{
                this.axios.post("http://192.168.1.213:8080/emailregister",{
                email:this.email,
                password:this.newpwd,
                code:this.code
                }).then(res => {
                console.log(res)
            })
            }
            
        }
    }
}
</script>
<style scoped>
.all {
    width:100%;
    height:100%;
    background-color: royalblue
}
.registerhtml{
    padding: 0 15%;
    padding-top: 30%
}
.el-button{
    width:100%
}
p:nth-child(1){
    font-style:italic;
    font-size: 20px;
    margin-bottom: 10px
}
</style>
