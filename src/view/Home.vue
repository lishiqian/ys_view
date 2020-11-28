<template>
    <el-container>
        <el-header>
            <tabs></tabs>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <!--导航栏插件-->


    </el-container>
</template>
<script>
    import Tabs from '@/components/Tabs'


    export default {
        name: 'Home',
        data() {
            return {}
        },
        methods: {},
        components: {
            Tabs
        }
    }
</script>
<style scoped>

</style>