(function(e){function t(t){for(var o,a,c=t[0],u=t[1],f=t[2],s=0,d=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,f||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},a={app:0},r={app:0},i=[];function c(e){return u.p+"js/"+({pdfjsWorker:"pdfjsWorker"}[e]||e)+"."+{"chunk-0c54f1f8":"61d79161","chunk-13efc44e":"ef8acfbe","chunk-2d0ba499":"c978ce6f","chunk-2d0d9fb3":"70bbfe71","chunk-722028de":"37db836c","chunk-7cacb406":"999b0d51",pdfjsWorker:"2fab7c1c"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0c54f1f8":1,"chunk-13efc44e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({pdfjsWorker:"pdfjsWorker"}[e]||e)+"."+{"chunk-0c54f1f8":"7cdca6f8","chunk-13efc44e":"ab4f5571","chunk-2d0ba499":"31d6cfe0","chunk-2d0d9fb3":"31d6cfe0","chunk-722028de":"31d6cfe0","chunk-7cacb406":"31d6cfe0",pdfjsWorker:"31d6cfe0"}[e]+".css",r=u.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var f=i[c],s=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(s===o||s===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){f=d[c],s=f.getAttribute("data-href");if(s===o||s===r)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[e],l.parentNode.removeChild(l),n(i)},l.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(l)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=i);var f,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var d=new Error;f=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}r[e]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:s})}),12e4);s.onerror=s.onload=f,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],s=f.push.bind(f);f.push=t,f=f.slice();for(var d=0;d<f.length;d++)t(f[d]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("TransverMenu")],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"body"},[n("div",{staticClass:"navigation"},[n("ul",{style:e.ulWidth},[e._l(e.liData,(function(t,o){return n("li",{key:o,class:t.class,on:{click:function(t){return e.activeLink(o,this)}}},[n("a",{attrs:{href:"#"}},[n("span",{staticClass:"icon"},[n("i",{class:t.icon})]),n("span",{staticClass:"text"},[e._v(e._s(t.name))])])])})),n("div",{staticClass:"indicator",style:e.indicatorStyle})],2)])])},c=[],u=(n("159b"),n("7d24")),f={name:"TransverMenu",data:function(){return{liData:[],indicatorStyle:"transform: translateX(calc(70px * 0))",ulWidth:"width:350px"}},props:{setStr:String},created:function(){var e=this;this.$nextTick((function(){e.liData=u["a"]._data.liData,e.ulWidth="width:".concat(70*e.liData.length,"px")})),this.$router.push({path:"/"})},methods:{activeLink:function(e){var t=document.querySelectorAll(".navigation li");t.forEach((function(e,t){e.classList.remove("active")})),this.indicatorStyle="transform: translateX(calc(70px * ".concat(e,"))"),t[e].classList.add("active"),this.$router.push({path:this.liData[e].router||"nothing"})}}},s=f,d=(n("d67f"),n("2877")),l=Object(d["a"])(s,i,c,!1,null,"334f0167",null),m=l.exports,h={name:"app",components:{TransverMenu:m},created:function(){},methods:{}},p=h,w=(n("034f"),Object(d["a"])(p,a,r,!1,null,null,null)),A=w.exports,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));o["default"].use(v["a"]);var k=[{path:"/",name:"Home",component:function(){return n.e("chunk-0c54f1f8").then(n.bind(null,"f4dda"))}},{path:"/nes",name:"Nes",component:function(){return n.e("chunk-722028de").then(n.bind(null,"0329"))}},{path:"/nothing",name:"Nothing",component:function(){return n.e("chunk-2d0ba499").then(n.bind(null,"3721"))}},{path:"/date",name:"Date",component:function(){return n.e("chunk-13efc44e").then(n.bind(null,"8a72"))}},{path:"/aboutMe",name:"Aboutme",component:function(){return n.e("chunk-7cacb406").then(n.bind(null,"59e7"))}},{path:"/videoTree",name:"videoTree",component:function(){return n.e("chunk-2d0d9fb3").then(n.bind(null,"6a3e"))}}],b=new v["a"]({routes:k}),g=b,y=n("5c96"),P=n.n(y);n("0fae");o["default"].use(P.a);n("af87"),n("77ed");var x=n("e5d9"),q=n("1157"),H=n.n(q),V=n("2f62");window.$=H.a,o["default"].use(x["a"]),o["default"].use(H.a),o["default"].config.productionTip=!1,o["default"].use(V["a"]);var j=new V["a"].Store({state:{count:0},mutations:{increment:function(e){e.count++}}});new o["default"]({router:g,store:j,render:function(e){return e(A)}}).$mount("#app")},"59f0":function(e,t,n){},"7d24":function(e,t,n){"use strict";var o={liData:[{index:1,name:"MAIN",icon:"el-icon-house",class:"active",router:"/"},{index:2,name:"FC",icon:"el-icon-coordinate",router:"nes"},{index:3,name:"ME",icon:"el-icon-user",router:"aboutMe"},{index:4,name:"date",icon:"el-icon-date",router:"date"},{index:5,name:"video",icon:"el-icon-video-camera-solid",router:"videoTree"}],defaultImgBase:"data:image/jpg;base64,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",defaultImg:"",defaulticon:"https://www.google.com/s2/favicons?domain=",defaulticon2:"https://api.iowen.cn/favicon/",webs:[{href:"https://www.163.com/",name:"网易",show:!1,domain:"www.163.com"},{href:"https://v2hx.github.io/",domain:"v2hx.github.io",name:"红杏"},{href:"https://tool.chinaz.com/tools/imgtobase",domain:"tool.chinaz.com",name:"站长工具"},{href:"https://v4speed.com/#/login",domain:"v4speed.com",name:"v4speed"},{href:"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",domain:"mail.google.com",name:"Gmail"},{href:"https://outlook.live.com/mail/0/inbox",domain:"outlook.live.com",name:"Outlook"},{href:"https://mega.nz/folder/6wxFGQ6B#KkTVZbNNJDLyDesnBtE4Bw",domain:"mega.nz",name:"dulelink"},{href:"https://www.yikm.net/",domain:"www.yikm.net",name:"fc"},{href:"https://www.manhuacat.com/",domain:"www.manhuacat.com",name:"漫画猫"},{href:"https://switchtools.sshnuke.net/",domain:"switchtools.sshnuke.net",name:"toolsForSw"},{href:"https://darthsternie.net/switch-firmwares/",domain:"darthsternie.net",name:"swFirm"},{href:"http://gbtgame.ys168.com/",domain:"gbtgame.ys168.com",name:"GBT"},{href:"https://www.google.com/sky/",domain:"www.google.com/sky",name:"GoogleSky"},{href:"https://www.dandanzan.top/",domain:"www.dandanzan.top",name:"蛋蛋赞"},{href:"http://www.8hyyw.com/",domain:"www.8hyyw.com",show:!1,name:"8号影院"},{href:"https://www.555dy.info/",domain:"www.555dy.info",name:"555影院"},{href:"http://www.tvyan.com/",name:"电视眼",domain:"www.tvyan.com/"},{href:"http://dyxs8.com/",name:"电影先生",domain:"dyxs8.com"},{href:"https://axutongxue.com/",name:"储物间",domain:"axutongxue.com"},{href:"http://yck.mumuceo.com/",name:"阅读源",domain:"yck.mumuceo.com",show:!1},{href:"https://www.cupfox.com/",name:"茶杯狐",domain:"www.cupfox.com"},{href:"https://startpage.com/sp/search/",name:"startpage",domain:"startpage.com"},{href:"https://dsxys.com/",name:"大师兄影视",domain:"dsxys.com"}],websH:[{href:"https://thehentaiworld.com/",name:"hword",domain:"thehentaiworld.com"},{href:"https://rule34video.com/",name:"rule34",domain:"rule34video.com"},{href:"https://18comic.vip/",name:"禁漫天堂",domain:"18comic.vip"},{href:"https://pornhub.com/",name:"pornhub",domain:"pornhub.com"},{href:"https://www.xvideos.com/",name:"xvideos",domain:"www.xvideos.com"},{href:"https://www.whichav.video/zh-hans/1209.html",name:"导航",domain:"www.whichav.video"}],searchUrl:{google:"https://www.google.com/search?q=",baidu:"https://www.baidu.com/s?wd=",duck:"https://duckduckgo.com/?q="}};t["a"]={_data:o}},"85ec":function(e,t,n){},d67f:function(e,t,n){"use strict";n("59f0")}});