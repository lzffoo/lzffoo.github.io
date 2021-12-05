<template>
    <div class="hello" align="center" @contextmenu="initContenMenu">
        <div class="container" align="center">

            <div class="animate__animated animate__fadeInDown">
                <div id="search" class="search" align="center">
                    <div class="logo-box" align="center">
                        <div id="header-box" class="header_img "></div>
                    </div>
                    <div class="search-wrapper">
                        <div class="searchbar">
                            <img src="../../public/search.svg" class="mg">
                            <input type="text" id="search2" class="" placeholder="在 Google 上搜索，或者输入一个网址"
                                   name="keyword" v-model="keyWords" @keydown="search" @contextmenu="toChangeSearch" @dblclick="toChangeSearch2">
                        </div>
                    </div>
                </div>
            </div>

            <div class="contain_row" v-for="(item,index) in contain_row" :key="index" :style="limitLong">
                <div class="container_ animate__animated animate__fadeInUp" @click="openUrl(itemChild.href)" v-for="(itemChild,indexChild) in item" :key="indexChild+'Child'">
                    <el-card shadow="never" :body-style="{ padding: '16px' }">
                        <img style="width: 30px;height: 30px;border-radius: 20%"
                             :src="!!itemChild.src ?itemChild.src:defaultIcon + itemChild.domain + '.png'" class="image">
                    </el-card>
                    <div style="padding-top: 8%">
                        <span class="cardContent">{{itemChild.name}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _data from "../js/data.js";
    export default {
        name: 'Navigation',
        props: {
            msg: String
        },
        data:function(){
            return{
                data_:{}
                ,contain_row:[[{href: "https://v2hx.github.io/", domain: "v2hx.github.io", name: "红杏"}
                    , {href: "https://tool.chinaz.com/tools/imgtobase", domain: "tool.chinaz.com", name: "站长工具"}]
                ]
                ,defaultIcon:""
                ,keyWords:""
                ,searchUrl:{}
                ,limit:7
                ,limitRow:3
                ,limitLong:"display: flex;width: 40%"
                ,limitLongInt:40
                ,rootPath:""
                ,clipboardContent: ""
                ,pasteContent: ""
            }
        }
        ,created() {
            this.data_ = _data._data;
            this.defaultIcon = this.data_.defaulticon2;
            this.searchUrl = this.data_.searchUrl;
            this.rootPath = this.getRootPath()
            this.$nextTick(()=>{
                this.initWebData();
            })
            this.toggerSet(false);

        }
        ,methods:{
            getSelection() {
                const selection = window.getSelection();
                const text = selection.anchorNode.wholeText;
                return (
                    text && text.substring(selection.anchorOffset, selection.focusOffset)
                );
            }
            ,toChangeSearch(event){
                this.keyWords = "$duck "
                event.preventDefault();
                event.stopPropagation();
            }
            ,toChangeSearch2(){
                this.keyWords = "$baidu "
            }
            ,onCopy(event) {
                const content = this.getSelection();
                this.$contextmenu({
                    items: [
                        {
                            label: "复制",
                            disabled: !content,
                            onClick: () => {
                                this.clipboardContent = content;
                            }
                        },
                        { label: "粘贴", disabled: true }
                    ],
                    event,
                    zIndex: 3,
                    minWidth: 140
                });
                event.preventDefault();
            }
            ,onPaste(event) {
                const content = this.getSelection();
                this.$contextmenu({
                    items: [
                        {
                            label: "复制",
                            disabled: !content,
                            onClick: () => {
                                this.clipboardContent = content;
                            }
                        },
                        {
                            label: "粘贴",
                            disabled: !this.clipboardContent,
                            onClick: () => {
                                this.pasteContent += this.clipboardContent;
                            }
                        }
                    ],
                    event,
                    zIndex: 3,
                    minWidth: 140
                });
                event.preventDefault();
            }
            ,initContenMenu:function () {
                this.$contextmenu({
                    items: [
                        {
                            label: "增加行",
                            disabled: false,
                            onClick: () => {
                                this.limitRow = this.limitRow+1;
                                this.initWebData();
                            }
                        },
                        {
                            label: "增加列",
                            disabled: false,
                            onClick: () => {
                                this.limit = this.limit+1;
                                this.initWebData();
                            }
                        },
                        {
                            label: "增加宽度",
                            disabled: false,
                            onClick: () => {
                                this.limitLongInt = this.limitLongInt + 5;
                                this.limitLong=`display: flex;width: ${this.limitLongInt}%`
                                this.initWebData();
                            }
                        },
                        {
                            label: "保存设置",
                            disabled: false,
                            onClick: () => {
                                this.toggerSet(true)
                                this.$message({message: '保存成功', type: 'success'})
                            }
                        },
                        {
                            label: "清除设置",
                            disabled: false,
                            onClick: () => {
                                localStorage.removeItem("this.limitRow");
                                localStorage.removeItem("this.limit");
                                localStorage.removeItem("this.limitLongInt");
                                this.limit=7;
                                this.limitRow=3;
                                this.limitLong="display: flex;width: 40%";
                                this.limitLongInt=40;
                                this.initWebData();
                                this.$message({message: '清除成功', type: 'success'})
                            }
                        },

                    ],
                    event,
                    zIndex: 3,
                    minWidth: 140
                });
                event.preventDefault();
            }
            ,toggerSet:function (flag) {//true为存
                if(flag){
                    localStorage.setItem("this.limitRow",this.limitRow)
                    localStorage.setItem("this.limit",this.limit)
                    localStorage.setItem("this.limitLongInt",this.limitLongInt)
                }else {
                    this.limitRow = parseInt(localStorage.getItem("this.limitRow")) || this.limitRow;
                    this.limit = parseInt(localStorage.getItem("this.limit")) || this.limit;
                    this.limitLongInt = parseInt(localStorage.getItem("this.limitLongInt")) || this.limitLongInt;
                    this.limitLong=`display: flex;width: ${this.limitLongInt}%`
                }

            }
            ,openUrl:function(href) {
                if(href === "#"){
                    this.$message({message: '无链接', type: 'warning'})
                    return
                }
                window.open(href,"_blank")
            }
            ,search:function (event) {
                if(event.code === "Enter" || event.code === "NumpadEnter"){
                    let  key = this.keyWords
                    if (key === "1807") {
                        this.initWebData("websH")
                        return;
                    }
                    let reg = new RegExp("(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]");
                    let searchUrl = this.searchUrl['google'];
                    if (reg.test()) {
                        window.open(key, "_blank")
                    } else {
                        if (key.startsWith("$baidu")) {
                            searchUrl = this.searchUrl['baidu'];
                            key = key.substring(7)
                            window.open(searchUrl + key, "_blank")
                            return;
                        }
                        if (key.startsWith("$duck")) {
                            searchUrl = this.searchUrl['duck'];
                            key = key.substring(6)
                            window.open(searchUrl + key, "_blank")
                            return;
                        }
                        window.open(searchUrl + key, "_blank")
                    }
                }

            }
            ,initWebData:function (key) {
                key = key || "webs"
                this.contain_row = [];
                let data = this.data_[key]
                let cou;
                let length = data.length;
                for (let i = 0;i < length;){
                    let foo = [];
                    cou = 1;
                    while(cou <= this.limit){
                        if(i >= length){
                            break;
                        }
                        if(typeof data[i].show !== "undefined" && !data[i].show){
                            i++;
                        }else {
                            foo[foo.length] = data[i++];
                            cou++;
                        }
                    }

                    while (foo.length < this.limit){
                        foo[foo.length] =  {href: "#", domain: "#",src:`${this.data_.defaultImgBase}`, name: "待定"}
                    }

                    this.contain_row[this.contain_row.length] = foo;
                    if(this.contain_row.length === this.limitRow){
                        break
                    }
                }
            }
            ,getRootPath:function () {
                let href = new URL(window.location.href);
                return href.origin;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .contain_row{
        padding-top: 0.5%;
    }
    .search {
        height: 175px;
        padding-top: 5%;
    }
    .search-wrapper {
        text-align: center;
        margin: auto;
        width: 584px;
    }
    #search2 {
        width: 440px;
        height: 40px;
        border:none;    /*取消默认的边框以设置自定义边框*/
        outline:none;   /*取消浏览器默认的蓝光边框以设置自定义的输入框*/
        font-size: 16px;
        color: rgb(112, 112, 112);
        margin-left: 10px;
        border-image-width: 0px;
        -webkit-box-shadow: none;
    }
    .searchbar {        /*目的是设置自定义边框，比如圆角与阴影*/
        border: rgb(218, 218, 218) solid 0px;
        border-radius: 2em;
        width: 552px;
        height: 42px;
        box-shadow: 0px 0px 5px rgb(212, 212, 212);
        margin: 0 auto;
    }
    #search2, .mcp, .mg {
        vertical-align: middle;
    }
    .search {
        margin: 0;
        height: auto;
    }


    .header_img {
        width: 92%;
        height: 91%;
        background-image: url("../../public/google_logo.svg");
        background-position: center;
        background-size: 100%;
    }

    .logo-box {
        width: 293px;
        height: 99px;
    }
    .el-card{
        border-radius: 50%;
        height: 60px;
        width: 60px;
    }
    .cardContent{
        font-weight: 400;
        font-size: 0.7vw;
    }
    .container_{
        padding-top: 1%;
        width: 116px;
        height: 110px;
        border-radius: 2%;
        cursor: pointer;
    }
    .container_:hover{
        background:rgb(32 33 36 / 10%);
    }
</style>
