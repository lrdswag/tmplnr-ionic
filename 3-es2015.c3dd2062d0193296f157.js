(window.webpackJsonp=window.webpackJsonp||[]).push([[3,56],{"4J71":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var r=s("fXoL"),i=s("TEn/");let a=(()=>{class e{constructor(){this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Cb({type:e,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(e,t){1&e&&(r.Nb(0,"ion-header",0),r.Nb(1,"ion-toolbar",1),r.Nb(2,"ion-buttons",2),r.Jb(3,"ion-menu-button"),r.Mb(),r.Nb(4,"ion-title",3),r.zc(5),r.Mb(),r.Nb(6,"ion-buttons",4),r.Jb(7,"ion-img",5),r.Mb(),r.Mb(),r.Mb()),2&e&&(r.dc("translucent",!0),r.yb(5),r.Bc(" ",t.pageTitle," "))},directives:[i.t,i.V,i.i,i.E,i.T,i.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),e})()},hv5d:function(e,t,s){"use strict";s.d(t,"a",(function(){return p}));var r=s("tk/3"),i=s("AytR"),a=s("vkgz"),n=s("sWYD"),o=s("fXoL");let p=(()=>{class e{constructor(e){this.http=e,this.date=new Date}loadAllUsers(){const e=(new r.e).set("order[firstName]","asc");return this.http.get(i.a.apiUrl+"/users.json",{params:e,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(e=>console.log("Users Retrieved Successfully!")))}getUserById(e){return this.http.get(`${i.a.apiUrl}/users/${e}.json`,{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`User with UUID: ${e} Fetched Successfully!`)))}loadAllUsersShifts(e){const t=(new r.e).set("order[start]","asc");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingShifts(e){const t=(new r.e).set("order[start]","asc").set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastShifts(e){const t=(new r.e).set("order[start]","desc").set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","secondary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","primary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get(`${i.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}editUser(e){return this.http.put(`${i.a.apiUrl}/users/${e.id}`,{id:e.id,firstName:e.firstName,lastName:e.lastName,contactNumber:e.contactNumber,profilePicture:e.profilePicture,roles:e.roles,email:e.email,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>alert(`User ${e.firstName} ${e.lastName} was Successfully Updated!`)),Object(a.a)(e=>console.log("edit user: "+JSON.stringify(e))))}deleteUser(e){return this.http.delete(`${i.a.apiUrl}/users/${e}`,{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(e=>alert("User Successfully Deleted!")),Object(a.a)(e=>console.log("delete user: "+JSON.stringify(e))))}resetPassword(e,t){return this.http.put(`${i.a.apiUrl}/users/${e}`,{password:t},{headers:new r.d({"Content-Type":"application/json"})})}registerUser(e){return this.http.post(i.a.apiUrl+"/register",{id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>alert(`User ${e.firstName} ${e.lastName} Created Successfully!`)),Object(a.a)(e=>console.log("register: "+JSON.stringify(e))))}addUser(e){return this.http.post(i.a.apiUrl+"/users",{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,roles:e.roles,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(a.a)(t=>alert(`User ${e.firstName} ${e.lastName} Created Successfully!`)),Object(a.a)(e=>console.log("add user: "+JSON.stringify(e))))}}return e.\u0275fac=function(t){return new(t||e)(o.Rb(r.b))},e.\u0275prov=o.Eb({token:e,factory:e.\u0275fac}),e})()},jICo:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var r=s("ofXK"),i=s("TEn/"),a=s("fXoL");let n=(()=>{class e{}return e.\u0275mod=a.Gb({type:e}),e.\u0275inj=a.Fb({factory:function(t){return new(t||e)},imports:[[r.c,i.W]]}),e})()},nnDH:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var r=s("fXoL"),i=s("TEn/");let a=(()=>{class e{constructor(){this.headerBanner="https://media.publit.io/file/header-D.png"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Cb({type:e,selectors:[["app-header-banner"]],decls:1,vars:1,consts:[[1,"header-img",3,"src"]],template:function(e,t){1&e&&r.Jb(0,"ion-img",0),2&e&&r.dc("src",t.headerBanner)},directives:[i.v],styles:[""]}),e})()},rQGM:function(e,t,s){"use strict";s.r(t),s.d(t,"ApproveShiftModule",(function(){return N}));var r=s("ofXK"),i=s("jICo"),a=s("TEn/"),n=s("3Pt+"),o=s("tyNb"),p=s("mrSG"),c=s("vkgz"),d=s("fXoL"),l=s("0IKw"),h=s("hv5d"),f=s("4J71"),u=s("nnDH");function b(e,t){1&e&&(d.Nb(0,"ion-card",11),d.Nb(1,"ion-card-header"),d.Nb(2,"ion-card-title",12),d.zc(3,"Loading..."),d.Mb(),d.Mb(),d.Nb(4,"ion-card-content"),d.Jb(5,"ion-spinner",13),d.Mb(),d.Mb())}const m=function(e){return["/messaging/",e,"reply"]},y=function(e){return["/admin/shifts/edit/",e]};function g(e,t){if(1&e){const e=d.Ob();d.Nb(0,"div"),d.Nb(1,"ion-list"),d.Nb(2,"form",14),d.Ub("ngSubmit",(function(){return d.sc(e),d.Wb().approveShift()})),d.Nb(3,"ion-list-header"),d.zc(4," Approve Shift "),d.Mb(),d.Nb(5,"ion-item"),d.Nb(6,"ion-label",15),d.zc(7,"Start:"),d.Mb(),d.Jb(8,"ion-datetime",16),d.Mb(),d.Nb(9,"ion-item"),d.Nb(10,"ion-label",15),d.zc(11,"End:"),d.Mb(),d.Jb(12,"ion-datetime",17),d.Mb(),d.Nb(13,"ion-item"),d.Nb(14,"ion-label",15),d.zc(15,"Select Call Level"),d.Mb(),d.Nb(16,"ion-select",18),d.Nb(17,"ion-select-option",19),d.zc(18,"Secondary"),d.Mb(),d.Nb(19,"ion-select-option",20),d.zc(20,"Primary"),d.Mb(),d.Mb(),d.Mb(),d.Jb(21,"ion-input",21),d.Nb(22,"ion-item"),d.Nb(23,"ion-col",22),d.Nb(24,"ion-label",23),d.zc(25,"On Duty"),d.Mb(),d.Mb(),d.Jb(26,"ion-col",24),d.Nb(27,"ion-col",22),d.Nb(28,"ion-label",15),d.zc(29),d.Mb(),d.Mb(),d.Mb(),d.Nb(30,"ion-item"),d.Nb(31,"ion-col",25),d.Nb(32,"ion-button",26),d.Jb(33,"ion-icon",27),d.Nb(34,"ion-label"),d.zc(35,"Message User"),d.Mb(),d.Mb(),d.Mb(),d.Nb(36,"ion-col",25),d.Nb(37,"ion-button",28),d.Nb(38,"ion-label"),d.zc(39,"Edit"),d.Mb(),d.Jb(40,"ion-icon",29),d.Mb(),d.Mb(),d.Mb(),d.Nb(41,"ion-item"),d.Nb(42,"ion-input",30),d.Ub("ngModelChange",(function(t){return d.sc(e),d.Wb().shift.onDuty.id=t})),d.Mb(),d.Nb(43,"ion-col",31),d.Nb(44,"ion-button",32),d.Jb(45,"ion-icon",33),d.Nb(46,"ion-label"),d.zc(47,"Approve"),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb()}if(2&e){const e=d.Wb();d.yb(2),d.dc("formGroup",e.form),d.yb(6),d.dc("ngModel",e.shift.start),d.yb(4),d.dc("ngModel",e.shift.end),d.yb(4),d.dc("ngModel",e.shift.ShiftStatus),d.yb(5),d.ec("value",e.shift.id),d.dc("ngModel",e.shift.id),d.yb(8),d.Cc("",e.shift.onDuty.firstName," ",e.shift.onDuty.lastName,""),d.yb(3),d.dc("routerLink",d.ic(12,m,e.shift.onDuty.id)),d.yb(5),d.dc("routerLink",d.ic(14,y,e.shift.id)),d.yb(5),d.ec("value",e.shift.onDuty.id),d.dc("ngModel",e.shift.onDuty.id)}}const S=function(){return["Approve Shift?"]},j=function(){return["/admin"]},U=[{path:"",component:(()=>{class e{constructor(e,t,s,r,i,a){this.router=e,this.route=t,this.shiftService=s,this.fb=r,this.userService=i,this.alertCtrl=a,this.date=new Date,this.form=this.fb.group({id:["",n.l.required],start:["",n.l.required],end:["",n.l.required],onDuty:["",n.l.required],ShiftStatus:["",n.l.required],isApproved:[!0]})}ngOnInit(){const e=this.route.snapshot.paramMap.get("id");this.getShiftToApprove(e).subscribe(e=>this.shift=e),this.getUsersToSelect().subscribe(e=>this.users=e),setInterval(()=>{this.date=new Date},1e3)}getUsersToSelect(){return this.userService.loadAllUsers()}getShiftToApprove(e){return this.shiftService.getShiftById(e)}approveShift(){return Object(p.a)(this,void 0,void 0,(function*(){if(this.form.valid){this.isSubmitted=!0;const e=Object.assign(Object.assign({},this.shift),this.form.value);this.shiftService.approveShift(e).pipe(Object(c.a)(e=>this.router.navigateByUrl("/admin/shifts/details/"+this.shift.id))).subscribe(e=>this.shift=e)}}))}}return e.\u0275fac=function(t){return new(t||e)(d.Ib(o.f),d.Ib(o.a),d.Ib(l.a),d.Ib(n.a),d.Ib(h.a),d.Ib(a.b))},e.\u0275cmp=d.Cb({type:e,selectors:[["app-approve-shift"]],decls:19,vars:11,consts:[[3,"pageTitle"],["loading",""],[4,"ngIf","ngIfElse"],[3,"translucent"],["color","primary"],["slot","start"],["defaultHref","/admin/pending-shifts","text","Back",2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],[2,"text-align","center"],["slot","end"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["slot","end","name","list-outline"],[2,"padding","2rem","margin-top","3rem"],[1,"ion-text-center"],[2,"position","absolute","left","45%","right","45%"],[3,"formGroup","ngSubmit"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem"],["picker-format","DD MMM YY h:mm A","display-format","DD MMM YY h:mm A","minuteValues","00,15,30,45","formControlName","start",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"ngModel"],["picker-format","DD MMM YY h:mm A","display-format","DD MMM YY h:mm A","minuteValues","00,15,30,45","formControlName","end",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"ngModel"],["formControlName","ShiftStatus",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"ngModel"],["value","secondary"],["value","primary"],["type","hidden","formControlName","id",3,"ngModel","value"],["size","5"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem","text-align","right"],["size","2"],["size","6"],["size","block",3,"routerLink"],["slot","start","name","paper-plane-outline"],["color","warning","size","block",3,"routerLink"],["slot","start","name","create-outline"],["type","hidden","formControlName","onDuty",3,"ngModel","value","ngModelChange"],["size","12"],["size","full","type","submit","color","success"],["slot","start","name","checkbox-outline"]],template:function(e,t){if(1&e&&(d.Jb(0,"app-header",0),d.Nb(1,"ion-content"),d.Jb(2,"app-header-banner"),d.xc(3,b,6,0,"ng-template",null,1,d.yc),d.xc(5,g,48,16,"div",2),d.Mb(),d.Nb(6,"ion-footer",3),d.Nb(7,"ion-toolbar",4),d.Nb(8,"ion-buttons",5),d.Jb(9,"ion-back-button",6),d.Mb(),d.Nb(10,"ion-title"),d.Nb(11,"h5",7),d.zc(12),d.Xb(13,"date"),d.Mb(),d.Mb(),d.Nb(14,"ion-buttons",8),d.Nb(15,"ion-button",9),d.Jb(16,"ion-icon",10),d.Nb(17,"ion-label"),d.zc(18,"Dashboard"),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb()),2&e){const e=d.rc(4);d.dc("pageTitle",d.hc(9,S)),d.yb(5),d.dc("ngIf",t.shift)("ngIfElse",e),d.yb(1),d.dc("translucent",!0),d.yb(6),d.Ac(d.Zb(13,6,t.date,"shortTime")),d.yb(3),d.dc("routerLink",d.hc(10,j))}},directives:[f.a,a.q,u.a,r.m,a.s,a.V,a.i,a.f,a.g,a.T,a.h,a.eb,o.g,a.u,a.A,a.j,a.l,a.n,a.k,a.O,a.B,n.m,n.h,n.c,a.C,a.x,a.r,a.fb,n.g,n.b,a.K,a.L,a.w,a.gb,a.p],pipes:[r.e],styles:[""]}),e})()}];let M=(()=>{class e{}return e.\u0275mod=d.Gb({type:e}),e.\u0275inj=d.Fb({factory:function(t){return new(t||e)},imports:[[o.i.forChild(U)],o.i]}),e})();var v=s("9Ku7"),w=s("tk/3"),$=s("WR+W");let N=(()=>{class e{}return e.\u0275mod=d.Gb({type:e}),e.\u0275inj=d.Fb({factory:function(t){return new(t||e)},providers:[l.a,h.a,v.a,{provide:w.a,useClass:$.a,multi:!0}],imports:[[i.a,r.c,a.W,n.d,n.j,M]]}),e})()}}]);