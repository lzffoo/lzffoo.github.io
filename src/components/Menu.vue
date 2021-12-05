<template>
    <div>
        <el-menu
                default-active="/"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                router
                active-text-color="#ffd04b">
            <el-menu-item v-for="(item, index) in menuData" :count="index"  :key="item.path" :index="item.path" @click="triggerMenu">
                <i class="el-icon-menu"></i>
                <span slot="title">{{item.name}}</span>
            </el-menu-item>
        </el-menu>
    </div>

</template>

<script>
    export default {
        name: "Menu",
        data:function() {
            return{
                menuData:[798]
            }
        },
        props: {

        },
        created() {
            this.menuData = this.$router.options.routes;
        },
        methods:{
            handleOpen:function (index) {
                // this.$router.push({ path: 'hello', query: { msg: '代码传参' },params:{mm:"545"}})
            },
            handleClose:function (index) {

            },triggerMenu:function () {
                // this.$router.push({ path: 'hello', query: { msg: '代码传参' },params:{mm:"545"}})
            }
        }
    }
</script>

<style scoped>

</style>