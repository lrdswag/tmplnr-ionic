(window.webpackJsonp=window.webpackJsonp||[]).push([[54,56],{"4J71":function(t,n,i){"use strict";i.d(n,"a",(function(){return s}));var e=i("fXoL"),o=i("TEn/");let s=(()=>{class t{constructor(){this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Cb({type:t,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(t,n){1&t&&(e.Nb(0,"ion-header",0),e.Nb(1,"ion-toolbar",1),e.Nb(2,"ion-buttons",2),e.Jb(3,"ion-menu-button"),e.Mb(),e.Nb(4,"ion-title",3),e.zc(5),e.Mb(),e.Nb(6,"ion-buttons",4),e.Jb(7,"ion-img",5),e.Mb(),e.Mb(),e.Mb()),2&t&&(e.dc("translucent",!0),e.yb(5),e.Bc(" ",n.pageTitle," "))},directives:[o.t,o.V,o.i,o.E,o.T,o.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),t})()},jICo:function(t,n,i){"use strict";i.d(n,"a",(function(){return c}));var e=i("ofXK"),o=i("TEn/"),s=i("fXoL");let c=(()=>{class t{}return t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({factory:function(n){return new(n||t)},imports:[[e.c,o.W]]}),t})()},mRmn:function(t,n,i){"use strict";i.r(n),i.d(n,"ShiftCommentsPageModule",(function(){return S}));var e=i("ofXK"),o=i("3Pt+"),s=i("TEn/"),c=i("tyNb"),r=i("mrSG"),b=i("vkgz"),a=i("fXoL"),l=i("/u1d"),f=i("0IKw"),m=i("4J71");function u(t,n){1&t&&(a.Nb(0,"ion-card",10),a.Nb(1,"ion-card-header"),a.Nb(2,"ion-card-title",11),a.zc(3,"Loading Shift Comments..."),a.Mb(),a.Mb(),a.Nb(4,"ion-card-content"),a.Jb(5,"ion-spinner",12),a.Mb(),a.Mb())}const d=function(t){return["/shifts/",t,"on-duty"]};function h(t,n){if(1&t&&(a.Nb(0,"ion-item",14),a.Nb(1,"ion-label"),a.zc(2,"Recipient:"),a.Mb(),a.Nb(3,"ion-label"),a.zc(4),a.Mb(),a.Mb()),2&t){const t=a.Wb().$implicit;a.dc("routerLink",a.ic(3,d,t.recipient.id)),a.yb(4),a.Cc("",t.recipient.firstName," ",t.recipient.lastName,"")}}function p(t,n){if(1&t&&(a.Nb(0,"ion-item",16),a.Nb(1,"ion-label"),a.zc(2,"Subject:"),a.Mb(),a.Nb(3,"ion-text"),a.zc(4),a.Mb(),a.Mb()),2&t){const t=a.Wb().$implicit;a.yb(4),a.Ac(t.subject)}}function g(t,n){if(1&t&&(a.Nb(0,"ion-card"),a.Nb(1,"ion-item",14),a.Nb(2,"ion-label"),a.zc(3,"Comment by:"),a.Mb(),a.Nb(4,"ion-label"),a.zc(5),a.Mb(),a.Mb(),a.xc(6,h,5,5,"ion-item",15),a.Nb(7,"ion-item",16),a.Nb(8,"ion-label"),a.zc(9,"Date of comment:"),a.Mb(),a.Nb(10,"ion-label"),a.zc(11),a.Xb(12,"date"),a.Mb(),a.Mb(),a.xc(13,p,5,1,"ion-item",17),a.Nb(14,"ion-item",18),a.Nb(15,"ion-label",19),a.zc(16,"Comment:"),a.Mb(),a.Nb(17,"ion-text"),a.zc(18),a.Mb(),a.Mb(),a.Jb(19,"ion-item",20),a.Mb()),2&t){const t=n.$implicit;a.yb(1),a.dc("routerLink",a.ic(10,d,t.authoredBy.id)),a.yb(4),a.Cc("",t.authoredBy.firstName," ",t.authoredBy.lastName,""),a.yb(1),a.dc("ngIf",t.recipient),a.yb(5),a.Ac(a.Zb(12,7,t.dateOfComment,"dd/MMM hh:M a")),a.yb(2),a.dc("ngIf",t.subject),a.yb(5),a.Bc(" ",t.comment," ")}}function M(t,n){if(1&t&&(a.Nb(0,"div"),a.xc(1,g,20,12,"ion-card",13),a.Mb()),2&t){const t=a.Wb();a.yb(1),a.dc("ngForOf",t.comments)}}const y=function(t){return["/shifts/",t,"comments","add"]};function N(t,n){if(1&t&&(a.Nb(0,"ion-title"),a.Nb(1,"ion-button",21),a.Jb(2,"ion-icon",22),a.Nb(3,"ion-label"),a.zc(4,"Add Comment"),a.Mb(),a.Mb(),a.Mb()),2&t){const t=a.Wb();a.yb(1),a.dc("routerLink",a.ic(1,y,t.shift.id))}}const C=function(){return["Shift Comments"]},k=function(){return["/messaging"]},I=[{path:"",component:(()=>{class t{constructor(t,n,i,e){this.commentsService=t,this.route=n,this.alertCtrl=i,this.shiftsService=e}ngOnInit(){const t=this.route.snapshot.paramMap.get("id");this.getShiftComments(t),this.getShift(t)}getShiftComments(t){this.commentsService.getCommentsForShift(t).pipe(Object(b.a)(t=>Object(r.a)(this,void 0,void 0,(function*(){if(0===t.length){const t=yield this.alertCtrl.create({header:"No shift-comments found!",buttons:["Dismiss"]});yield t.present()}})))).subscribe(t=>this.comments=t)}getShift(t){this.shiftsService.getShiftById(t).subscribe(t=>this.shift=t)}}return t.\u0275fac=function(n){return new(n||t)(a.Ib(l.a),a.Ib(c.a),a.Ib(s.b),a.Ib(f.a))},t.\u0275cmp=a.Cb({type:t,selectors:[["app-shift-comments"]],decls:15,vars:8,consts:[[3,"pageTitle"],["loading",""],[4,"ngIf","ngIfElse"],[3,"translucent"],["color","primary"],["text","Back","defaultHref","/shifts/list",2,"font-family","Quicksand, sans-serif","font-size","0.8rem"],[4,"ngIf"],["slot","end"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["slot","end","name","chatbubbles-outline"],[2,"padding","2rem","margin-top","3rem"],[1,"ion-text-center"],[2,"position","absolute","left","45%","right","45%"],[4,"ngFor","ngForOf"],["detail","true",1,"item",3,"routerLink"],["class","item","detail","true",3,"routerLink",4,"ngIf"],[1,"item"],["class","item",4,"ngIf"],["lines","none",1,"item"],["color","medium","position","stacked"],["lines","none"],["color","light",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["slot","start","name","add-circle-outline"]],template:function(t,n){if(1&t&&(a.Jb(0,"app-header",0),a.Nb(1,"ion-content"),a.xc(2,u,6,0,"ng-template",null,1,a.yc),a.xc(4,M,2,1,"div",2),a.Mb(),a.Nb(5,"ion-footer",3),a.Nb(6,"ion-toolbar",4),a.Nb(7,"ion-buttons"),a.Jb(8,"ion-back-button",5),a.Mb(),a.xc(9,N,5,3,"ion-title",6),a.Nb(10,"ion-buttons",7),a.Nb(11,"ion-button",8),a.Nb(12,"ion-label"),a.zc(13,"Messages"),a.Mb(),a.Jb(14,"ion-icon",9),a.Mb(),a.Mb(),a.Mb(),a.Mb()),2&t){const t=a.rc(3);a.dc("pageTitle",a.hc(6,C)),a.yb(4),a.dc("ngIf",n.comments)("ngIfElse",t),a.yb(1),a.dc("translucent",!0),a.yb(4),a.dc("ngIf",n.shift),a.yb(2),a.dc("routerLink",a.hc(7,k))}},directives:[m.a,s.q,e.m,s.s,s.V,s.i,s.f,s.g,s.h,s.eb,c.g,s.A,s.u,s.j,s.l,s.n,s.k,s.O,e.l,s.x,s.Q,s.T],pipes:[e.e],styles:[".item[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;font-size:.8rem}"]}),t})()}];let z=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(n){return new(n||t)},imports:[[c.i.forChild(I)],c.i]}),t})();var v=i("jICo");let S=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(n){return new(n||t)},imports:[[e.c,o.d,s.W,z,v.a]]}),t})()}}]);