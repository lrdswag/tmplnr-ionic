(window.webpackJsonp=window.webpackJsonp||[]).push([[25,56],{"4J71":function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var r=s("fXoL"),a=s("TEn/");let o=(()=>{class e{constructor(){this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Cb({type:e,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(e,t){1&e&&(r.Nb(0,"ion-header",0),r.Nb(1,"ion-toolbar",1),r.Nb(2,"ion-buttons",2),r.Jb(3,"ion-menu-button"),r.Mb(),r.Nb(4,"ion-title",3),r.zc(5),r.Mb(),r.Nb(6,"ion-buttons",4),r.Jb(7,"ion-img",5),r.Mb(),r.Mb(),r.Mb()),2&e&&(r.dc("translucent",!0),r.yb(5),r.Bc(" ",t.pageTitle," "))},directives:[a.t,a.V,a.i,a.E,a.T,a.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),e})()},KcSW:function(e,t,s){"use strict";s.r(t),s.d(t,"AddPageModule",(function(){return S}));var r=s("ofXK"),a=s("3Pt+"),o=s("TEn/"),i=s("tyNb"),n=s("lJxs"),p=s("fXoL"),c=s("0IKw"),d=s("hv5d"),l=s("4J71");function h(e,t){if(1&e&&(p.Nb(0,"div"),p.Nb(1,"ion-select-option",31),p.zc(2),p.Mb(),p.Mb()),2&e){const e=t.$implicit;p.yb(1),p.ec("value",e.id),p.yb(1),p.Cc("",e.firstName," ",e.lastName,"")}}function f(e,t){if(1&e&&(p.Nb(0,"ion-item",27),p.Nb(1,"ion-label",28),p.zc(2,"On Duty"),p.Mb(),p.Nb(3,"ion-select",29),p.xc(4,h,3,3,"div",30),p.Mb(),p.Mb()),2&e){const e=p.Wb();p.yb(4),p.dc("ngForOf",e.users)}}const u=function(){return["Add Shift"]},b=function(){return["/admin"]},m=[{path:"",component:(()=>{class e{constructor(e,t,s,r){this.fb=e,this.shiftsService=t,this.router=s,this.usersService=r,this.submitted=!1,this.form=this.fb.group({start:["",a.l.required],end:["",a.l.required],onDuty:["",a.l.required],ShiftStatus:["",a.l.required],isApproved:["",a.l.required]})}ngOnInit(){this.usersService.loadAllUsers().subscribe(e=>this.users=e)}addShift(){if(this.submitted=!0,this.form.valid&&this.form.dirty){const e=Object.assign(Object.assign({},this.shift),this.form.value);this.shiftsService.addShift(e).pipe(Object(n.a)(e=>{this.router.navigateByUrl("/admin/shifts/details/"+e.id)})).subscribe(e=>console.log(e))}}}return e.\u0275fac=function(t){return new(t||e)(p.Ib(a.a),p.Ib(c.a),p.Ib(i.f),p.Ib(d.a))},e.\u0275cmp=p.Cb({type:e,selectors:[["app-add"]],decls:53,vars:7,consts:[[3,"pageTitle"],[2,"margin-top","1rem"],[3,"formGroup","ngSubmit"],[2,"font-family","Quicksand, sans-serif","text-align","center","margin-bottom","2rem"],["position","floating","color","secondary",1,"ion-text-center"],["picker-format","DD MMM YY h:mm A","formControlName","start","display-format","DD MMM YY h:mm A","minuteValues","00,15,30,45"],["picker-format","DD MMM YY h:mm A","formControlName","end","display-format","DD MMM YY h:mm A","minuteValues","00,15,30,45"],["position","floating","color","secondary"],["formControlName","ShiftStatus","placeholder","Select Status"],["value","secondary"],["value","primary"],[2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],["placeholder","Approved Status","formControlName","isApproved"],["value","true"],["value","false"],["style","font-family: Quicksand, sans-serif; font-size: 0.8rem;",4,"ngIf"],["size","12"],[2,"margin-top","2rem"],["type","submit","size","full","shape","round","color","success"],["slot","start","src","assets/icon8/icons8-save-close.svg",2,"height","3.5rem","width","3.5rem"],[3,"translucent"],["color","primary"],["slot","start"],["defaultHref","/shifts","text","back",2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],["slot","end"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["slot","end","name","options-outline"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem"],["position","floating"],["formControlName","onDuty"],[4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(p.Jb(0,"app-header",0),p.Nb(1,"ion-content"),p.Nb(2,"ion-card",1),p.Nb(3,"form",2),p.Ub("ngSubmit",(function(){return t.addShift()})),p.Nb(4,"ion-list"),p.Nb(5,"h4",3),p.zc(6,"Add New Shift"),p.Mb(),p.Nb(7,"ion-item-group"),p.Nb(8,"ion-item"),p.Nb(9,"ion-label",4),p.Nb(10,"span"),p.zc(11,"Select Start Time"),p.Mb(),p.Mb(),p.Jb(12,"ion-datetime",5),p.Mb(),p.Mb(),p.Nb(13,"ion-item-group"),p.Nb(14,"ion-item"),p.Nb(15,"ion-label",4),p.Nb(16,"span"),p.zc(17,"Select Finish Time"),p.Mb(),p.Mb(),p.Jb(18,"ion-datetime",6),p.Mb(),p.Mb(),p.Nb(19,"ion-item-group"),p.Nb(20,"ion-item"),p.Nb(21,"ion-label",7),p.zc(22,"Shift Status"),p.Mb(),p.Nb(23,"ion-select",8),p.Nb(24,"ion-select-option",9),p.zc(25,"Secondary"),p.Mb(),p.Nb(26,"ion-select-option",10),p.zc(27,"Primary"),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Nb(28,"ion-item",11),p.Nb(29,"ion-select",12),p.Nb(30,"ion-select-option",13),p.zc(31,"Approved"),p.Mb(),p.Nb(32,"ion-select-option",14),p.zc(33,"Draft"),p.Mb(),p.Mb(),p.Mb(),p.xc(34,f,5,1,"ion-item",15),p.Nb(35,"ion-col",16),p.Nb(36,"ion-item",17),p.Nb(37,"ion-col",16),p.Nb(38,"ion-button",18),p.Jb(39,"ion-img",19),p.Nb(40,"ion-label"),p.zc(41,"Save Shift"),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Nb(42,"ion-footer",20),p.Nb(43,"ion-toolbar",21),p.Nb(44,"ion-buttons",22),p.Jb(45,"ion-back-button",23),p.Mb(),p.Nb(46,"ion-title"),p.Jb(47,"ion-label"),p.Mb(),p.Nb(48,"ion-buttons",24),p.Nb(49,"ion-button",25),p.Nb(50,"ion-label"),p.zc(51,"Dashboard"),p.Mb(),p.Jb(52,"ion-icon",26),p.Mb(),p.Mb(),p.Mb(),p.Mb()),2&e&&(p.dc("pageTitle",p.hc(5,u)),p.yb(3),p.dc("formGroup",t.form),p.yb(31),p.dc("ngIf",t.users),p.yb(8),p.dc("translucent",!0),p.yb(7),p.dc("routerLink",p.hc(6,b)))},directives:[l.a,o.q,o.j,a.m,a.h,a.c,o.B,o.z,o.x,o.A,o.r,o.fb,a.g,a.b,o.K,o.L,r.m,o.p,o.h,o.v,o.s,o.V,o.i,o.f,o.g,o.T,o.eb,i.g,o.u,r.l],styles:[""]}),e})()}];let y=(()=>{class e{}return e.\u0275mod=p.Gb({type:e}),e.\u0275inj=p.Fb({factory:function(t){return new(t||e)},imports:[[i.i.forChild(m)],i.i]}),e})();var g=s("jICo");let S=(()=>{class e{}return e.\u0275mod=p.Gb({type:e}),e.\u0275inj=p.Fb({factory:function(t){return new(t||e)},providers:[c.a,d.a],imports:[[r.c,a.d,o.W,y,a.j,g.a]]}),e})()},hv5d:function(e,t,s){"use strict";s.d(t,"a",(function(){return p}));var r=s("tk/3"),a=s("AytR"),o=s("vkgz"),i=s("sWYD"),n=s("fXoL");let p=(()=>{class e{constructor(e){this.http=e,this.date=new Date}loadAllUsers(){const e=(new r.e).set("order[firstName]","asc");return this.http.get(a.a.apiUrl+"/users.json",{params:e,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(e=>console.log("Users Retrieved Successfully!")))}getUserById(e){return this.http.get(`${a.a.apiUrl}/users/${e}.json`,{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`User with UUID: ${e} Fetched Successfully!`)))}loadAllUsersShifts(e){const t=(new r.e).set("order[start]","asc");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingShifts(e){const t=(new r.e).set("order[start]","asc").set("start[after]",Object(i.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastShifts(e){const t=(new r.e).set("order[start]","desc").set("start[before]",Object(i.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingShifts(e){const t=(new r.e).set("start[after]",Object(i.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingShifts(e){const t=(new r.e).set("start[before]",Object(i.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedShifts(e){const t=(new r.e).set("start[after]",Object(i.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedShifts(e){const t=(new r.e).set("start[before]",Object(i.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(i.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(i.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(i.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(i.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(i.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(i.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(i.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(i.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(i.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(i.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(i.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(i.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}editUser(e){return this.http.put(`${a.a.apiUrl}/users/${e.id}`,{id:e.id,firstName:e.firstName,lastName:e.lastName,contactNumber:e.contactNumber,profilePicture:e.profilePicture,roles:e.roles,email:e.email,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>alert(`User ${e.firstName} ${e.lastName} was Successfully Updated!`)),Object(o.a)(e=>console.log("edit user: "+JSON.stringify(e))))}deleteUser(e){return this.http.delete(`${a.a.apiUrl}/users/${e}`,{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(e=>alert("User Successfully Deleted!")),Object(o.a)(e=>console.log("delete user: "+JSON.stringify(e))))}resetPassword(e,t){return this.http.put(`${a.a.apiUrl}/users/${e}`,{password:t},{headers:new r.d({"Content-Type":"application/json"})})}registerUser(e){return this.http.post(a.a.apiUrl+"/register",{id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>alert(`User ${e.firstName} ${e.lastName} Created Successfully!`)),Object(o.a)(e=>console.log("register: "+JSON.stringify(e))))}addUser(e){return this.http.post(a.a.apiUrl+"/users",{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,roles:e.roles,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>alert(`User ${e.firstName} ${e.lastName} Created Successfully!`)),Object(o.a)(e=>console.log("add user: "+JSON.stringify(e))))}}return e.\u0275fac=function(t){return new(t||e)(n.Rb(r.b))},e.\u0275prov=n.Eb({token:e,factory:e.\u0275fac}),e})()},jICo:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var r=s("ofXK"),a=s("TEn/"),o=s("fXoL");let i=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)},imports:[[r.c,a.W]]}),e})()}}]);