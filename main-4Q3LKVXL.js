import{B as c,C as h,E as f,G as M,H as l,I as g,K as C,b as i,c as m,d as r,r as d,s,t as u}from"./chunk-3ZCPY2PY.js";var n=class e{title="rethore-plaquiste-electricite-peinture";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-root"]],decls:4,vars:0,consts:[["contentId","main-content","disabled","true"],["id","main-content"]],template:function(t,b){t&1&&(d(0,"div")(1,"div",0),u(2,"app-menu-tab")(3,"router-outlet",1),s()())},dependencies:[f,g],styles:["app-menu-tab[_ngcontent-%COMP%]{position:relative;height:80px;top:0}"]})};var S=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",loadChildren:()=>import("./chunk-DP3RQYRI.js").then(e=>e.HomePageModule)},{path:"platrerie",loadChildren:()=>import("./chunk-5MKORGAL.js").then(e=>e.PlatreriePageModule)},{path:"platrerie/:image",loadChildren:()=>import("./chunk-P4KTC4G7.js").then(e=>e.FullSizePageModule)},{path:"electricite",loadChildren:()=>import("./chunk-RJLJZWUA.js").then(e=>e.ElecPageModule)},{path:"electricite/:image",loadChildren:()=>import("./chunk-P4KTC4G7.js").then(e=>e.FullSizePageModule)},{path:"peinture",loadChildren:()=>import("./chunk-AXBLNF6C.js").then(e=>e.PeinturePageModule)},{path:"peinture/:image",loadChildren:()=>import("./chunk-P4KTC4G7.js").then(e=>e.FullSizePageModule)},{path:"en-savoir-plus",loadChildren:()=>import("./chunk-HZ4JA5NW.js").then(e=>e.EnSavoirPlusPageModule)},{path:"contact",loadChildren:()=>import("./chunk-5TF3Q5Y4.js").then(e=>e.ContactPageModule)},{path:"**",redirectTo:"home"}],o=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=r({type:e});static \u0275inj=i({imports:[l.forRoot(S,{preloadingStrategy:M}),l]})};var a=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=r({type:e,bootstrap:[n]});static \u0275inj=i({providers:[o],imports:[h,o,C]})};c().bootstrapModule(a).catch(e=>console.log(e));