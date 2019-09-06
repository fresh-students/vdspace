<template>
<div class="all">
<div class="loginhtml">
    <div class="title">
        <img src="@/assets/title.png">
        <p>欢迎加入爱健俱乐部！</p>
    </div>
    <div class="box">
        <el-input
        type="email"
    placeholder="邮箱"
    prefix-icon="el-icon-mobile-phone"
    v-model="loginnumber">
    <template slot="append">@qq.com</template>
  </el-input>
  <p></p>
  <el-input
    type="password"
    placeholder="密码"
    prefix-icon="el-icon-view"
    v-model="loginpassword">
  </el-input>
  <p class="yanzhenpic"><input type="text" placeholder="验证码" class="yanzhen" v-model="yanzhennum"><span><img src="../assets/getVerify.jpg" alt="" class="img"></span></p>
  <p></p>
  <el-button size="medium" type="danger" @click="loginin">立即登陆</el-button>
  <p class="regandfor">
      <router-link tag="span" to="/register">注册新用户</router-link>
      <span  @click="checkturn">第三方登录<i :class="[flag ? trueflag : falseflag,letclass]"></i></span>
      <router-link tag="span" to="/forget">忘记密码?</router-link>
  </p>
    </div>
    <div class="thirdlogin" v-show="flag">
      <p class="line">
        <span>________________</span>
        <span class="third">第三方登录</span>
        <span>________________</span>
    </p>
    <div class="quicklogin">
    <a href="#"><i class="icon iconakoukou"></i></a>
    <a href="#"><i class="icon iconaweixin"></i></a>
    <a href="#"><i class="icon iconaumidd17"></i></a>
    </div>
    </div>
</div>
</div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  name:'logincom',
  data() {
    return {
      loginnumber: "",
      loginpassword: "",
      pic:'',
      flag:false,
      yanzhennum:'',
      trueflag:'iconaxiangshang',
      falseflag:'iconaxiangxia',
      letclass:'icon'
    };
  },
  created(){
    this.getimg()
  },
  methods:{
    getimg(){
      this.axios.get('http://192.168.1.213:8080/getVerify').then( res => {
        console.log(res)
      })
    },
    loginin(){
      this.axios.post('http://192.168.1.213:8080/login',{
          password:this.loginpassword,
          code:this.yanzhennum,
          account:this.loginnumber+'@qq.com'
      }).then(res => {
        Toast({
            message: res.data.message,
            position: 'middle',
            duration: 2000,
            iconClass: 'icon iconaiconcopy'
          });
      }).then(err => {
        console.log(err)
      })
    },
    checkturn(){
      this.flag = ! this.flag
    }
  }
};
</script>
<style scoped>
a:link{text-decoration:none ; color:yellow;}
a:visited {text-decoration:none ; color:#fff;}
a:hover {text-decoration:none ; color:#fff;}
a:active {text-decoration:none ; color:red;}
.all{
    height: 100%;
    width: 100%;
    background-color: #333;
    overflow: hidden;
}
.loginhtml{
    padding-top: 15%;
    /* padding-bottom: 20% */
    overflow: hidden;
}
.title {
  width: 100%;
  text-align: center;
}
.el-button {
  width: 100%;
  height: 40px;
  color:#fff
}
.box {
  padding: 0 15%;
  margin-top: 10%;
  margin-bottom: 10%
}
.regandfor {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.third {
  text-align: center;
  font-size: 12px;
  padding-top: 10px;
}
.line {
  display: flex;
  justify-content: space-around;
}
.quicklogin{
    padding: 4% 20%;
    display: flex;
    justify-content: space-between;
    /* padding-bottom: 20% */
}
.icon{
  font-size: 30px
}
.yanzhenpic{
  display: flex;
  justify-content: space-between;
}
.yanzhenpic span{
  padding-top: 3px
}
.yanzhen{
  width:50%;
  background: #fff;
}
.img img{
max-width: 100%;
height:100%
}
.icon[data-v-10d9df09]{
  font-size: 9px
}
.quicklogin .icon[data-v-10d9df09]{
  font-size: 30px
}
.el-input-group__append{
  border:none
}
</style>
