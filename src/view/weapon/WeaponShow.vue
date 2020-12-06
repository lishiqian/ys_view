<template>
    <div>
        <el-row type="flex">
            <div>
                <img src="@/assets/image/添加-1.svg" class="weapon-img"></img>
            </div>
            <div>
                <ul class="weapon-msg">
                    <li><span>名称：</span>风鹰剑</li>
                    <li><span>装备类型：</span>单手剑</li>
                    <li><span>新级：</span>5星</li>
                </ul>
            </div>
        </el-row>

        <el-row>
            <el-timeline>
                <el-timeline-item
                        v-for="(item, index) in weaponAscends"
                        :key="index"
                        placement="top"
                        :timestamp="item.level + ''">
                    <el-card>
                        <h4>莫拉={{item.goldcoinNum}}</h4>
                        <h4>经验={{item.experience}}</h4>
                        <!--<h4 v-for="m in item.materials">{{m.materialsId | showMeterialsName}}={{m.num}}</h4>-->
                        <h4 v-for="m in item.materials">{{showMeterialsName(m.materialsId)}}={{m.num}}</h4>

                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </el-row>

        <div>
            <p></p>
            <el-row>
                <el-row>
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="等级">
                            <el-radio-group v-model="form.level">
                                <el-radio-button label="20">20级</el-radio-button>
                                <el-radio-button label="40">40级</el-radio-button>
                                <el-radio-button label="50">50级</el-radio-button>
                                <el-radio-button label="60">60级</el-radio-button>
                                <el-radio-button label="70">70级</el-radio-button>
                                <el-radio-button label="80">80级</el-radio-button>
                                <el-radio-button label="90">90级</el-radio-button>
                            </el-radio-group>
                        </el-form-item>
                        <el-row type="flex">
                            <el-form-item label="莫拉">
                                <el-input v-model="form.goldcoinNum"></el-input>
                            </el-form-item>
                            <el-form-item label="经验">
                                <el-input v-model="form.experience"></el-input>
                            </el-form-item>
                        </el-row>
                    </el-form>
                </el-row>
                <el-row>
                    <el-table
                            :data="form.materials"
                            border>
                        <el-table-column
                                label="材料"
                                width="250px">
                            <template slot-scope="scope">
                                <el-select v-model="scope.row.materialsId">
                                    <el-option v-for="m in meterialsData" :key="m.id" :label="m.name"
                                               :value="m.id"></el-option>
                                </el-select>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="数量"
                                width="230px">
                            <template slot-scope="scope">
                                <el-input-number v-model="scope.row.num" :min="1" label="描述文字"></el-input-number>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="操作">
                            <template slot-scope="scope">
                                <el-button type="danger" icon="el-icon-delete" size="mini"
                                           @click="deleteMeterialsItem(scope.$index)">删除
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-row>

                <el-row>
                    <p></p>
                    <el-button @click="addMeterialsItem">添加材料</el-button>
                    <el-button @click="onsubmit">提交</el-button>
                </el-row>

            </el-row>
        </div>

    </div>
</template>
<script>
    import request from '@/network/request'

    export default {
        name: 'WeaponShow',
        data() {
            return {
                meterialsData: [],
                weaponAscends: [],
                form: {
                    level: 20,
                    goldcoinNum: 0,
                    experience: 0,
                    materials: [],
                    weaponId: this.$route.query.id
                }
            }
        },
        methods: {
            addMeterialsItem() {
                this.form.materials.push({materialsId: this.meterialsData[0].id, num: 1})
            },
            deleteMeterialsItem(index) {
//                console.log(index);
                this.form.materials.splice(index, 1)
            },
            onsubmit() {
                console.log(this.form);
                request({
                    url: "/weapon-ascend/add",
                    data: this.form,
                    method: 'post'
                }).then(res => {
                    console.log(res);
                    this.meterialsData = res.data;
                });
            },
            showMeterialsName: function (id) {
                for (var meterials of this.meterialsData) {
                    if (meterials.id == id) {
                        return meterials.name;
                    }
                }
                return "哈哈哈";
            }
        },
        computed: {},
        components: {},
        filters: {

        },
        created: function () {
            request({
                url: "/materials/list"
            }).then(res => {
                console.log(res);
                this.meterialsData = res.data;
            });

            request({
                url: "/weapon-ascend/get",
                params: {weaponId: this.$route.query.id},
                method: 'post'
            }).then(res => {
                console.log(res);
                this.weaponAscends = res.data;
            });
        }
    }
</script>
<style scoped>
    .weapon-img {
        width: 90px;
        height: 90px;
        border: solid 1px #cccccc;
        border-radius: 10px;
        margin-bottom: 30px;
    }

    .weapon-msg {
        list-style: none;
    }

    .weapon-msg span {
        font-weight: bold;
    }
</style>