<template>
    <form class="layui-form" action="" id="materials-form" lay-filter="weapon-form">
        <div class="layui-form-item">
            <label class="layui-form-label">材料名称</label>
            <div class="layui-input-block">
                <input type="text" name="name" lay-verify="title" autocomplete="off" placeholder="请输入内容"
                       class="layui-input">
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">材料品质</label>
            <div class="layui-input-inline">
                <input type="text" class="layui-input" disabled="disabled">
            </div>
            <div class="layui-input-inline">
                <div class="layui-btn-container" style="margin-top: 10px">
                    <button type="button" class="layui-btn layui-btn-xs">白</button>
                    <button type="button" class="layui-btn layui-btn-xs">蓝</button>
                    <button type="button" class="layui-btn layui-btn-xs">绿</button>
                    <button type="button" class="layui-btn layui-btn-xs">紫</button>
                    <button type="button" class="layui-btn layui-btn-xs">金</button>
                </div>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">武器描述</label>
            <div class="layui-input-block">
                <textarea name='description' placeholder="请输入内容" class="layui-textarea"></textarea>
            </div>
        </div>

        <div class="layui-form-item">
            <div class="layui-input-block">
                <button type="button" class="layui-btn" id="subm">立即提交</button>
                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
            </div>
        </div>
    </form>
</template>
<script>

    export default {
        name: 'WeaponAdd',
        data() {
            return {}
        },
        methods: {},
        components: {}
    }
</script>
<style scoped>

</style>