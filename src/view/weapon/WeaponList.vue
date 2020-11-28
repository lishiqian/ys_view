<template>
    <el-table
            :data="weapons"
            border
           >
        <el-table-column
                prop="index"
                label="序号"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="typeId"
                label="类型">
        </el-table-column>
        <el-table-column
                prop="typeId"
                label="品质">
        </el-table-column>
    </el-table>
</template>
<script>
    import request from '@/network/request'

    export default {
        name: 'WeaponList',
        data() {
            return {
                weapons: []
            }
        },
        methods: {},
        components: {},
        created: function () {
            request({
                url: '/weapon-all'
            }).then(res => {
                console.log(res);
                this.weapons = res
            })
        }
    }
</script>
<style scoped>

</style>