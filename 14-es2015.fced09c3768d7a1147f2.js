(window.webpackJsonp=window.webpackJsonp||[]).push([[14,56],{"4J71":function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var r=s("fXoL"),a=s("TEn/");let n=(()=>{class e{constructor(){this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Cb({type:e,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(e,t){1&e&&(r.Nb(0,"ion-header",0),r.Nb(1,"ion-toolbar",1),r.Nb(2,"ion-buttons",2),r.Jb(3,"ion-menu-button"),r.Mb(),r.Nb(4,"ion-title",3),r.zc(5),r.Mb(),r.Nb(6,"ion-buttons",4),r.Jb(7,"ion-img",5),r.Mb(),r.Mb(),r.Mb()),2&e&&(r.dc("translucent",!0),r.yb(5),r.Bc(" ",t.pageTitle," "))},directives:[a.t,a.V,a.i,a.E,a.T,a.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),e})()},BxON:function(e,t,s){"use strict";s.r(t),s.d(t,"UserDetailsModule",(function(){return v}));var r=s("ofXK"),a=s("TEn/"),n=s("tyNb"),o=s("vkgz"),i=s("fXoL"),c=s("hv5d"),p=s("4J71"),l=s("nnDH");function d(e,t){1&e&&(i.Nb(0,"ion-card",12),i.Nb(1,"ion-card-header"),i.Nb(2,"ion-card-title",13),i.zc(3,"Loading..."),i.Mb(),i.Mb(),i.Nb(4,"ion-card-content"),i.Jb(5,"ion-spinner",14),i.Mb(),i.Mb())}const b=function(e){return["/users/",e,"shifts"]},h=function(e){return["/messaging/",e,"send-to"]},u=function(e){return["/users/",e,"edit"]},f=function(e){return["/users/",e,"delete"]};function m(e,t){if(1&e&&(i.Nb(0,"ion-card"),i.Nb(1,"ion-card-header",15),i.Nb(2,"ion-item",16),i.Nb(3,"ion-thumbnail"),i.Jb(4,"ion-img",17),i.Mb(),i.Jb(5,"ion-col",18),i.Nb(6,"ion-col",19),i.Nb(7,"ion-label"),i.zc(8),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(9,"ion-list"),i.Nb(10,"ion-item"),i.Nb(11,"ion-col",20),i.Nb(12,"ion-label",21),i.zc(13,"Email:"),i.Mb(),i.Mb(),i.Jb(14,"ion-col",18),i.Nb(15,"ion-col",22),i.Nb(16,"ion-label",23),i.zc(17),i.Mb(),i.Mb(),i.Mb(),i.Nb(18,"ion-item"),i.Nb(19,"ion-col",20),i.Nb(20,"ion-label",21),i.zc(21,"Phone:"),i.Mb(),i.Mb(),i.Jb(22,"ion-col",18),i.Nb(23,"ion-col",22),i.Nb(24,"ion-label",23),i.zc(25),i.Mb(),i.Mb(),i.Mb(),i.Nb(26,"ion-item"),i.Nb(27,"ion-col",20),i.Nb(28,"ion-label",21),i.zc(29,"Wage:"),i.Mb(),i.Mb(),i.Jb(30,"ion-col",18),i.Nb(31,"ion-col",22),i.Nb(32,"ion-label",23),i.zc(33),i.Mb(),i.Mb(),i.Mb(),i.Nb(34,"ion-item"),i.Nb(35,"ion-col",20),i.Nb(36,"ion-label",21),i.zc(37,"Role:"),i.Mb(),i.Mb(),i.Jb(38,"ion-col",18),i.Nb(39,"ion-col",22),i.Nb(40,"ion-label",23),i.zc(41),i.Mb(),i.Mb(),i.Mb(),i.Nb(42,"ion-item",24),i.Jb(43,"ion-ripple-effect"),i.Nb(44,"ion-label",25),i.zc(45,"View User's Shifts"),i.Mb(),i.Mb(),i.Nb(46,"ion-item",24),i.Jb(47,"ion-ripple-effect"),i.Nb(48,"ion-label",25),i.zc(49,"Message User"),i.Mb(),i.Mb(),i.Nb(50,"ion-item",26),i.Nb(51,"ion-col",27),i.Nb(52,"ion-button",28),i.Nb(53,"ion-label"),i.zc(54,"Edit"),i.Mb(),i.Jb(55,"ion-icon",29),i.Mb(),i.Mb(),i.Nb(56,"ion-col",27),i.Nb(57,"ion-button",30),i.Jb(58,"ion-icon",31),i.Nb(59,"ion-label"),i.zc(60,"Delete"),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb()),2&e){const e=i.Wb();i.yb(4),i.ec("src",e.user.profilePicture),i.yb(4),i.Cc("",e.user.firstName," ",e.user.lastName,""),i.yb(9),i.Ac(e.user.email),i.yb(8),i.Ac(e.user.contactNumber),i.yb(8),i.Bc("$",e.user.wagePerHour,""),i.yb(8),i.Ac(e.user.roles),i.yb(1),i.dc("routerLink",i.ic(11,b,e.user.id)),i.yb(4),i.dc("routerLink",i.ic(13,h,e.user.id)),i.yb(6),i.dc("routerLink",i.ic(15,u,e.user.id)),i.yb(5),i.dc("routerLink",i.ic(17,f,e.user.id))}}const y=function(){return["User Details"]},g=function(){return["/users/add"]},j=function(){return["/admin"]},U=[{path:"",component:(()=>{class e{constructor(e,t){this.route=e,this.usersService=t}ngOnInit(){const e=this.route.snapshot.paramMap.get("id");this.loadUser(e)}loadUser(e){return this.usersService.getUserById(e).pipe(Object(o.a)(e=>console.log(`loaded ${e.firstName} ${e.lastName}`))).subscribe(e=>this.user=e)}ngOnChanges(e){this.loadUser(this.user.id)}}return e.\u0275fac=function(t){return new(t||e)(i.Ib(n.a),i.Ib(c.a))},e.\u0275cmp=i.Cb({type:e,selectors:[["app-user-details"]],features:[i.wb],decls:20,vars:9,consts:[[3,"pageTitle"],["loading",""],[4,"ngIf","ngIfElse"],[3,"translucent"],["color","primary"],["slot","start"],["defaultHref","/users","text","Back",2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],["color","light",2,"font-size","0.8rem","font-family","Quicksand, sans-serif",3,"routerLink"],["name","add-circle-outline","slot","start"],["slot","end"],[2,"font-size","0.8rem","font-family","Quicksand, sans-serif",3,"routerLink"],["name","list-outline","slot","end"],[2,"padding","2rem","margin-top","3rem"],[1,"ion-text-center"],[2,"position","absolute","left","45%","right","45%"],["color","medium"],["color","medium",2,"font-family","Quicksand, sans-serif"],[3,"src"],["size","2"],["size","8",2,"text-align","left"],["size","3"],[1,"title"],["size","7"],[1,"my-label"],["color","light","detail","true",3,"routerLink"],["color","primary",2,"font-size","0.8rem","font-family","Quicksand, sans-serif","text-align","center"],["lines","none"],["size","6"],["size","block","color","warning",1,"my-label",3,"routerLink"],["name","create-outline","slot","start"],["size","block","color","danger",1,"my-label",3,"routerLink"],["name","trash-bin-outline","slot","start"]],template:function(e,t){if(1&e&&(i.Jb(0,"app-header",0),i.Nb(1,"ion-content"),i.Jb(2,"app-header-banner"),i.xc(3,d,6,0,"ng-template",null,1,i.yc),i.xc(5,m,61,19,"ion-card",2),i.Mb(),i.Nb(6,"ion-footer",3),i.Nb(7,"ion-toolbar",4),i.Nb(8,"ion-buttons",5),i.Jb(9,"ion-back-button",6),i.Mb(),i.Nb(10,"ion-title"),i.Nb(11,"ion-button",7),i.Jb(12,"ion-icon",8),i.Nb(13,"ion-label"),i.zc(14,"Add User"),i.Mb(),i.Mb(),i.Mb(),i.Nb(15,"ion-buttons",9),i.Nb(16,"ion-button",10),i.Jb(17,"ion-icon",11),i.Nb(18,"ion-label"),i.zc(19,"Dashboard"),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb()),2&e){const e=i.rc(4);i.dc("pageTitle",i.hc(6,y)),i.yb(5),i.dc("ngIf",t.user)("ngIfElse",e),i.yb(1),i.dc("translucent",!0),i.yb(5),i.dc("routerLink",i.hc(7,g)),i.yb(5),i.dc("routerLink",i.hc(8,j))}},directives:[p.a,a.q,l.a,r.m,a.s,a.V,a.i,a.f,a.g,a.T,a.h,a.eb,n.g,a.u,a.A,a.j,a.l,a.n,a.k,a.O,a.x,a.S,a.v,a.p,a.B,a.H],styles:[".my-label[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;font-size:.8rem}.title[_ngcontent-%COMP%]{text-align:right}"]}),e})()}];let S=(()=>{class e{}return e.\u0275mod=i.Gb({type:e}),e.\u0275inj=i.Fb({factory:function(t){return new(t||e)},imports:[[n.i.forChild(U)],n.i]}),e})();var M=s("jICo"),$=s("9Ku7"),w=s("tk/3"),N=s("WR+W");let v=(()=>{class e{}return e.\u0275mod=i.Gb({type:e}),e.\u0275inj=i.Fb({factory:function(t){return new(t||e)},providers:[$.a,c.a,{provide:w.a,useClass:N.a,multi:!0}],imports:[[r.c,a.W,S,M.a]]}),e})()},hv5d:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var r=s("tk/3"),a=s("AytR"),n=s("vkgz"),o=s("sWYD"),i=s("fXoL");let c=(()=>{class e{constructor(e){this.http=e,this.date=new Date}loadAllUsers(){const e=(new r.e).set("order[firstName]","asc");return this.http.get(a.a.apiUrl+"/users.json",{params:e,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(e=>console.log("Users Retrieved Successfully!")))}getUserById(e){return this.http.get(`${a.a.apiUrl}/users/${e}.json`,{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`User with UUID: ${e} Fetched Successfully!`)))}loadAllUsersShifts(e){const t=(new r.e).set("order[start]","asc");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingShifts(e){const t=(new r.e).set("order[start]","asc").set("start[after]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastShifts(e){const t=(new r.e).set("order[start]","desc").set("start[before]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingShifts(e){const t=(new r.e).set("start[after]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingShifts(e){const t=(new r.e).set("start[before]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedShifts(e){const t=(new r.e).set("start[after]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedShifts(e){const t=(new r.e).set("start[before]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}editUser(e){return this.http.put(`${a.a.apiUrl}/users/${e.id}`,{id:e.id,firstName:e.firstName,lastName:e.lastName,contactNumber:e.contactNumber,profilePicture:e.profilePicture,roles:e.roles,email:e.email,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>alert(`User ${e.firstName} ${e.lastName} was Successfully Updated!`)),Object(n.a)(e=>console.log("edit user: "+JSON.stringify(e))))}deleteUser(e){return this.http.delete(`${a.a.apiUrl}/users/${e}`,{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(e=>alert("User Successfully Deleted!")),Object(n.a)(e=>console.log("delete user: "+JSON.stringify(e))))}resetPassword(e,t){return this.http.put(`${a.a.apiUrl}/users/${e}`,{password:t},{headers:new r.d({"Content-Type":"application/json"})})}registerUser(e){return this.http.post(a.a.apiUrl+"/register",{id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>alert(`User ${e.firstName} ${e.lastName} Created Successfully!`)),Object(n.a)(e=>console.log("register: "+JSON.stringify(e))))}addUser(e){return this.http.post(a.a.apiUrl+"/users",{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,roles:e.roles,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>alert(`User ${e.firstName} ${e.lastName} Created Successfully!`)),Object(n.a)(e=>console.log("add user: "+JSON.stringify(e))))}}return e.\u0275fac=function(t){return new(t||e)(i.Rb(r.b))},e.\u0275prov=i.Eb({token:e,factory:e.\u0275fac}),e})()},jICo:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var r=s("ofXK"),a=s("TEn/"),n=s("fXoL");let o=(()=>{class e{}return e.\u0275mod=n.Gb({type:e}),e.\u0275inj=n.Fb({factory:function(t){return new(t||e)},imports:[[r.c,a.W]]}),e})()},nnDH:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var r=s("fXoL"),a=s("TEn/");let n=(()=>{class e{constructor(){this.headerBanner="https://media.publit.io/file/header-D.png"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Cb({type:e,selectors:[["app-header-banner"]],decls:1,vars:1,consts:[[1,"header-img",3,"src"]],template:function(e,t){1&e&&r.Jb(0,"ion-img",0),2&e&&r.dc("src",t.headerBanner)},directives:[a.v],styles:[""]}),e})()}}]);