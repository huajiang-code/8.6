<template>
  <div class="banner">
   <transition name="fade">
      <div class="banner-left " v-if="toshow"></div>
   </transition>



    <div class="banner-header">
      <div class="banner-top">
        <div class="top-left">
          背景
          <i class="iconfont">&#xe6aa;</i>
        </div>
        <div class="top-search">
          <i class="iconfont">&#xe64d;</i> 泰国
        </div>
        <div class="top-right">
          <img src="@/assets/img/show.png" @click="toShow" alt />
        </div>
      </div>

      <div class="banner-swiper">

 


<van-swipe class="my-swipe" :autoplay="3000" indicator-color="orange">
  <van-swipe-item><img src="@/assets/img/banner1.png" alt /></van-swipe-item>
  <van-swipe-item><img src="@/assets/img/banner2.png" alt /></van-swipe-item>
  <van-swipe-item><img src="@/assets/img/banner3.png" alt /></van-swipe-item>
</van-swipe>




      </div>
    </div>
  </div>
</template>

<script>



export default {
  // components:{
  //   Swiper
  // },
  data() {
    return {
     
         toshow: false,
    }
  },
  
  computed: {},
  mounted() {},
  methods: {
    toShow() {
      this.toshow = !this.toshow;
    },
  },
};
</script>

<style lang="less" scoped>
.banner-header {
  position: relative;
  background-color: #f5f5f5;
  widows: 100%;
  height: 5.6rem;
}
.banner-top {
  position: absolute;
  left: 0;
  top: 0.5rem;
  z-index: 9;
  height: 0.8rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.top-left {
  padding: 0 0.2rem;
  color: #fff;
  font-size: 0.42666666rem;
}
.top-search {
  flex: 1;
  color: #333;
  background-color: #fff;
  border-radius: 0.1rem;
  font-size: 0.3733333333rem;
  padding: 0.2rem 0.2rem;
}
.top-right {
  padding: 0 0.4rem;
}
.top-right img {
  height: 0.533333333rem;
  width: 0.533333333rem;
}
.banner-swiper {
  widows: 100%;
  height: 5.6rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.banner-left {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  background-color: #000;
  height: 100%;
  width: 6.666666rem;
  opacity: 0.7;
}
.fade-enter-active,
.fade-leave-active {
  transition: all .7s;
}
.fade-enter{
  transform: translateX(-6.666666rem);
  opacity: 0;
}
.fade-leave-to {
  transform: translateX(-6.666666rem);
  opacity: 0;
}
</style>