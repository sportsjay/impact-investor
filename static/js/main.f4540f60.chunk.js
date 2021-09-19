(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{58:function(e){e.exports=JSON.parse('{"a":[{"id":0,"name":"C4D Partners","HQ":"Netherlands","about":"Dutch impact fund manager with investment teams in India, Indonesia and the Philippines","category":"Pure-Play Impact Investor","series":["Seed","Series A"],"impact-areas":["Agriculture","Education","Fintech","Food","Healthcare","Consumer Goods","Energy & Renewables"],"target-region":["India","Indonesia","Philippines"],"website":"https://www.c4dpartners.com/"},{"id":1,"name":"Artesian","HQ":"Australia","about":"Global alternative investment management firm with ESG focus","category":"Pure-Play Impact Investor","series":["Seed","Series A"],"impact-areas":["Energy & Renewables","Mobility","Sustainability","Cleantech","Robotics","AI"],"target-region":["UK","USA","APAC"],"website":"https://www.artesianinvest.com/"},{"id":2,"name":"Patamar Capital","HQ":"XX","about":"Venture capital firm investing in early-stage businesses serving the mass market in South and Southeast Asia.","category":"Venture Capital","series":["Seed","Series A","Series B","Series C"],"impact-areas":["Fintech","eCommerce","Healthcare","Education","Agriculture"],"target-region":["India","Indonesia","Philippines","Vietnam"],"website":"http://patamar.com/"}]}')},71:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(11),o=n.n(r),c=(n(71),n(36)),s=n(12),l=n(29),d=function e(t){var n=t.path,i=t.pathName,a=t.isPrivate,r=t.page;Object(l.a)(this,e),this.path=void 0,this.pathName=void 0,this.isPrivate=void 0,this.page=void 0,this.path=n,this.pathName=i,this.isPrivate=a,this.page=r},b=n(14),h=n(25),j=n(53),u=n(21),p=n(18),g=n(119),m=n(113),x=n(120),f=n(111),O=n(114),v=n(115),w=n(116),y=n(117),C=n(107),N=n(2);function S(e){A();return Object(N.jsx)(C.a,Object(h.a)(Object(h.a)({},e),{},{children:e.children}))}function k(e){B();return Object(N.jsx)(C.a,Object(h.a)(Object(h.a)({},e),{},{children:e.children}))}var A=Object(f.a)((function(e){return{root:{}}})),B=Object(f.a)((function(e){return{root:{}}})),I=function e(){Object(l.a)(this,e)};I.white="#FFFFFF",I.blue1="#00224B",I.blue2="#003297",I.blue3="#D4DBE4",I.black1="#000000",I.red1="#CE1127",I.gray1="#F2F2F2",I.gray2="#202020",I.orange1="#ff8400";var F=n(58),H=n(59),P=function(){function e(t){var n=Object.assign({},t);Object(l.a)(this,e),this.id=void 0,this.name=void 0,this.HQ=void 0,this.about=void 0,this.category=void 0,this.series=void 0,this.impactAreas=void 0,this.targetRegions=void 0,this.website=void 0,this.id=n.id,this.name=n.name,this.HQ=n.HQ,this.about=n.about,this.category=n.category,this.series=n.series,this.impactAreas=n.impactAreas,this.targetRegions=n.targetRegions,this.website=n.website}return Object(H.a)(e,[{key:"generateFilterArray",value:function(){var e=this;return Object.keys(this).map((function(t,n){var i=Array.isArray(e[t])?Object(u.a)(e[t]):[e[t]];return{id:n.toString(),title:t,filters:i}}))}}]),e}(),z=n(112);function D(e){var t=W(),n=e.model,i=e.onClick;return Object(N.jsxs)("div",{className:t.root,onClick:i,children:[Object(N.jsx)("header",{className:t.header,children:Object(N.jsx)("img",{src:"",alt:"none"})}),Object(N.jsx)(k,{className:t.headerText,children:n.name}),Object(N.jsx)("section",{className:t.more,children:Object(N.jsx)(z.a,{})})]})}var W=Object(f.a)((function(e){return{root:Object(b.a)({minHeight:140,minWidth:200,borderRadius:20,width:"max-content",backgroundColor:I.blue3,display:"flex",flexDirection:"column",transition:"ease-in 0.04s",cursor:"pointer",boxShadow:"rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px","&:hover":{transform:"scale(1.02)"},"&:active":{filter:"brightness(0.5)"}},e.breakpoints.down("sm"),{width:"80%",maxWidth:320,height:"max-content"}),header:{padding:"".concat(e.spacing(4),"px ").concat(e.spacing(1),"px ").concat(e.spacing(2),"px ").concat(e.spacing(1),"px"),width:"100%",display:"flex",justifyContent:"center",marginBottom:e.spacing(2),boxSizing:"border-box"},headerText:{fontSize:"16pt",fontWeight:"bold",textAlign:"center",backgroundColor:I.blue2,color:I.white},more:{width:"100%",display:"flex",justifyContent:"flex-end",padding:e.spacing(1),boxSizing:"border-box"}}}));function R(){var e=L(),t=Object(i.useState)([]),n=Object(p.a)(t,2),a=n[0],r=n[1],o=Object(i.useState)([]),c=Object(p.a)(o,2),s=c[0],l=c[1],d=Object(i.useState)(""),b=Object(p.a)(d,2),f=b[0],v=b[1],w=[],y=Object(i.useState)(w),C=Object(p.a)(y,2),S=C[0],A=C[1],B=Object(i.useState)(w),H=Object(p.a)(B,2),z=H[0],W=H[1],R=Object(i.useState)(),M=Object(p.a)(R,2),T=M[0],J=M[1],U=new Set(["about","website","id"]);function $(e){var t=new Set(Object(u.a)(a)),n=JSON.stringify(e);t.has(n)||t.add(n),r(Array.from(t))}return Object(i.useEffect)((function(){!function(){var e=[],t=F.a.map((function(t){var n=new P({id:t.id.toString(),HQ:t.HQ,name:t.name,series:t.series,impactAreas:t["impact-areas"],targetRegions:t["target-region"],website:t.website,about:t.about,category:t.category});return e.push(n),n.generateFilterArray()})).reduce((function(e,t){return e.map((function(e,n){return{id:e.id,title:e.title,filters:Array.from(new Set([].concat(Object(u.a)(e.filters),Object(u.a)(t[n].filters))))}}))}));A(e),W(e),l(t)}()}),[]),Object(N.jsx)(N.Fragment,{children:void 0===T?Object(N.jsxs)("div",{className:e.root,children:[Object(N.jsxs)("div",{className:e.searchBarContainer,children:[Object(N.jsx)(g.a,{className:e.searchBar,variant:"outlined",placeholder:"Search for Impact Investors...",onChange:function(e){return t=e.target.value,void v(t);var t}}),Object(N.jsx)("div",{className:e.searchBarButton,children:Object(N.jsx)(m.a,{onClick:function(){A(z.reduce((function(e,t){return t.name.toLowerCase().includes(f.toLowerCase())?[].concat(Object(u.a)(e),[t]):e}),[]))},style:{backgroundColor:I.blue1},children:Object(N.jsx)(O.a,{style:{color:I.white}})})})]}),Object(N.jsxs)("div",{className:e.filterHeader,children:[Object(N.jsx)(k,{children:"Filter By: "}),a.map((function(e){var t=JSON.parse(e);return Object(N.jsx)(x.a,{label:t.filter,onDelete:function(){return function(e){var t=new Set(Object(u.a)(a)),n=JSON.stringify(e);t.delete(n),r(Array.from(t))}(t)}},t.filter)})),Object(N.jsx)(x.a,{icon:Object(N.jsx)(O.a,{}),label:"Apply Filter",color:"primary",onClick:function(){if(0===a.length)A(z);else{var e=z.reduce((function(e,t){var n,i=new Set(Object.keys(t).flatMap((function(e){return t[e]}))),r=!1,o=Object(j.a)(a);try{for(o.s();!(n=o.n()).done;){var c=n.value,s=JSON.parse(c).filter;i.has(s)&&(r=!0)}}catch(l){o.e(l)}finally{o.f()}return r?[].concat(Object(u.a)(e),[t]):e}),[]);A(e)}}})]}),Object(N.jsx)("section",{className:e.filterContainer,children:s.map((function(e){return U.has(e.title)?Object(N.jsx)(N.Fragment,{}):Object(N.jsx)(Q,Object(h.a)(Object(h.a)({},e),{},{onAddFilterFunction:$}),e.id)}))}),Object(N.jsx)("div",{style:{marginBottom:10},children:Object(N.jsx)(k,{children:"Results: "})}),Object(N.jsx)("div",{className:e.investorContainer,children:S.map((function(e){return Object(N.jsx)(D,{model:e,onClick:function(){J(e)}},e.id)}))})]}):Object(N.jsx)(E,{model:T,getBack:function(){J(void 0)}})})}var L=Object(f.a)((function(e){return{root:{padding:e.spacing(2),boxSizing:"border-box"},searchBarContainer:{marginBottom:e.spacing(2),display:"flex",alignItems:"center",width:"100%"},searchBarButton:{flex:1,display:"flex",justifyContent:"center",minWidth:"max-content"},searchBar:{width:"100%",flex:10,marginRight:e.spacing(2)},filterHeader:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:10,marginBottom:e.spacing(2)},filterContainer:{display:"flex",flexWrap:"wrap",gap:e.spacing(4),marginBottom:e.spacing(2)},investorContainer:Object(b.a)({display:"flex",flexWrap:"wrap",gap:e.spacing(4)},e.breakpoints.down("sm"),{justifyContent:"center",alignItems:"center"})}}));function E(e){var t=M(),n=e.model,a=e.getBack,r=Object(i.useState)(),o=Object(p.a)(r,2),c=o[0],s=o[1];return Object(i.useEffect)((function(){!function(){var e=Object.keys(n).map((function(e){return[e.replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase(),Array.isArray(n[e])?n[e].join(", "):n[e]]}));s(e)}()}),[]),Object(N.jsxs)("div",{className:t.root,children:[Object(N.jsxs)("header",{className:t.header,children:[Object(N.jsxs)("span",{className:t.headerLink,onClick:a,children:[Object(N.jsx)(v.a,{}),Object(N.jsx)(S,{variant:"subtitle1",style:{fontWeight:700},children:"Back to Impact Investor Menu"})]}),Object(N.jsxs)(k,{children:["Investor Profile, ",Object(N.jsx)("span",{children:n.name})]})]}),Object(N.jsxs)("div",{className:t.content,children:[Object(N.jsx)("div",{className:t.dataContainer,children:null===c||void 0===c?void 0:c.map((function(e){return Object(N.jsxs)("div",{className:t.row,children:[Object(N.jsx)(S,{className:t.rowHeader,children:e[0]}),Object(N.jsx)(S,{className:t.rowContent,children:e[1]})]})}))}),Object(N.jsx)("section",{className:t.logoWrapper,children:Object(N.jsx)("div",{className:t.logo,children:"Logo"})})]})]})}var M=Object(f.a)((function(e){return{root:{padding:e.spacing(2),boxSizing:"border-box",width:"100%",height:"max-content"},header:{marginBottom:e.spacing(2)},headerLink:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",cursor:"pointer",width:"max-content",transition:"ease-out 0.1s",paddingRight:e.spacing(2),marginBottom:e.spacing(2),"&:hover":{backgroundColor:I.gray1}},content:Object(b.a)({display:"flex",flexDirection:"row",width:"100%"},e.breakpoints.down("md"),{flexDirection:"column-reverse"}),dataContainer:{display:"flex",flexDirection:"column",flex:3},row:{display:"flex",flexDirection:"row",width:"100%"},rowHeader:Object(b.a)({minWidth:200,backgroundColor:I.blue1,color:I.white,padding:e.spacing(1)},e.breakpoints.down("sm"),{minWidth:120}),rowContent:{minWidth:200,width:"100%",padding:e.spacing(1),borderBottom:"1px solid ".concat(I.black1)},logoWrapper:{flex:1,padding:e.spacing(2)},logo:{backgroundColor:I.gray1,width:"100%",height:"100%",minHeight:100,display:"flex",justifyContent:"center",alignItems:"center"}}}));function Q(e){var t=T(),n=Object(i.useState)(!1),a=Object(p.a)(n,2),r=a[0],o=a[1],c=e.title,s=e.filters,l=e.id,d=e.onAddFilterFunction;return Object(N.jsxs)("div",{className:t.root,onMouseEnter:function(){o(!0)},onMouseLeave:function(){o(!1)},children:[Object(N.jsxs)("header",{id:"toggle-header-".concat(l),className:t.header,onClick:function(){o(!r)},children:[Object(N.jsx)(S,{style:{color:I.white},children:c.replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}),Object(N.jsx)("span",{children:r?Object(N.jsx)(w.a,{style:{color:I.white}}):Object(N.jsx)(y.a,{style:{color:I.white}})})]}),r?Object(N.jsx)("section",{className:t.filters,children:s.map((function(e){var n={filter:e,title:c};return Object(N.jsx)("span",{className:t.filter,onClick:function(){return d(n)},children:Object(N.jsx)(S,{style:{color:I.white},children:e})})}))}):Object(N.jsx)(N.Fragment,{})]})}Q.defaultProps={id:"1",title:"Filter",filters:["none","none"]};var T=Object(f.a)((function(e){return{root:Object(b.a)({position:"relative",backgroundColor:I.blue1,width:"max-content",height:"max-content",minWidth:200},e.breakpoints.down("sm"),{minWidth:"40%"}),header:{position:"relative",zIndex:0,display:"flex",justifyContent:"space-between",alignItems:"center",padding:e.spacing(1),boxSizing:"border-box",cursor:"pointer"},filters:{position:"absolute",zIndex:10,backgroundColor:I.blue1,width:"100%",padding:e.spacing(1),boxSizing:"border-box",display:"flex",flexDirection:"column",alignItems:"start",gap:e.spacing(1)},filter:{transition:"ease-out 0.1s",width:"100%","&:hover":{filter:"brightness(0.5)",borderRight:"2px solid ".concat(I.white)},cursor:"pointer"}}}));var J=[new d({path:"/impact-investor",pathName:"impact investor",isPrivate:!1,page:R}),new d({path:"/about-us",pathName:"about us",isPrivate:!1,page:function(){return Object(N.jsx)("div",{children:"about us"})}}),new d({path:"/social-enterprise",pathName:"social enterprise",isPrivate:!1,page:function(){return Object(N.jsx)("div",{children:"social enterprise"})}})];function U(e){var t=$(),n=e.to,i=e.isActive,a=e.title,r=e.onClick,o=e.onMouseEnter,s=e.onMouserLeave;return Object(N.jsx)(c.b,{to:n,className:t.root,onMouseEnter:o,onMouseLeave:s,onClick:r,children:Object(N.jsx)(k,{style:{color:i?I.blue3:I.white,borderBottom:"".concat(i?"2px":"0px"," solid ").concat(I.blue3)},className:t.text,children:a.toUpperCase()})})}var $=Object(f.a)((function(e){var t;return{root:{textDecoration:"none",textTransform:"capitalize",position:"relative",width:"max-content",boxSizing:"border-box",padding:e.spacing(1)},text:(t={fontSize:"20pt",textAlign:"center",fontWeight:"bold"},Object(b.a)(t,e.breakpoints.down("md"),{fontSize:"16pt"}),Object(b.a)(t,e.breakpoints.down("sm"),{fontSize:"8pt"}),t)}})),_=n.p+"static/media/Banner_Long_With_Background.6f91a6c5.png";function G(e){var t=V(),n=e.routes,a=Object(s.g)(),r=Object(i.useState)(a.pathname),o=Object(p.a)(r,2),c=o[0],l=o[1];return Object(N.jsxs)("nav",{className:t.root,children:[Object(N.jsx)("img",{src:_,alt:"No banner",className:t.headerImage}),Object(N.jsx)("section",{className:t.navigation,children:n.map((function(e){return Object(N.jsx)(U,{onClick:function(){return l(e.path)},to:e.path,isActive:c===e.path,title:e.pathName})}))})]})}var V=Object(f.a)((function(e){return{root:Object(b.a)({backgroundColor:I.gray2},e.breakpoints.down("sm"),{}),headerImage:{width:"100%",height:"auto"},navigation:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",gap:20,alignItems:"center"}}})),X=n(118);function Z(e){var t,n=K();return Object(N.jsx)(X.a,{className:n.root,variant:"contained",style:{backgroundColor:null!==(t=e.backgroundColor)&&void 0!==t?t:I.orange1},children:e.children})}var K=Object(f.a)((function(e){return{root:{textDecoration:"none",textTransform:"none",fontSize:"16pt",borderRadius:2,color:I.white}}}));function q(){var e=Y();return Object(N.jsxs)("div",{className:e.root,children:[Object(N.jsxs)("section",{className:e.register,children:[Object(N.jsx)(k,{className:e.registerHeader,style:{fontWeight:"bold"},children:"Register Now:"}),Object(N.jsx)("a",{target:"_blank",href:"https://www.case-giicc.com/sign-up-here.html",style:{textDecoration:"none"},children:Object(N.jsx)(Z,{children:"Sign Up Here"})})]}),Object(N.jsxs)("section",{className:e.content,children:[Object(N.jsx)(S,{className:e.location,children:"Level 8"}),Object(N.jsx)(S,{className:e.location,children:"\u200bHigh Street Centre"}),Object(N.jsx)(S,{className:e.location,children:"\u200b1 North Bridge Road"}),Object(N.jsx)(S,{className:e.location,children:"Singapore 179094"}),Object(N.jsx)(k,{className:e.contactUs,children:"Contact Us"}),Object(N.jsx)(S,{className:e.location,children:"ask.giicc@gmail.com"})]})]})}var Y=Object(f.a)((function(e){return{root:Object(b.a)({marginTop:e.spacing(2),backgroundColor:I.black1,display:"flex",flexDirection:"row",padding:70,boxSizing:"border-box",width:"100%",height:"max-content"},e.breakpoints.down("sm"),{flexDirection:"column",gap:e.spacing(6)}),register:Object(b.a)({paddingRight:e.spacing(8),width:"40%"},e.breakpoints.down("sm"),{width:"100%"}),registerHeader:{color:I.blue3,fontSize:"28pt",marginBottom:e.spacing(2)},content:Object(b.a)({width:"60%"},e.breakpoints.down("sm"),{width:"100%"}),location:{color:I.blue3},contactUs:{marginTop:e.spacing(4),marginBottoM:e.spacing(2),fontWeight:"bold",color:I.blue3}}}));var ee=function(){var e=te();return Object(N.jsx)("div",{className:e.root,children:Object(N.jsxs)(c.a,{children:[Object(N.jsx)(G,{routes:J}),Object(N.jsxs)(s.d,{children:[J.map((function(e){return Object(N.jsx)(s.b,{path:e.path,component:e.page,exact:!0})})),Object(N.jsx)(s.a,{to:"/impact-investor",from:"/",exact:!0,children:Object(N.jsx)(s.b,{path:"/impact-investor",component:function(){return Object(N.jsx)(R,{})}})})]}),Object(N.jsx)(q,{})]})})},te=Object(f.a)((function(e){return{root:{minHeight:"100vh"}}})),ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,122)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),r(e),o(e)}))};o.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(ee,{})}),document.getElementById("root")),ne()}},[[79,1,2]]]);
//# sourceMappingURL=main.f4540f60.chunk.js.map