(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12d04ebe"],{"1bab":function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r("cebe"),a=r.n(n),i=r("4360"),o=r("1af2"),s=r.n(o);function u(t){var e=a.a.create({baseURL:"https://lianghj.top:8888/api/private/v1",timeout:5e3});return e.interceptors.request.use((function(t){return s.a.start(),t.headers.authorization=i["a"].getters.token,t}),(function(t){})),e.interceptors.response.use((function(t){return s.a.done(),t.data}),(function(t){})),e(t)}},8148:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("数据统计")]),r("el-breadcrumb-item",[t._v("数据报表")])],1),r("el-card",[r("div",{staticStyle:{width:"750px",height:"400px"},attrs:{id:"main"}})])],1)},a=[],i=r("1bab");function o(){return Object(i["a"])({url:"/reports/type/1"})}var s=r("164e"),u=r.n(s),c=r("60bb"),b=r.n(c),p={name:"Report",data:function(){return{options:{title:{text:"用户来源"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#E9EEF3"}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{boundaryGap:!1}],yAxis:[{type:"value"}]}}},mounted:function(){var t=this,e=u.a.init(document.getElementById("main"));o().then((function(r){if(200!==r.meta.status)return t.$message.error("获取数据报表失败!");t.$message.success("获取数据报表成功!");var n=b.a.merge(r.data,t.options);e.setOption(n)}))}},d=p,l=r("2877"),m=Object(l["a"])(d,n,a,!1,null,"56dabbec",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-12d04ebe.6cd63a52.js.map