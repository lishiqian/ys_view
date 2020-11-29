<template>
    <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            style="height: 100%">
        <el-menu-item index="1" @click="weaponListClick">
            <i class="el-icon-menu"></i>
            <span slot="title">武器数据列表</span>
        </el-menu-item>
        <el-menu-item index="2" @click="addWeaponClick">
            <i class="el-icon-menu"></i>
            <span slot="title">添加武器数据</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">人物信息列表</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">添加任务信息</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "LeftNav",
        methods: {
            weaponListClick(){
                this.$router.push("/weapon")
            },
            addWeaponClick(){
                this.$router.push("/addWeapon")
            }
        }
    }
</script>

<style scoped>

</style>