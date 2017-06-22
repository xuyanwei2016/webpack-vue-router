/*这里面放的都是组件配置的routes*/
import Router1 from './components/Router1.vue';
import Router2 from './components/Router2.vue';

export default{
    routes:[
        {path:'/home',component:Router1},
        {path:'/list',component:Router2},
    ]
}


