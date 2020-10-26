!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[50,56],{"4J71":function(n,i,o){"use strict";o.d(i,"a",(function(){return b}));var r=o("fXoL"),c=o("TEn/"),b=function(){var n=function(){function n(){t(this,n),this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}return e(n,[{key:"ngOnInit",value:function(){}}]),n}();return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=r.Cb({type:n,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(t,n){1&t&&(r.Nb(0,"ion-header",0),r.Nb(1,"ion-toolbar",1),r.Nb(2,"ion-buttons",2),r.Jb(3,"ion-menu-button"),r.Mb(),r.Nb(4,"ion-title",3),r.zc(5),r.Mb(),r.Nb(6,"ion-buttons",4),r.Jb(7,"ion-img",5),r.Mb(),r.Mb(),r.Mb()),2&t&&(r.dc("translucent",!0),r.yb(5),r.Bc(" ",n.pageTitle," "))},directives:[c.t,c.V,c.i,c.E,c.T,c.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),n}()},dzLr:function(n,i,o){"use strict";o.r(i),o.d(i,"DeletePageModule",(function(){return k}));var r=o("ofXK"),c=o("3Pt+"),b=o("TEn/"),s=o("tyNb"),a=o("fXoL"),f=o("0IKw"),u=o("4J71");function l(t,n){1&t&&(a.Nb(0,"ion-label"),a.zc(1,"Primary"),a.Mb())}function d(t,n){1&t&&(a.Nb(0,"ion-label"),a.zc(1,"Secondary"),a.Mb())}function h(t,n){if(1&t){var e=a.Ob();a.Nb(0,"ion-item"),a.Nb(1,"ion-col",8),a.Nb(2,"ion-button",9),a.Ub("click",(function(){a.sc(e);var t=a.Wb();return t.onDeleteShift(t.shift.id)})),a.Nb(3,"ion-label"),a.zc(4,"Delete"),a.Mb(),a.Mb(),a.Mb(),a.Mb()}}function p(t,n){1&t&&(a.Nb(0,"ion-item"),a.Nb(1,"ion-label"),a.zc(2,"Shift has been approved and can not be deleted. Please contact manager to have shift removed."),a.Mb(),a.Mb())}var m,y,M,g=function(){return["Delete Shift"]},N=function(){return["/shifts/add"]},v=[{path:"",component:(m=function(){function n(e,i){t(this,n),this.shiftsService=e,this.route=i}return e(n,[{key:"ngOnInit",value:function(){var t=this,n=this.route.snapshot.paramMap.get("id");this.shiftsService.getShiftById(n).subscribe((function(n){return t.shift=n}))}},{key:"onDeleteShift",value:function(t){this.shiftsService.deleteShift(t).subscribe((function(t){return console.log(JSON.stringify(t))}))}}]),n}(),m.\u0275fac=function(t){return new(t||m)(a.Ib(f.a),a.Ib(s.a))},m.\u0275cmp=a.Cb({type:m,selectors:[["app-delete"]],decls:38,vars:21,consts:[[3,"pageTitle"],[4,"ngIf"],[3,"translucent"],["color","primary"],["slot","start"],["text","Back","defaultHref","/users/profile",2,"font-family","Quicksand, sans-serif","font-size","0.8rem"],[2,"font-size","0.8rem","font-family","Quicksand, sans-serif",3,"routerLink"],["name","add-circle-outline","slot","end"],["size","12"],["type","submit",3,"click"]],template:function(t,n){1&t&&(a.Jb(0,"app-header",0),a.Nb(1,"ion-content"),a.Nb(2,"ion-card"),a.Nb(3,"ion-card-header"),a.zc(4,"Are you sure you want to delete this Shift?"),a.Mb(),a.Nb(5,"ion-card-subtitle"),a.zc(6),a.Xb(7,"date"),a.Mb(),a.Nb(8,"ion-card-content"),a.Nb(9,"ion-list"),a.Nb(10,"ion-item"),a.Nb(11,"ion-label"),a.zc(12,"Start:"),a.Mb(),a.Nb(13,"ion-label"),a.zc(14),a.Xb(15,"date"),a.Mb(),a.Mb(),a.Nb(16,"ion-item"),a.Nb(17,"ion-label"),a.zc(18,"End:"),a.Mb(),a.Nb(19,"ion-label"),a.zc(20),a.Xb(21,"date"),a.Mb(),a.Mb(),a.Nb(22,"ion-item"),a.xc(23,l,2,0,"ion-label",1),a.xc(24,d,2,0,"ion-label",1),a.Mb(),a.xc(25,h,5,0,"ion-item",1),a.xc(26,p,3,0,"ion-item",1),a.Nb(27,"ion-item"),a.zc(28),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(29,"ion-footer",2),a.Nb(30,"ion-toolbar",3),a.Nb(31,"ion-buttons",4),a.Jb(32,"ion-back-button",5),a.Mb(),a.Nb(33,"ion-buttons"),a.Nb(34,"ion-button",6),a.Jb(35,"ion-icon",7),a.Nb(36,"ion-label"),a.zc(37,"Add Shift"),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb()),2&t&&(a.dc("pageTitle",a.hc(19,g)),a.yb(6),a.Ac(a.Yb(7,11,n.shift.start)),a.yb(8),a.Ac(a.Zb(15,13,n.shift.start,"shortTime")),a.yb(6),a.Ac(a.Zb(21,16,n.shift.end,"shortTime")),a.yb(3),a.dc("ngIf","primary"===n.shift.ShiftStatus),a.yb(1),a.dc("ngIf","secondary"===n.shift.ShiftStatus),a.yb(1),a.dc("ngIf",!1===n.shift.isApproved),a.yb(1),a.dc("ngIf",!0===n.shift.isApproved),a.yb(2),a.Ac(n.shift.isApproved),a.yb(1),a.dc("translucent",!0),a.yb(5),a.dc("routerLink",a.hc(20,N)))},directives:[u.a,b.q,b.j,b.l,b.m,b.k,b.B,b.x,b.A,r.m,b.s,b.V,b.i,b.f,b.g,b.h,b.eb,s.g,b.u,b.p],pipes:[r.e],styles:[""]}),m)}],w=((y=function n(){t(this,n)}).\u0275mod=a.Gb({type:y}),y.\u0275inj=a.Fb({factory:function(t){return new(t||y)},imports:[[s.i.forChild(v)],s.i]}),y),S=o("jICo"),k=((M=function n(){t(this,n)}).\u0275mod=a.Gb({type:M}),M.\u0275inj=a.Fb({factory:function(t){return new(t||M)},imports:[[r.c,c.d,b.W,w,S.a]]}),M)},jICo:function(n,e,i){"use strict";i.d(e,"a",(function(){return b}));var o=i("ofXK"),r=i("TEn/"),c=i("fXoL"),b=function(){var n=function n(){t(this,n)};return n.\u0275mod=c.Gb({type:n}),n.\u0275inj=c.Fb({factory:function(t){return new(t||n)},imports:[[o.c,r.W]]}),n}()}}])}();