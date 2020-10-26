!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[38,56],{"4J71":function(t,r,s){"use strict";s.d(r,"a",(function(){return i}));var a=s("fXoL"),o=s("TEn/"),i=function(){var t=function(){function t(){e(this,t),this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}return n(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Cb({type:t,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(e,t){1&e&&(a.Nb(0,"ion-header",0),a.Nb(1,"ion-toolbar",1),a.Nb(2,"ion-buttons",2),a.Jb(3,"ion-menu-button"),a.Mb(),a.Nb(4,"ion-title",3),a.zc(5),a.Mb(),a.Nb(6,"ion-buttons",4),a.Jb(7,"ion-img",5),a.Mb(),a.Mb(),a.Mb()),2&e&&(a.dc("translucent",!0),a.yb(5),a.Bc(" ",t.pageTitle," "))},directives:[o.t,o.V,o.i,o.E,o.T,o.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),t}()},hv5d:function(t,r,s){"use strict";s.d(r,"a",(function(){return p}));var a=s("tk/3"),o=s("AytR"),i=s("vkgz"),c=s("sWYD"),u=s("fXoL"),p=function(){var t=function(){function t(n){e(this,t),this.http=n,this.date=new Date}return n(t,[{key:"loadAllUsers",value:function(){var e=(new a.e).set("order[firstName]","asc");return this.http.get(o.a.apiUrl+"/users.json",{params:e,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(e){return console.log("Users Retrieved Successfully!")})))}},{key:"getUserById",value:function(e){return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,".json"),{headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("User with UUID: ".concat(e," Fetched Successfully!"))})))}},{key:"loadAllUsersShifts",value:function(e){var t=(new a.e).set("order[start]","asc");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastShifts",value:function(e){var t=(new a.e).set("order[start]","desc").set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPendingShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("isApproved","false");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingPendingShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastPendingShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersApprovedShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("isApproved","true");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingApprovedShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastApprovedShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPendingPrimaryShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingPendingPrimaryShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastPendingPrimaryShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPendingSecondaryShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingPendingSecondaryShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastPendingSecondaryShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersApprovedPrimaryShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingApprovedPrimaryShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastApprovedPrimaryShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersApprovedSecondaryShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingApprovedSecondaryShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastApprovedSecondaryShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingSecondaryShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastSecondaryShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersSecondaryShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingPrimaryShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastPrimaryShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPrimaryShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"editUser",value:function(e){return this.http.put("".concat(o.a.apiUrl,"/users/").concat(e.id),{id:e.id,firstName:e.firstName,lastName:e.lastName,contactNumber:e.contactNumber,profilePicture:e.profilePicture,roles:e.roles,email:e.email,wagePerHour:e.wagePerHour},{headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return alert("User ".concat(e.firstName," ").concat(e.lastName," was Successfully Updated!"))})),Object(i.a)((function(e){return console.log("edit user: "+JSON.stringify(e))})))}},{key:"deleteUser",value:function(e){return this.http.delete("".concat(o.a.apiUrl,"/users/").concat(e),{headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(e){return alert("User Successfully Deleted!")})),Object(i.a)((function(e){return console.log("delete user: "+JSON.stringify(e))})))}},{key:"resetPassword",value:function(e,t){return this.http.put("".concat(o.a.apiUrl,"/users/").concat(e),{password:t},{headers:new a.d({"Content-Type":"application/json"})})}},{key:"registerUser",value:function(e){return this.http.post(o.a.apiUrl+"/register",{id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return alert("User ".concat(e.firstName," ").concat(e.lastName," Created Successfully!"))})),Object(i.a)((function(e){return console.log("register: "+JSON.stringify(e))})))}},{key:"addUser",value:function(e){return this.http.post(o.a.apiUrl+"/users",{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,roles:e.roles,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return alert("User ".concat(e.firstName," ").concat(e.lastName," Created Successfully!"))})),Object(i.a)((function(e){return console.log("add user: "+JSON.stringify(e))})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(u.Rb(a.b))},t.\u0275prov=u.Eb({token:t,factory:t.\u0275fac}),t}()},jICo:function(t,n,r){"use strict";r.d(n,"a",(function(){return i}));var s=r("ofXK"),a=r("TEn/"),o=r("fXoL"),i=function(){var t=function t(){e(this,t)};return t.\u0275mod=o.Gb({type:t}),t.\u0275inj=o.Fb({factory:function(e){return new(e||t)},imports:[[s.c,a.W]]}),t}()},nngr:function(t,r,s){"use strict";s.r(r),s.d(r,"EditCommentPageModule",(function(){return P}));var a=s("ofXK"),o=s("3Pt+"),i=s("TEn/"),c=s("tyNb"),u=s("mrSG"),p=s("fXoL"),d=s("/u1d"),l=s("e8h1"),f=s("hv5d"),h=s("4J71");function m(e,t){1&e&&(p.Nb(0,"ion-card"),p.Nb(1,"ion-text",13),p.zc(2,"You are not permitted to edit comments that you have not authored."),p.Mb(),p.Mb())}function b(e,t){1&e&&(p.Nb(0,"ion-card",14),p.Nb(1,"ion-card-header"),p.Nb(2,"ion-card-title",15),p.zc(3,"Loading..."),p.Mb(),p.Mb(),p.Nb(4,"ion-card-content"),p.Jb(5,"ion-spinner",16),p.Mb(),p.Mb())}function y(e,t){if(1&e&&(p.Nb(0,"div"),p.Nb(1,"ion-select-option",28),p.zc(2),p.Mb(),p.Mb()),2&e){var n=t.$implicit;p.yb(1),p.ec("value",n.id),p.yb(1),p.Cc("",n.firstName," ",n.lastName,"")}}function v(e,t){if(1&e){var n=p.Ob();p.Nb(0,"div"),p.Nb(1,"form",17),p.Ub("ngSubmit",(function(){return p.sc(n),p.Wb(2).onEditComment()})),p.Jb(2,"ion-input",18),p.Jb(3,"ion-input",19),p.Jb(4,"ion-input",20),p.Nb(5,"ion-card"),p.Nb(6,"ion-list"),p.Nb(7,"ion-item"),p.Nb(8,"ion-label"),p.zc(9,"Subject:"),p.Mb(),p.Jb(10,"ion-input",21),p.Mb(),p.Nb(11,"ion-item"),p.Nb(12,"ion-label"),p.zc(13,"recipient:"),p.Mb(),p.Nb(14,"ion-select",22),p.xc(15,y,3,3,"div",23),p.Mb(),p.Mb(),p.Nb(16,"ion-item"),p.Jb(17,"ion-textarea",24),p.Mb(),p.Nb(18,"ion-item"),p.Nb(19,"ion-col",25),p.Nb(20,"ion-button",26),p.Jb(21,"ion-icon",27),p.Nb(22,"ion-label"),p.zc(23,"Edit Comment"),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb()}if(2&e){var r=p.Wb(2);p.yb(1),p.dc("formGroup",r.form),p.yb(2),p.ec("value",r.date),p.yb(1),p.ec("value",r.user.id),p.dc("ngModel",r.user.id),p.yb(6),p.dc("ngModel",r.comment.subject),p.yb(4),p.dc("ngModel",r.users),p.yb(1),p.dc("ngForOf",r.users)}}function g(e,t){if(1&e&&(p.Nb(0,"div"),p.xc(1,v,24,7,"div",3),p.Mb()),2&e){var n=p.Wb(),r=p.rc(3);p.yb(1),p.dc("ngIf",n.user.id===n.comment.authoredBy.id)("ngIfElse",r)}}var j,S,U,w=function(){return["Edit Comment"]},M=function(){return["/shifts/add"]},N=function(){return["/messaging"]},O=[{path:"",component:(j=function(){function t(n,r,s,a,i){e(this,t),this.commentsService=n,this.route=r,this.fb=s,this.storage=a,this.userService=i,this.date=new Date,this.form=this.fb.group({authoredBy:["",o.l.required],shift:[""],comment:["",o.l.required],dateOfComment:["",o.l.required],recipient:[""],subject:["",o.l.required],markedAsRead:[!1],isPrivate:[!1]})}return n(t,[{key:"getStorage",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.storage.get("id");case 3:return t=e.sent,e.abrupt("return",(console.log(t),t));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})))}},{key:"ngOnInit",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.route.snapshot.paramMap.get("id"),this.commentsService.getCommentById(t).subscribe((function(e){return r.comment=e})),e.next=4,this.getStorage();case 4:n=e.sent,this.getUserFromStorage(JSON.parse(n));case 6:case"end":return e.stop()}}),e,this)})))}},{key:"onEditComment",value:function(){if(this.form.valid&&this.form.dirty){var e=Object.assign(Object.assign({},this.comment),this.form);this.commentsService.editComment(e).subscribe((function(e){return console.log(JSON.stringify(e))}))}}},{key:"loadAllUsers",value:function(){var e=this;this.userService.loadAllUsers().subscribe((function(t){return e.users=t}))}},{key:"getUserFromStorage",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.userService.getUserById(e).subscribe((function(e){return n.user=e}));case 1:case"end":return t.stop()}}),t,this)})))}}]),t}(),j.\u0275fac=function(e){return new(e||j)(p.Ib(d.a),p.Ib(c.a),p.Ib(o.a),p.Ib(l.b),p.Ib(f.a))},j.\u0275cmp=p.Cb({type:j,selectors:[["app-edit-comment"]],decls:21,vars:9,consts:[[3,"pageTitle"],["notpermitted",""],["loading",""],[4,"ngIf","ngIfElse"],[3,"translucent"],["color","primary"],["slot","start"],["text","Back","defaultHref","/shifts",2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],["color","light",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["name","add-circle-outline","slot","start"],["slot","end"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["slot","end","name","chatbubbles-outline"],["color","danger"],[2,"padding","2rem","margin-top","3rem"],[1,"ion-text-center"],[2,"position","absolute","left","45%","right","45%"],[3,"formGroup","ngSubmit"],["type","hidden","formControlName","isPrivate","value","false"],["type","hidden","formControlName","dateOfComment",3,"value"],["type","hidden","formControlName","authoredBy",3,"ngModel","value"],["formControlName","subject",3,"ngModel"],["formControlName","recipient",3,"ngModel"],[4,"ngFor","ngForOf"],["formControlName","comment","placeholder","Comment"],["size","12"],["type","submit","size","block","color","warning"],["slot","start","name","create-outline"],[3,"value"]],template:function(e,t){if(1&e&&(p.Jb(0,"app-header",0),p.Nb(1,"ion-content"),p.xc(2,m,3,0,"ng-template",null,1,p.yc),p.xc(4,b,6,0,"ng-template",null,2,p.yc),p.xc(6,g,2,2,"div",3),p.Mb(),p.Nb(7,"ion-footer",4),p.Nb(8,"ion-toolbar",5),p.Nb(9,"ion-buttons",6),p.Jb(10,"ion-back-button",7),p.Mb(),p.Nb(11,"ion-title"),p.Nb(12,"ion-button",8),p.Jb(13,"ion-icon",9),p.Nb(14,"ion-label"),p.zc(15,"Add Shift"),p.Mb(),p.Mb(),p.Mb(),p.Nb(16,"ion-buttons",10),p.Nb(17,"ion-button",11),p.Nb(18,"ion-label"),p.zc(19,"Messages"),p.Mb(),p.Jb(20,"ion-icon",12),p.Mb(),p.Mb(),p.Mb(),p.Mb()),2&e){var n=p.rc(5);p.dc("pageTitle",p.hc(6,w)),p.yb(6),p.dc("ngIf",t.comment)("ngIfElse",n),p.yb(1),p.dc("translucent",!0),p.yb(5),p.dc("routerLink",p.hc(7,M)),p.yb(5),p.dc("routerLink",p.hc(8,N))}},directives:[h.a,i.q,a.m,i.s,i.V,i.i,i.f,i.g,i.T,i.h,i.eb,c.g,i.u,i.A,i.j,i.Q,i.l,i.n,i.k,i.O,o.m,o.h,o.c,i.w,i.gb,o.g,o.b,i.B,i.x,i.K,i.fb,a.l,i.R,i.p,i.L],styles:[""]}),j)}],k=((S=function t(){e(this,t)}).\u0275mod=p.Gb({type:S}),S.\u0275inj=p.Fb({factory:function(e){return new(e||S)},imports:[[c.i.forChild(O)],c.i]}),S),C=s("jICo"),P=((U=function t(){e(this,t)}).\u0275mod=p.Gb({type:U}),U.\u0275inj=p.Fb({factory:function(e){return new(e||U)},imports:[[a.c,o.d,i.W,k,C.a,o.j]]}),U)}}])}();