<template>
    <div id="app">
        <router-view></router-view>
        <TransverMenu></TransverMenu>
    </div>
</template>

<script>
    import TransverMenu from './components/TransverMenu.vue';
    export default {
        name: 'app',
        components: {
            TransverMenu
        },
        created() {

        },
        methods: {
        }
    }
</script>

<style>
    #app {
        background: #222327;
        border: 1px solid;
    }

    body {
        margin: 0;
    }
    *{
        margin: 0;
    }
    .hello {
        height:86.8vh;
        align-items: center;
        justify-content: center;
    }

    .container {
        height: 89%;
        width: 94%;
        background: #ffffff;
        border-radius: 25px;
        transform: translate(0, 6%);
    }
</style>
