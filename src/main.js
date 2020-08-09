import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//reset.css重置样式
import './assets/css/reset.css'
//fastClick解决click事件在移动端延迟的问题
// import FastClick from 'fastclick'
// FastClick.attach(document.body)
//引入字体图标
import './assets/css/iconfont.css'
//引入font.js适配文件
import './assets/js/font'





import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
import { CountDown } from 'vant';
Vue.use(CountDown);
import 'vant/lib/index.css';





import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
// import './assets/css/swiper.min.css'
import './assets/css/swiper-bundle.min.css'





Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
