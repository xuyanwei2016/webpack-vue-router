import Vue from 'vue';
import App from 'App.vue';
import VueRouter from 'vue-router';
/*为了能在全局下使用*/
Vue.use(VueRouter);
import zfButton from './components/Button/index.js';
Vue.use(zfButton);//这样就可以在全局下使用了<zf-Button></zf-Button>
import routes from './router.js';
//引入动画库
import 'animate.css';
//加上vue-resource就可以在任何组件上发起http请求了
import VueResource from 'vue-resource';
Vue.use(VueResource);
const router=new VueRouter(routes);
const vm=new Vue({
    router,
    el:'#app',
    ...App
    //render:(h)=>h(App)//自动把App组件挂载到index.html
})



