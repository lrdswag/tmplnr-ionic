(window.webpackJsonp=window.webpackJsonp||[]).push([[33,56],{"4J71":function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var r=s("fXoL"),a=s("TEn/");let n=(()=>{class e{constructor(){this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Cb({type:e,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(e,t){1&e&&(r.Nb(0,"ion-header",0),r.Nb(1,"ion-toolbar",1),r.Nb(2,"ion-buttons",2),r.Jb(3,"ion-menu-button"),r.Mb(),r.Nb(4,"ion-title",3),r.zc(5),r.Mb(),r.Nb(6,"ion-buttons",4),r.Jb(7,"ion-img",5),r.Mb(),r.Mb(),r.Mb()),2&e&&(r.dc("translucent",!0),r.yb(5),r.Bc(" ",t.pageTitle," "))},directives:[a.t,a.V,a.i,a.E,a.T,a.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),e})()},IOXf:function(e,t,s){"use strict";s.r(t),s.d(t,"SentPageModule",(function(){return M}));var r=s("ofXK"),a=s("3Pt+"),n=s("TEn/"),o=s("tyNb"),i=s("mrSG"),c=s("vkgz"),p=s("fXoL"),d=s("/u1d"),l=s("hv5d"),h=s("e8h1"),f=s("4J71");function u(e,t){1&e&&(p.Nb(0,"ion-card",14),p.Nb(1,"ion-card-header"),p.Nb(2,"ion-card-title",15),p.zc(3,"Loading..."),p.Mb(),p.Mb(),p.Nb(4,"ion-card-content"),p.Jb(5,"ion-spinner",16),p.Mb(),p.Mb())}function b(e,t){1&e&&(p.Nb(0,"ion-label"),p.zc(1,"NONE"),p.Mb())}function y(e,t){if(1&e&&(p.Nb(0,"ion-label"),p.zc(1),p.Mb()),2&e){const e=p.Wb().$implicit;p.yb(1),p.Ac(e.subject)}}const m=function(e){return["/messaging/",e,"read-sent"]};function g(e,t){if(1&e&&(p.Nb(0,"div"),p.Nb(1,"ion-item",18),p.Nb(2,"ion-col"),p.xc(3,b,2,0,"ion-label",19),p.xc(4,y,2,1,"ion-label",19),p.Mb(),p.Nb(5,"ion-col"),p.Nb(6,"ion-label"),p.zc(7),p.Jb(8,"br"),p.zc(9),p.Mb(),p.Mb(),p.Nb(10,"ion-col"),p.Nb(11,"ion-label"),p.zc(12),p.Xb(13,"date"),p.Jb(14,"br"),p.zc(15),p.Xb(16,"date"),p.Mb(),p.Mb(),p.Mb(),p.Nb(17,"ion-item",20),p.Nb(18,"ion-label",21),p.zc(19),p.Mb(),p.Mb(),p.Mb()),2&e){const e=t.$implicit;p.yb(1),p.dc("routerLink",p.ic(14,m,e.id)),p.yb(2),p.dc("ngIf",!e.subject),p.yb(1),p.dc("ngIf",e.subject),p.yb(3),p.Ac(e.recipient.firstName),p.yb(2),p.Bc(" ",e.recipient.lastName,""),p.yb(3),p.Ac(p.Zb(13,8,e.dateOfComment,"shortTime")),p.yb(3),p.Bc(" ",p.Zb(16,11,e.dateOfComment,"dd/MMM"),""),p.yb(4),p.Ac(e.comment)}}function j(e,t){if(1&e&&(p.Nb(0,"div"),p.xc(1,g,20,16,"div",17),p.Mb()),2&e){const e=p.Wb();p.yb(1),p.dc("ngForOf",e.comments)}}const S=function(){return["Outbox"]},U=function(){return["/messaging/send"]},$=[{path:"",component:(()=>{class e{constructor(e,t,s,r){this.commentService=e,this.userService=t,this.storage=s,this.alertCtrl=r}getStorage(){return Object(i.a)(this,void 0,void 0,(function*(){try{const e=yield this.storage.get("id");return console.log(e),e}catch(e){console.log(e)}}))}ngOnInit(){return Object(i.a)(this,void 0,void 0,(function*(){const e=yield this.getStorage();yield this.getUserFromStorage(JSON.parse(e)),yield this.onLoadSentMessages(JSON.parse(e))}))}getUserFromStorage(e){return Object(i.a)(this,void 0,void 0,(function*(){this.userService.getUserById(e).subscribe(e=>this.user=e)}))}loadSentMessages(e){return this.commentService.getUsersSentMessages(e).pipe(Object(c.a)(e=>Object(i.a)(this,void 0,void 0,(function*(){if(0===e.length){const e=yield this.alertCtrl.create({header:"No Sent Messages Found",buttons:["OK"]});yield e.present()}}))))}onLoadSentMessages(e){return Object(i.a)(this,void 0,void 0,(function*(){return this.loadSentMessages(e).subscribe(e=>this.comments=e)}))}}return e.\u0275fac=function(t){return new(t||e)(p.Ib(d.a),p.Ib(l.a),p.Ib(h.b),p.Ib(n.b))},e.\u0275cmp=p.Cb({type:e,selectors:[["app-sent"]],decls:30,vars:9,consts:[[3,"pageTitle"],["loading",""],[2,"text-align","center","font-family","Quicksand, sans-serif"],[2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],[4,"ngIf","ngIfElse"],[3,"translucent"],["color","primary"],["slot","start"],["text","Back","defaultHref","/messaging",2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],["color","light",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["slot","end","name","add-circle-outline"],["slot","end"],[2,"font-size","0.8rem","font-family","Quicksand, sans-serif",3,"routerLink"],["slot","end","name","file-tray-full-outline"],[2,"padding","2rem","margin-top","3rem"],[1,"ion-text-center"],[2,"position","absolute","left","45%","right","45%"],[4,"ngFor","ngForOf"],["color","light","detail","true",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],[4,"ngIf"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem"],["color","medium"]],template:function(e,t){if(1&e&&(p.Jb(0,"app-header",0),p.Nb(1,"ion-content"),p.xc(2,u,6,0,"ng-template",null,1,p.yc),p.Nb(4,"ion-list"),p.Nb(5,"ion-list-header"),p.Nb(6,"ion-label",2),p.zc(7,"Sent Messages"),p.Mb(),p.Mb(),p.Nb(8,"ion-item",3),p.Nb(9,"ion-label"),p.zc(10,"Subject"),p.Mb(),p.Nb(11,"ion-label"),p.zc(12,"Recipient"),p.Mb(),p.Nb(13,"ion-label"),p.zc(14,"Received At"),p.Mb(),p.Mb(),p.xc(15,j,2,1,"div",4),p.Mb(),p.Mb(),p.Nb(16,"ion-footer",5),p.Nb(17,"ion-toolbar",6),p.Nb(18,"ion-buttons",7),p.Jb(19,"ion-back-button",8),p.Mb(),p.Nb(20,"ion-title"),p.Nb(21,"ion-button",9),p.Jb(22,"ion-icon",10),p.Nb(23,"ion-label"),p.zc(24,"New Message"),p.Mb(),p.Mb(),p.Mb(),p.Nb(25,"ion-buttons",11),p.Nb(26,"ion-button",12),p.Nb(27,"ion-label"),p.zc(28,"Inbox"),p.Mb(),p.Jb(29,"ion-icon",13),p.Mb(),p.Mb(),p.Mb(),p.Mb()),2&e){const e=p.rc(3);p.dc("pageTitle",p.hc(6,S)),p.yb(15),p.dc("ngIf",t.comments)("ngIfElse",e),p.yb(1),p.dc("translucent",!0),p.yb(5),p.dc("routerLink",p.hc(7,U)),p.yb(5),p.dc("routerLink",p.hc(8,U))}},directives:[f.a,n.q,n.B,n.C,n.A,n.x,r.m,n.s,n.V,n.i,n.f,n.g,n.T,n.h,n.eb,o.g,n.u,n.j,n.l,n.n,n.k,n.O,r.l,n.p],pipes:[r.e],styles:[""]}),e})()}];let w=(()=>{class e{}return e.\u0275mod=p.Gb({type:e}),e.\u0275inj=p.Fb({factory:function(t){return new(t||e)},imports:[[o.i.forChild($)],o.i]}),e})();var v=s("jICo");let M=(()=>{class e{}return e.\u0275mod=p.Gb({type:e}),e.\u0275inj=p.Fb({factory:function(t){return new(t||e)},providers:[l.a,d.a],imports:[[r.c,a.d,n.W,w,v.a]]}),e})()},hv5d:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var r=s("tk/3"),a=s("AytR"),n=s("vkgz"),o=s("sWYD"),i=s("fXoL");let c=(()=>{class e{constructor(e){this.http=e,this.date=new Date}loadAllUsers(){const e=(new r.e).set("order[firstName]","asc");return this.http.get(a.a.apiUrl+"/users.json",{params:e,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(e=>console.log("Users Retrieved Successfully!")))}getUserById(e){return this.http.get(`${a.a.apiUrl}/users/${e}.json`,{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`User with UUID: ${e} Fetched Successfully!`)))}loadAllUsersShifts(e){const t=(new r.e).set("order[start]","asc");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingShifts(e){const t=(new r.e).set("order[start]","asc").set("start[after]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastShifts(e){const t=(new r.e).set("order[start]","desc").set("start[before]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingShifts(e){const t=(new r.e).set("start[after]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingShifts(e){const t=(new r.e).set("start[before]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedShifts(e){const t=(new r.e).set("start[after]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedShifts(e){const t=(new r.e).set("start[before]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPendingSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPendingSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPendingSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersApprovedSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingApprovedSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastApprovedSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingSecondaryShifts(e){const t=(new r.e).set("start[after]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastSecondaryShifts(e){const t=(new r.e).set("start[before]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersSecondaryShifts(e){const t=(new r.e).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersUpcomingPrimaryShifts(e){const t=(new r.e).set("start[after]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPastPrimaryShifts(e){const t=(new r.e).set("start[before]",Object(o.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}loadUsersPrimaryShifts(e){const t=(new r.e).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get(`${a.a.apiUrl}/users/${e}/shifts.json`,{params:t,headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>console.log(`Shifts Retrieved For User: ${e} `)))}editUser(e){return this.http.put(`${a.a.apiUrl}/users/${e.id}`,{id:e.id,firstName:e.firstName,lastName:e.lastName,contactNumber:e.contactNumber,profilePicture:e.profilePicture,roles:e.roles,email:e.email,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>alert(`User ${e.firstName} ${e.lastName} was Successfully Updated!`)),Object(n.a)(e=>console.log("edit user: "+JSON.stringify(e))))}deleteUser(e){return this.http.delete(`${a.a.apiUrl}/users/${e}`,{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(e=>alert("User Successfully Deleted!")),Object(n.a)(e=>console.log("delete user: "+JSON.stringify(e))))}resetPassword(e,t){return this.http.put(`${a.a.apiUrl}/users/${e}`,{password:t},{headers:new r.d({"Content-Type":"application/json"})})}registerUser(e){return this.http.post(a.a.apiUrl+"/register",{id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>alert(`User ${e.firstName} ${e.lastName} Created Successfully!`)),Object(n.a)(e=>console.log("register: "+JSON.stringify(e))))}addUser(e){return this.http.post(a.a.apiUrl+"/users",{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,roles:e.roles,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new r.d({"Content-Type":"application/json"})}).pipe(Object(n.a)(t=>alert(`User ${e.firstName} ${e.lastName} Created Successfully!`)),Object(n.a)(e=>console.log("add user: "+JSON.stringify(e))))}}return e.\u0275fac=function(t){return new(t||e)(i.Rb(r.b))},e.\u0275prov=i.Eb({token:e,factory:e.\u0275fac}),e})()},jICo:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var r=s("ofXK"),a=s("TEn/"),n=s("fXoL");let o=(()=>{class e{}return e.\u0275mod=n.Gb({type:e}),e.\u0275inj=n.Fb({factory:function(t){return new(t||e)},imports:[[r.c,a.W]]}),e})()}}]);