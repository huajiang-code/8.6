<template>
    <div class="swiper">
        

        
<van-swipe class="my-swipe"  indicator-color="orange" :loop="false">
  <van-swipe-item><img src="@/assets/img/swiper1.png" alt /></van-swipe-item>
  <van-swipe-item><img src="@/assets/img/swiper2.png" alt /></van-swipe-item>
</van-swipe>



    </div>
</template>

<script>
export default {
    

}
</script>

<style lang="less" scoped>
.swiper{
    height:3.2rem;
    width: 100%;
}
.swiper img{
    height: 3.2rem;
    width: 100%;
}


</style>