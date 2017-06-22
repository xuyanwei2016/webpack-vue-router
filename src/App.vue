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
        data(){
            return {}
        },
        components: {Home},
        methods: {}
    }
</script>
<style scoped>

</style>