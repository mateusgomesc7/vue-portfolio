(window.webpackJsonp=window.webpackJsonp||[]).push([[15,14],{550:function(t,e,r){"use strict";r.r(e);var n=r(509),o=r(531),c=r(529),l=r(623),d=r(624),f=r(564),h=r(614),j=r(561),_=r(568),v=r(227),m=r(187),y=r(613),w=(r(26),r(7),r(47),r(6),r(11),r(3),r(16),r(8),r(17),r(2)),O=r(71);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(w.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C={name:"CardProject",props:{project:{type:Object,default:function(){}}},data:function(){return{expand:!1,colors:["primary","secondary","yellow darken-2","red","orange"]}},methods:x(x({},Object(O.b)("search",["setFilterTechnologies"])),{},{searchTechnologies:function(t){this.setFilterTechnologies([t]),this.scrollToTop()},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}})},P=r(35),component=Object(P.a)(C,(function(){var t=this,e=t._self._c;return e(_.a,{scopedSlots:t._u([{key:"default",fn:function(r){var _=r.hover;return[e(o.a,{staticClass:"mx-auto transition-swing",attrs:{justify:"center",width:"440","min-height":"400",outlined:"",elevation:_?6:0}},[e(l.a,{attrs:{"hide-delimiter-background":"","show-arrows-on-hover":"","show-arrows":!t.$vuetify.breakpoint.mobile,height:"230"}},t._l(t.project.images,(function(image,i){return e(d.a,{key:i},[e(m.a,{attrs:{src:image,"lazy-src":"https://picsum.photos/id/11/10/6",height:"100%",link:""}})],1)})),1),t._v(" "),e(c.d,{staticClass:"py-1"},[t._v("\n                "+t._s(t.$t(t.project.name))+"\n            ")]),t._v(" "),e(c.c,{staticClass:"pb-2 pr-6"},[e(y.a,{attrs:{"no-gutters":""}},[e(h.a,{ref:"description",staticClass:"secondary-text--text",class:t.expand?"":"text-truncate",attrs:{cols:"11"},on:{click:function(e){t.expand=!0}}},[t._v("\n                        "+t._s(t.$t(t.project.description))+"\n                    ")]),t._v(" "),e(h.a,{attrs:{cols:"1"}},[e(n.a,{staticClass:"ml-2",staticStyle:{top:"-7px"},attrs:{icon:""},on:{click:function(e){t.expand=!t.expand}}},[e(v.a,[t._v("\n                                "+t._s(t.expand?"mdi-chevron-up":"mdi-chevron-down")+"\n                            ")])],1)],1)],1)],1),t._v(" "),e(c.c,{staticClass:"pt-0 pb-2"},t._l(t.project.technologies,(function(r,n){return e(f.a,{key:n,staticClass:"mr-1 mb-1",attrs:{small:""},on:{click:function(e){return t.searchTechnologies(r.id)}}},[t._v("\n                    "+t._s(r.name)+"\n                ")])})),1),t._v(" "),e(j.a),t._v(" "),e(c.a,{staticClass:"px-4"},[e(n.a,{staticClass:"black--text",attrs:{dark:"",depressed:"",color:"accent"}},[e(v.a,{staticClass:"black--text",attrs:{left:""}},[t._v("\n                        mdi-open-in-new\n                    ")]),t._v("\n                    "+t._s(t.$vuetify.breakpoint.width>380?t.$t("components.projects.card_project.btn_open_project"):t.$t("components.projects.card_project.btn_open"))+"\n                ")],1),t._v(" "),e(n.a,{attrs:{text:"",outlined:""}},[e(v.a,{attrs:{left:""}},[t._v("\n                        mdi-github\n                    ")]),t._v("\n                    "+t._s(t.$t("components.projects.card_project.btn_source_code"))+"\n                ")],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports},581:function(t,e,r){"use strict";r.r(e);var n=r(614),o=r(613),c=(r(26),{name:"ListProjects",components:{CardProject:r(550).default},props:{projects:{type:Array,default:function(){return[]}}}}),l=r(35),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{"no-gutters":"",justify:"center",align:"start"}},t._l(t.projects,(function(t){return e(n.a,{key:t.name,staticClass:"mt-6",attrs:{cols:"12",md:"6"}},[e("CardProject",{attrs:{project:t}})],1)})),1)}),[],!1,null,null,null);e.default=component.exports}}]);