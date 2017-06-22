<template>
    <div>你好
    <Home></Home>
        <Navs></Navs>
        <zf-button>点我啊</zf-button><!--自定义的全局组件-->
    </div>
</template>
<script>
    import Home from './components/Home.vue';
    import Navs from './components/Navs.vue';
    export default {
        /*请求数据 在页面一加载的时候就调取数据*/
        mounted(){
            this.$http.get('/hello')
        },
        data(){
            return {}
        },
        components: {Home,Navs},
        methods: {}
    }
</script>
<style scoped>

</style>