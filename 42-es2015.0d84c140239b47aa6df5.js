(window.webpackJsonp=window.webpackJsonp||[]).push([[42,56],{"4J71":function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var o=t("fXoL"),i=t("TEn/");let s=(()=>{class n{constructor(){this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Cb({type:n,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(n,e){1&n&&(o.Nb(0,"ion-header",0),o.Nb(1,"ion-toolbar",1),o.Nb(2,"ion-buttons",2),o.Jb(3,"ion-menu-button"),o.Mb(),o.Nb(4,"ion-title",3),o.zc(5),o.Mb(),o.Nb(6,"ion-buttons",4),o.Jb(7,"ion-img",5),o.Mb(),o.Mb(),o.Mb()),2&n&&(o.dc("translucent",!0),o.yb(5),o.Bc(" ",e.pageTitle," "))},directives:[i.t,i.V,i.i,i.E,i.T,i.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),n})()},Teju:function(n,e,t){"use strict";t.r(e),t.d(e,"ReadPageModule",(function(){return I}));var o=t("ofXK"),i=t("3Pt+"),s=t("TEn/"),c=t("tyNb"),r=t("mrSG"),b=t("lJxs"),a=t("vkgz"),l=t("fXoL"),u=t("/u1d"),m=t("4J71"),d=t("nnDH");function f(n,e){1&n&&(l.Nb(0,"ion-card",13),l.Nb(1,"ion-card-header"),l.Nb(2,"ion-card-title",14),l.zc(3,"Loading..."),l.Mb(),l.Mb(),l.Nb(4,"ion-card-content"),l.Jb(5,"ion-spinner",15),l.Mb(),l.Mb())}function p(n,e){1&n&&(l.Nb(0,"ion-label"),l.zc(1,"No Subject"),l.Mb())}function h(n,e){if(1&n&&(l.Nb(0,"ion-label"),l.zc(1),l.Mb()),2&n){const n=l.Wb(2);l.yb(1),l.Ac(n.comment.subject)}}const g=function(n){return["/messaging/",n,"send-to"]};function M(n,e){if(1&n){const n=l.Ob();l.Nb(0,"ion-card"),l.Nb(1,"ion-card-header"),l.Nb(2,"ion-label"),l.Nb(3,"strong"),l.zc(4,"From:"),l.Mb(),l.zc(5),l.Mb(),l.Mb(),l.Nb(6,"ion-card-content"),l.Nb(7,"ion-list"),l.Nb(8,"ion-item",16),l.Nb(9,"ion-col"),l.Nb(10,"ion-label"),l.Nb(11,"strong"),l.zc(12,"Subject:"),l.Mb(),l.Mb(),l.Mb(),l.Nb(13,"ion-col"),l.xc(14,p,2,0,"ion-label",17),l.xc(15,h,2,1,"ion-label",17),l.Mb(),l.Mb(),l.Nb(16,"ion-item",16),l.Nb(17,"ion-col"),l.Nb(18,"ion-label"),l.Nb(19,"strong"),l.zc(20,"Received:"),l.Mb(),l.Mb(),l.Mb(),l.Nb(21,"ion-col"),l.Nb(22,"ion-label"),l.zc(23),l.Xb(24,"date"),l.Mb(),l.Mb(),l.Mb(),l.Nb(25,"ion-item",18),l.Nb(26,"ion-label",19),l.Nb(27,"strong"),l.zc(28,"Message:"),l.Mb(),l.Mb(),l.Mb(),l.Nb(29,"ion-item",20),l.Nb(30,"ion-text"),l.zc(31),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Nb(32,"ion-item"),l.Nb(33,"ion-col"),l.Nb(34,"ion-button",21),l.Jb(35,"ion-icon",22),l.Jb(36,"ion-ripple-effect"),l.Nb(37,"ion-label"),l.zc(38,"Reply"),l.Mb(),l.Mb(),l.Mb(),l.Nb(39,"ion-col"),l.Nb(40,"ion-button",23),l.Ub("click",(function(){l.sc(n);const e=l.Wb();return e.presentActionSheet(e.comment.id)})),l.Jb(41,"ion-ripple-effect"),l.Jb(42,"ion-icon",24),l.Nb(43,"ion-label"),l.zc(44,"DELETE"),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb()}if(2&n){const n=l.Wb();l.yb(5),l.Cc(" ",n.comment.authoredBy.firstName," ",n.comment.authoredBy.lastName,""),l.yb(9),l.dc("ngIf",!n.comment.subject),l.yb(1),l.dc("ngIf",n.comment.subject),l.yb(8),l.Ac(l.Zb(24,7,n.comment.dateOfComment,"medium")),l.yb(8),l.Ac(n.comment.comment),l.yb(3),l.dc("routerLink",l.ic(10,g,n.comment.authoredBy.id))}}const N=function(){return["Read Message"]},y=function(){return["/messaging"]},k=function(){return["/messaging/send"]},z=function(){return["/shifts"]},v=[{path:"",component:(()=>{class n{constructor(n,e,t,o){this.commentsService=n,this.route=e,this.router=t,this.actionSheet=o}ngOnInit(){const n=this.route.snapshot.paramMap.get("id");this.commentsService.getCommentById(n).subscribe(n=>this.comment=n),this.commentsService.markAsRead(n).subscribe(n=>this.comment=n)}presentActionSheet(n){return Object(r.a)(this,void 0,void 0,(function*(){const e=yield this.actionSheet.create({header:"Delete Message?",animated:!0,buttons:[{text:"OK",icon:"checkbox-outline",handler:()=>{this.onDeleteMessage(n)}},{text:"Cancel",icon:"cancel",role:"cancel"}]});yield e.present()}))}onDeleteMessage(n){this.commentsService.deleteComment(n).pipe(Object(b.a)(()=>alert(`Message from ${this.comment.authoredBy.firstName} ${this.comment.authoredBy.lastName} Deleted`)),Object(a.a)(n=>this.router.navigateByUrl("/messaging"))).subscribe(n=>console.log(JSON.stringify(n)))}}return n.\u0275fac=function(e){return new(e||n)(l.Ib(u.a),l.Ib(c.a),l.Ib(c.f),l.Ib(s.a))},n.\u0275cmp=l.Cb({type:n,selectors:[["app-read"]],decls:23,vars:11,consts:[[3,"pageTitle"],["loading",""],[4,"ngIf","ngIfElse"],[3,"translucent"],["color","primary"],["slot","start"],[2,"font-size","0.8rem","font-family","Quicksand, sans-serif",3,"routerLink"],["slot","start","name","chatbubbles-outline"],["color","light",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["slot","start","name","mail-unread-outline"],["slot","end"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["slot","end","name","calendar-outline"],[2,"padding","2rem","margin-top","3rem"],[1,"ion-text-center"],[2,"position","absolute","left","45%","right","45%"],[2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],[4,"ngIf"],["lines","none"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem"],["lines","none",2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],["shape","round","size","block","color","success",3,"routerLink"],["slot","start","name","return-down-back-outline"],["shape","round","size","block","color","danger",3,"click"],["slot","start","name","trash-bin-outline"]],template:function(n,e){if(1&n&&(l.Jb(0,"app-header",0),l.Nb(1,"ion-content"),l.Jb(2,"app-header-banner"),l.xc(3,f,6,0,"ng-template",null,1,l.yc),l.xc(5,M,45,12,"ion-card",2),l.Mb(),l.Nb(6,"ion-footer",3),l.Nb(7,"ion-toolbar",4),l.Nb(8,"ion-buttons",5),l.Nb(9,"ion-button",6),l.Jb(10,"ion-icon",7),l.Nb(11,"ion-label"),l.zc(12,"Messages"),l.Mb(),l.Mb(),l.Mb(),l.Nb(13,"ion-title"),l.Nb(14,"ion-button",8),l.Jb(15,"ion-icon",9),l.Nb(16,"ion-label"),l.zc(17,"New Message"),l.Mb(),l.Mb(),l.Mb(),l.Nb(18,"ion-buttons",10),l.Nb(19,"ion-button",11),l.Jb(20,"ion-icon",12),l.Nb(21,"ion-label"),l.zc(22,"Shifts"),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb()),2&n){const n=l.rc(4);l.dc("pageTitle",l.hc(7,N)),l.yb(5),l.dc("ngIf",e.comment)("ngIfElse",n),l.yb(1),l.dc("translucent",!0),l.yb(3),l.dc("routerLink",l.hc(8,y)),l.yb(5),l.dc("routerLink",l.hc(9,k)),l.yb(5),l.dc("routerLink",l.hc(10,z))}},directives:[m.a,s.q,d.a,o.m,s.s,s.V,s.i,s.h,s.eb,c.g,s.u,s.A,s.T,s.j,s.l,s.n,s.k,s.O,s.B,s.x,s.p,s.Q,s.H],pipes:[o.e],styles:[""]}),n})()}];let J=(()=>{class n{}return n.\u0275mod=l.Gb({type:n}),n.\u0275inj=l.Fb({factory:function(e){return new(e||n)},imports:[[c.i.forChild(v)],c.i]}),n})();var w=t("jICo");let I=(()=>{class n{}return n.\u0275mod=l.Gb({type:n}),n.\u0275inj=l.Fb({factory:function(e){return new(e||n)},imports:[[o.c,i.d,s.W,J,w.a]]}),n})()},jICo:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var o=t("ofXK"),i=t("TEn/"),s=t("fXoL");let c=(()=>{class n{}return n.\u0275mod=s.Gb({type:n}),n.\u0275inj=s.Fb({factory:function(e){return new(e||n)},imports:[[o.c,i.W]]}),n})()},nnDH:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var o=t("fXoL"),i=t("TEn/");let s=(()=>{class n{constructor(){this.headerBanner="https://media.publit.io/file/header-D.png"}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Cb({type:n,selectors:[["app-header-banner"]],decls:1,vars:1,consts:[[1,"header-img",3,"src"]],template:function(n,e){1&n&&o.Jb(0,"ion-img",0),2&n&&o.dc("src",e.headerBanner)},directives:[i.v],styles:[""]}),n})()}}]);