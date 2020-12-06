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
            <div style="height: 300px;">
                <el-steps direction="vertical" :active="1">
                    <el-step title="步骤 1"></el-step>
                    <el-step title="步骤 2"></el-step>
                    <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
                </el-steps>
            </div>


        </el-row>

        <div>
            <p></p>
            <el-row>
                <el-row>
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="等级">
                            <el-radio-group v-model="form.lever">
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
                                <el-input v-model="form.gold"></el-input>
                            </el-form-item>
                            <el-form-item label="经验">
                                <el-input v-model="form.exp"></el-input>
                            </el-form-item>
                        </el-row>
                    </el-form>
                </el-row>
                <el-row>
                    <el-table
                            :data="form.meterials"
                            border>
                        <el-table-column
                                label="材料"
                                width="250px">
                            <template slot-scope="scope">
                                <el-select v-model="scope.row.id">
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

    //    import {ElRow, ElButton, ElSelect, ElOption, ElContainer} from "element-ui";
    import request from '@/network/request'
    import ElRow from "element-ui/packages/row/src/row";


    export default {
        name: 'WeaponShow',
        data() {
            return {
                meterialsData: [],
                form: {
                    lever: 20,
                    gold: 0,
                    exp: 0,
                    meterials: []
                }
            }
        },
        methods: {
            addMeterialsItem() {
                this.form.meterials.push({id: this.meterialsData[0].id, num: 1})
            },
            deleteMeterialsItem(index) {
//                console.log(index);
                this.form.meterials.splice(index, 1)
            },
            onsubmit(){
                console.log(this.form);
            }
        },
        components: {ElRow},
        created: function () {
            request({
                url: "/materials/list"
            }).then(res => {
                console.log(res);
                this.meterialsData = res.data;
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