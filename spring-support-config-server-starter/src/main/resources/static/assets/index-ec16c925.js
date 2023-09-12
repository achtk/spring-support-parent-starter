import k from"./passwordForm-7d0e6b2f.js";import C from"./phoneForm-b7b74ae6.js";import{_ as P,D as i,r as n,o as m,c as p,d as o,t as a,b as t,w as s,F as b,f as N,g as T,e as R,y as E,p as G,k as D}from"./index-a5e257d7.js";import{g as F}from"./Utils-d73ed2bc.js";import"./index-dc38eef1.js";import"./about-94d05d73.js";import"./echarts-87591a23.js";import"./index-509044ac.js";import"./progress-29a26793.js";import"./space-b1d6615a.js";import"./time-5f8305b6.js";import"./ver-7cf59a83.js";import"./welcome-e56924b4.js";const y={components:{passwordForm:k,phoneForm:C},data(){return{config:{lang:this.$TOOL.data.get("APP_LANG")||this.$CONFIG.LANG,dark:this.$TOOL.data.get("APP_DARK")||!1},lang:[{name:"简体中文",value:"zh-cn"},{name:"English",value:"en"}],WechatLoginCode:"",giteeUrl:"",showWechatLogin:!1,showGiteeLogin:!1,isWechatLoginResult:!1}},watch:{"config.dark"(e){e?(document.documentElement.classList.add("dark"),this.$TOOL.data.set("APP_DARK",e)):(document.documentElement.classList.remove("dark"),this.$TOOL.data.remove("APP_DARK"))},"config.lang"(e){this.$i18n.locale=e,this.$TOOL.data.set("APP_LANG",e)}},mounted(){var e=new RegExp("(^|&)msg=([^&]*)(&|$)"),c=((window.location.hash&&window.location.hash.indexOf("?")>-1?window.location.hash.substring(window.location.hash.indexOf("?")):"")||window.location.search).substr(1).match(e);if(c){const r=decodeURIComponent(decodeURIComponent(c[2]));r&&this.$message.error(r)}},created:function(){this.$TOOL.cookie.remove(i.TOKEN),this.$TOOL.data.remove(i.USER_INFO),this.$TOOL.data.remove(i.MENU),this.$TOOL.data.remove(i.PERMISSIONS),this.$TOOL.data.remove(i.DASHBOARD_GRID),this.$TOOL.data.remove(i.GRID),this.$store.commit("clearViewTags"),this.$store.commit("clearKeepLive"),this.$store.commit("clearIframeList")},methods:{getAssetsImage(e){return F(e)},configDark(){this.config.dark=!this.config.dark},configLang(e){this.config.lang=e.value},wechatLogin(){this.showWechatLogin=!0,this.WechatLoginCode="SCUI-823677237287236-"+new Date().getTime(),this.isWechatLoginResult=!1,setTimeout(()=>{this.isWechatLoginResult=!0},3e3)},giteeLogin(){this.showGiteeLogin=!0,this.$API.system.user.loginCode.get({loginCodeType:"gitee"}).then(e=>{if(e.code==="00000")return window.location.href=e.data,!1})}}},u=e=>(G("data-v-2bf2fc29"),e=e(),D(),e),M={class:"login_bg"},x={class:"login_adv",style:{"background-image":"url(img/auth_banner.jpg)"}},S={class:"login_adv__title"},U=u(()=>o("div",{class:"login_adv__mask"},null,-1)),W={class:"login_adv__bottom"},z={class:"login_main"},B={class:"login_config"},V=u(()=>o("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},[o("path",{d:"M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z",fill:"currentColor"}),o("path",{d:"M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"})],-1)),K={class:"login-form"},H={class:"login-header"},j={class:"logo"},Y=["alt","src"];function Z(e,c,r,q,d,_){const f=n("sc-icon-vue"),g=n("el-icon"),w=n("el-icon-plus"),h=n("el-button"),v=n("el-dropdown-item"),L=n("el-dropdown-menu"),O=n("el-dropdown"),A=n("password-form"),$=n("el-tab-pane"),I=n("el-tabs");return m(),p("div",M,[o("div",x,[o("div",S,[o("h2",null,a(e.$CONFIG.APP_NAME),1),o("h4",null,a(e.$t("login.slogan")),1),o("p",null,a(e.$t("login.describe")),1),o("div",null,[o("span",null,[t(g,null,{default:s(()=>[t(f)]),_:1})]),o("span",null,[t(g,{class:"add"},{default:s(()=>[t(w)]),_:1})])])]),U,o("div",W," © "+a(e.$CONFIG.APP_NAME)+" "+a(e.$CONFIG.APP_VER),1)]),o("div",z,[o("div",B,[t(h,{icon:d.config.dark?"el-icon-sunny":"el-icon-moon",circle:"",type:"info",onClick:_.configDark},null,8,["icon","onClick"]),t(O,{trigger:"click",placement:"bottom-end",onCommand:_.configLang},{dropdown:s(()=>[t(L,null,{default:s(()=>[(m(!0),p(b,null,N(d.lang,l=>(m(),T(v,{key:l.value,command:l,class:E({selected:d.config.lang==l.value})},{default:s(()=>[R(a(l.name),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:s(()=>[t(h,{circle:""},{default:s(()=>[V]),_:1})]),_:1},8,["onCommand"])]),o("div",K,[o("div",H,[o("div",j,[o("img",{alt:e.$CONFIG.APP_NAME,src:_.getAssetsImage("logo.png")},null,8,Y),o("label",null,a(e.$CONFIG.APP_NAME),1)])]),t(I,null,{default:s(()=>[t($,{label:e.$t("login.accountLogin"),lazy:""},{default:s(()=>[t(A)]),_:1},8,["label"])]),_:1})])])])}const de=P(y,[["render",Z],["__scopeId","data-v-2bf2fc29"],["__file","Z:/works/vue-support-parent-starter/vue-support-config-starter/src/views/login/index.vue"]]);export{de as default};
