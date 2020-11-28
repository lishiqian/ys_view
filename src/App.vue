<template>
    <div id="app">
        <home></home>
    </div>
</template>

<script>
    import router from './router'
    import store from './store'
    import Home from './view/Home.vue'

    export default {
        name: 'App',
        router,
        store,
        date: {},
        methods: {},
        components: {
            Home
        }
    }
</script>

<style>
    @import "assets/css/base.css";
</style>
