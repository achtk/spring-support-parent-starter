import{s as P}from"./index-49c4323e.js";import{_ as x,r as c,o as r,g as f,w as o,b as i,d as V,e as d,t as g,c as y,f as A,h as B,F}from"./index-a5e257d7.js";const R={name:"actuator-logger",components:{scSelectFilter:P},data(){return{selectedValues:{},selectedValuesItem:[{title:"日志级别",key:"levels",multiple:!1,options:[]}],form:{pageSize:10},dialogVisible:0,row:{},data:[],loggers:{},title:"",total:0,apiCommand:this.$API.config.actuator.command}},methods:{filter(e){return!this.selectedValues.levels||this.selectedValues.levels==((e==null?void 0:e.effectiveLevel)||(e==null?void 0:e.configuredLevel))},change(e){this.selectedValues=e,this.$refs.table.reload()},changeLevels(e,s){this.apiCommand.get({dataId:e.appId,command:"loggers/"+e.name,method:"POST",param:JSON.stringify({configuredLevel:s.value})}).then(u=>{if(u.code==="00000")return this.$message.success("操作成功"),e.effectiveLevel=s.value,e.configuredLevel=s.value,0;this.$message.error(u.msg)})},doLogger(){this.total=Object.keys(this.loggers).length,this.data.length=0;for(const e of Object.keys(this.loggers)){let s=this.loggers[e];this.data.push({name:e,appId:this.row.appId,configApplicationName:this.row.appName,configProfile:this.row.appProfile||"",configuredLevel:s.configuredLevel,effectiveLevel:s.effectiveLevel,filters:!0})}},open(e){this.title=e.appName+"日志配置",this.dialogVisible=!0,this.row=e,this.loggers.length=0,this.data.length=0,this.apiCommand.get({dataId:e.appId,command:"loggers",method:"get"}).then(s=>{if(s.code==="00000"&&(this.loggers=s.data.loggers,this.doLogger(),this.selectedValuesItem[0].options.length==0)){this.selectedValuesItem[0].options.push({label:"全部",value:""});const u=s.data.levels;for(const w of Object.keys(u)){let n=u[w];this.selectedValuesItem[0].options.push({label:n,value:n})}}})}}},z={class:"left-panel"},E=V("br",null,null,-1);function j(e,s,u,w,n,m){const k=c("sc-select-filter"),I=c("el-header"),h=c("el-table-column"),p=c("el-tag"),C=c("el-button"),N=c("scTable"),O=c("el-main"),S=c("el-container"),T=c("el-dialog");return r(),f(T,{modelValue:n.dialogVisible,"onUpdate:modelValue":s[0]||(s[0]=t=>n.dialogVisible=t),"destroy-on-close":!0,"close-on-click-modal":!1,title:n.title,width:"90%",draggable:""},{default:o(()=>[i(S,null,{default:o(()=>[i(I,null,{default:o(()=>[V("div",z,[i(k,{data:n.selectedValuesItem,"selected-values":n.selectedValues,"label-width":80,onOnChange:m.change},null,8,["data","selected-values","onOnChange"]),E])]),_:1}),i(O,{class:"nopadding"},{default:o(()=>[i(N,{ref:"table",filter:m.filter,dataTotal:n.total,pageSize:n.form.pageSize,data:n.data,stripe:""},{default:o(()=>[i(h,{label:"应用名称",prop:"configApplicationName",width:"150"}),i(h,{label:"环境",prop:"configProfile",width:"150"},{default:o(t=>[i(p,null,{default:o(()=>{var a;return[d(g((a=t.row)==null?void 0:a.configProfile),1)]}),_:2},1024)]),_:1}),i(h,{label:"名称",prop:"name","show-overflow-tooltip":""}),i(h,{label:"日志等级",prop:"effectiveLevel"},{default:o(t=>{var a,v,_,L,b;return[((a=t.row)==null?void 0:a.effectiveLevel)=="DEBUG"?(r(),f(p,{key:0,type:"info"},{default:o(()=>{var l;return[d(g((l=t.row)==null?void 0:l.effectiveLevel),1)]}),_:2},1024)):((v=t.row)==null?void 0:v.effectiveLevel)=="OFF"?(r(),f(p,{key:1,type:"info"},{default:o(()=>{var l;return[d(g((l=t.row)==null?void 0:l.effectiveLevel),1)]}),_:2},1024)):((_=t.row)==null?void 0:_.effectiveLevel)=="TRACE"?(r(),f(p,{key:2,type:"info"},{default:o(()=>{var l;return[d(g((l=t.row)==null?void 0:l.effectiveLevel),1)]}),_:2},1024)):((L=t.row)==null?void 0:L.effectiveLevel)=="WARN"?(r(),f(p,{key:3,type:"warning"},{default:o(()=>{var l;return[d(g((l=t.row)==null?void 0:l.effectiveLevel),1)]}),_:2},1024)):((b=t.row)==null?void 0:b.effectiveLevel)=="ERROR"?(r(),f(p,{key:4,type:"danger"},{default:o(()=>{var l;return[d(g((l=t.row)==null?void 0:l.effectiveLevel),1)]}),_:2},1024)):(r(),f(p,{key:5},{default:o(()=>{var l;return[d(g((l=t.row)==null?void 0:l.effectiveLevel),1)]}),_:2},1024))]}),_:1}),i(h,{label:"配置等级",prop:"configuredLevel","show-overflow-tooltip":""}),i(h,{label:"操作",prop:"",width:"650"},{default:o(t=>[(r(!0),y(F,null,A(n.selectedValuesItem[0].options,a=>{var v;return r(),y("span",null,[a!=null&&a.value?(r(),f(C,{key:0,onClick:_=>m.changeLevels(t.row,a),type:(a==null?void 0:a.value)==((v=t.row)==null?void 0:v.effectiveLevel)?"primary":"default"},{default:o(()=>[d(g(a.value),1)]),_:2},1032,["onClick","type"])):B("v-if",!0)])}),256))]),_:1})]),_:1},8,["filter","dataTotal","pageSize","data"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])}const G=x(R,[["render",j],["__file","Z:/works/vue-support-parent-starter/vue-support-config-starter/src/views/config/actuator/logger.vue"]]);export{G as default};
