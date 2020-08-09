<template>
  <div class="tabs">



    <swiper ref="mySwiper" :options="swiperOptions">

      <swiper-slide  v-for="(item,index) in TabsList" :key="index">

        <div class="tabs-content">
          <img :src="item.imgUrl" />
          <p>{{item.title}}</p>
        </div>
        
      </swiper-slide>

    </swiper>


  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        // loop:true,
        slidesPerView: 4.5,
      },

      TabsList: [
        {
          id: 0,
          imgUrl: "./img/tabs1.gif",
          title: "签证",
        },
        {
          id: 1,
          imgUrl: "./img/tabs2.png",
          title: "集市",
        },
        {
          id: 2,
          imgUrl: "./img/tabs3.png",
          title: "分享会",
        },
        {
          id: 3,
          imgUrl: "./img/tabs4.gif",
          title: "旅途",
        },
        {
          id: 4,
          imgUrl: "./img/tabs5.gif",
          title: "景区",
        },
        {
          id: 5,
          imgUrl: "./img/tabs6.png",
          title: "签证",
        },
        {
          id: 6,
          imgUrl: "./img/tabs7.png",
          title: "签证",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.tabs {
  padding: 0.3rem 0;
}

.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.tabs-content{
 text-align: center;
}
.tabs-content img{
  height: .77333333rem;
  width: .77333333rem;
}
.tabs-content p{
  font-size: .37333333rem;
  margin-top: .1rem;
 
}
</style>