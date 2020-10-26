!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function n(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[32,56],{"4J71":function(t,s,r){"use strict";r.d(s,"a",(function(){return i}));var a=r("fXoL"),o=r("TEn/"),i=function(){var t=function(){function t(){e(this,t),this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}return n(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Cb({type:t,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(e,t){1&e&&(a.Nb(0,"ion-header",0),a.Nb(1,"ion-toolbar",1),a.Nb(2,"ion-buttons",2),a.Jb(3,"ion-menu-button"),a.Mb(),a.Nb(4,"ion-title",3),a.zc(5),a.Mb(),a.Nb(6,"ion-buttons",4),a.Jb(7,"ion-img",5),a.Mb(),a.Mb(),a.Mb()),2&e&&(a.dc("translucent",!0),a.yb(5),a.Bc(" ",t.pageTitle," "))},directives:[o.t,o.V,o.i,o.E,o.T,o.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),t}()},hv5d:function(t,s,r){"use strict";r.d(s,"a",(function(){return p}));var a=r("tk/3"),o=r("AytR"),i=r("vkgz"),c=r("sWYD"),u=r("fXoL"),p=function(){var t=function(){function t(n){e(this,t),this.http=n,this.date=new Date}return n(t,[{key:"loadAllUsers",value:function(){var e=(new a.e).set("order[firstName]","asc");return this.http.get(o.a.apiUrl+"/users.json",{params:e,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(e){return console.log("Users Retrieved Successfully!")})))}},{key:"getUserById",value:function(e){return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,".json"),{headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("User with UUID: ".concat(e," Fetched Successfully!"))})))}},{key:"loadAllUsersShifts",value:function(e){var t=(new a.e).set("order[start]","asc");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastShifts",value:function(e){var t=(new a.e).set("order[start]","desc").set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPendingShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("isApproved","false");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingPendingShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastPendingShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersApprovedShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("isApproved","true");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingApprovedShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastApprovedShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPendingPrimaryShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingPendingPrimaryShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastPendingPrimaryShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPendingSecondaryShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingPendingSecondaryShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastPendingSecondaryShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersApprovedPrimaryShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingApprovedPrimaryShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastApprovedPrimaryShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersApprovedSecondaryShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingApprovedSecondaryShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastApprovedSecondaryShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingSecondaryShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastSecondaryShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersSecondaryShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingPrimaryShifts",value:function(e){var t=(new a.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastPrimaryShifts",value:function(e){var t=(new a.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPrimaryShifts",value:function(e){var t=(new a.e).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get("".concat(o.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"editUser",value:function(e){return this.http.put("".concat(o.a.apiUrl,"/users/").concat(e.id),{id:e.id,firstName:e.firstName,lastName:e.lastName,contactNumber:e.contactNumber,profilePicture:e.profilePicture,roles:e.roles,email:e.email,wagePerHour:e.wagePerHour},{headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return alert("User ".concat(e.firstName," ").concat(e.lastName," was Successfully Updated!"))})),Object(i.a)((function(e){return console.log("edit user: "+JSON.stringify(e))})))}},{key:"deleteUser",value:function(e){return this.http.delete("".concat(o.a.apiUrl,"/users/").concat(e),{headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(e){return alert("User Successfully Deleted!")})),Object(i.a)((function(e){return console.log("delete user: "+JSON.stringify(e))})))}},{key:"resetPassword",value:function(e,t){return this.http.put("".concat(o.a.apiUrl,"/users/").concat(e),{password:t},{headers:new a.d({"Content-Type":"application/json"})})}},{key:"registerUser",value:function(e){return this.http.post(o.a.apiUrl+"/register",{id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return alert("User ".concat(e.firstName," ").concat(e.lastName," Created Successfully!"))})),Object(i.a)((function(e){return console.log("register: "+JSON.stringify(e))})))}},{key:"addUser",value:function(e){return this.http.post(o.a.apiUrl+"/users",{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,roles:e.roles,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new a.d({"Content-Type":"application/json"})}).pipe(Object(i.a)((function(t){return alert("User ".concat(e.firstName," ").concat(e.lastName," Created Successfully!"))})),Object(i.a)((function(e){return console.log("add user: "+JSON.stringify(e))})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(u.Rb(a.b))},t.\u0275prov=u.Eb({token:t,factory:t.\u0275fac}),t}()},jICo:function(t,n,s){"use strict";s.d(n,"a",(function(){return i}));var r=s("ofXK"),a=s("TEn/"),o=s("fXoL"),i=function(){var t=function t(){e(this,t)};return t.\u0275mod=o.Gb({type:t}),t.\u0275inj=o.Fb({factory:function(e){return new(e||t)},imports:[[r.c,a.W]]}),t}()},zDYE:function(t,s,r){"use strict";r.r(s),r.d(s,"InboxPageModule",(function(){return R}));var a=r("ofXK"),o=r("3Pt+"),i=r("TEn/"),c=r("tyNb"),u=r("mrSG"),p=r("vkgz"),d=r("fXoL"),l=r("/u1d"),f=r("e8h1"),h=r("hv5d"),b=r("4J71");function y(e,t){1&e&&(d.Nb(0,"ion-card",11),d.Nb(1,"ion-card-header"),d.Nb(2,"ion-card-title",12),d.zc(3,"Loading Messages..."),d.Mb(),d.Mb(),d.Nb(4,"ion-card-content"),d.Jb(5,"ion-spinner",13),d.Mb(),d.Mb())}function m(e,t){1&e&&(d.Nb(0,"ion-label"),d.Nb(1,"p"),d.zc(2,"NONE"),d.Mb(),d.Mb())}function g(e,t){if(1&e&&(d.Nb(0,"ion-text"),d.zc(1),d.Mb()),2&e){var n=d.Wb().$implicit;d.yb(1),d.Ac(n.subject)}}function v(e,t){if(1&e){var n=d.Ob();d.Nb(0,"ion-item",15),d.Ub("click",(function(){d.sc(n);var e=t.$implicit;return d.Wb(2).presentActionSheet(e.id)})),d.Nb(1,"ion-col"),d.xc(2,m,3,0,"ion-label",16),d.xc(3,g,2,1,"ion-text",16),d.Mb(),d.Nb(4,"ion-col"),d.Nb(5,"ion-label"),d.zc(6),d.Jb(7,"br"),d.zc(8),d.Mb(),d.Mb(),d.Nb(9,"ion-col"),d.Nb(10,"ion-label"),d.zc(11),d.Xb(12,"date"),d.Jb(13,"br"),d.zc(14),d.Xb(15,"date"),d.Mb(),d.Mb(),d.Mb()}if(2&e){var s=t.$implicit;d.yb(2),d.dc("ngIf",!s.subject),d.yb(1),d.dc("ngIf",s.subject),d.yb(3),d.Ac(s.authoredBy.firstName),d.yb(2),d.Bc(" ",s.authoredBy.lastName,""),d.yb(3),d.Ac(d.Zb(12,6,s.dateOfComment,"shortTime")),d.yb(3),d.Bc(" ",d.Zb(15,9,s.dateOfComment,"dd/MMM"),"")}}function j(e,t){if(1&e&&(d.Nb(0,"div"),d.xc(1,v,16,12,"ion-item",14),d.Mb()),2&e){var n=d.Wb();d.yb(1),d.dc("ngForOf",n.comments)}}var S=function(){return["/messaging/sent"]};function U(e,t){1&e&&(d.Nb(0,"ion-buttons",17),d.Nb(1,"ion-button",18),d.Jb(2,"ion-icon",19),d.Nb(3,"ion-label"),d.zc(4,"Outbox"),d.Mb(),d.Mb(),d.Mb()),2&e&&(d.yb(1),d.dc("routerLink",d.hc(1,S)))}var w,M,O,N=function(){return["Archived Messages"]},k=function(){return["/messaging/send"]},C=[{path:"",component:(w=function(){function t(n,s,r,a,o,i,c){e(this,t),this.route=n,this.commentsService=s,this.storage=r,this.actionSheet=a,this.alertCtrl=o,this.userService=i,this.router=c}return n(t,[{key:"getStorage",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.storage.get("id");case 3:return t=e.sent,e.abrupt("return",(console.log(t),t));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})))}},{key:"ngOnInit",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getStorage();case 2:t=e.sent,this.getUserFromStorage(JSON.parse(t)),this.getUsersComments(JSON.parse(t));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"presentActionSheet",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,s=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.actionSheet.create({header:"Actions",animated:!0,buttons:[{text:"view",icon:"mail-open-outline",handler:function(){s.router.navigateByUrl("/messaging/".concat(e,"/read"))}},{text:"reply",icon:"return-down-back-outline",handler:function(){s.router.navigateByUrl("/messaging/".concat(e,"/reply"))}},{text:"delete",icon:"trash-bin-outline",handler:function(){s.onDeleteMessage(e),s.getUsersComments(s.user.id)}},{text:"cancel",icon:"close",role:"cancel"}]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"onDeleteMessage",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.commentsService.deleteComment(e).pipe(Object(p.a)((function(e){return n.router.navigateByUrl("/messaging")}))).subscribe((function(e){return console.log("Deleted!")}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"getUserFromStorage",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.userService.getUserById(e).subscribe((function(e){return n.user=e}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"getUsersComments",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.commentsService.getUsersReadComments(e).subscribe((function(e){return n.comments=e}));case 1:case"end":return t.stop()}}),t,this)})))}}]),t}(),w.\u0275fac=function(e){return new(e||w)(d.Ib(c.a),d.Ib(l.a),d.Ib(f.b),d.Ib(i.a),d.Ib(i.b),d.Ib(h.a),d.Ib(c.f))},w.\u0275cmp=d.Cb({type:w,selectors:[["app-inbox"]],decls:29,vars:8,consts:[[3,"pageTitle"],["loading",""],["color","light"],[2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],[4,"ngIf","ngIfElse"],[3,"translucent"],["color","primary"],["defaultHref","/messaging","text","Back",2,"font-size","0.8rem","font-family","Quicksand, sans-serif"],["color","light",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["slot","end","name","paper-plane-outline"],["slot","end",4,"ngIf"],[2,"padding","2rem","margin-top","3rem"],[1,"ion-text-center"],[2,"position","absolute","left","45%","right","45%"],["style","font-family: Quicksand, sans-serif; font-size: 0.8rem","detail","true",3,"click",4,"ngFor","ngForOf"],["detail","true",2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"click"],[4,"ngIf"],["slot","end"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["slot","end","name","file-tray-full-outline"]],template:function(e,t){if(1&e&&(d.Jb(0,"app-header",0),d.Nb(1,"ion-content"),d.xc(2,y,6,0,"ng-template",null,1,d.yc),d.Nb(4,"ion-list"),d.Nb(5,"ion-list-header"),d.Nb(6,"ion-label"),d.zc(7,"All Messages"),d.Mb(),d.Mb(),d.Nb(8,"ion-item",2),d.Nb(9,"ion-label",3),d.Nb(10,"strong"),d.zc(11," Subject "),d.Mb(),d.Mb(),d.Nb(12,"ion-label",3),d.Nb(13,"strong"),d.zc(14," Sender "),d.Mb(),d.Mb(),d.Nb(15,"ion-label",3),d.Nb(16,"strong"),d.zc(17," Received At "),d.Mb(),d.Mb(),d.Mb(),d.xc(18,j,2,1,"div",4),d.Mb(),d.Mb(),d.Nb(19,"ion-footer",5),d.Nb(20,"ion-toolbar",6),d.Nb(21,"ion-buttons"),d.Jb(22,"ion-back-button",7),d.Mb(),d.Nb(23,"ion-title"),d.Nb(24,"ion-button",8),d.Jb(25,"ion-icon",9),d.Nb(26,"ion-label"),d.zc(27,"New Message"),d.Mb(),d.Mb(),d.Mb(),d.xc(28,U,5,2,"ion-buttons",10),d.Mb(),d.Mb()),2&e){var n=d.rc(3);d.dc("pageTitle",d.hc(6,N)),d.yb(18),d.dc("ngIf",t.comments)("ngIfElse",n),d.yb(1),d.dc("translucent",!0),d.yb(5),d.dc("routerLink",d.hc(7,k)),d.yb(4),d.dc("ngIf",t.user)}},directives:[b.a,i.q,i.B,i.C,i.A,i.x,a.m,i.s,i.V,i.i,i.f,i.g,i.T,i.h,i.eb,c.g,i.u,i.j,i.l,i.n,i.k,i.O,a.l,i.p,i.Q],pipes:[a.e],styles:[""]}),w)}],P=((M=function t(){e(this,t)}).\u0275mod=d.Gb({type:M}),M.\u0275inj=d.Fb({factory:function(e){return new(e||M)},imports:[[c.i.forChild(C)],c.i]}),M),T=r("jICo"),R=((O=function t(){e(this,t)}).\u0275mod=d.Gb({type:O}),O.\u0275inj=d.Fb({factory:function(e){return new(e||O)},providers:[h.a,l.a],imports:[[a.c,o.d,i.W,P,T.a]]}),O)}}])}();