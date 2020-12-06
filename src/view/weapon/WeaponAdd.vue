<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>

        <div style="margin-top: 50px">

            <image-upload></image-upload>

            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="武器名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="武器类型">
                    <el-select v-model="form.typeId" placeholder="请选择武器类型">
                        <el-option v-for="type in weaponTypes" :key="type.typeId" :label="type.typeName"
                                   :value="type.typeId"></el-option>
                        <!--<el-option label="区域二" value="beijing"></el-option>-->
                    </el-select>
                </el-form-item>
                <el-form-item label="武器品质">
                    <el-radio-group v-model="form.quality">
                        <el-radio label="5" border>5星</el-radio>
                        <el-radio label="4" border>4星</el-radio>
                        <el-radio label="3" border>3星</el-radio>
                        <el-radio label="2" border>2星</el-radio>
                        <el-radio label="1" border>1星</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input type="textarea" v-model="form.description"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>

</template>
<script>

//    import ElContainer from "element-ui";
    import ImageUpload from 'components/ImageUpload.vue'
    import request from 'network/request.js'

    export default {
        name: 'WeaponAdd',
        data() {
            return {
                form: {
                    name: '',
                    typeId: 0,
                    quality: '5',
                    description: '',
                },
                weaponTypes: []
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!', this.form);

                request({
                    url: "/weapon/add",
                    method: 'post',
                    data: this.form
                }).then((res) => {
                    if(res.code == 200){
                        this.$router.replace("/weapon")
                    }
                });
            }
        },

        components: {
            ImageUpload,
//            ElContainer
        },
        created: function () {
            request({url: "/weapon/type-all"})
                .then((res) => {
                    console.log(res);
                    this.weaponTypes = res;
                    this.form.typeId = res[0].typeId;
                });
        }
    }
</script>
<style scoped>

</style>