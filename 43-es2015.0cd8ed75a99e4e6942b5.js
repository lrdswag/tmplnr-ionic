(window.webpackJsonp=window.webpackJsonp||[]).push([[43,56],{"4J71":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var i=e("fXoL"),o=e("TEn/");let r=(()=>{class t{constructor(){this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Cb({type:t,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(t,n){1&t&&(i.Nb(0,"ion-header",0),i.Nb(1,"ion-toolbar",1),i.Nb(2,"ion-buttons",2),i.Jb(3,"ion-menu-button"),i.Mb(),i.Nb(4,"ion-title",3),i.zc(5),i.Mb(),i.Nb(6,"ion-buttons",4),i.Jb(7,"ion-img",5),i.Mb(),i.Mb(),i.Mb()),2&t&&(i.dc("translucent",!0),i.yb(5),i.Bc(" ",n.pageTitle," "))},directives:[o.t,o.V,o.i,o.E,o.T,o.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),t})()},PRRL:function(t,n,e){"use strict";e.r(n),e.d(n,"EditPageModule",(function(){return J}));var i=e("ofXK"),o=e("3Pt+"),r=e("TEn/"),s=e("tyNb"),a=e("vkgz"),c=e("fXoL"),b=e("0IKw"),l=e("4J71"),d=e("nnDH");function f(t,n){1&t&&(c.Nb(0,"ion-card",12),c.Nb(1,"ion-card-header"),c.Nb(2,"ion-card-title",13),c.zc(3,"Loading Shift..."),c.Mb(),c.Mb(),c.Nb(4,"ion-card-content"),c.Jb(5,"ion-spinner",14),c.Mb(),c.Mb())}function u(t,n){1&t&&(c.Nb(0,"ion-item",19),c.Nb(1,"ion-col",28),c.Nb(2,"ion-button",29),c.Jb(3,"ion-icon",30),c.Nb(4,"ion-label"),c.zc(5,"Submit Changes"),c.Mb(),c.Mb(),c.Mb(),c.Mb())}function m(t,n){1&t&&(c.Nb(0,"ion-item"),c.Nb(1,"ion-text",31),c.zc(2," This shift has been approved and can not be edited. Please contact your manager if you require any changes to be made to this shift. "),c.Mb(),c.Mb())}function h(t,n){if(1&t){const t=c.Ob();c.Nb(0,"ion-card"),c.Nb(1,"form",15),c.Ub("ngSubmit",(function(){return c.sc(t),c.Wb().onEditShift()})),c.Jb(2,"ion-input",16),c.Jb(3,"ion-input",17),c.Jb(4,"ion-input",18),c.Nb(5,"ion-card-header",13),c.zc(6,"Edit Shift Form"),c.Mb(),c.Nb(7,"ion-card-content"),c.Nb(8,"ion-list"),c.Jb(9,"ion-item",19),c.Nb(10,"ion-item",20),c.Nb(11,"ion-label"),c.zc(12,"Start:"),c.Mb(),c.Jb(13,"ion-datetime",21),c.Mb(),c.Nb(14,"ion-item",20),c.Nb(15,"ion-label"),c.zc(16,"Finish:"),c.Mb(),c.Jb(17,"ion-datetime",22),c.Mb(),c.Jb(18,"ion-item",19),c.Nb(19,"ion-item",20),c.Nb(20,"ion-label"),c.zc(21,"Call Level"),c.Mb(),c.Nb(22,"ion-select",23),c.Nb(23,"ion-select-option",24),c.zc(24,"Primary"),c.Mb(),c.Nb(25,"ion-select-option",25),c.zc(26,"Secondary"),c.Mb(),c.Mb(),c.Mb(),c.Jb(27,"ion-item",19),c.xc(28,u,6,0,"ion-item",26),c.xc(29,m,3,0,"ion-item",27),c.Mb(),c.Mb(),c.Mb(),c.Mb()}if(2&t){const t=c.Wb();c.yb(1),c.dc("formGroup",t.form),c.yb(1),c.ec("value",t.shift.id),c.dc("ngModel",t.shift.id),c.yb(1),c.dc("ngModel",t.shift.isApproved),c.yb(1),c.ec("value",t.shift.onDuty.id),c.dc("ngModel",t.shift.onDuty.id),c.yb(9),c.dc("ngModel",t.shift.start),c.yb(4),c.dc("ngModel",t.shift.end),c.yb(5),c.dc("ngModel",t.shift.ShiftStatus),c.yb(6),c.dc("ngIf",!1===t.shift.isApproved),c.yb(1),c.dc("ngIf",!0===t.shift.isApproved)}}const p=function(){return["Edit Shift"]},g=function(){return["/shifts/add"]},M=function(){return["/messaging"]},y=[{path:"",component:(()=>{class t{constructor(t,n,e,i){this.shiftsService=t,this.route=n,this.fb=e,this.router=i,this.form=this.fb.group({id:["",o.l.required],start:["",o.l.required],end:["",o.l.required],ShiftStatus:["",o.l.required],isApproved:[!1],onDuty:["",o.l.required]})}ngOnInit(){const t=this.route.snapshot.paramMap.get("id");this.shiftsService.getShiftById(t).subscribe(t=>this.shift=t)}onEditShift(){if(this.form.valid&&this.form.dirty){const t=Object.assign(Object.assign({},this.shift),this.form.value);this.shiftsService.editShift(t).pipe(Object(a.a)(t=>this.router.navigateByUrl(`/shifts/${t.id}/details`))).subscribe(t=>console.log(JSON.stringify(t)))}}}return t.\u0275fac=function(n){return new(n||t)(c.Ib(b.a),c.Ib(s.a),c.Ib(o.a),c.Ib(s.f))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-edit"]],decls:20,vars:9,consts:[[3,"pageTitle"],["loading",""],[4,"ngIf","ngIfElse"],[3,"translucent"],["color","primary"],["slot","start"],["text","Back","defaultHref","/users/profile",2,"font-family","Quicksand, sans-serif","font-size","0.8rem"],["color","light",2,"font-size","0.8rem","font-family","Quicksand, sans-serif",3,"routerLink"],["name","add-circle-outline","slot","start"],["slot","end"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["name","chatbubbles-outline","slot","end"],[2,"padding","2rem","margin-top","3rem"],[1,"ion-text-center"],[2,"position","absolute","left","45%","right","45%"],[3,"formGroup","ngSubmit"],["type","hidden","formControlName","id",3,"ngModel","value"],["type","hidden","formControlName","isApproved","value","false",3,"ngModel"],["type","hidden","formControlName","onDuty",3,"ngModel","value"],["lines","none"],[2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],["picker-format","DD MMM YY h:mm A","formControlName","start","display-format","DD MMM YY h:mm A","minuteValues","00,15,30,45",3,"ngModel"],["picker-format","DD MMM YY h:mm A","formControlName","end","display-format","DD MMM YY h:mm A","minuteValues","00,15,30,45",3,"ngModel"],["formControlName","ShiftStatus",3,"ngModel"],["value","primary"],["value","secondary"],["lines","none",4,"ngIf"],[4,"ngIf"],["size","12"],["size","block","type","submit","color","success"],["slot","start","name","checkbox-outline"],["color","warning"]],template:function(t,n){if(1&t&&(c.Jb(0,"app-header",0),c.Nb(1,"ion-content"),c.Jb(2,"app-header-banner"),c.xc(3,f,6,0,"ng-template",null,1,c.yc),c.xc(5,h,30,11,"ion-card",2),c.Mb(),c.Nb(6,"ion-footer",3),c.Nb(7,"ion-toolbar",4),c.Nb(8,"ion-buttons",5),c.Jb(9,"ion-back-button",6),c.Mb(),c.Nb(10,"ion-title"),c.Nb(11,"ion-button",7),c.Nb(12,"ion-label"),c.zc(13,"Add Shift"),c.Mb(),c.Jb(14,"ion-icon",8),c.Mb(),c.Mb(),c.Nb(15,"ion-buttons",9),c.Nb(16,"ion-button",10),c.Nb(17,"ion-label"),c.zc(18,"Messages"),c.Mb(),c.Jb(19,"ion-icon",11),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&t){const t=c.rc(4);c.dc("pageTitle",c.hc(6,p)),c.yb(5),c.dc("ngIf",n.shift)("ngIfElse",t),c.yb(1),c.dc("translucent",!0),c.yb(5),c.dc("routerLink",c.hc(7,g)),c.yb(5),c.dc("routerLink",c.hc(8,M))}},directives:[l.a,r.q,d.a,i.m,r.s,r.V,r.i,r.f,r.g,r.T,r.h,r.eb,s.g,r.A,r.u,r.j,r.l,r.n,r.k,r.O,o.m,o.h,o.c,r.w,r.gb,o.g,o.b,r.B,r.x,r.r,r.fb,r.K,r.L,r.p,r.Q],styles:[""]}),t})()}];let N=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(n){return new(n||t)},imports:[[s.i.forChild(y)],s.i]}),t})();var v=e("jICo");let J=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(n){return new(n||t)},imports:[[i.c,o.d,r.W,N,v.a,o.j]]}),t})()},jICo:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var i=e("ofXK"),o=e("TEn/"),r=e("fXoL");let s=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(n){return new(n||t)},imports:[[i.c,o.W]]}),t})()},nnDH:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var i=e("fXoL"),o=e("TEn/");let r=(()=>{class t{constructor(){this.headerBanner="https://media.publit.io/file/header-D.png"}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Cb({type:t,selectors:[["app-header-banner"]],decls:1,vars:1,consts:[[1,"header-img",3,"src"]],template:function(t,n){1&t&&i.Jb(0,"ion-img",0),2&t&&i.dc("src",n.headerBanner)},directives:[o.v],styles:[""]}),t})()}}]);