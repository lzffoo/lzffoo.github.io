<template>
    <div class="hello" align="center">
        <div class="container">
            <el-row>
                <el-col :span="cb1">
                    <el-select v-model="value" placeholder="请选择" @change="changeGame">
                        <el-option-group
                                v-for="group in options"
                                :key="group.label"
                                :label="group.label">
                            <el-option
                                    v-for="item in group.options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-option-group>
                    </el-select>
                </el-col>
                <el-col :span="cb2">
                    <el-tag style="float: left;" v-model="fps">FPS:{{fps}}</el-tag>
                </el-col>
                <el-col :span="zj">

                    <DIV ID="emulator" style="text-align: center;">
                        <canvas id="nes-canvas" :width="canWidth" :height="canHeigh"></canvas>
                    </DIV>
                </el-col>
                <el-col :span="cb3">
                    <el-collapse v-model="activeName" accordion>
                        <el-collapse-item title="手柄设置" name="gamepad">
                            <el-row v-for="(item,index) in gamePadSet" :key="index">
                                <el-col :span="labSpan">
                                    <el-tag>{{item.label}}</el-tag>
                                </el-col>
                                <el-col :span="inputSpan">
                                    <el-input v-model="item.key" placeholder="请输入内容"></el-input>
                                </el-col>
                            </el-row>
                        </el-collapse-item>
                        <el-collapse-item title="p1" name="p1">
                            <el-row v-for="(item,index) in player1Set" :key="index">
                                <el-col :span="labSpan">
                                    <el-tag>{{item.label}}</el-tag>
                                </el-col>
                                <el-col :span="inputSpan">
                                    <el-input v-model="keyMap[item.key]"  placeholder="请输入内容"></el-input>
                                </el-col>
                            </el-row>
                        </el-collapse-item>
                        <el-collapse-item title="p2" name="p2">
                            <el-row v-for="(item,index) in player2Set" :key="index">
                                <el-col :span="labSpan">
                                    <el-tag>{{item.label}}</el-tag>
                                </el-col>
                                <el-col :span="inputSpan">
                                    <el-input v-model="keyMap[item.key]" placeholder="请输入内容"></el-input>
                                </el-col>
                            </el-row>
                        </el-collapse-item>

                    </el-collapse>

                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import {holdNes} from "../nes/initnes.js";
    import {romsData} from "../nes/romUrl.js";
    import {gamePadApi} from "../nes/gamepad.js";

    export default {
        name: 'Nes',
        components: {}
        , data: function () {
            return {
                canWidth: "256px",
                canHeigh: "240px"
                , toggRange: 1.5
                , labSpan: 6
                ,inputSpan:14
                ,keyMap: {}
                ,gamePadSet:[]
                ,player1Set:[]
                ,player2Set:[]
                ,cb1:4
                ,cb3:7
                ,zj:12
                ,cb2:1
                ,fps:0
                ,activeName:"p1"
                , value: ''
                , options: [{
                    label: '热门城市',
                    options: [{
                        value: 'Shanghai',
                        label: '上海'
                    }]
                }, {}],
            }
        }
        , created() {
            this.setOption();
            this.setPadKey();
            this.keyMap = romsData.keyMap;
            if(holdNes.alreadyLoadRom){
                this.value = holdNes.alreadyLoadRom;
            }
            this.$nextTick(() => {
                this.setFc();
            })
        }
        , beforeRouteLeave(to, from, next) {
            holdNes.audio_ctx && holdNes.audio_ctx.suspend();
            next();
        }
        ,
        methods: {
            setFc: function () {
                holdNes.audio_ctx &&  holdNes.audio_ctx.resume();
                if(holdNes.alreadyLoad){
                    holdNes.nes_load_url("nes-canvas", holdNes.alreadyLoad);
                }else {
                    holdNes.nes_load_url("nes-canvas", '../../roms/Contra/Contra1(U)30.nes');
                }
                let startTime = 0
                let thatVue = this;
                holdNes.nes.ui.updateStatus = async function (text) {
                    let nowTime = new Date().getTime();
                    if (nowTime - startTime < 300) {
                        return;
                    }
                    startTime = nowTime;
                    thatVue.fps = text;
                }
                holdNes.screen.animate({
                    width: `${512 * this.toggRange}px`,
                    height: `${480 * this.toggRange}px`
                }, 0);
            }
            ,setPadKey:function () {
                let keys = gamePadApi.kesPad;
                for(let key in keys){
                    let foo = {label:keys[key],key:key}
                    this.gamePadSet[this.gamePadSet.length] = foo;
                }

                let player1Set = holdNes.player1Set;
                for(let key in player1Set){
                    let foo = {label:key,key:player1Set[key]}
                    this.player1Set[this.player1Set.length] = foo;
                }

                let player2Set = holdNes.player2Set;
                for(let key in player2Set){
                    let foo = {label:key,key:player2Set[key]}
                    this.player2Set[this.player2Set.length] = foo;
                }


            }
            ,setOption:function () {
                let foo = [];
                for(let key in  romsData){
                    let bar = {};
                    if(key !== "keyMap"){
                        let data = romsData[key];
                        bar.label = key;
                        bar.options = [];
                        for(let i=0;i<data.length;i++){
                            let fb = data[i];
                            bar.options[bar.options.length] = {value:fb[1],label:fb[0]};
                        }
                    }
                    foo[foo.length] = bar
                }
                this.options = foo;
            }
            ,changeGame(val){
                holdNes.alreadyLoad = `../../${val}`;
                holdNes.alreadyLoadRom = val;
                var req = new XMLHttpRequest();
                req.open("GET", `../../${val}`);
                req.overrideMimeType("text/plain; charset=x-user-defined");
                req.onerror = () => console.log(`Error loading ${data.value}: ${req.statusText}`);
                req.onload = function () {
                    if (this.status === 200) {
                        holdNes.nes.loadROM(this.responseText);
                    } else if (this.status === 0) {
                        // Aborted, so ignore error
                    } else {
                        req.onerror();
                    }
                };
                req.send();
            }
        }

    }
</script>

<style scoped>

</style>