!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,s,r){return s&&t(e.prototype,s),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[35,56],{"3d6y":function(t,r,n){"use strict";n.r(r),n.d(r,"AddShiftModule",(function(){return P}));var a=n("ofXK"),o=n("3Pt+"),i=n("TEn/"),c=n("tk/3"),p=n("jICo"),u=n("mrSG"),d=n("lJxs"),l=n("fXoL"),f=n("0IKw"),h=n("hv5d"),y=n("tyNb"),m=n("e8h1"),b=n("4J71");function v(e,t){1&e&&(l.Nb(0,"ion-card",22),l.Nb(1,"ion-card-header"),l.Nb(2,"ion-card-title",23),l.zc(3,"Loading..."),l.Mb(),l.Mb(),l.Nb(4,"ion-card-content"),l.Jb(5,"ion-spinner",24),l.Mb(),l.Mb())}function g(e,t){if(1&e){var s=l.Ob();l.Nb(0,"div"),l.Nb(1,"ion-input",25),l.Ub("ngModelChange",(function(e){return l.sc(s),l.Wb().user.id=e})),l.Mb(),l.Mb()}if(2&e){var r=l.Wb();l.yb(1),l.ec("value",r.user.id),l.dc("ngModel",r.user.id)}}var S,j,U,w=function(){return["Add Shift"]},M=((S=function(){function t(s,r,n,a,i){e(this,t),this.fb=s,this.shiftsService=r,this.usersService=n,this.router=a,this.storage=i,this.submitted=!1,this.loading=!1,this.date=new Date,this.form=this.fb.group({start:["",o.l.required],end:["",o.l.required],onDuty:["",o.l.required],ShiftStatus:["",o.l.required],isApproved:[!1,o.l.required]})}return s(t,[{key:"getStorage",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.storage.get("id");case 3:return t=e.sent,e.abrupt("return",(console.log(t),t));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})))}},{key:"ngOnInit",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,s=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getStorage();case 2:return t=e.sent,e.next=5,this.getUserFromStorage(JSON.parse(t));case 5:setInterval((function(){s.date=new Date}),1e3);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"getUserFromStorage",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var s=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.usersService.getUserById(e).subscribe((function(e){return s.user=e}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"addShift",value:function(){var e=this;if(this.submitted=!0,this.form.valid&&this.form.dirty){var t=Object.assign(Object.assign({},this.shift),this.form.value);this.loading=!0,this.shiftsService.addShift(t).pipe(Object(d.a)((function(t){e.router.navigateByUrl("/shifts/".concat(t.id,"/details"))}))).subscribe((function(e){return console.log(e)}))}}}]),t}()).\u0275fac=function(e){return new(e||S)(l.Ib(o.a),l.Ib(f.a),l.Ib(h.a),l.Ib(y.f),l.Ib(m.b))},S.\u0275cmp=l.Cb({type:S,selectors:[["app-add-shift"]],decls:43,vars:6,consts:[[3,"pageTitle"],["loading",""],[2,"margin-top","1rem"],[3,"formGroup","ngSubmit"],[2,"font-family","Quicksand, sans-serif","text-align","center","margin-bottom","2rem"],["position","floating","color","secondary",1,"ion-text-center"],["picker-format","DD MMM YY h:mm A","formControlName","start","display-format","DD MMM YY h:mm A","minuteValues","00,15,30,45"],["picker-format","DD MMM YY h:mm A","formControlName","end","display-format","DD MMM YY h:mm A","minuteValues","00,15,30,45"],[4,"ngIf","ngIfElse"],["position","floating","color","secondary"],["formControlName","ShiftStatus","placeholder","Select Status"],["value","secondary"],["value","primary"],["size","12"],["lines","none",2,"margin-top","2rem"],["type","submit","size","block","color","success"],["src","assets/icon8/icons8-save-close.svg","slot","start",2,"height","4rem","width","4rem"],["formControlName","isApproved","type","hidden","value","false"],[3,"translucent"],["color","primary"],["slot","start"],["defaultHref","/shifts","text","Back",2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],[2,"padding","2rem","margin-top","3rem"],[1,"ion-text-center"],[2,"position","absolute","left","45%","right","45%"],["type","hidden","formControlName","onDuty",3,"ngModel","value","ngModelChange"]],template:function(e,t){if(1&e&&(l.Jb(0,"app-header",0),l.Nb(1,"ion-content"),l.xc(2,v,6,0,"ng-template",null,1,l.yc),l.Nb(4,"ion-card",2),l.Nb(5,"form",3),l.Ub("ngSubmit",(function(){return t.addShift()})),l.Nb(6,"ion-list"),l.Nb(7,"h4",4),l.zc(8,"Add New Shift"),l.Mb(),l.Nb(9,"ion-item-group"),l.Nb(10,"ion-item"),l.Nb(11,"ion-label",5),l.Nb(12,"span"),l.zc(13,"Select Start Time"),l.Mb(),l.Mb(),l.Jb(14,"ion-datetime",6),l.Mb(),l.Mb(),l.Nb(15,"ion-item-group"),l.Nb(16,"ion-item"),l.Nb(17,"ion-label",5),l.Nb(18,"span"),l.zc(19,"Select Finish Time"),l.Mb(),l.Mb(),l.Jb(20,"ion-datetime",7),l.Mb(),l.Mb(),l.Nb(21,"ion-item-group"),l.xc(22,g,2,2,"div",8),l.Nb(23,"ion-item"),l.Nb(24,"ion-label",9),l.zc(25,"Shift Status"),l.Mb(),l.Nb(26,"ion-select",10),l.Nb(27,"ion-select-option",11),l.zc(28,"Secondary"),l.Mb(),l.Nb(29,"ion-select-option",12),l.zc(30,"Primary"),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Nb(31,"ion-col",13),l.Nb(32,"ion-item",14),l.Nb(33,"ion-col",13),l.Nb(34,"ion-button",15),l.Jb(35,"ion-img",16),l.Nb(36,"ion-label"),l.zc(37,"Save"),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Jb(38,"ion-input",17),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Nb(39,"ion-footer",18),l.Nb(40,"ion-toolbar",19),l.Nb(41,"ion-buttons",20),l.Jb(42,"ion-back-button",21),l.Mb(),l.Mb(),l.Mb()),2&e){var s=l.rc(3);l.dc("pageTitle",l.hc(5,w)),l.yb(5),l.dc("formGroup",t.form),l.yb(17),l.dc("ngIf",t.user)("ngIfElse",s),l.yb(17),l.dc("translucent",!0)}},directives:[b.a,i.q,i.j,o.m,o.h,o.c,i.B,i.z,i.x,i.A,i.r,i.fb,o.g,o.b,a.m,i.K,i.L,i.p,i.h,i.v,i.w,i.gb,i.s,i.V,i.i,i.f,i.g,i.l,i.n,i.k,i.O],styles:["ion-card[_ngcontent-%COMP%]{padding:2rem;margin-top:4rem}span[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;font-size:.8rem}"]}),S),N=[{path:"",component:M}],O=((j=function t(){e(this,t)}).\u0275mod=l.Gb({type:j}),j.\u0275inj=l.Fb({factory:function(e){return new(e||j)},imports:[[y.i.forChild(N)],y.i]}),j),k=n("9Ku7"),C=n("WR+W"),P=((U=function t(){e(this,t)}).\u0275mod=l.Gb({type:U,bootstrap:[M]}),U.\u0275inj=l.Fb({factory:function(e){return new(e||U)},providers:[k.a,f.a,h.a,{provide:c.a,useClass:C.a,multi:!0}],imports:[[a.c,o.d,i.W,O,p.a,c.c,o.j]]}),U)},"4J71":function(t,r,n){"use strict";n.d(r,"a",(function(){return i}));var a=n("fXoL"),o=n("TEn/"),i=function(){var t=function(){function t(){e(this,t),this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}return s(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Cb({type:t,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(e,t){1&e&&(a.Nb(0,"ion-header",0),a.Nb(1,"ion-toolbar",1),a.Nb(2,"ion-buttons",2),a.Jb(3,"ion-menu-button"),a.Mb(),a.Nb(4,"ion-title",3),a.zc(5),a.Mb(),a.Nb(6,"ion-buttons",4),a.Jb(7,"ion-img",5),a.Mb(),a.Mb(),a.Mb()),2&e&&(a.dc("translucent",!0),a.yb(5),a.Bc(" ",t.pageTitle," "))},directives:[o.t,o.V,o.i,o.E,o.T,o.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),t}()},hv5d:function(t,r,n){"use strict";n.d(r,"a",(function(){return u}));var a=n("tk/3"),o=n("AytR"),i=n("vkgz"),c=n("sWYD"),p=n("fXoL"),u=function(){var t=function(){function t(s){e(this,t),this.http=s,this.date=new Date}return s(t,[{key:"loadAllUsers",value:function(){var e=(new a.e).set("order[firstName]","asc");return this.http.get(o.a.apiUrl+"/users.json",{params:e,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(e){return console.log("Users Retrieved Successfully!")})))}},{key:"getUserById",value:function(e){return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,".json"),{headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("User with UUID: ".concat(e," Fetched Successfully!"))})))}},{key:"loadAllUsersShifts",value:function(e){var t=(new a.e).set("order[start]","asc");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastShifts",value:function(e){var t=(new a.e).set("order[start]","desc").set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPendingShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("isApproved","false");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingPendingShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastPendingShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersApprovedShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("isApproved","true");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingApprovedShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastApprovedShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPendingPrimaryShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingPendingPrimaryShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastPendingPrimaryShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPendingSecondaryShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingPendingSecondaryShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastPendingSecondaryShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersApprovedPrimaryShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingApprovedPrimaryShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastApprovedPrimaryShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersApprovedSecondaryShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingApprovedSecondaryShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastApprovedSecondaryShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingSecondaryShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastSecondaryShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersSecondaryShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingPrimaryShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastPrimaryShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPrimaryShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"editUser",value:function(e){return this.http.put("".concat(o.a.apiUrl,"/users/").concat(e.id),{id:e.id,firstName:e.firstName,lastName:e.lastName,contactNumber:e.contactNumber,profilePicture:e.profilePicture,roles:e.roles,email:e.email,wagePerHour:e.wagePerHour},{headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return alert("User ".concat(e.firstName," ").concat(e.lastName," was Successfully Updated!"))})),Object(i.a)((function(e){return console.log("edit user: "+JSON.stringify(e))})))}},{key:"deleteUser",value:function(e){return this.http.delete("".concat(o.a.apiUrl,"/users/").concat(e),{headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(e){return alert("User Successfully Deleted!")})),Object(i.a)((function(e){return console.log("delete user: "+JSON.stringify(e))})))}},{key:"resetPassword",value:function(e,t){return this.http.put("".concat(o.a.apiUrl,"/users/").concat(e),{password:t},{headers:new a.d({"Content-Type":"application/json"})})}},{key:"registerUser",value:function(e){return this.http.post(o.a.apiUrl+"/register",{id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return alert("User ".concat(e.firstName," ").concat(e.lastName," Created Successfully!"))})),Object(i.a)((function(e){return console.log("register: "+JSON.stringify(e))})))}},{key:"addUser",value:function(e){return this.http.post(o.a.apiUrl+"/users",{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,roles:e.roles,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return alert("User ".concat(e.firstName," ").concat(e.lastName," Created Successfully!"))})),Object(i.a)((function(e){return console.log("add user: "+JSON.stringify(e))})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(p.Rb(a.b))},t.\u0275prov=p.Eb({token:t,factory:t.\u0275fac}),t}()},jICo:function(t,s,r){"use strict";r.d(s,"a",(function(){return i}));var n=r("ofXK"),a=r("TEn/"),o=r("fXoL"),i=function(){var t=function t(){e(this,t)};return t.\u0275mod=o.Gb({type:t}),t.\u0275inj=o.Fb({factory:function(e){return new(e||t)},imports:[[n.c,a.W]]}),t}()}}])}();