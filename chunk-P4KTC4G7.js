import{A as y,D as P,F as b,H as c,K as I,a as u,b as o,c as m,d as r,g,i as d,j as l,r as f,s,t as v,v as h,y as M,z}from"./chunk-3ZCPY2PY.js";var n=class t{constructor(i,e){this.router=i;this.route=e}eventImage="";category="";ngOnInit(){this.router.url.split("/")[1].length>0&&(this.category=this.router.url.split("/")[1]),this.route.snapshot.paramMap.get("image")!==null&&(this.eventImage=this.route?.snapshot?.paramMap.get("image")||"")}goBack(){this.router.navigate([`/${this.category}`])}handleLoadingError(){return u(this,null,function*(){yield this.router.navigate(["/home"])})}static \u0275fac=function(e){return new(e||t)(l(b),l(P))};static \u0275cmp=m({type:t,selectors:[["app-full-size"]],decls:4,vars:2,consts:[[1,"full-size"],[1,"close",3,"click"],["onerror","this.src='placo-1.webp'",1,"img-home-category",3,"src"]],template:function(e,p){e&1&&(f(0,"div",0)(1,"div",1),h("click",function(){return p.goBack()}),z(2,"X"),s(),v(3,"img",2),s()),e&2&&(d(3),M("src","",p.eventImage,".webp",g))},styles:[".full-size[_ngcontent-%COMP%]{position:relative}.full-size[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:0}.full-size[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{position:absolute;width:50px;text-align:center;top:0;right:0;background:#000;opacity:.5;border-radius:50%;color:#fff;font-size:20px;padding:10px;z-index:2}"]})};var R=[{path:"",component:n}],a=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=r({type:t});static \u0275inj=o({imports:[c.forChild(R),c]})};var F=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=r({type:t});static \u0275inj=o({imports:[y,a,I]})};export{F as FullSizePageModule};