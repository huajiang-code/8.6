<template>
    <div class="scroll">
        <div class="scroll-content">
            <div class="scroll-right">
                <ul :class="{animatedTop}">
                    <li v-for="(item,index) in scrollList" :key="index">
                        <img src="@/assets/img/scroll.png" alt="">
                            {{item.title}}

                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            animatedTop:false,
            scrollList:[
                {
                    id:0,
                    title:"清迈旅游落地签如何搞定？360度带你了解泰北小城清迈"
                },
                {
                    id:1,
                    title:"港珠澳大桥怎么走？穿梭巴士预约及过关全攻略"
                },
                {
                    id:2,
                    title:"杭州动物园有哪些动物，可爱的小松鼠陪你一夏！"
                },
                {
                    id:3,
                    title:"天空之城！奥普拉多让你在天空释放"
                },
                {
                    id:4,
                    title:"彩虹云朵棉花糖来啦"
                },
            ]
        }
    },
    mounted(){
        setInterval(this.showScroll,2000);
    },
    methods:{
        showScroll(){
            this.animatedTop=true;
            setTimeout(()=>{
                this.scrollList.push(this.scrollList[0]);
                this.scrollList.shift();
                this.animatedTop=false;
            },500)
        }
    }
}
</script>

<style lang="less" scoped>

.animatedTop{
    transition: all .5s;
    margin-top: -.666666666rem;
}




.scroll{
    padding: .3rem 0;

}
.scroll-content{
    background: url("http://localhost:8080/img/scroll.png") no-repeat;
    background-size: 100%;
    width: 100%;
    height: 1.33333333rem;
    position: relative;
}
.scroll-right{
    position: absolute;
    right:0;
    height: 1.3333333rem;
    width: 8.13333333rem;
    overflow: hidden;
}
li{
    font-size: .35rem;
    color: #333;
    line-height: .6666666rem;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
li img{
    width: .175rem;
    height: .175rem;
}

</style>