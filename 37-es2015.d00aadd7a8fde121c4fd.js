(window.webpackJsonp=window.webpackJsonp||[]).push([[37,56],{"4J71":function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var r=s("fXoL"),a=s("TEn/");let o=(()=>{class e{constructor(){this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Cb({type:e,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(e,t){1&e&&(r.Nb(0,"ion-header",0),r.Nb(1,"ion-toolbar",1),r.Nb(2,"ion-buttons",2),r.Jb(3,"ion-menu-button"),r.Mb(),r.Nb(4,"ion-title",3),r.zc(5),r.Mb(),r.Nb(6,"ion-buttons",4),r.Jb(7,"ion-img",5),r.Mb(),r.Mb(),r.Mb()),2&e&&(r.dc("translucent",!0),r.yb(5),r.Bc(" ",t.pageTitle," "))},directives:[a.t,a.V,a.i,a.E,a.T,a.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),e})()},Rk6H:function(e,t,s){"use strict";s.r(t),s.d(t,"DeleteCommentPageModule",(function(){return $}));var r=s("ofXK"),a=s("3Pt+"),o=s("TEn/"),n=s("tyNb"),i=s("mrSG"),p=s("vkgz"),c=s("lJxs"),d=s("fXoL"),l=s("/u1d"),h=s("e8h1"),f=s("hv5d"),u=s("4J71");function m(e,t){1&e&&(d.Nb(0,"ion-card",9),d.Nb(1,"ion-card-header"),d.Nb(2,"ion-card-title",10),d.zc(3,"Loading Comment..."),d.Mb(),d.Mb(),d.Nb(4,"ion-card-content"),d.Jb(5,"ion-spinner",11),d.Mb(),d.Mb())}function b(e,t){if(1&e&&(d.Nb(0,"div"),d.Nb(1,"ion-card"),d.Nb(2,"ion-card-header"),d.Nb(3,"ion-card-title"),d.zc(4,"Are you sure you want to delete comment?"),d.Mb(),d.Mb(),d.Nb(5,"ion-card-content"),d.Nb(6,"ion-item"),d.Nb(7,"ion-label"),d.zc(8,"Recipient"),d.Mb(),d.Nb(9,"ion-label"),d.zc(10,"Date Of Comment"),d.Mb(),d.Nb(11,"ion-label"),d.zc(12,"Shift"),d.Mb(),d.Mb(),d.Nb(13,"ion-item"),d.Nb(14,"ion-label"),d.zc(15),d.Mb(),d.Nb(16,"ion-label"),d.zc(17),d.Xb(18,"date"),d.Mb(),d.Nb(19,"ion-label"),d.zc(20),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb()),2&e){const e=d.Wb();d.yb(15),d.Cc("",e.comment.recipient.firstName," ",e.comment.recipient.lastName,""),d.yb(2),d.Ac(d.Zb(18,4,e.comment.dateOfComment,"medium")),d.yb(3),d.Ac(e.comment.shift.id)}}const y=function(){return["Delete Comment?"]},g=function(){return["/shifts/add"]},j=[{path:"",component:(()=>{class e{constructor(e,t,s,r,a){this.commentService=e,this.route=t,this.router=s,this.storage=r,this.userService=a}getStorage(){return Object(i.a)(this,void 0,void 0,(function*(){try{const e=yield this.storage.get("id");return console.log(e),e}catch(e){console.log(e)}}))}ngOnInit(){return Object(i.a)(this,void 0,void 0,(function*(){const e=this.route.snapshot.paramMap.get("id");this.commentService.getCommentById(e).subscribe(e=>this.comment=e);const t=yield this.getStorage();yield this.getUserFromStorage(JSON.parse(t))}))}getUserFromStorage(e){return Object(i.a)(this,void 0,void 0,(function*(){this.userService.getUserById(e).subscribe(e=>this.user=e)}))}deleteComment(e){this.commentService.deleteComment(e).pipe(Object(p.a)(e=>alert("Comment deleted:"+JSON.stringify(e))),Object(c.a)(e=>this.router.navigateByUrl("/shift-comments"))).subscribe(e=>e)}}return e.\u0275fac=function(t){return new(t||e)(d.Ib(l.a),d.Ib(n.a),d.Ib(n.f),d.Ib(h.b),d.Ib(f.a))},e.\u0275cmp=d.Cb({type:e,selectors:[["app-delete-comment"]],decls:13,vars:7,consts:[[3,"pageTitle"],["loading",""],[4,"ngIf","ngIfElse"],[3,"translucent"],["color","primary"],["slot","start"],["defaultHref","/shifts/list","text","Back"],["slot","end"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],[2,"padding","2rem","margin-top","3rem"],[1,"ion-text-center"],[2,"position","absolute","left","45%","right","45%"]],template:function(e,t){if(1&e&&(d.Jb(0,"app-header",0),d.Nb(1,"ion-content"),d.xc(2,m,6,0,"ng-template",null,1,d.yc),d.xc(4,b,21,7,"div",2),d.Mb(),d.Nb(5,"ion-footer",3),d.Nb(6,"ion-toolbar",4),d.Nb(7,"ion-buttons",5),d.Jb(8,"ion-back-button",6),d.Mb(),d.Nb(9,"ion-buttons",7),d.Nb(10,"ion-button",8),d.Nb(11,"ion-label"),d.zc(12," Add Shift "),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb()),2&e){const e=d.rc(3);d.dc("pageTitle",d.hc(5,y)),d.yb(4),d.dc("ngIf",t.comment)("ngIfElse",e),d.yb(1),d.dc("translucent",!0),d.yb(5),d.dc("routerLink",d.hc(6,g))}},directives:[u.a,o.q,r.m,o.s,o.V,o.i,o.f,o.g,o.h,o.eb,n.g,o.A,o.j,o.l,o.n,o.k,o.O,o.x],pipes:[r.e],styles:[""]}),e})()}];let S=(()=>{class e{}return e.\u0275mod=d.Gb({type:e}),e.\u0275inj=d.Fb({factory:function(t){return new(t||e)},imports:[[n.i.forChild(j)],n.i]}),e})();var U=s("jICo");let $=(()=>{class e{}return e.\u0275mod=d.Gb({type:e}),e.\u0275inj=d.Fb({factory:function(t){return new(t||e)},imports:[[r.c,a.d,o.W,S,U.a]]}),e})()},hv5d:function(e,t,s){"use strict";s.d(t,"a",(function(){return p}));var r=s("tk/3"),a=s("AytR"),o=s("vkgz"),n=s("sWYD"),i=s("fXoL");let p=(()=>{class e{constructor(e){this.http=e,this.date=new Date}loadAllUsers(){const e=(new r.e).set("order[firstName]","asc");return this.http.get(a.a.apiUrl+"/users.json",{params:e,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(e=>console.log("Users Retrieved Successfully!")))}getUserById(e){return this.http.get(`${a.a.apiUrl}/users/${e}.json`,{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`User with UUID: ${e} Fetched Successfully!`)))}loadAllUsersShifts(e){const t=(new r.e).set("order[start]","asc");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingShifts(e){const t=(new r.e).set("order[start]","asc").set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastShifts(e){const t=(new r.e).set("order[start]","desc").set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(n.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}editUser(e){return this.http.put(`${a.a.apiUrl}/users/${e.id}`,{id:e.id,firstName:e.firstName,lastName:e.lastName,contactNumber:e.contactNumber,profilePicture:e.profilePicture,roles:e.roles,email:e.email,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>alert(`User ${e.firstName} ${e.lastName} was Successfully Updated!`)),Object(o.a)(e=>console.log("edit user: "+JSON.stringify(e))))}deleteUser(e){return this.http.delete(`${a.a.apiUrl}/users/${e}`,{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(e=>alert("User Successfully Deleted!")),Object(o.a)(e=>console.log("delete user: "+JSON.stringify(e))))}resetPassword(e,t){return this.http.put(`${a.a.apiUrl}/users/${e}`,{password:t},{headers:new r.d({"Content-Type":"application/json"})})}registerUser(e){return this.http.post(a.a.apiUrl+"/register",{id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>alert(`User ${e.firstName} ${e.lastName} Created Successfully!`)),Object(o.a)(e=>console.log("register: "+JSON.stringify(e))))}addUser(e){return this.http.post(a.a.apiUrl+"/users",{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,roles:e.roles,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(o.a)(t=>alert(`User ${e.firstName} ${e.lastName} Created Successfully!`)),Object(o.a)(e=>console.log("add user: "+JSON.stringify(e))))}}return e.\u0275fac=function(t){return new(t||e)(i.Rb(r.b))},e.\u0275prov=i.Eb({token:e,factory:e.\u0275fac}),e})()},jICo:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var r=s("ofXK"),a=s("TEn/"),o=s("fXoL");let n=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)},imports:[[r.c,a.W]]}),e})()}}]);