!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function i(n,i,e){return i&&t(n.prototype,i),e&&t(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[44,56],{"4J71":function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));var r=o("fXoL"),a=o("TEn/"),s=function(){var t=function(){function t(){n(this,t),this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}return i(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(n,t){1&n&&(r.Nb(0,"ion-header",0),r.Nb(1,"ion-toolbar",1),r.Nb(2,"ion-buttons",2),r.Jb(3,"ion-menu-button"),r.Mb(),r.Nb(4,"ion-title",3),r.zc(5),r.Mb(),r.Nb(6,"ion-buttons",4),r.Jb(7,"ion-img",5),r.Mb(),r.Mb(),r.Mb()),2&n&&(r.dc("translucent",!0),r.yb(5),r.Bc(" ",t.pageTitle," "))},directives:[a.t,a.V,a.i,a.E,a.T,a.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),t}()},alTJ:function(t,e,o){"use strict";o.r(e),o.d(e,"ContainerPageModule",(function(){return S}));var r=o("ofXK"),a=o("3Pt+"),s=o("TEn/"),c=o("tyNb"),b=o("fXoL"),l=o("0IKw"),u=o("4J71"),f=o("nnDH");function d(n,t){1&n&&(b.Nb(0,"ion-card",20),b.Nb(1,"ion-card-header"),b.Nb(2,"ion-card-title",21),b.zc(3,"Loading Shifts..."),b.Mb(),b.Mb(),b.Nb(4,"ion-card-content"),b.Jb(5,"ion-spinner",22),b.Mb(),b.Mb())}function p(n,t){1&n&&b.Jb(0,"ion-label")}function h(n,t){if(1&n){var i=b.Ob();b.Nb(0,"div"),b.Nb(1,"ion-avatar"),b.Nb(2,"ion-img",24),b.Ub("ionImgDidLoad",(function(){return b.sc(i),b.Wb(2).isLoading=!1})),b.Mb(),b.Mb(),b.Nb(3,"ion-label",25),b.Jb(4,"ion-spinner"),b.Mb(),b.Nb(5,"ion-label"),b.zc(6),b.Xb(7,"date"),b.Mb(),b.Nb(8,"ion-label"),b.zc(9),b.Xb(10,"date"),b.Mb(),b.xc(11,p,1,0,"ion-label",26),b.Mb()}if(2&n){var e=b.Wb().$implicit,o=b.Wb();b.yb(2),b.ec("src",e.onDuty.profilePicture),b.dc("hidden",o.isLoading),b.yb(1),b.dc("hidden",!o.isLoading),b.yb(3),b.Ac(b.Zb(7,6,e.start,"shortTime")),b.yb(3),b.Ac(b.Zb(10,9,e.end,"shortTime")),b.yb(2),b.dc("ngIf","primary"===e.ShiftStatus)}}function m(n,t){if(1&n&&(b.Nb(0,"ion-item"),b.xc(1,h,12,12,"div",23),b.Mb()),2&n){var i=b.Wb(),e=b.rc(3);b.yb(1),b.dc("ngIf",i.shifts)("ngIfElse",e)}}var g,M,N,v=function(){return["Shift Dashboard"]},y=function(){return["/shifts/calendar/draft"]},J=function(){return["/shifts/calendar/approved"]},L=function(){return["/comments"]},k=function(){return["/shifts/list"]},w=function(){return["/shifts/add"]},C=function(){return["/home"]},T=function(){return["/users/profile"]},z=[{path:"",component:(g=function(){function t(i){n(this,t),this.shiftsService=i,this.isLoading=!0,this.date=new Date}return i(t,[{key:"ngOnInit",value:function(){var n=this;this.shiftsService.loadLiveShifts().subscribe((function(t){return n.shifts=t})),setInterval((function(){n.date=new Date}),1e3)}}]),t}(),g.\u0275fac=function(n){return new(n||g)(b.Ib(l.a))},g.\u0275cmp=b.Cb({type:g,selectors:[["app-container"]],decls:58,vars:22,consts:[[3,"pageTitle"],["loading",""],[4,"ngFor","ngForOf"],[1,"list-header"],["detail","true","lines","indent",3,"routerLink"],["src","assets/icon8/icons8-schedule.svg"],[1,"list-label"],["src","assets/icon8/icons8-today.svg"],["src","assets/icon8/icons8-calendar-document-150.png"],["src","assets/icon8/icons8-calendar.svg"],["detail","true","lines","none",3,"routerLink"],["src","assets/icon8/icons8-add.svg"],[3,"translucent"],["color","primary"],["slot","start"],[1,"list-label",2,"font-size","0.8rem","font-family","Quicksand, sans-serif",3,"routerLink"],["slot","start","name","chatbubbles-outline"],[2,"font-family","Quicksand, sans-serif"],["slot","end"],["slot","end","name","person-circle-outline"],[2,"padding","2rem","margin-top","3rem"],[1,"ion-text-center"],[2,"position","absolute","left","45%","right","45%"],[4,"ngIf","ngIfElse"],[3,"hidden","src","ionImgDidLoad"],[3,"hidden"],[4,"ngIf"]],template:function(n,t){1&n&&(b.Jb(0,"app-header",0),b.Nb(1,"ion-content"),b.xc(2,d,6,0,"ng-template",null,1,b.yc),b.Jb(4,"app-header-banner"),b.xc(5,m,2,2,"ion-item",2),b.Nb(6,"ion-card"),b.Nb(7,"ion-list"),b.Nb(8,"ion-item-divider",3),b.zc(9,"Calendars"),b.Mb(),b.Nb(10,"ion-item",4),b.Nb(11,"ion-avatar"),b.Jb(12,"ion-img",5),b.Mb(),b.Jb(13,"ion-ripple-effect"),b.Nb(14,"ion-label",6),b.zc(15,"Pending Approval"),b.Mb(),b.Mb(),b.Nb(16,"ion-item",4),b.Nb(17,"ion-avatar"),b.Jb(18,"ion-img",7),b.Mb(),b.Jb(19,"ion-ripple-effect"),b.Nb(20,"ion-label",6),b.zc(21,"Approved"),b.Mb(),b.Mb(),b.Nb(22,"ion-item",6),b.zc(23,"Options"),b.Mb(),b.Nb(24,"ion-item",4),b.Nb(25,"ion-avatar"),b.Jb(26,"ion-img",8),b.Mb(),b.Jb(27,"ion-ripple-effect"),b.Nb(28,"ion-label",6),b.zc(29,"Shift Comments"),b.Mb(),b.Mb(),b.Nb(30,"ion-item",4),b.Nb(31,"ion-avatar"),b.Jb(32,"ion-img",9),b.Mb(),b.Jb(33,"ion-ripple-effect"),b.Nb(34,"ion-label",6),b.zc(35,"Shifts List"),b.Mb(),b.Mb(),b.Nb(36,"ion-item",10),b.Nb(37,"ion-avatar"),b.Jb(38,"ion-img",11),b.Mb(),b.Jb(39,"ion-ripple-effect"),b.Nb(40,"ion-label",6),b.zc(41," Add New Shift "),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Nb(42,"ion-footer",12),b.Nb(43,"ion-toolbar",13),b.Nb(44,"ion-buttons",14),b.Nb(45,"ion-button",15),b.Jb(46,"ion-icon",16),b.Nb(47,"ion-label"),b.zc(48,"Messages"),b.Mb(),b.Mb(),b.Mb(),b.Nb(49,"ion-title"),b.Nb(50,"ion-label",17),b.zc(51),b.Xb(52,"date"),b.Mb(),b.Mb(),b.Nb(53,"ion-buttons",18),b.Nb(54,"ion-button",15),b.Jb(55,"ion-icon",19),b.Nb(56,"ion-label"),b.zc(57,"Profile"),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb()),2&n&&(b.dc("pageTitle",b.hc(14,v)),b.yb(5),b.dc("ngForOf",t.shifts),b.yb(5),b.dc("routerLink",b.hc(15,y)),b.yb(6),b.dc("routerLink",b.hc(16,J)),b.yb(8),b.dc("routerLink",b.hc(17,L)),b.yb(6),b.dc("routerLink",b.hc(18,k)),b.yb(6),b.dc("routerLink",b.hc(19,w)),b.yb(6),b.dc("translucent",!0),b.yb(3),b.dc("routerLink",b.hc(20,C)),b.yb(6),b.Bc(" ",b.Zb(52,11,t.date,"shortTime")," "),b.yb(3),b.dc("routerLink",b.hc(21,T)))},directives:[u.a,s.q,f.a,r.l,s.j,s.B,s.y,s.x,s.eb,c.g,s.e,s.v,s.H,s.A,s.s,s.V,s.i,s.h,s.u,s.T,s.l,s.n,s.k,s.O,r.m],pipes:[r.e],styles:[".list-label[_ngcontent-%COMP%]{font-size:.8rem}.list-header[_ngcontent-%COMP%], .list-label[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif}.list-header[_ngcontent-%COMP%]{color:#4c5367}"]}),g)}],I=((M=function t(){n(this,t)}).\u0275mod=b.Gb({type:M}),M.\u0275inj=b.Fb({factory:function(n){return new(n||M)},imports:[[c.i.forChild(z)],c.i]}),M),O=o("jICo"),P=o("tk/3"),D=o("WR+W"),S=((N=function t(){n(this,t)}).\u0275mod=b.Gb({type:N}),N.\u0275inj=b.Fb({factory:function(n){return new(n||N)},providers:[{provide:P.a,useClass:D.a,multi:!0}],imports:[[r.c,a.d,s.W,I,O.a]]}),N)},jICo:function(t,i,e){"use strict";e.d(i,"a",(function(){return s}));var o=e("ofXK"),r=e("TEn/"),a=e("fXoL"),s=function(){var t=function t(){n(this,t)};return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(n){return new(n||t)},imports:[[o.c,r.W]]}),t}()},nnDH:function(t,i,e){"use strict";e.d(i,"a",(function(){return a}));var o=e("fXoL"),r=e("TEn/"),a=function(){var t=function t(){n(this,t),this.headerBanner="https://media.publit.io/file/header-D.png"};return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Cb({type:t,selectors:[["app-header-banner"]],decls:1,vars:1,consts:[[1,"header-img",3,"src"]],template:function(n,t){1&n&&o.Jb(0,"ion-img",0),2&n&&o.dc("src",t.headerBanner)},directives:[r.v],styles:[""]}),t}()}}])}();