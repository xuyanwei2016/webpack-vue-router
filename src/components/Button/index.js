import Button from './Button.vue';
import Vue from 'vue';
export default {//相当于导出了这个组件
    install(){//需要在外面Vue.use变成全局 所以的用indtall 是官网上规定
        Vue.component('zf-button',Button)
    }
}