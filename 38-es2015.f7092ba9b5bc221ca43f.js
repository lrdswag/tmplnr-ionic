(window.webpackJsonp=window.webpackJsonp||[]).push([[38,56],{"4J71":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var r=s("fXoL"),o=s("TEn/");let a=(()=>{class e{constructor(){this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Cb({type:e,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(e,t){1&e&&(r.Nb(0,"ion-header",0),r.Nb(1,"ion-toolbar",1),r.Nb(2,"ion-buttons",2),r.Jb(3,"ion-menu-button"),r.Mb(),r.Nb(4,"ion-title",3),r.zc(5),r.Mb(),r.Nb(6,"ion-buttons",4),r.Jb(7,"ion-img",5),r.Mb(),r.Mb(),r.Mb()),2&e&&(r.dc("translucent",!0),r.yb(5),r.Bc(" ",t.pageTitle," "))},directives:[o.t,o.V,o.i,o.E,o.T,o.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),e})()},hv5d:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var r=s("tk/3"),o=s("AytR"),a=s("vkgz"),n=s("sWYD"),i=s("fXoL");let c=(()=>{class e{constructor(e){this.http=e,this.date=new Date}loadAllUsers(){const e=(new r.e).set("order[firstName]","asc");return this.http.get(o.a.apiUrl+"/users.json",{params:e,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(e=>console.log("Users Retrieved Successfully!")))}getUserById(e){return this.http.get(`${o.a.apiUrl}/users/${e}.json`,{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`User with UUID: ${e} Fetched Successfully!`)))}loadAllUsersShifts(e){const t=(new r.e).set("order[start]","asc");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingShifts(e){const t=(new r.e).set("order[start]","asc").set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastShifts(e){const t=(new r.e).set("order[start]","desc").set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","secondary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","primary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}editUser(e){return this.http.put(`${o.a.apiUrl}/users/${e.id}`,{id:e.id,firstName:e.firstName,lastName:e.lastName,contactNumber:e.contactNumber,profilePicture:e.profilePicture,roles:e.roles,email:e.email,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>alert(`User ${e.firstName} ${e.lastName} was Successfully Updated!`)),Object(a.a)(e=>console.log("edit user: "+JSON.stringify(e))))}deleteUser(e){return this.http.delete(`${o.a.apiUrl}/users/${e}`,{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(e=>alert("User Successfully Deleted!")),Object(a.a)(e=>console.log("delete user: "+JSON.stringify(e))))}resetPassword(e,t){return this.http.put(`${o.a.apiUrl}/users/${e}`,{password:t},{headers:new r.d({"Content-Type":"application/json"})})}registerUser(e){return this.http.post(o.a.apiUrl+"/register",{id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>alert(`User ${e.firstName} ${e.lastName} Created Successfully!`)),Object(a.a)(e=>console.log("register: "+JSON.stringify(e))))}addUser(e){return this.http.post(o.a.apiUrl+"/users",{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,roles:e.roles,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>alert(`User ${e.firstName} ${e.lastName} Created Successfully!`)),Object(a.a)(e=>console.log("add user: "+JSON.stringify(e))))}}return e.\u0275fac=function(t){return new(t||e)(i.Rb(r.b))},e.\u0275prov=i.Eb({token:e,factory:e.\u0275fac}),e})()},jICo:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var r=s("ofXK"),o=s("TEn/"),a=s("fXoL");let n=(()=>{class e{}return e.\u0275mod=a.Gb({type:e}),e.\u0275inj=a.Fb({factory:function(t){return new(t||e)},imports:[[r.c,o.W]]}),e})()},nngr:function(e,t,s){"use strict";s.r(t),s.d(t,"EditCommentPageModule",(function(){return w}));var r=s("ofXK"),o=s("3Pt+"),a=s("TEn/"),n=s("tyNb"),i=s("mrSG"),c=s("fXoL"),d=s("/u1d"),p=s("e8h1"),l=s("hv5d"),h=s("4J71");function u(e,t){1&e&&(c.Nb(0,"ion-card"),c.Nb(1,"ion-text",13),c.zc(2,"You are not permitted to edit comments that you have not authored."),c.Mb(),c.Mb())}function f(e,t){1&e&&(c.Nb(0,"ion-card",14),c.Nb(1,"ion-card-header"),c.Nb(2,"ion-card-title",15),c.zc(3,"Loading..."),c.Mb(),c.Mb(),c.Nb(4,"ion-card-content"),c.Jb(5,"ion-spinner",16),c.Mb(),c.Mb())}function b(e,t){if(1&e&&(c.Nb(0,"div"),c.Nb(1,"ion-select-option",28),c.zc(2),c.Mb(),c.Mb()),2&e){const e=t.$implicit;c.yb(1),c.ec("value",e.id),c.yb(1),c.Cc("",e.firstName," ",e.lastName,"")}}function m(e,t){if(1&e){const e=c.Ob();c.Nb(0,"div"),c.Nb(1,"form",17),c.Ub("ngSubmit",(function(){return c.sc(e),c.Wb(2).onEditComment()})),c.Jb(2,"ion-input",18),c.Jb(3,"ion-input",19),c.Jb(4,"ion-input",20),c.Nb(5,"ion-card"),c.Nb(6,"ion-list"),c.Nb(7,"ion-item"),c.Nb(8,"ion-label"),c.zc(9,"Subject:"),c.Mb(),c.Jb(10,"ion-input",21),c.Mb(),c.Nb(11,"ion-item"),c.Nb(12,"ion-label"),c.zc(13,"recipient:"),c.Mb(),c.Nb(14,"ion-select",22),c.xc(15,b,3,3,"div",23),c.Mb(),c.Mb(),c.Nb(16,"ion-item"),c.Jb(17,"ion-textarea",24),c.Mb(),c.Nb(18,"ion-item"),c.Nb(19,"ion-col",25),c.Nb(20,"ion-button",26),c.Jb(21,"ion-icon",27),c.Nb(22,"ion-label"),c.zc(23,"Edit Comment"),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()}if(2&e){const e=c.Wb(2);c.yb(1),c.dc("formGroup",e.form),c.yb(2),c.ec("value",e.date),c.yb(1),c.ec("value",e.user.id),c.dc("ngModel",e.user.id),c.yb(6),c.dc("ngModel",e.comment.subject),c.yb(4),c.dc("ngModel",e.users),c.yb(1),c.dc("ngForOf",e.users)}}function y(e,t){if(1&e&&(c.Nb(0,"div"),c.xc(1,m,24,7,"div",3),c.Mb()),2&e){const e=c.Wb(),t=c.rc(3);c.yb(1),c.dc("ngIf",e.user.id===e.comment.authoredBy.id)("ngIfElse",t)}}const g=function(){return["Edit Comment"]},j=function(){return["/shifts/add"]},S=function(){return["/messaging"]},U=[{path:"",component:(()=>{class e{constructor(e,t,s,r,a){this.commentsService=e,this.route=t,this.fb=s,this.storage=r,this.userService=a,this.date=new Date,this.form=this.fb.group({authoredBy:["",o.l.required],shift:[""],comment:["",o.l.required],dateOfComment:["",o.l.required],recipient:[""],subject:["",o.l.required],markedAsRead:[!1],isPrivate:[!1]})}getStorage(){return Object(i.a)(this,void 0,void 0,(function*(){try{const e=yield this.storage.get("id");return console.log(e),e}catch(e){console.log(e)}}))}ngOnInit(){return Object(i.a)(this,void 0,void 0,(function*(){const e=this.route.snapshot.paramMap.get("id");this.commentsService.getCommentById(e).subscribe(e=>this.comment=e);const t=yield this.getStorage();this.getUserFromStorage(JSON.parse(t))}))}onEditComment(){if(this.form.valid&&this.form.dirty){const e=Object.assign(Object.assign({},this.comment),this.form);this.commentsService.editComment(e).subscribe(e=>console.log(JSON.stringify(e)))}}loadAllUsers(){this.userService.loadAllUsers().subscribe(e=>this.users=e)}getUserFromStorage(e){return Object(i.a)(this,void 0,void 0,(function*(){this.userService.getUserById(e).subscribe(e=>this.user=e)}))}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(d.a),c.Ib(n.a),c.Ib(o.a),c.Ib(p.b),c.Ib(l.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-edit-comment"]],decls:21,vars:9,consts:[[3,"pageTitle"],["notpermitted",""],["loading",""],[4,"ngIf","ngIfElse"],[3,"translucent"],["color","primary"],["slot","start"],["text","Back","defaultHref","/shifts",2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],["color","light",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["name","add-circle-outline","slot","start"],["slot","end"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["slot","end","name","chatbubbles-outline"],["color","danger"],[2,"padding","2rem","margin-top","3rem"],[1,"ion-text-center"],[2,"position","absolute","left","45%","right","45%"],[3,"formGroup","ngSubmit"],["type","hidden","formControlName","isPrivate","value","false"],["type","hidden","formControlName","dateOfComment",3,"value"],["type","hidden","formControlName","authoredBy",3,"ngModel","value"],["formControlName","subject",3,"ngModel"],["formControlName","recipient",3,"ngModel"],[4,"ngFor","ngForOf"],["formControlName","comment","placeholder","Comment"],["size","12"],["type","submit","size","block","color","warning"],["slot","start","name","create-outline"],[3,"value"]],template:function(e,t){if(1&e&&(c.Jb(0,"app-header",0),c.Nb(1,"ion-content"),c.xc(2,u,3,0,"ng-template",null,1,c.yc),c.xc(4,f,6,0,"ng-template",null,2,c.yc),c.xc(6,y,2,2,"div",3),c.Mb(),c.Nb(7,"ion-footer",4),c.Nb(8,"ion-toolbar",5),c.Nb(9,"ion-buttons",6),c.Jb(10,"ion-back-button",7),c.Mb(),c.Nb(11,"ion-title"),c.Nb(12,"ion-button",8),c.Jb(13,"ion-icon",9),c.Nb(14,"ion-label"),c.zc(15,"Add Shift"),c.Mb(),c.Mb(),c.Mb(),c.Nb(16,"ion-buttons",10),c.Nb(17,"ion-button",11),c.Nb(18,"ion-label"),c.zc(19,"Messages"),c.Mb(),c.Jb(20,"ion-icon",12),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&e){const e=c.rc(5);c.dc("pageTitle",c.hc(6,g)),c.yb(6),c.dc("ngIf",t.comment)("ngIfElse",e),c.yb(1),c.dc("translucent",!0),c.yb(5),c.dc("routerLink",c.hc(7,j)),c.yb(5),c.dc("routerLink",c.hc(8,S))}},directives:[h.a,a.q,r.m,a.s,a.V,a.i,a.f,a.g,a.T,a.h,a.eb,n.g,a.u,a.A,a.j,a.Q,a.l,a.n,a.k,a.O,o.m,o.h,o.c,a.w,a.gb,o.g,o.b,a.B,a.x,a.K,a.fb,r.l,a.R,a.p,a.L],styles:[""]}),e})()}];let v=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[n.i.forChild(U)],n.i]}),e})();var $=s("jICo");let w=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[r.c,o.d,a.W,v,$.a,o.j]]}),e})()}}]);