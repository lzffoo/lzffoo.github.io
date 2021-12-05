<template>
    <div class="hello" align="center">
        <div class="container">
            <el-empty :image-size=imageSize image="./toBeContinued.jpg" description="敬请期待"></el-empty>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Nothing"
        ,data:function () {
            return{
                imageSize:400
            }
        }
        ,props:{

        }
    }
</script>

<style scoped>

</style>