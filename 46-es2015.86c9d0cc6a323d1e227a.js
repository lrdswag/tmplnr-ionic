(window.webpackJsonp=window.webpackJsonp||[]).push([[46,56],{"4J71":function(t,n,e){"use strict";e.d(n,"a",(function(){return b}));var i=e("fXoL"),o=e("TEn/");let b=(()=>{class t{constructor(){this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Cb({type:t,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(t,n){1&t&&(i.Nb(0,"ion-header",0),i.Nb(1,"ion-toolbar",1),i.Nb(2,"ion-buttons",2),i.Jb(3,"ion-menu-button"),i.Mb(),i.Nb(4,"ion-title",3),i.zc(5),i.Mb(),i.Nb(6,"ion-buttons",4),i.Jb(7,"ion-img",5),i.Mb(),i.Mb(),i.Mb()),2&t&&(i.dc("translucent",!0),i.yb(5),i.Bc(" ",n.pageTitle," "))},directives:[o.t,o.V,o.i,o.E,o.T,o.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),t})()},jICo:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var i=e("ofXK"),o=e("TEn/"),b=e("fXoL");let c=(()=>{class t{}return t.\u0275mod=b.Gb({type:t}),t.\u0275inj=b.Fb({factory:function(n){return new(n||t)},imports:[[i.c,o.W]]}),t})()},red0:function(t,n,e){"use strict";e.r(n),e.d(n,"DeletePageModule",(function(){return C}));var i=e("ofXK"),o=e("3Pt+"),b=e("TEn/"),c=e("tyNb"),s=e("vkgz"),a=e("fXoL"),r=e("/u1d"),l=e("4J71");function m(t,n){1&t&&(a.Nb(0,"ion-card",11),a.Nb(1,"ion-card-header"),a.Nb(2,"ion-card-title",12),a.zc(3,"Loading..."),a.Mb(),a.Mb(),a.Nb(4,"ion-card-content"),a.Jb(5,"ion-spinner",13),a.Mb(),a.Mb())}function u(t,n){1&t&&(a.Nb(0,"ion-label"),a.zc(1,"Private Message"),a.Mb())}function f(t,n){1&t&&(a.Nb(0,"ion-label"),a.zc(1,"Public Message"),a.Mb())}function d(t,n){if(1&t&&(a.Nb(0,"ion-item",14),a.Nb(1,"ion-label"),a.zc(2,"Related Shift Details"),a.Mb(),a.Nb(3,"ion-text"),a.zc(4),a.Xb(5,"date"),a.Jb(6,"br"),a.zc(7),a.Xb(8,"date"),a.Jb(9,"br"),a.zc(10),a.Xb(11,"date"),a.Jb(12,"br"),a.zc(13),a.Mb(),a.Mb()),2&t){const t=a.Wb(2);a.yb(4),a.Bc("Date: ",a.Zb(5,5,t.comment.shift.start,"dd/MMM")," "),a.yb(3),a.Bc(" Start: ",a.Zb(8,8,t.comment.shift.start,"shortTime")," "),a.yb(3),a.Bc(" End: ",a.Zb(11,11,t.comment.shift.end,"shortTime")," "),a.yb(3),a.Cc(" On Duty: ",t.comment.shift.onDuty.firstName," ",t.comment.shift.onDuty.lastName,"")}}function M(t,n){if(1&t){const t=a.Ob();a.Nb(0,"ion-card"),a.Nb(1,"ion-card-header"),a.zc(2,"Comment Details"),a.Mb(),a.Nb(3,"ion-card-content"),a.Nb(4,"ion-list"),a.Nb(5,"ion-item",14),a.Nb(6,"ion-label"),a.zc(7,"Subject:"),a.Mb(),a.Nb(8,"ion-label"),a.zc(9),a.Mb(),a.Mb(),a.Nb(10,"ion-item",14),a.Nb(11,"ion-label"),a.zc(12,"Private Message:"),a.Mb(),a.xc(13,u,2,0,"ion-label",15),a.xc(14,f,2,0,"ion-label",15),a.Mb(),a.xc(15,d,14,14,"ion-item",16),a.Nb(16,"ion-item",14),a.Nb(17,"ion-label"),a.zc(18,"Authored By:"),a.Mb(),a.Nb(19,"ion-label"),a.zc(20),a.Mb(),a.Mb(),a.Nb(21,"ion-item",14),a.Nb(22,"ion-label"),a.zc(23,"Date Of Comment:"),a.Mb(),a.Nb(24,"ion-label"),a.zc(25),a.Xb(26,"date"),a.Mb(),a.Mb(),a.Nb(27,"ion-item",14),a.Nb(28,"ion-label"),a.zc(29,"Recipient:"),a.Mb(),a.Nb(30,"ion-label"),a.zc(31),a.Mb(),a.Mb(),a.Nb(32,"ion-item",14),a.Nb(33,"ion-label"),a.zc(34,"Comment:"),a.Mb(),a.Nb(35,"ion-text"),a.zc(36),a.Mb(),a.Mb(),a.Nb(37,"ion-item"),a.Nb(38,"ion-col",17),a.Nb(39,"ion-button",18),a.Ub("click",(function(){a.sc(t);const n=a.Wb();return n.onDeleteComment(n.comment.id)})),a.Nb(40,"ion-label"),a.zc(41,"Delete"),a.Mb(),a.Jb(42,"ion-icon",19),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb()}if(2&t){const t=a.Wb();a.yb(9),a.Ac(t.comment.subject),a.yb(4),a.dc("ngIf",!0===t.comment.isPrivate),a.yb(1),a.dc("ngIf",!1===t.comment.isPrivate),a.yb(1),a.dc("ngIf",t.comment.shift),a.yb(5),a.Cc("",t.comment.authoredBy.firstName," ",t.comment.authoredBy.lastName,""),a.yb(5),a.Ac(a.Zb(26,10,t.comment.dateOfComment,"medium")),a.yb(6),a.Cc("",t.comment.recipient.firstName," ",t.comment.recipient.lastName,""),a.yb(5),a.Ac(t.comment.comment)}}const p=function(){return["Delete Comment"]},N=function(){return["/admin/comments"]},g=function(){return["/admin"]},h=[{path:"",component:(()=>{class t{constructor(t,n,e){this.route=t,this.router=n,this.commentsService=e}ngOnInit(){const t=this.route.snapshot.paramMap.get("id");this.commentsService.getCommentById(t).subscribe(t=>this.comment=t)}onDeleteComment(t){this.commentsService.deleteComment(t).pipe(Object(s.a)(t=>alert("Comment Deleted!")),Object(s.a)(t=>this.router.navigateByUrl("/admin"))).subscribe(t=>console.log(JSON.stringify(t)))}}return t.\u0275fac=function(n){return new(n||t)(a.Ib(c.a),a.Ib(c.f),a.Ib(r.a))},t.\u0275cmp=a.Cb({type:t,selectors:[["app-delete"]],decls:18,vars:9,consts:[[3,"pageTitle"],["loading",""],[4,"ngIf","ngIfElse"],[3,"translucent"],["color","primary"],["slot","start"],["text","Back","defaultHref","/admin",2,"font-family","Quicksand, sans-serif","font-size","0.8rem"],["color","light",2,"font-size","0.8rem","font-family","Quicksand, sans-serif",3,"routerLink"],["slot","start","name","chatbubbles-outline"],["slot","end"],[2,"font-size","0.8rem","font-family","Quicksand, sans-serif",3,"routerLink"],[2,"padding","2rem","margin-top","3rem"],[1,"ion-text-center"],[2,"position","absolute","left","45%","right","45%"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem"],[4,"ngIf"],["style","font-family: Quicksand, sans-serif; font-size: 0.8rem;",4,"ngIf"],["size","12"],["size","block","color","danger","type","submit",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"click"],["name","trash-bin-outline","slot","start"]],template:function(t,n){if(1&t&&(a.Jb(0,"app-header",0),a.Nb(1,"ion-content"),a.xc(2,m,6,0,"ng-template",null,1,a.yc),a.xc(4,M,43,13,"ion-card",2),a.Mb(),a.Nb(5,"ion-footer",3),a.Nb(6,"ion-toolbar",4),a.Nb(7,"ion-buttons",5),a.Jb(8,"ion-back-button",6),a.Mb(),a.Nb(9,"ion-title"),a.Nb(10,"ion-button",7),a.Jb(11,"ion-icon",8),a.Nb(12,"ion-label"),a.zc(13,"Comments"),a.Mb(),a.Mb(),a.Mb(),a.Nb(14,"ion-buttons",9),a.Nb(15,"ion-button",10),a.Nb(16,"ion-label"),a.zc(17,"Dashboard"),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb()),2&t){const t=a.rc(3);a.dc("pageTitle",a.hc(6,p)),a.yb(4),a.dc("ngIf",n.comment)("ngIfElse",t),a.yb(1),a.dc("translucent",!0),a.yb(5),a.dc("routerLink",a.hc(7,N)),a.yb(5),a.dc("routerLink",a.hc(8,g))}},directives:[l.a,b.q,i.m,b.s,b.V,b.i,b.f,b.g,b.T,b.h,b.eb,c.g,b.u,b.A,b.j,b.l,b.n,b.k,b.O,b.B,b.x,b.Q,b.p],pipes:[i.e],styles:[""]}),t})()}];let y=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(n){return new(n||t)},imports:[[c.i.forChild(h)],c.i]}),t})();var z=e("jICo");let C=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(n){return new(n||t)},imports:[[i.c,o.d,b.W,y,z.a]]}),t})()}}]);