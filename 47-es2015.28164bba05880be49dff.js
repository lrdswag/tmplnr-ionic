(window.webpackJsonp=window.webpackJsonp||[]).push([[47,56],{"4J71":function(n,t,e){"use strict";e.d(t,"a",(function(){return b}));var i=e("fXoL"),o=e("TEn/");let b=(()=>{class n{constructor(){this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=i.Cb({type:n,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(n,t){1&n&&(i.Nb(0,"ion-header",0),i.Nb(1,"ion-toolbar",1),i.Nb(2,"ion-buttons",2),i.Jb(3,"ion-menu-button"),i.Mb(),i.Nb(4,"ion-title",3),i.zc(5),i.Mb(),i.Nb(6,"ion-buttons",4),i.Jb(7,"ion-img",5),i.Mb(),i.Mb(),i.Mb()),2&n&&(i.dc("translucent",!0),i.yb(5),i.Bc(" ",t.pageTitle," "))},directives:[o.t,o.V,o.i,o.E,o.T,o.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),n})()},In87:function(n,t,e){"use strict";e.r(t),e.d(t,"ReadPageModule",(function(){return w}));var i=e("ofXK"),o=e("3Pt+"),b=e("TEn/"),c=e("tyNb"),s=e("fXoL"),r=e("/u1d"),a=e("4J71");function l(n,t){1&n&&(s.Nb(0,"ion-card",11),s.Nb(1,"ion-card-header"),s.Nb(2,"ion-card-title",12),s.zc(3,"Loading..."),s.Mb(),s.Mb(),s.Nb(4,"ion-card-content"),s.Jb(5,"ion-spinner",13),s.Mb(),s.Mb())}const m=function(n){return["/users",n,"details"]};function f(n,t){if(1&n&&(s.Nb(0,"ion-item",6),s.Nb(1,"ion-label"),s.Nb(2,"strong",15),s.zc(3," Recipient: "),s.Mb(),s.Mb(),s.Nb(4,"ion-label",19),s.zc(5),s.Mb(),s.Mb()),2&n){const n=s.Wb(2);s.dc("routerLink",s.ic(3,m,n.comment.recipient.id)),s.yb(5),s.Cc("",n.comment.recipient.firstName," ",n.comment.recipient.lastName,"")}}const u=function(n){return["/users/",n,"details"]};function d(n,t){if(1&n&&(s.Nb(0,"ion-item",6),s.Nb(1,"ion-label"),s.Nb(2,"strong",15),s.zc(3," From: "),s.Mb(),s.Mb(),s.Nb(4,"ion-label",19),s.zc(5),s.Mb(),s.Mb()),2&n){const n=s.Wb(2);s.dc("routerLink",s.ic(3,u,n.comment.authoredBy.id)),s.yb(5),s.Cc("",n.comment.authoredBy.firstName," ",n.comment.authoredBy.lastName,"")}}function M(n,t){1&n&&(s.Nb(0,"ion-label"),s.zc(1,"Private Message"),s.Mb())}function N(n,t){1&n&&(s.Nb(0,"ion-label"),s.zc(1,"Public Message"),s.Mb())}function g(n,t){if(1&n&&(s.Nb(0,"ion-item",15),s.Nb(1,"ion-label"),s.Nb(2,"strong",15),s.zc(3," Subject: "),s.Mb(),s.Mb(),s.Nb(4,"ion-label"),s.zc(5),s.Mb(),s.Mb()),2&n){const n=s.Wb(2);s.yb(5),s.Ac(n.comment.subject)}}function y(n,t){if(1&n&&(s.Nb(0,"ion-item",20),s.Nb(1,"ion-label",21),s.Nb(2,"strong",15),s.zc(3," Message: "),s.Mb(),s.Mb(),s.Nb(4,"ion-text"),s.zc(5),s.Mb(),s.Mb()),2&n){const n=s.Wb(2);s.yb(5),s.Ac(n.comment.comment)}}const p=function(n){return["/admin/comments/delete/",n]};function h(n,t){if(1&n&&(s.Nb(0,"div"),s.Nb(1,"ion-item",22),s.Nb(2,"ion-label",12),s.Nb(3,"strong",15),s.zc(4," Related Shift Details "),s.Mb(),s.Mb(),s.Mb(),s.Nb(5,"ion-item",15),s.Nb(6,"ion-label"),s.Nb(7,"strong",15),s.zc(8," Date: "),s.Mb(),s.Mb(),s.Nb(9,"ion-label"),s.zc(10),s.Xb(11,"date"),s.Mb(),s.Mb(),s.Nb(12,"ion-item",15),s.Nb(13,"ion-label"),s.Nb(14,"strong",15),s.zc(15," Start: "),s.Mb(),s.Mb(),s.Nb(16,"ion-label"),s.zc(17),s.Xb(18,"date"),s.Mb(),s.Mb(),s.Nb(19,"ion-item",15),s.Nb(20,"ion-label"),s.Nb(21,"strong",15),s.zc(22," Finish: "),s.Mb(),s.Mb(),s.Nb(23,"ion-label"),s.zc(24),s.Xb(25,"date"),s.Mb(),s.Mb(),s.Nb(26,"ion-item",23),s.Nb(27,"ion-label"),s.Nb(28,"strong",15),s.zc(29," On Duty: "),s.Mb(),s.Mb(),s.Nb(30,"ion-label",19),s.zc(31),s.Mb(),s.Mb(),s.Nb(32,"ion-item",24),s.Nb(33,"ion-col",25),s.Nb(34,"ion-button",26),s.Nb(35,"ion-label"),s.zc(36,"Delete Message"),s.Mb(),s.Jb(37,"ion-icon",27),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&n){const n=s.Wb(2);s.yb(10),s.Ac(s.Zb(11,7,n.comment.shift.start,"dd/MMM")),s.yb(7),s.Ac(s.Zb(18,10,n.comment.shift.start,"shortTime")),s.yb(7),s.Ac(s.Zb(25,13,n.comment.shift.end,"shortTime")),s.yb(2),s.dc("routerLink",s.ic(16,u,n.comment.shift.onDuty.id)),s.yb(5),s.Cc("",n.comment.shift.onDuty.firstName," ",n.comment.shift.onDuty.lastName,""),s.yb(3),s.dc("routerLink",s.ic(18,p,n.comment.id))}}function z(n,t){if(1&n&&(s.Nb(0,"ion-card"),s.Nb(1,"ion-list"),s.xc(2,f,6,5,"ion-item",14),s.xc(3,d,6,5,"ion-item",14),s.Nb(4,"ion-item",15),s.Nb(5,"ion-label"),s.Nb(6,"strong",15),s.zc(7," Private/Public "),s.Mb(),s.Mb(),s.xc(8,M,2,0,"ion-label",16),s.xc(9,N,2,0,"ion-label",16),s.Mb(),s.xc(10,g,6,1,"ion-item",17),s.xc(11,y,6,1,"ion-item",18),s.Jb(12,"ion-item"),s.xc(13,h,38,20,"div",16),s.Mb(),s.Mb()),2&n){const n=s.Wb();s.yb(2),s.dc("ngIf",n.comment.recipient),s.yb(1),s.dc("ngIf",n.comment.authoredBy),s.yb(5),s.dc("ngIf",!0===n.comment.isPrivate),s.yb(1),s.dc("ngIf",!1===n.comment.isPrivate),s.yb(1),s.dc("ngIf",n.comment.subject),s.yb(1),s.dc("ngIf",n.comment.comment),s.yb(2),s.dc("ngIf",n.comment.shift)}}const k=function(){return["Read Message"]},I=function(){return["/admin/shifts/add"]},v=function(){return["/admin"]},L=[{path:"",component:(()=>{class n{constructor(n,t){this.route=n,this.commentsService=t}ngOnInit(){const n=this.route.snapshot.paramMap.get("id");this.commentsService.getCommentById(n).subscribe(n=>this.comment=n)}}return n.\u0275fac=function(t){return new(t||n)(s.Ib(c.a),s.Ib(r.a))},n.\u0275cmp=s.Cb({type:n,selectors:[["app-read"]],decls:19,vars:9,consts:[[3,"pageTitle"],["loading",""],[4,"ngIf","ngIfElse"],[3,"translucent"],["color","primary"],["text","Back","defaultHref","/admin",2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],["color","light",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["name","add-circle-outline","slot","start"],["slot","end"],[2,"font-size","0.8rem","font-family","Quicksand, sans-serif",3,"routerLink"],["slot","end","name","list-outline"],[2,"padding","2rem","margin-top","3rem"],[1,"ion-text-center"],[2,"position","absolute","left","45%","right","45%"],["color","light","style","font-family: Quicksand, sans-serif; font-size: 0.8rem;",3,"routerLink",4,"ngIf"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem"],[4,"ngIf"],["style","font-family: Quicksand, sans-serif; font-size: 0.8rem;",4,"ngIf"],["lines","none","style","font-family: Quicksand, sans-serif; font-size: 0.8rem;",4,"ngIf"],[2,"margin-left","1rem"],["lines","none",2,"font-family","Quicksand, sans-serif","font-size","0.8rem"],["position","stacked","color","medium"],["color","light",2,"font-family","Quicksand, sans-serif","font-size","0.8rem"],["color","light","detail","true",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["lines","none"],["size","12"],["size","block","color","danger",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["slot","start","name","trash-bin-outline"]],template:function(n,t){if(1&n&&(s.Jb(0,"app-header",0),s.Nb(1,"ion-content"),s.xc(2,l,6,0,"ng-template",null,1,s.yc),s.xc(4,z,14,7,"ion-card",2),s.Mb(),s.Nb(5,"ion-footer",3),s.Nb(6,"ion-toolbar",4),s.Nb(7,"ion-buttons"),s.Jb(8,"ion-back-button",5),s.Mb(),s.Nb(9,"ion-title"),s.Nb(10,"ion-button",6),s.Nb(11,"ion-label"),s.zc(12,"Add Shift"),s.Mb(),s.Jb(13,"ion-icon",7),s.Mb(),s.Mb(),s.Nb(14,"ion-buttons",8),s.Nb(15,"ion-button",9),s.Jb(16,"ion-icon",10),s.Nb(17,"ion-label"),s.zc(18,"Dashboard"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&n){const n=s.rc(3);s.dc("pageTitle",s.hc(6,k)),s.yb(4),s.dc("ngIf",t.comment)("ngIfElse",n),s.yb(1),s.dc("translucent",!0),s.yb(5),s.dc("routerLink",s.hc(7,I)),s.yb(5),s.dc("routerLink",s.hc(8,v))}},directives:[a.a,b.q,i.m,b.s,b.V,b.i,b.f,b.g,b.T,b.h,b.eb,c.g,b.A,b.u,b.j,b.l,b.n,b.k,b.O,b.B,b.x,b.Q,b.p],pipes:[i.e],styles:[""]}),n})()}];let x=(()=>{class n{}return n.\u0275mod=s.Gb({type:n}),n.\u0275inj=s.Fb({factory:function(t){return new(t||n)},imports:[[c.i.forChild(L)],c.i]}),n})();var Q=e("jICo");let w=(()=>{class n{}return n.\u0275mod=s.Gb({type:n}),n.\u0275inj=s.Fb({factory:function(t){return new(t||n)},imports:[[i.c,o.d,b.W,x,Q.a]]}),n})()},jICo:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var i=e("ofXK"),o=e("TEn/"),b=e("fXoL");let c=(()=>{class n{}return n.\u0275mod=b.Gb({type:n}),n.\u0275inj=b.Fb({factory:function(t){return new(t||n)},imports:[[i.c,o.W]]}),n})()}}]);