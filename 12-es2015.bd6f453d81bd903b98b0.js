(window.webpackJsonp=window.webpackJsonp||[]).push([[12,56],{"4J71":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var r=s("fXoL"),i=s("TEn/");let a=(()=>{class e{constructor(){this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Cb({type:e,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(e,t){1&e&&(r.Nb(0,"ion-header",0),r.Nb(1,"ion-toolbar",1),r.Nb(2,"ion-buttons",2),r.Jb(3,"ion-menu-button"),r.Mb(),r.Nb(4,"ion-title",3),r.zc(5),r.Mb(),r.Nb(6,"ion-buttons",4),r.Jb(7,"ion-img",5),r.Mb(),r.Mb(),r.Mb()),2&e&&(r.dc("translucent",!0),r.yb(5),r.Bc(" ",t.pageTitle," "))},directives:[i.t,i.V,i.i,i.E,i.T,i.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),e})()},RhqV:function(e,t,s){"use strict";s.r(t),s.d(t,"EditPageModule",(function(){return M}));var r=s("ofXK"),i=s("3Pt+"),a=s("TEn/"),n=s("tyNb"),o=s("vkgz"),d=s("fXoL"),p=s("0IKw"),c=s("hv5d"),l=s("4J71"),h=s("nnDH");function f(e,t){if(1&e&&(d.Nb(0,"div"),d.Nb(1,"ion-select-option",29),d.zc(2),d.Mb(),d.Mb()),2&e){const e=t.$implicit;d.yb(1),d.ec("value",e.id),d.yb(1),d.Cc("",e.firstName," ",e.lastName,"")}}function u(e,t){if(1&e){const e=d.Ob();d.Nb(0,"ion-item",13),d.Nb(1,"ion-label"),d.zc(2,"On Duty"),d.Mb(),d.Nb(3,"ion-select",27),d.Ub("ngModelChange",(function(t){return d.sc(e),d.Wb(2).shift.onDuty.id=t})),d.xc(4,f,3,3,"div",28),d.Mb(),d.Mb()}if(2&e){const e=d.Wb(2);d.yb(3),d.gc("placeholder","",e.shift.onDuty.firstName," ",e.shift.onDuty.lastName,""),d.dc("ngModel",e.shift.onDuty.id),d.yb(1),d.dc("ngForOf",e.users)}}function b(e,t){if(1&e){const e=d.Ob();d.Nb(0,"ion-list"),d.Nb(1,"form",12),d.Ub("ngSubmit",(function(){return d.sc(e),d.Wb().onEditShift()})),d.Nb(2,"ion-item"),d.Nb(3,"ion-label",13),d.zc(4,"Start:"),d.Mb(),d.Jb(5,"ion-datetime",14),d.Mb(),d.Nb(6,"ion-item"),d.Nb(7,"ion-label",13),d.zc(8,"End:"),d.Mb(),d.Jb(9,"ion-datetime",15),d.Mb(),d.Nb(10,"ion-item"),d.Nb(11,"ion-label",13),d.zc(12,"Select Call Level"),d.Mb(),d.Nb(13,"ion-select",16),d.Nb(14,"ion-select-option",17),d.zc(15,"Secondary"),d.Mb(),d.Nb(16,"ion-select-option",18),d.zc(17,"Primary"),d.Mb(),d.Mb(),d.Mb(),d.Jb(18,"ion-input",19),d.xc(19,u,5,4,"ion-item",20),d.Nb(20,"ion-item",21),d.Nb(21,"ion-label"),d.zc(22,"Approved?"),d.Mb(),d.Jb(23,"ion-checkbox",22),d.Mb(),d.Nb(24,"ion-item",23),d.Nb(25,"ion-col"),d.Nb(26,"ion-button",24),d.Nb(27,"ion-label",25),d.zc(28,"EDIT"),d.Mb(),d.Jb(29,"ion-icon",26),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb()}if(2&e){const e=d.Wb();d.yb(1),d.dc("formGroup",e.form),d.yb(4),d.dc("ngModel",e.shift.start),d.yb(4),d.dc("ngModel",e.shift.end),d.yb(4),d.dc("ngModel",e.shift.ShiftStatus),d.yb(5),d.ec("value",e.shift.id),d.dc("ngModel",e.shift.id),d.yb(1),d.dc("ngIf",e.users)}}const m=function(){return["Edit Shift"]},y=function(){return["/admin/shifts/add"]},g=function(){return["/admin"]},S=[{path:"",component:(()=>{class e{constructor(e,t,s,r,a){this.shiftsService=e,this.fb=t,this.route=s,this.usersService=r,this.router=a,this.form=this.fb.group({id:["",i.l.required],start:["",i.l.required],end:["",i.l.required],onDuty:["",i.l.required],ShiftStatus:["",i.l.required],isApproved:[!1,i.l.required]})}ngOnInit(){const e=this.route.snapshot.paramMap.get("id");this.shiftsService.getShiftById(e).subscribe(e=>this.shift=e),this.usersService.loadAllUsers().subscribe(e=>this.users=e)}onEditShift(){if(this.form.valid&&this.form.dirty){const e=Object.assign(Object.assign({},this.shift),this.form.value);this.shiftsService.editShift(e).pipe(Object(o.a)(e=>alert("Shift edited!")),Object(o.a)(e=>this.router.navigateByUrl("/admin/shifts/details/"+e.id))).subscribe(e=>console.log(JSON.stringify(e)))}}}return e.\u0275fac=function(t){return new(t||e)(d.Ib(p.a),d.Ib(i.a),d.Ib(n.a),d.Ib(c.a),d.Ib(n.f))},e.\u0275cmp=d.Cb({type:e,selectors:[["app-edit"]],decls:21,vars:8,consts:[[3,"pageTitle"],[2,"margin-top","2rem"],[4,"ngIf"],[3,"translucent"],["color","primary"],["slot","start"],["text","Back","defaultHref","/admin/shifts/list",2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],["color","light",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["name","add-circle-outline","slot","start"],["slot","end"],[2,"font-size","0.8rem","font-family","Quicksand, sans-serif",3,"routerLink"],["slot","end","name","list-outline"],[3,"formGroup","ngSubmit"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem"],["picker-format","DD MMM YY h:mm A","display-format","DD MMM YY h:mm A","minuteValues","00,15,30,45","formControlName","start",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"ngModel"],["picker-format","DD MMM YY h:mm A","display-format","DD MMM YY h:mm A","minuteValues","00,15,30,45","formControlName","end",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"ngModel"],["formControlName","ShiftStatus",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"ngModel"],["value","secondary"],["value","primary"],["formControlName","id","type","hidden",3,"ngModel","value"],["style","font-family: Quicksand, sans-serif; font-size: 0.8rem;",4,"ngIf"],[2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],["formControlName","isApproved","value","true"],["lines","none"],["size","block","color","warning","type","submit"],[2,"font-family","Quicksand, sans-serif"],["slot","start","name","create-outline"],["formControlName","onDuty",3,"placeholder","ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(d.Jb(0,"app-header",0),d.Nb(1,"ion-content"),d.Jb(2,"app-header-banner"),d.Nb(3,"ion-card",1),d.Jb(4,"ion-item-divider"),d.xc(5,b,30,7,"ion-list",2),d.Jb(6,"ion-item-divider"),d.Mb(),d.Mb(),d.Nb(7,"ion-footer",3),d.Nb(8,"ion-toolbar",4),d.Nb(9,"ion-buttons",5),d.Jb(10,"ion-back-button",6),d.Mb(),d.Nb(11,"ion-title"),d.Nb(12,"ion-button",7),d.Jb(13,"ion-icon",8),d.Nb(14,"ion-label"),d.zc(15,"Add Shift"),d.Mb(),d.Mb(),d.Mb(),d.Nb(16,"ion-buttons",9),d.Nb(17,"ion-button",10),d.Jb(18,"ion-icon",11),d.Nb(19,"ion-label"),d.zc(20,"Dashboard"),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb()),2&e&&(d.dc("pageTitle",d.hc(5,m)),d.yb(5),d.dc("ngIf",t.shift),d.yb(2),d.dc("translucent",!0),d.yb(5),d.dc("routerLink",d.hc(6,y)),d.yb(5),d.dc("routerLink",d.hc(7,g)))},directives:[l.a,a.q,h.a,a.j,a.y,r.m,a.s,a.V,a.i,a.f,a.g,a.T,a.h,a.eb,n.g,a.u,a.A,a.B,i.m,i.h,i.c,a.x,a.r,a.fb,i.g,i.b,a.K,a.L,a.w,a.gb,a.o,a.c,a.p,r.l],styles:[""]}),e})()}];let j=(()=>{class e{}return e.\u0275mod=d.Gb({type:e}),e.\u0275inj=d.Fb({factory:function(t){return new(t||e)},imports:[[n.i.forChild(S)],n.i]}),e})();var U=s("jICo");let M=(()=>{class e{}return e.\u0275mod=d.Gb({type:e}),e.\u0275inj=d.Fb({factory:function(t){return new(t||e)},providers:[c.a,p.a],imports:[[r.c,i.d,a.W,j,i.j,U.a]]}),e})()},hv5d:function(e,t,s){"use strict";s.d(t,"a",(function(){return d}));var r=s("tk/3"),i=s("AytR"),a=s("vkgz"),n=s("sWYD"),o=s("fXoL");let d=(()=>{class e{constructor(e){this.http=e,this.date=new Date}loadAllUsers(){const e=(new r.e).set("order[firstName]","asc");return this.http.get(i.a.apiUrl+"/users.json",{params:e,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(e=>console.log("Users Retrieved Successfully!")))}getUserById(e){return this.http.get(`${i.a.apiUrl}/users/${e}.json`,{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`User with UUID: ${e} Fetched Successfully!`)))}loadAllUsersShifts(e){const t=(new r.e).set("order[start]","asc");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingShifts(e){const t=(new r.e).set("order[start]","asc").set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastShifts(e){const t=(new r.e).set("order[start]","desc").set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","secondary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","primary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}editUser(e){return this.http.put(`${i.a.apiUrl}/users/${e.id}`,{id:e.id,firstName:e.firstName,lastName:e.lastName,contactNumber:e.contactNumber,profilePicture:e.profilePicture,roles:e.roles,email:e.email,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>alert(`User ${e.firstName} ${e.lastName} was Successfully Updated!`)),Object(a.a)(e=>console.log("edit user: "+JSON.stringify(e))))}deleteUser(e){return this.http.delete(`${i.a.apiUrl}/users/${e}`,{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(e=>alert("User Successfully Deleted!")),Object(a.a)(e=>console.log("delete user: "+JSON.stringify(e))))}resetPassword(e,t){return this.http.put(`${i.a.apiUrl}/users/${e}`,{password:t},{headers:new r.d({"Content-Type":"application/json"})})}registerUser(e){return this.http.post(i.a.apiUrl+"/register",{id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>alert(`User ${e.firstName} ${e.lastName} Created Successfully!`)),Object(a.a)(e=>console.log("register: "+JSON.stringify(e))))}addUser(e){return this.http.post(i.a.apiUrl+"/users",{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,roles:e.roles,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>alert(`User ${e.firstName} ${e.lastName} Created Successfully!`)),Object(a.a)(e=>console.log("add user: "+JSON.stringify(e))))}}return e.\u0275fac=function(t){return new(t||e)(o.Rb(r.b))},e.\u0275prov=o.Eb({token:e,factory:e.\u0275fac}),e})()},jICo:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var r=s("ofXK"),i=s("TEn/"),a=s("fXoL");let n=(()=>{class e{}return e.\u0275mod=a.Gb({type:e}),e.\u0275inj=a.Fb({factory:function(t){return new(t||e)},imports:[[r.c,i.W]]}),e})()},nnDH:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var r=s("fXoL"),i=s("TEn/");let a=(()=>{class e{constructor(){this.headerBanner="https://media.publit.io/file/header-D.png"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Cb({type:e,selectors:[["app-header-banner"]],decls:1,vars:1,consts:[[1,"header-img",3,"src"]],template:function(e,t){1&e&&r.Jb(0,"ion-img",0),2&e&&r.dc("src",t.headerBanner)},directives:[i.v],styles:[""]}),e})()}}]);