(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86b9be3a"],{"125d":function(e,t,n){"use strict";n("88f1")},"13d5":function(e,t,n){"use strict";var o=n("23e7"),r=n("d58f").left,i=n("a640"),a=n("ae40"),s=n("2d00"),u=n("605d"),l=i("reduce"),c=a("reduce",{1:0}),d=!u&&s>79&&s<83;o({target:"Array",proto:!0,forced:!l||!c||d},{reduce:function(e){return r(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"32ed":function(e,t,n){(function(t,n){e.exports=n()})(0,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(2)(n(1),n(3),null,null,null);o.options.__file="/Users/benzhao/Sites/@xunlei/vue-context-menu/src/VueContextMenu.vue",o.esModule&&Object.keys(o.esModule).some((function(e){return"default"!==e&&"__"!==e.substr(0,2)}))&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] VueContextMenu.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"context-menu",data:function(){return{triggerShowFn:function(){},triggerHideFn:function(){},x:null,y:null,style:{},binded:!1}},props:{target:null,show:Boolean},mounted:function(){this.bindEvents()},watch:{show:function(e){e?this.bindHideEvents():this.unbindHideEvents()},target:function(e){this.bindEvents()}},methods:{bindEvents:function(){var e=this;this.$nextTick((function(){e.target&&!e.binded&&(e.triggerShowFn=e.contextMenuHandler.bind(e),e.target.addEventListener("contextmenu",e.triggerShowFn),e.binded=!0)}))},unbindEvents:function(){this.target&&this.target.removeEventListener("contextmenu",this.triggerShowFn)},bindHideEvents:function(){this.triggerHideFn=this.clickDocumentHandler.bind(this),document.addEventListener("mousedown",this.triggerHideFn),document.addEventListener("mousewheel",this.triggerHideFn)},unbindHideEvents:function(){document.removeEventListener("mousedown",this.triggerHideFn),document.removeEventListener("mousewheel",this.triggerHideFn)},clickDocumentHandler:function(e){this.$emit("update:show",!1)},contextMenuHandler:function(e){this.x=e.clientX,this.y=e.clientY,this.layout(),this.$emit("update:show",!0),e.preventDefault()},layout:function(){this.style={left:this.x+"px",top:this.y+"px"}}}}},function(e,t){e.exports=function(e,t,n,o,r){var i,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,a=e.default);var u,l="function"===typeof a?a.options:a;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),o&&(l._scopeId=o),r?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=u):n&&(u=n),u){var c=l.functional,d=c?l.render:l.beforeCreate;c?l.render=function(e,t){return u.call(t),d(e,t)}:l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:i,exports:a,options:l}}},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticStyle:{display:"block"},style:e.style,on:{mousedown:function(e){e.stopPropagation()},contextmenu:function(e){e.preventDefault()}}},[e._t("default")],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){
/**
  * vue-context-menu
  * (c) 2017 赵兵
  * @license MIT
  */
const o=n(0),r={install:function(e,t){e.component(o.name,o)}};r.component=o,"undefined"!==typeof window&&window.Vue&&window.Vue.use(r),e.exports=r}])}))},3391:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-dialog",{attrs:{title:"保存群组",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{model:{value:e.nodeData,callback:function(t){e.nodeData=t},expression:"nodeData"}},[n("el-form-item",{attrs:{label:"群组ID","label-width":e.formLabelWidth}},[n("el-input",{attrs:{autocomplete:"off",readonly:"true"},model:{value:e.nodeData.groupID,callback:function(t){e.$set(e.nodeData,"groupID",t)},expression:"nodeData.groupID"}})],1),n("el-form-item",{attrs:{label:"群组名称","label-width":e.formLabelWidth}},[n("el-input",{attrs:{autocomplete:"off"},on:{blur:function(t){return e.getPinyin()}},model:{value:e.nodeData.groupName,callback:function(t){e.$set(e.nodeData,"groupName",t)},expression:"nodeData.groupName"}})],1),n("el-form-item",{attrs:{label:"群组简拼","label-width":e.formLabelWidth}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.nodeData.nameJP,callback:function(t){e.$set(e.nodeData,"nameJP",t)},expression:"nodeData.nameJP"}})],1),n("el-form-item",{attrs:{label:"值班电话","label-width":e.formLabelWidth}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.formPars.officeTel,callback:function(t){e.$set(e.formPars,"officeTel",t)},expression:"formPars.officeTel"}})],1),n("el-form-item",{attrs:{label:"上级群组","label-width":e.formLabelWidth}},[n("el-cascader",{attrs:{placeholder:"上级群组",options:e.data,props:{label:"groupName",value:"groupID",children:"children",checkStrictly:!0,emitPath:!1},filterable:""},model:{value:e.nodeData.parentID,callback:function(t){e.$set(e.nodeData,"parentID",t)},expression:"nodeData.parentID"}})],1),n("el-form-item",{attrs:{label:"排序号","label-width":e.formLabelWidth}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.nodeData.index,callback:function(t){e.$set(e.nodeData,"index",t)},expression:"nodeData.index"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!1,e.saveGroup()}}},[e._v("确 定")])],1)],1),n("div",{attrs:{id:"dataPage"}},[n("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),n("el-tree",{attrs:{data:e.data,id:"el-tree",props:e.defaultProps,"filter-node-method":e.filterNode},on:{"node-click":e.handleNodeClick}}),n("vue-context-menu",{staticClass:"right-menu",attrs:{target:e.contextMenuTarget,show:e.contextMenuVisible},on:{"update:show":function(t){return e.contextMenuVisible=t}}},[n("a",{attrs:{href:"javascript:;"},on:{click:e.createDatabaseOrTable}},[e._v("新建群组")]),n("a",{attrs:{href:"javascript:;"},on:{click:e.deleteDatabaseOrTable}},[e._v("删除群组")]),n("a",{attrs:{href:"javascript:;"},on:{click:e.modifyGroup}},[e._v("修改群组")])])],1)],1)},r=[],i=(n("4de4"),n("4160"),n("c975"),n("d81d"),n("13d5"),n("159b"),n("32ed")),a=n("7c15"),s={name:"DatabasesContent",components:{"vue-context-menu":i["component"]},watch:{filterText:function(e){this.$refs.tree.filter(e)}},data:function(){return{contextMenuTarget:null,contextMenuVisible:!1,dialogFormVisible:!1,filterText:"",pars:{codeID:77,groupName:void 0,parentID:void 0,groupID:void 0,pageIndex:void 0,pageSize:1e3},formPars:{groupName:void 0,nameJP:"",parentID:void 0,groupID:void 0,index:0,officeTel:"",codeID:77},formLabelWidth:"120px",nodeData:{},data:[],defaultProps:{children:"children",label:"groupName"}}},created:function(){this.getGroups()},methods:{initRoot:function(){this.formPars.groupID="",this.formPars.groupName="长龙街道",this.formPars.nameJP="",this.formPars.parentID="-1",this.formPars.index=0,Object(a["fc"])(this.formPars).then((function(e){}))},saveGroup:function(){var e=this;this.formPars.groupID=this.nodeData.groupID,this.formPars.groupName=this.nodeData.groupName,this.formPars.nameJP=this.nodeData.nameJP,this.formPars.parentID=this.nodeData.parentID,this.formPars.index=this.nodeData.index,Object(a["fc"])(this.formPars).then((function(t){console.log(t),1==t.status?(e.formPars.groupID=t.data,e.$message({message:"保存群组成功!",type:"success"}),e.getGroups()):e.$message({message:"保存群组失败!",type:"error"}),e.getGroups()}))},getGroups:function(){var e=this;Object(a["Wb"])(this.pars).then((function(t){console.log(t);var n=t.data,o=n.reduce((function(e,t){return e[t.groupID]=t,t.children=[],e}),{}),r=n.filter((function(e){return o[e.parentID]&&o[e.parentID].children.push(e),"-1"==e.parentID}));e.data=r,console.log(e.data)}))},filterNode:function(e,t){return!e||(console.log(e),console.log(t),-1!==t.label.indexOf(e))},handleNodeClick:function(e){var t=this;this.nodeData=JSON.parse(JSON.stringify(e));var n=[];n.push(this.nodeData.groupID);var o={groupID:n};console.log(o),Object(a["hb"])(o).then((function(e){t.formPars.officeTel="",e.data.data.map((function(e,n){return 1==e.duty&&(t.formPars.officeTel+=e.mobile+","),void 0===e}))}))},createDatabaseOrTable:function(){this.contextMenuVisible=!1,this.nodeData.groupID="",this.nodeData.groupName="",this.nodeData.nameJP="",this.nodeData.index=0,console.log("create "+this.menuLabel),this.dialogFormVisible=!0},modifyGroup:function(){this.contextMenuVisible=!1,console.log("create "+this.menuLabel),this.dialogFormVisible=!0},getPinyin:function(){var e=this,t={chineseText:this.nodeData.groupName};Object(a["cb"])(t).then((function(t){e.nodeData.nameJP=t}))},deleteDatabaseOrTable:function(){var e=this;this.contextMenuVisible=!1,this.$confirm("删除后将不能恢复,是否继续?","提示",{confirmButtonText:"继续",cancelButtonText:"取消",type:"warning"}).then((function(){var t=[e.nodeData.groupID],n={groupIds:t};Object(a["Ub"])(n).then((function(t){console.log(t),1==t.status?(e.$message({message:"群组删除成功!",type:"success"}),e.getGroups()):e.$message({message:"群组删除失败!",type:"error"})}))}))},attribute:function(){this.contextMenuVisible=!1,console.log("show attribute "+this.menuLabel)},exportDatabaseOrTable:function(){this.contextMenuVisible=!1,console.log("export "+this.menuLabel)}},mounted:function(){var e=this;this.getGroups(),this.$nextTick((function(){e.contextMenuTarget=document.querySelector("#el-tree");var t=document.querySelectorAll('#el-tree [role="treeitem"]');t.forEach((function(e){e.addEventListener("contextmenu",(function(e){e.target.click()}))}))}))},computed:{menuLabel:function(){return null==this.nodeData.children?"表":"数据库"}}},u=s,l=(n("125d"),n("2877")),c=Object(l["a"])(u,o,r,!1,null,null,null);t["default"]=c.exports},"88f1":function(e,t,n){},d58f:function(e,t,n){var o=n("1c0b"),r=n("7b0b"),i=n("44ad"),a=n("50c4"),s=function(e){return function(t,n,s,u){o(n);var l=r(t),c=i(l),d=a(l.length),f=e?d-1:0,p=e?-1:1;if(s<2)while(1){if(f in c){u=c[f],f+=p;break}if(f+=p,e?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;e?f>=0:d>f;f+=p)f in c&&(u=n(u,c[f],f,l));return u}};e.exports={left:s(!1),right:s(!0)}}}]);