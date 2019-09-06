<template>
    <div class="all">
      <search title="健身项目" message="搜搜"/>
      <div class="center">
        <div class="centermain">
          <div class="circle">
            <p>总共运动</p>
          </div>
        </div>
        <div class="bottom">
          <p class="bottom_text">
            <span>次数(num)</span>
            <span>时间(min)</span>
            <span>消耗(jr)</span>
          </p>
          <p class="bottom_num">
            <span>120</span>
            <span>85</span>
            <span>1302</span>
          </p>
        </div>
      </div>
      <div class="line">
      </div>
      <div class="video">
        <h4>健身视频>></h4>
        <div class="vid-wrap">
          <video controls src="https://www.w3school.com.cn/i/movie.ogg"></video>
        </div>
        <div class="vid-wrap">
          <video controls src="https://www.w3school.com.cn/i/movie.ogg"></video>
        </div>
      </div>
      <Foot/>
    </div>
</template>
<script>
import search from './commoncss/search.vue'
import Foot from './commoncss/common.vue'
export default {
  name:'indexcom',
  data () {
    return {
      value: '',
    }
  },
  components: {
    search,
    Foot
  }
}
</script>
<style scoped>
.all {
  width:100%;
  height:100%;
  background-color: #333
}
.mint-search{
  height:9%;
  background-color: transparent
}
.mint-tabbar{
  background-color: red
}
.center {
height:32%;
background: url("../assets/ic.png");
background-repeat: no-repeat;
background-size: 100% 100%
}
.centermain{
  width:100%;
  height:60%;
  position: relative;
  top: 10%
}
.circle{
  width:120px;
  height:120px;
  background-color: aqua;
  margin: 0 auto;
  border: 2px solid #fff;
  border-radius: 50%;
  background-color: transparent;
  text-align: center
}
.circle p{
  position: relative;
  top: 30%
}
.bottom{
  padding-top: 8%
}
.bottom .bottom_text,.bottom_num{
  display: flex;
  justify-content: space-around;
  font-size: 10px
}
.line{
  height:3px;
  width:90%;
  margin: 0 auto;
  background-color: #fff;
  margin-top:2%
}
.video{
  padding-bottom: 49px
}
.vid-wrap{
    width:100%;background: #000;
    position:relative;
    padding-bottom:56.25%;    /*需要用padding来维持16:9比例,也就是9除以16*/
    height: 0;
}
.vid-wrap video{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%}
</style>
