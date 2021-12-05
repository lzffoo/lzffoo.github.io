<template>
    <div class="hello" align="center">
        <div class="container">
            <iframe class="animate__animated animate__zoomIn" style="border-radius: 20px" :src="url"></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        name: "date"
        ,data:function () {
            return{
                url:"#"
            }
        }
        ,created() {
            setTimeout(()=>{
                this.url = "https://www.bmcx.com/apiiframe/?api_from=bmcx&api_url=https://wannianrili.bmcx.com/&api_width=100%&api_backgroundcolor=FFFFFF"
            })
        }

    }
</script>

<style scoped>
        iframe{
            width: 100%;
            height: 100%;
            border: none;
            overflow-y: hidden;
        }
</style>