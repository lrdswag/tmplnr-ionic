(window.webpackJsonp=window.webpackJsonp||[]).push([[30,56],{"4J71":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var r=s("fXoL"),o=s("TEn/");let a=(()=>{class e{constructor(){this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Cb({type:e,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(e,t){1&e&&(r.Nb(0,"ion-header",0),r.Nb(1,"ion-toolbar",1),r.Nb(2,"ion-buttons",2),r.Jb(3,"ion-menu-button"),r.Mb(),r.Nb(4,"ion-title",3),r.zc(5),r.Mb(),r.Nb(6,"ion-buttons",4),r.Jb(7,"ion-img",5),r.Mb(),r.Mb(),r.Mb()),2&e&&(r.dc("translucent",!0),r.yb(5),r.Bc(" ",t.pageTitle," "))},directives:[o.t,o.V,o.i,o.E,o.T,o.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),e})()},hv5d:function(e,t,s){"use strict";s.d(t,"a",(function(){return p}));var r=s("tk/3"),o=s("AytR"),a=s("vkgz"),n=s("sWYD"),i=s("fXoL");let p=(()=>{class e{constructor(e){this.http=e,this.date=new Date}loadAllUsers(){const e=(new r.e).set("order[firstName]","asc");return this.http.get(o.a.apiUrl+"/users.json",{params:e,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(e=>console.log("Users Retrieved Successfully!")))}getUserById(e){return this.http.get(`${o.a.apiUrl}/users/${e}.json`,{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`User with UUID: ${e} Fetched Successfully!`)))}loadAllUsersShifts(e){const t=(new r.e).set("order[start]","asc");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingShifts(e){const t=(new r.e).set("order[start]","asc").set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastShifts(e){const t=(new r.e).set("order[start]","desc").set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","secondary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","primary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get(`${o.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}editUser(e){return this.http.put(`${o.a.apiUrl}/users/${e.id}`,{id:e.id,firstName:e.firstName,lastName:e.lastName,contactNumber:e.contactNumber,profilePicture:e.profilePicture,roles:e.roles,email:e.email,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>alert(`User ${e.firstName} ${e.lastName} was Successfully Updated!`)),Object(a.a)(e=>console.log("edit user: "+JSON.stringify(e))))}deleteUser(e){return this.http.delete(`${o.a.apiUrl}/users/${e}`,{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(e=>alert("User Successfully Deleted!")),Object(a.a)(e=>console.log("delete user: "+JSON.stringify(e))))}resetPassword(e,t){return this.http.put(`${o.a.apiUrl}/users/${e}`,{password:t},{headers:new r.d({"Content-Type":"application/json"})})}registerUser(e){return this.http.post(o.a.apiUrl+"/register",{id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>alert(`User ${e.firstName} ${e.lastName} Created Successfully!`)),Object(a.a)(e=>console.log("register: "+JSON.stringify(e))))}addUser(e){return this.http.post(o.a.apiUrl+"/users",{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,roles:e.roles,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>alert(`User ${e.firstName} ${e.lastName} Created Successfully!`)),Object(a.a)(e=>console.log("add user: "+JSON.stringify(e))))}}return e.\u0275fac=function(t){return new(t||e)(i.Rb(r.b))},e.\u0275prov=i.Eb({token:e,factory:e.\u0275fac}),e})()},jICo:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var r=s("ofXK"),o=s("TEn/"),a=s("fXoL");let n=(()=>{class e{}return e.\u0275mod=a.Gb({type:e}),e.\u0275inj=a.Fb({factory:function(t){return new(t||e)},imports:[[r.c,o.W]]}),e})()},"t+az":function(e,t,s){"use strict";s.r(t),s.d(t,"EditUserPageModule",(function(){return M}));var r=s("ofXK"),o=s("TEn/"),a=s("tyNb"),n=s("mrSG"),i=s("3Pt+"),p=s("vkgz"),c=s("fXoL"),d=s("hv5d"),l=s("4J71");function u(e,t){1&e&&(c.Nb(0,"ion-card",8),c.Nb(1,"ion-card-header"),c.Nb(2,"ion-card-title",9),c.zc(3,"Loading..."),c.Mb(),c.Mb(),c.Nb(4,"ion-card-content"),c.Jb(5,"ion-spinner",10),c.Mb(),c.Mb())}function h(e,t){if(1&e){const e=c.Ob();c.Nb(0,"div"),c.Nb(1,"form",11),c.Ub("ngSubmit",(function(){return c.sc(e),c.Wb().editUser()})),c.Nb(2,"ion-item"),c.Nb(3,"ion-label"),c.zc(4,"UUID:"),c.Mb(),c.Nb(5,"span",12),c.zc(6),c.Mb(),c.Mb(),c.Nb(7,"ion-card",13),c.Nb(8,"ion-item"),c.Nb(9,"ion-row"),c.Nb(10,"ion-col",14),c.Nb(11,"ion-label",15),c.Jb(12,"ion-icon",16),c.zc(13," First Name "),c.Mb(),c.Nb(14,"ion-input",17),c.Ub("ngModelChange",(function(t){return c.sc(e),c.Wb().user.firstName=t})),c.Mb(),c.Mb(),c.Nb(15,"ion-col",14),c.Nb(16,"ion-label",15),c.Jb(17,"ion-icon",18),c.zc(18," Last Name "),c.Mb(),c.Nb(19,"ion-input",19),c.Ub("ngModelChange",(function(t){return c.sc(e),c.Wb().user.lastName=t})),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Nb(20,"ion-item",20),c.Nb(21,"ion-label",15),c.Jb(22,"ion-icon",21),c.zc(23," Contact Number "),c.Mb(),c.Nb(24,"ion-input",22),c.Ub("ngModelChange",(function(t){return c.sc(e),c.Wb().user.contactNumber=t})),c.Mb(),c.Mb(),c.Nb(25,"ion-item",20),c.Nb(26,"ion-label",15),c.Jb(27,"ion-icon",23),c.zc(28," Profile Picture URL "),c.Mb(),c.Nb(29,"ion-input",24),c.Ub("ngModelChange",(function(t){return c.sc(e),c.Wb().user.profilePicture=t})),c.Mb(),c.Mb(),c.Nb(30,"ion-row"),c.Nb(31,"ion-col"),c.Nb(32,"ion-item",20),c.Nb(33,"ion-label",15),c.Jb(34,"ion-icon",25),c.zc(35," WagePerHour "),c.Mb(),c.Nb(36,"ion-input",26),c.Ub("ngModelChange",(function(t){return c.sc(e),c.Wb().user.wagePerHour=t})),c.Mb(),c.Mb(),c.Mb(),c.Nb(37,"ion-col"),c.Nb(38,"ion-item",20),c.Nb(39,"ion-label"),c.zc(40," Roles "),c.Mb(),c.Nb(41,"ion-select",27),c.Nb(42,"ion-select-option",28),c.zc(43,"Employee"),c.Mb(),c.Nb(44,"ion-select-option",29),c.zc(45,"Admin"),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Nb(46,"ion-input",30),c.Ub("ngModelChange",(function(t){return c.sc(e),c.Wb().user.id=t})),c.Mb(),c.Nb(47,"ion-item",20),c.Nb(48,"ion-label",15),c.Jb(49,"ion-icon",31),c.zc(50," email "),c.Mb(),c.Nb(51,"ion-input",32),c.Ub("ngModelChange",(function(t){return c.sc(e),c.Wb().user.email=t})),c.Mb(),c.Mb(),c.Nb(52,"ion-button",33),c.Jb(53,"ion-icon",34),c.Nb(54,"ion-label"),c.zc(55,"Update"),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()}if(2&e){const e=c.Wb();c.yb(1),c.dc("formGroup",e.form),c.yb(5),c.Ac(e.user.id),c.yb(8),c.dc("ngModel",e.user.firstName),c.yb(5),c.dc("ngModel",e.user.lastName),c.yb(5),c.dc("ngModel",e.user.contactNumber),c.yb(5),c.dc("ngModel",e.user.profilePicture),c.yb(7),c.dc("ngModel",e.user.wagePerHour),c.yb(10),c.ec("value",e.user.id),c.dc("ngModel",e.user.id),c.yb(5),c.dc("ngModel",e.user.email)}}const b=function(){return["Edit User"]},f=[{path:"",component:(()=>{class e{constructor(e,t,s,r){this.fb=e,this.route=t,this.userService=s,this.router=r,this.submitted=!1,this.form=this.fb.group({id:["",i.l.required],firstName:["",i.l.required],lastName:["",i.l.required],email:["",i.l.required],contactNumber:["",i.l.required],roles:[["ROLE_USER","ROLE_ADMIN"],i.l.required],profilePicture:["",i.l.required],wagePerHour:["",i.l.required]})}ngOnInit(){return Object(n.a)(this,void 0,void 0,(function*(){this.getUser().subscribe(e=>this.user=e)}))}getUser(){return this.route.paramMap.subscribe(e=>{this.id=e.get("id")}),this.userService.getUserById(this.id)}editUser(){if(this.submitted=!0,this.form.valid&&this.form.dirty){const e=Object.assign(Object.assign({},this.user),this.form.value);this.userService.editUser(e).pipe(Object(p.a)(e=>this.router.navigateByUrl("/users"))).subscribe(e=>console.log("user edit: "+JSON.stringify(e)))}}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(i.a),c.Ib(a.a),c.Ib(d.a),c.Ib(a.f))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-edit-user"]],decls:9,vars:6,consts:[[3,"pageTitle"],[3,"scrollEvents"],["loading",""],[4,"ngIf","ngIfElse"],[3,"translucent"],["color","primary"],["slot","start"],["text","Back","defaultHref","/users"],[2,"padding","2rem","margin-top","3rem"],[1,"ion-text-center"],[2,"position","absolute","left","45%","right","45%"],[3,"formGroup","ngSubmit"],[2,"font-size","0.8rem"],[2,"padding-top","1rem","padding-bottom","1rem"],["size","6",2,"font-family","Quicksand, sans-serif","font-size","0.8rem"],["position","stacked"],["slot","start","name","person-circle"],["formControlName","firstName","type","text",3,"ngModel","ngModelChange"],["slot","start","name","person-circle-outline"],["formControlName","lastName","type","text",3,"ngModel","ngModelChange"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem"],["slot","start","name","call-outline"],["formControlName","contactNumber","type","text",3,"ngModel","ngModelChange"],["slot","start","name","image-outline"],["formControlName","profilePicture","type","url",3,"ngModel","ngModelChange"],["slot","start","name","cash-outline"],["formControlName","wagePerHour",3,"ngModel","ngModelChange"],["formControlName","roles","multiple","true","placeholder","select roles"],["value","ROLE_USER"],["value","ROLE_ADMIN"],["type","hidden","formControlName","id",3,"ngModel","value","ngModelChange"],["slot","start","name","mail-outline"],["formControlName","email","type","email",3,"ngModel","ngModelChange"],["color","success","size","block","type","submit",2,"margin-top","1rem"],["slot","start","name","checkbox-outline"]],template:function(e,t){if(1&e&&(c.Jb(0,"app-header",0),c.Nb(1,"ion-content",1),c.xc(2,u,6,0,"ng-template",null,2,c.yc),c.xc(4,h,56,10,"div",3),c.Mb(),c.Nb(5,"ion-footer",4),c.Nb(6,"ion-toolbar",5),c.Nb(7,"ion-buttons",6),c.Jb(8,"ion-back-button",7),c.Mb(),c.Mb(),c.Mb()),2&e){const e=c.rc(3);c.dc("pageTitle",c.hc(5,b)),c.yb(1),c.dc("scrollEvents",!0),c.yb(3),c.dc("ngIf",t.user)("ngIfElse",e),c.yb(1),c.dc("translucent",!0)}},directives:[l.a,o.q,r.m,o.s,o.V,o.i,o.f,o.g,o.j,o.l,o.n,o.k,o.O,i.m,i.h,i.c,o.x,o.A,o.J,o.p,o.u,o.w,o.gb,i.g,i.b,o.K,o.fb,o.L,o.h],styles:[""]}),e})()}];let m=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[a.i.forChild(f)],a.i]}),e})();var y=s("jICo"),g=s("9Ku7"),U=s("tk/3"),j=s("WR+W");let M=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},providers:[g.a,d.a,{provide:U.a,useClass:j.a,multi:!0}],imports:[[r.c,o.W,m,y.a,i.j]]}),e})()}}]);