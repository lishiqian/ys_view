<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>武器</el-breadcrumb-item>
            <el-breadcrumb-item>武器列表</el-breadcrumb-item>
        </el-breadcrumb>
        <p></p>

        <el-table
                :data="weapons"
                border>
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
                    prop="weaponType.typeName"
                    label="类型">
            </el-table-column>
            <el-table-column
                    prop="quality"
                    label="品质">
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <!-- 删除按钮 -->
                    <el-button type="danger" icon="el-icon-delete" size="mini"
                               @click="deleteClick(scope.row.id,scope.row.index)">删除
                    </el-button>
                    <el-button type="primary" icon="el-icon-s-order" size="mini"
                               @click="showWeaponData(scope.row.id)">查看数据
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <p></p>
        <el-row type="flex" justify=end>
            <el-button @click="addWeapon" type="primary" icon="el-icon-plus">添加武器</el-button>
        </el-row>

    </div>

</template>
<script>

    //    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
    //    import ElRow from "element-ui/packages/row/src/row";

    export default {
        name: 'WeaponList',
        data() {
            return {
                weapons: []
            }
        },
        methods: {
            deleteClick: function (id, index) {
                request({
                    url: "/weapon/delete",
                    params: {
                        id: id
                    }
                }).then((res) => {
                    if (res.code == 200) {
                        this.weapons.splice(index - 1, 1);
                    }
                });
            },
            addWeapon: function () {
                this.$router.replace("/addWeapon")
            },
            showWeaponData: function () {
                this.$router.replace("/WeaponShow")
            }
        },
        components: {
//            ElRow,
//            ElButton
        },
        created: function () {
            request({
                url: '/weapon/all'
            }).then(res => {
                console.log(res);

                res.forEach((item, index) => {
                    item.index = index + 1
                });

                this.weapons = res
            })
        }
    }
</script>
<style scoped>

</style>