<template>
    <el-container style="height: 100%">
        <el-header>
            <!--导航栏插件-->
            <main-menu></main-menu>
        </el-header>
        <el-container>
            <el-aside>
                <!--<div style="height: 100%">-->
                <left-nav></left-nav>
                <!--</div>-->

            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>
                    <el-divider></el-divider>
                    Footer
                </el-footer>
            </el-container>

        </el-container>

        <!--导航栏插件-->
    </el-container>
</template>
<script>
    import MainMenu from 'view/menu/MainMenu.vue'
    import LeftNav from 'view/nav/LeftNav.vue'
    import ElContainer from "../../node_modules/element-ui/packages/container/src/main.vue";
    import ElAside from "../../node_modules/element-ui/packages/aside/src/main.vue";


    export default {
        name: 'Home',
        data() {
            return {}
        },
        methods: {},
        components: {
            ElAside,
            ElContainer,
            MainMenu,
            LeftNav
        }
    }
</script>
<style scoped>

</style>