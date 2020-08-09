<template>
    <div class="icons">
        <ul>
            <li v-for="(item,index) in iconList" :key="index">
                <img :src="item.imgUrl" alt="">
                <p>{{item.title}}</p>
            </li>
           
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            iconList:[
                {
                id:0,
                imgUrl:'./img/icon1.png',
                title:'故宫'
                },
                {
                id:1,
                imgUrl:'./img/icon2.png',
                title:'上海'
                },
                {
                id:2,
                imgUrl:'./img/icon3.png',
                title:'成都'
                },
                {
                id:3,
                imgUrl:'./img/icon4.png',
                title:'南京'
                },
                {
                id:4,
                imgUrl:'./img/icon5.png',
                title:'河流'
                },
                {
                id:5,
                imgUrl:'./img/icon6.png',
                title:'埃及'
                },
                {
                id:6,
                imgUrl:'./img/icon7.png',
                title:'摩天轮'
                },
                {
                id:7,
                imgUrl:'./img/icon8.png',
                title:'沙漠'
                },
                {
                id:8,
                imgUrl:'./img/icon9.png',
                title:'雪山'
                },
                {
                id:9,
                imgUrl:'./img/icon1.png',
                title:'故宫'
                },
            
            ]
        }
    }

}
</script>


<style lang="less" scoped>
.icons{
    padding-top: .4rem;
    padding-bottom: .1rem;
    border-bottom: 1px solid #eee;
}
ul{
    overflow: hidden;
    
}
ul li{

    width: 20%;
    float: left;
    text-align: center;
    margin-bottom: .4rem;
    
}
ul li img{
    width: 1.0666666666rem;
    height: 1.0666666666rem;
}
ul li p{
    font-size: .3733333rem;
    margin-top: .2rem;
    color: #333;

}

</style>