<template>
    <div>
        <router-link to="/home">router1</router-link>
        <router-link to="/list">router2</router-link>
        <!--默认调用animated这个动画-->
        <transition enter-active-class="animated fadeInUp" leave-active-class="out">
            <router-view></router-view>
        </transition>

    </div>
</template>
<style>
    .out{
        display: none;
    }
</style>
