<template>
    <el-table
            :data="weapons"
            border
           >
        <el-table-column
                prop="index"
                label="序号"
                width="80">
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
                prop="quality"
                label="品质">
        </el-table-column>
        <el-table-column
                label="操作">
            <el-button>删除</el-button>
        </el-table-column>
    </el-table>
</template>
<script>
    import request from '@/network/request'
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";

    export default {
        name: 'WeaponList',
        data() {
            return {
                weapons: []
            }
        },
        methods: {},
        components: {ElButton},
        created: function () {
            request({
                url: '/weapon-all'
            }).then(res => {
                console.log(res);

                res.forEach((item,index)=>{
                    item.index = index + 1
                });

                this.weapons = res
            })
        }
    }
</script>
<style scoped>

</style>