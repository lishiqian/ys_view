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

        <el-row type="flex">
            <div style="height: 300px;">
                <el-steps direction="vertical" :active="1">
                    <el-step title="步骤 1"></el-step>
                    <el-step title="步骤 2"></el-step>
                    <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
                </el-steps>
            </div>


        </el-row>

        <div>
            <el-row>等级：
                <el-button>20</el-button>
                <el-button>40</el-button>
                <el-button>50</el-button>
                <el-button>60</el-button>
                <el-button>70</el-button>
                <el-button>80</el-button>
                <el-button>90</el-button>
            </el-row>
            <el-container>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-row type="flex">
                        <el-form-item label="莫拉">
                            <el-input v-model="form.gold"></el-input>
                        </el-form-item>
                        <el-form-item label="经验">
                            <el-input v-model="form.exp"></el-input>
                        </el-form-item>
                    </el-row>

                    <!--<el-row type="flex">-->
                    <!--<el-form-item label="材料">-->
                    <!--<el-select value="1">-->
                    <!--<el-option value="1"></el-option>-->
                    <!--</el-select>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item label="数量">-->
                    <!--<el-input-number :min="1" :max="10" label="描述文字"></el-input-number>-->
                    <!--</el-form-item>-->
                    <!--</el-row>-->
                    <el-table
                            :data="form.meterials"
                            border>
                        <el-table-column
                                label="材料">
                            <template slot-scope="scope">
                                <el-select v-model="scope.id">
                                    <el-option v-for="m in meterialsData" :key="m.id" :label="m.name"
                                               :value="m.id"></el-option>
                                </el-select>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="数量">
                            <template slot-scope="scope">
                                <el-input-number v-model="scope.num" :min="1" :max="10" label="描述文字"></el-input-number>
                            </template>
                        </el-table-column>
                    </el-table>

                    <p></p>
                    <el-row>
                        <el-button @click="addMeterialsItem">添加材料</el-button>
                        <el-button>提交</el-button>
                    </el-row>


                </el-form>
            </el-container>
        </div>

    </div>
</template>
<script>

    //    import {ElRow, ElButton, ElSelect, ElOption, ElContainer} from "element-ui";
    import request from '@/network/request'


    export default {
        name: 'WeaponShow',
        data() {
            return {
                meterialsData: [],
                form: {
                    gold: 0,
                    exp: 0,
                    meterials: []
                }
            }
        },
        methods: {
            addMeterialsItem() {
                this.form.meterials.push({id: this.meterialsData[0].id, num: 1})
            }
        },
        components: {},
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