!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function t(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[42,56],{"4J71":function(e,o,i){"use strict";i.d(o,"a",(function(){return a}));var r=i("fXoL"),c=i("TEn/"),a=function(){var e=function(){function e(){n(this,e),this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}return t(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Cb({type:e,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(n,e){1&n&&(r.Nb(0,"ion-header",0),r.Nb(1,"ion-toolbar",1),r.Nb(2,"ion-buttons",2),r.Jb(3,"ion-menu-button"),r.Mb(),r.Nb(4,"ion-title",3),r.zc(5),r.Mb(),r.Nb(6,"ion-buttons",4),r.Jb(7,"ion-img",5),r.Mb(),r.Mb(),r.Mb()),2&n&&(r.dc("translucent",!0),r.yb(5),r.Bc(" ",e.pageTitle," "))},directives:[c.t,c.V,c.i,c.E,c.T,c.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),e}()},Teju:function(e,o,i){"use strict";i.r(o),i.d(o,"ReadPageModule",(function(){return T}));var r=i("ofXK"),c=i("3Pt+"),a=i("TEn/"),s=i("tyNb"),b=i("mrSG"),u=i("lJxs"),l=i("vkgz"),f=i("fXoL"),m=i("/u1d"),d=i("4J71"),p=i("nnDH");function h(n,e){1&n&&(f.Nb(0,"ion-card",13),f.Nb(1,"ion-card-header"),f.Nb(2,"ion-card-title",14),f.zc(3,"Loading..."),f.Mb(),f.Mb(),f.Nb(4,"ion-card-content"),f.Jb(5,"ion-spinner",15),f.Mb(),f.Mb())}function g(n,e){1&n&&(f.Nb(0,"ion-label"),f.zc(1,"No Subject"),f.Mb())}function M(n,e){if(1&n&&(f.Nb(0,"ion-label"),f.zc(1),f.Mb()),2&n){var t=f.Wb(2);f.yb(1),f.Ac(t.comment.subject)}}var N=function(n){return["/messaging/",n,"send-to"]};function y(n,e){if(1&n){var t=f.Ob();f.Nb(0,"ion-card"),f.Nb(1,"ion-card-header"),f.Nb(2,"ion-label"),f.Nb(3,"strong"),f.zc(4,"From:"),f.Mb(),f.zc(5),f.Mb(),f.Mb(),f.Nb(6,"ion-card-content"),f.Nb(7,"ion-list"),f.Nb(8,"ion-item",16),f.Nb(9,"ion-col"),f.Nb(10,"ion-label"),f.Nb(11,"strong"),f.zc(12,"Subject:"),f.Mb(),f.Mb(),f.Mb(),f.Nb(13,"ion-col"),f.xc(14,g,2,0,"ion-label",17),f.xc(15,M,2,1,"ion-label",17),f.Mb(),f.Mb(),f.Nb(16,"ion-item",16),f.Nb(17,"ion-col"),f.Nb(18,"ion-label"),f.Nb(19,"strong"),f.zc(20,"Received:"),f.Mb(),f.Mb(),f.Mb(),f.Nb(21,"ion-col"),f.Nb(22,"ion-label"),f.zc(23),f.Xb(24,"date"),f.Mb(),f.Mb(),f.Mb(),f.Nb(25,"ion-item",18),f.Nb(26,"ion-label",19),f.Nb(27,"strong"),f.zc(28,"Message:"),f.Mb(),f.Mb(),f.Mb(),f.Nb(29,"ion-item",20),f.Nb(30,"ion-text"),f.zc(31),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Nb(32,"ion-item"),f.Nb(33,"ion-col"),f.Nb(34,"ion-button",21),f.Jb(35,"ion-icon",22),f.Jb(36,"ion-ripple-effect"),f.Nb(37,"ion-label"),f.zc(38,"Reply"),f.Mb(),f.Mb(),f.Mb(),f.Nb(39,"ion-col"),f.Nb(40,"ion-button",23),f.Ub("click",(function(){f.sc(t);var n=f.Wb();return n.presentActionSheet(n.comment.id)})),f.Jb(41,"ion-ripple-effect"),f.Jb(42,"ion-icon",24),f.Nb(43,"ion-label"),f.zc(44,"DELETE"),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Mb()}if(2&n){var o=f.Wb();f.yb(5),f.Cc(" ",o.comment.authoredBy.firstName," ",o.comment.authoredBy.lastName,""),f.yb(9),f.dc("ngIf",!o.comment.subject),f.yb(1),f.dc("ngIf",o.comment.subject),f.yb(8),f.Ac(f.Zb(24,7,o.comment.dateOfComment,"medium")),f.yb(8),f.Ac(o.comment.comment),f.yb(3),f.dc("routerLink",f.ic(10,N,o.comment.authoredBy.id))}}var v,k,z,w=function(){return["Read Message"]},J=function(){return["/messaging"]},j=function(){return["/messaging/send"]},I=function(){return["/shifts"]},x=[{path:"",component:(v=function(){function e(t,o,i,r){n(this,e),this.commentsService=t,this.route=o,this.router=i,this.actionSheet=r}return t(e,[{key:"ngOnInit",value:function(){var n=this,e=this.route.snapshot.paramMap.get("id");this.commentsService.getCommentById(e).subscribe((function(e){return n.comment=e})),this.commentsService.markAsRead(e).subscribe((function(e){return n.comment=e}))}},{key:"presentActionSheet",value:function(n){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actionSheet.create({header:"Delete Message?",animated:!0,buttons:[{text:"OK",icon:"checkbox-outline",handler:function(){o.onDeleteMessage(n)}},{text:"Cancel",icon:"cancel",role:"cancel"}]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"onDeleteMessage",value:function(n){var e=this;this.commentsService.deleteComment(n).pipe(Object(u.a)((function(){return alert("Message from ".concat(e.comment.authoredBy.firstName," ").concat(e.comment.authoredBy.lastName," Deleted"))})),Object(l.a)((function(n){return e.router.navigateByUrl("/messaging")}))).subscribe((function(n){return console.log(JSON.stringify(n))}))}}]),e}(),v.\u0275fac=function(n){return new(n||v)(f.Ib(m.a),f.Ib(s.a),f.Ib(s.f),f.Ib(a.a))},v.\u0275cmp=f.Cb({type:v,selectors:[["app-read"]],decls:23,vars:11,consts:[[3,"pageTitle"],["loading",""],[4,"ngIf","ngIfElse"],[3,"translucent"],["color","primary"],["slot","start"],[2,"font-size","0.8rem","font-family","Quicksand, sans-serif",3,"routerLink"],["slot","start","name","chatbubbles-outline"],["color","light",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["slot","start","name","mail-unread-outline"],["slot","end"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["slot","end","name","calendar-outline"],[2,"padding","2rem","margin-top","3rem"],[1,"ion-text-center"],[2,"position","absolute","left","45%","right","45%"],[2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],[4,"ngIf"],["lines","none"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem"],["lines","none",2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],["shape","round","size","block","color","success",3,"routerLink"],["slot","start","name","return-down-back-outline"],["shape","round","size","block","color","danger",3,"click"],["slot","start","name","trash-bin-outline"]],template:function(n,e){if(1&n&&(f.Jb(0,"app-header",0),f.Nb(1,"ion-content"),f.Jb(2,"app-header-banner"),f.xc(3,h,6,0,"ng-template",null,1,f.yc),f.xc(5,y,45,12,"ion-card",2),f.Mb(),f.Nb(6,"ion-footer",3),f.Nb(7,"ion-toolbar",4),f.Nb(8,"ion-buttons",5),f.Nb(9,"ion-button",6),f.Jb(10,"ion-icon",7),f.Nb(11,"ion-label"),f.zc(12,"Messages"),f.Mb(),f.Mb(),f.Mb(),f.Nb(13,"ion-title"),f.Nb(14,"ion-button",8),f.Jb(15,"ion-icon",9),f.Nb(16,"ion-label"),f.zc(17,"New Message"),f.Mb(),f.Mb(),f.Mb(),f.Nb(18,"ion-buttons",10),f.Nb(19,"ion-button",11),f.Jb(20,"ion-icon",12),f.Nb(21,"ion-label"),f.zc(22,"Shifts"),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Mb()),2&n){var t=f.rc(4);f.dc("pageTitle",f.hc(7,w)),f.yb(5),f.dc("ngIf",e.comment)("ngIfElse",t),f.yb(1),f.dc("translucent",!0),f.yb(3),f.dc("routerLink",f.hc(8,J)),f.yb(5),f.dc("routerLink",f.hc(9,j)),f.yb(5),f.dc("routerLink",f.hc(10,I))}},directives:[d.a,a.q,p.a,r.m,a.s,a.V,a.i,a.h,a.eb,s.g,a.u,a.A,a.T,a.j,a.l,a.n,a.k,a.O,a.B,a.x,a.p,a.Q,a.H],pipes:[r.e],styles:[""]}),v)}],C=((k=function e(){n(this,e)}).\u0275mod=f.Gb({type:k}),k.\u0275inj=f.Fb({factory:function(n){return new(n||k)},imports:[[s.i.forChild(x)],s.i]}),k),L=i("jICo"),T=((z=function e(){n(this,e)}).\u0275mod=f.Gb({type:z}),z.\u0275inj=f.Fb({factory:function(n){return new(n||z)},imports:[[r.c,c.d,a.W,C,L.a]]}),z)},jICo:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var i=o("ofXK"),r=o("TEn/"),c=o("fXoL"),a=function(){var e=function e(){n(this,e)};return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(n){return new(n||e)},imports:[[i.c,r.W]]}),e}()},nnDH:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var i=o("fXoL"),r=o("TEn/"),c=function(){var e=function e(){n(this,e),this.headerBanner="https://media.publit.io/file/header-D.png"};return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Cb({type:e,selectors:[["app-header-banner"]],decls:1,vars:1,consts:[[1,"header-img",3,"src"]],template:function(n,e){1&n&&i.Jb(0,"ion-img",0),2&n&&i.dc("src",e.headerBanner)},directives:[r.v],styles:[""]}),e}()}}])}();