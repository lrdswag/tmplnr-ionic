!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function e(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[53,56],{"4J71":function(t,i,o){"use strict";o.d(i,"a",(function(){return a}));var r=o("fXoL"),s=o("TEn/"),a=function(){var t=function(){function t(){n(this,t),this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}return e(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(n,t){1&n&&(r.Nb(0,"ion-header",0),r.Nb(1,"ion-toolbar",1),r.Nb(2,"ion-buttons",2),r.Jb(3,"ion-menu-button"),r.Mb(),r.Nb(4,"ion-title",3),r.zc(5),r.Mb(),r.Nb(6,"ion-buttons",4),r.Jb(7,"ion-img",5),r.Mb(),r.Mb(),r.Mb()),2&n&&(r.dc("translucent",!0),r.yb(5),r.Bc(" ",t.pageTitle," "))},directives:[s.t,s.V,s.i,s.E,s.T,s.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),t}()},jICo:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var o=i("ofXK"),r=i("TEn/"),s=i("fXoL"),a=function(){var t=function t(){n(this,t)};return t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({factory:function(n){return new(n||t)},imports:[[o.c,r.W]]}),t}()},pu5v:function(t,i,o){"use strict";o.r(i),o.d(i,"ListCommentsPageModule",(function(){return Q}));var r=o("ofXK"),s=o("3Pt+"),a=o("TEn/"),c=o("tyNb"),b=o("mrSG"),f=o("vkgz"),u=o("fXoL"),l=o("/u1d"),m=o("4J71");function d(n,t){1&n&&(u.Nb(0,"ion-card",12),u.Nb(1,"ion-card-header"),u.Nb(2,"ion-card-title",13),u.zc(3,"Loading Comments..."),u.Mb(),u.Mb(),u.Nb(4,"ion-card-content"),u.Jb(5,"ion-spinner",14),u.Mb(),u.Mb())}var h=function(n){return["/shifts/",n,"on-duty"]};function p(n,t){if(1&n&&(u.Nb(0,"ion-item",19),u.Nb(1,"ion-label"),u.Nb(2,"strong"),u.zc(3,"On Duty:"),u.Mb(),u.Mb(),u.Nb(4,"ion-label"),u.zc(5),u.Mb(),u.Mb()),2&n){var e=u.Wb(2).$implicit;u.dc("routerLink",u.ic(3,h,e.shift.onDuty.id)),u.yb(5),u.Cc("",e.shift.onDuty.firstName," ",e.shift.onDuty.lastName,"")}}var g=function(n){return["/shifts/",n,"details"]};function y(n,t){if(1&n&&(u.Nb(0,"ion-card"),u.Nb(1,"ion-item",17),u.Nb(2,"ion-label"),u.Nb(3,"strong"),u.zc(4,"Comment Date:"),u.Mb(),u.Mb(),u.Nb(5,"ion-label"),u.zc(6),u.Xb(7,"date"),u.Mb(),u.Mb(),u.Nb(8,"ion-item",18),u.Nb(9,"ion-label"),u.Nb(10,"strong"),u.zc(11,"Shift Date:"),u.Mb(),u.Mb(),u.Nb(12,"ion-label"),u.zc(13),u.Xb(14,"date"),u.Mb(),u.Mb(),u.Nb(15,"ion-item",19),u.Nb(16,"ion-label"),u.Nb(17,"strong"),u.zc(18,"Comment By:"),u.Mb(),u.Mb(),u.Nb(19,"ion-label"),u.zc(20),u.Mb(),u.Mb(),u.xc(21,p,6,5,"ion-item",20),u.Nb(22,"ion-item",21),u.Nb(23,"ion-label",22),u.zc(24,"Comment:"),u.Mb(),u.Nb(25,"ion-text"),u.zc(26),u.Mb(),u.Mb(),u.Nb(27,"ion-item",23),u.Nb(28,"ion-label",24),u.zc(29,"Related Shift"),u.Mb(),u.Mb(),u.Mb()),2&n){var e=u.Wb().$implicit;u.yb(6),u.Ac(u.Zb(7,8,e.dateOfComment,"dd/MMM hh:M a")),u.yb(7),u.Ac(u.Zb(14,11,e.shift.start,"dd/MMM")),u.yb(2),u.dc("routerLink",u.ic(14,h,e.authoredBy.id)),u.yb(5),u.Cc("",e.authoredBy.firstName," ",e.authoredBy.lastName,""),u.yb(1),u.dc("ngIf",e.shift.onDuty),u.yb(5),u.Ac(e.comment),u.yb(1),u.dc("routerLink",u.ic(16,g,e.shift.id))}}function M(n,t){if(1&n&&(u.Nb(0,"div"),u.xc(1,y,30,18,"ion-card",16),u.Mb()),2&n){var e=t.$implicit;u.yb(1),u.dc("ngIf",!1===e.isPrivate)}}function N(n,t){if(1&n&&(u.Nb(0,"ion-list"),u.xc(1,M,2,1,"div",15),u.Mb()),2&n){var e=u.Wb();u.yb(1),u.dc("ngForOf",e.comments)}}var v,k,z,C=function(){return["All Comments"]},w=function(){return["/shifts/add"]},L=function(){return["/messaging"]},x=[{path:"",component:(v=function(){function t(e,i){n(this,t),this.commentsService=e,this.alertCtrl=i}return e(t,[{key:"ngOnInit",value:function(){var n=this;this.commentsService.loadAllComments().pipe(Object(f.a)((function(t){return Object(b.a)(n,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(0!==t.length){n.next=6;break}return n.next=3,this.alertCtrl.create({header:"No Comments Found!",message:"No shift-comments were found in the database.",buttons:["OK"]});case 3:return e=n.sent,n.next=6,e.present();case 6:case"end":return n.stop()}}),n,this)})))}))).subscribe((function(t){return n.comments=t}))}}]),t}(),v.\u0275fac=function(n){return new(n||v)(u.Ib(l.a),u.Ib(a.b))},v.\u0275cmp=u.Cb({type:v,selectors:[["app-list-comments"]],decls:19,vars:9,consts:[[3,"pageTitle"],["loading",""],[4,"ngIf","ngIfElse"],[3,"translucent"],["color","primary"],["slot","start"],["text","Back","defaultHref","/shifts/list",2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],["color","light",2,"font-size","0.8rem","font-family","Quicksand, sans-serif",3,"routerLink"],["name","add-circle-outline","slot","start"],["slot","end"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["slot","end","name","chatbubbles-outline"],[2,"padding","2rem","margin-top","3rem"],[1,"ion-text-center"],[2,"position","absolute","left","45%","right","45%"],[4,"ngFor","ngForOf"],[4,"ngIf"],["color","light",2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem"],["detail","true",2,"font-size","0.8rem","font-family","Quicksand, sans-serif",3,"routerLink"],["style","font-size: 0.8rem; font-family: Quicksand, sans-serif;","detail","true",3,"routerLink",4,"ngIf"],[2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],["position","stacked"],["lines","none","color","light","detail","true",3,"routerLink"],["color","secondary",2,"font-family","Quicksand, sans-serif","font-size","0.9rem","text-align","center"]],template:function(n,t){if(1&n&&(u.Jb(0,"app-header",0),u.Nb(1,"ion-content"),u.xc(2,d,6,0,"ng-template",null,1,u.yc),u.xc(4,N,2,1,"ion-list",2),u.Mb(),u.Nb(5,"ion-footer",3),u.Nb(6,"ion-toolbar",4),u.Nb(7,"ion-buttons",5),u.Jb(8,"ion-back-button",6),u.Mb(),u.Nb(9,"ion-title"),u.Nb(10,"ion-button",7),u.Nb(11,"ion-label"),u.zc(12,"Add Shift"),u.Mb(),u.Jb(13,"ion-icon",8),u.Mb(),u.Mb(),u.Nb(14,"ion-buttons",9),u.Nb(15,"ion-button",10),u.Nb(16,"ion-label"),u.zc(17,"Messages"),u.Mb(),u.Jb(18,"ion-icon",11),u.Mb(),u.Mb(),u.Mb(),u.Mb()),2&n){var e=u.rc(3);u.dc("pageTitle",u.hc(6,C)),u.yb(4),u.dc("ngIf",t.comments)("ngIfElse",e),u.yb(1),u.dc("translucent",!0),u.yb(5),u.dc("routerLink",u.hc(7,w)),u.yb(5),u.dc("routerLink",u.hc(8,L))}},directives:[m.a,a.q,r.m,a.s,a.V,a.i,a.f,a.g,a.T,a.h,a.eb,c.g,a.A,a.u,a.j,a.l,a.n,a.k,a.O,a.B,r.l,a.x,a.Q],pipes:[r.e],styles:[""]}),v)}],I=((k=function t(){n(this,t)}).\u0275mod=u.Gb({type:k}),k.\u0275inj=u.Fb({factory:function(n){return new(n||k)},imports:[[c.i.forChild(x)],c.i]}),k),O=o("jICo"),Q=((z=function t(){n(this,t)}).\u0275mod=u.Gb({type:z}),z.\u0275inj=u.Fb({factory:function(n){return new(n||z)},imports:[[r.c,s.d,a.W,I,O.a]]}),z)}}])}();