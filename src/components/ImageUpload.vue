<template>
    <div class="img-upload-container">
        <div>
            <img src="@/assets/image/添加-1.svg" class="img-show"></img>
        </div>

        <el-button icon="el-icon-upload">点击上传图片</el-button>
    </div>
</template>

<script>
    import ElUpload from "../../node_modules/element-ui/packages/upload/src/index.vue";
    import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";

    export default {
        name: "ImageUpload",
        components: {
            ElButton,
            ElUpload},
        data() {
            return {

            };
        },
        methods: {

        }
    }
</script>

<style scoped>
    .img-upload-container{
        text-align: center;
        padding-bottom: 30px;
    }

    .img-show {
        width: 90px;
        height: 90px;
        border: solid 1px #cccccc;
        border-radius: 10px;
        margin-bottom: 30px;
    }
</style>