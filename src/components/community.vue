<template>
    <div class="all">
        <search title="今日话题" message="问问"/>
        <div class="discuss">
          <div class="chatlist">
            <div class="chatmain">
              <div class="chatitem">
                <div class="chattitle"><img src="@/assets/chattitle.png"></div>
                <span class="left">
                  <p class="lefttext">酷酷的滕</p>
                  <span class="right"><i class="icon iconaweizhi-copy"></i><span class="time">2017-08-04</span></span>
                </span>
              </div>
            </div>
            <div class="chatimg">
              <div class="innerimg"><img src="@/assets/footer1.png" alt=""></div>
              <div class="innertext">
                <span>顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶</span>
              </div>
            </div>
            <p class="other">
              <span @click="good"><i class="icon iconagood"></i>点赞</span>
              <span @click="bad"><i class="icon iconabad"></i>踩它</span>
            </p>
          </div>
          <div class="chatlist">
            <div class="chatmain">
              <div class="chatitem">
                <div class="chattitle"><img src="@/assets/chattitle.png"></div>
                <span class="left">
                  <p class="lefttext">酷酷的滕</p>
                  <span class="right"><i class="icon iconaweizhi-copy"></i><span class="time">2017-08-04</span></span>
                </span>
              </div>
            </div>
            <div class="chatimg">
              <div class="innerimg"><img src="@/assets/footer1.png" alt=""></div>
              <div class="innertext">
                <span>顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶</span>
              </div>
            </div>
            <p class="other">
              <span @click="good"><i class="icon iconagood"></i>点赞</span>
              <span @click="bad"><i class="icon iconabad"></i>踩它</span>
            </p>
          </div>
          <div class="chatlist">
            <div class="chatmain">
              <div class="chatitem">
                <div class="chattitle"><img src="@/assets/chattitle.png"></div>
                <span class="left">
                  <p class="lefttext">酷酷的滕</p>
                  <span class="right"><i class="icon iconaweizhi-copy"></i><span class="time">2017-08-04</span></span>
                </span>
              </div>
            </div>
            <div class="chatimg">
              <div class="innerimg"><img src="@/assets/footer1.png" alt=""></div>
              <div class="innertext">
                <span>顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶</span>
              </div>
            </div>
            <p class="other">
              <span @click="good"><i class="icon iconagood"></i>点赞</span>
              <span @click="bad"><i class="icon iconabad"></i>踩它</span>
            </p>
          </div>
          <div class="chatlist">
            <div class="chatmain">
              <div class="chatitem">
                <div class="chattitle"><img src="@/assets/chattitle.png"></div>
                <span class="left">
                  <p class="lefttext">酷酷的滕</p>
                  <span class="right"><i class="icon iconaweizhi-copy"></i><span class="time">2017-08-04</span></span>
                </span>
              </div>
            </div>
            <div class="chatimg">
              <div class="innerimg"><img src="@/assets/footer1.png" alt=""></div>
              <div class="innertext">
                <span>顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶</span>
              </div>
            </div>
            <p class="other">
              <span @click="good"><i class="icon iconagood"></i>点赞</span>
              <span @click="bad"><i class="icon iconabad"></i>踩它</span>
            </p>
          </div>
        </div>
        <Foot/>
    </div>
</template>
<script>
import search from './commoncss/search.vue'
import Foot from './commoncss/common.vue' 
export default {
    data () {
    return {
      value: '',
      selected:'community'
    }
  },
  components: {
    Foot,
    search
  },
  methods:{
    good(){
      this.logo != this.logo
    },
    bad(){
      this.logod != this.logod
    }
  }
}
</script>
<style scoped>
.all {
  width:100%;
  height:100%;
  background-color: #333;
  overflow: scroll;
  padding-bottom: 49px
}
.mint-search{
  height:50%;
  background-color: antiquewhite
}
.mint-tabbar{
  background-color: red
}
.left{
  display: flex;
  justify-content: space-between
}
.chattitle{
  width:60px;
  height:60px;
  background-color: #fff;
  border-radius: 50%;
}
.lefttext,.time{
  font-size: 10px
}
.right{
  margin: auto 0
}
.mint-search[data-v-f5a648ee][data-v-2a7017ef]{
  background-color: transparent
}
.mint-search[data-v-f5a648ee]{
  height:10%
}
.mint-searchbar-inner{
  height:26px
}
.chatimg{
border:2px solid #fff;
height:40%;
display: flex
}
.innerhtml{
  height:100%
}
.chatimg img{
  height:100%;
  width: 100%;
}
.innertext{
  font-size: 12px;
  padding: 5px
}
.other{
  display: flex;
  justify-content: space-between;
  font-size: 12px
}
</style>
