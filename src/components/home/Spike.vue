<template>
    <div class="spike">

    


    <van-swipe class="my-swipe"  indicator-color="yellow" :loop="false">
        <van-swipe-item>
            <div class="spike-top">
                <img src="@/assets/img/spike1.png">
                <span>距离结束</span>
                <span>37天</span>
                <span>10</span>
                <span>:</span>
                <span>10</span>
                <span>:</span>
                <span>10</span>
            </div>

            <div class="spike-bottom">
                <img src="" alt="">
                <div>
                    <p>[开业特惠 小城故事]
                        泰国清迈，塔佩门喂鸽子-走街串巷游古城-切蒂龙达塔斯-帕辛寺-清曼寺大象佛塔-网红海南鸡饭-嘟嘟车环游古城-《泰囧》同款布兰斯-瓦洛洛水果街市，邂逅清迈古城一日游
                    </p>
                </div>
            </div>
        </van-swipe-item>
        
    </van-swipe>









    </div>
</template>

<script>
 export default {
    
    data() {
      return {
        

      }
    },
    
  }
</script>





<style lang="less" scoped>

.spike{
    padding: .3rem 0;

}
.spike-top{
    width: 100%;
    height: 1.293333333rem;
    display: flex;
    align-items: center;
    font-size: .35rem;
    img{
        height: .413333333rem;
        width: 1.893333333rem;
    }
    span{
        display: block;
        margin-left: .15rem;
    }

}







  .time{
      height: .6rem;
      width: 2.5rem;
      background-color: red;


  }
  .colon {
    display: inline-block;
    margin: 0 4px;
    color: #ee0a24;
  }
  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #999;
    border-radius: 30%;
  }






</style>