!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[27,56],{"4J71":function(t,r,s){"use strict";s.d(r,"a",(function(){return o}));var i=s("fXoL"),a=s("TEn/"),o=function(){var t=function(){function t(){e(this,t),this.logoUrl="https://media.publit.io/file/TMPLNR-2020.png",this.headerBanner="https://media.publit.io/file/header-D.png"}return n(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Cb({type:t,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle"},decls:8,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light",2,"font-family","Quicksand, sans-serif"],["slot","end"],["src","/assets/icons/icon-128x128.png",1,"logo"]],template:function(e,t){1&e&&(i.Nb(0,"ion-header",0),i.Nb(1,"ion-toolbar",1),i.Nb(2,"ion-buttons",2),i.Jb(3,"ion-menu-button"),i.Mb(),i.Nb(4,"ion-title",3),i.zc(5),i.Mb(),i.Nb(6,"ion-buttons",4),i.Jb(7,"ion-img",5),i.Mb(),i.Mb(),i.Mb()),2&e&&(i.dc("translucent",!0),i.yb(5),i.Bc(" ",t.pageTitle," "))},directives:[a.t,a.V,a.i,a.E,a.T,a.v],styles:[".logo[_ngcontent-%COMP%]{width:3rem;height:3rem;float:right}.header-img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;margin-top:.7rem}"]}),t}()},NKyt:function(t,r,s){"use strict";s.r(r),s.d(r,"ListShiftsModule",(function(){return z}));var i=s("ofXK"),a=s("TEn/"),o=s("0IKw"),c=s("hv5d"),u=s("tyNb"),d=s("mrSG"),p=s("vkgz"),f=s("fXoL"),l=s("4J71");function h(e,t){1&e&&(f.Nb(0,"ion-card",12),f.Nb(1,"ion-card-header"),f.Nb(2,"ion-card-title",13),f.zc(3,"Loading..."),f.Mb(),f.Mb(),f.Nb(4,"ion-card-content"),f.Jb(5,"ion-spinner",14),f.Mb(),f.Mb())}function b(e,t){if(1&e&&(f.Nb(0,"div"),f.Nb(1,"ion-avatar",5),f.Jb(2,"ion-img",33),f.Mb(),f.Mb()),2&e){var n=f.Wb().$implicit;f.yb(2),f.ec("src",n.onDuty.profilePicture)}}function v(e,t){1&e&&f.Jb(0,"ion-spinner")}function m(e,t){1&e&&(f.Nb(0,"span"),f.Jb(1,"ion-icon",34),f.Mb())}function y(e,t){1&e&&(f.Nb(0,"span"),f.Jb(1,"ion-icon",35),f.Mb())}function g(e,t){1&e&&(f.Nb(0,"div"),f.Jb(1,"ion-icon",36),f.Mb())}function S(e,t){1&e&&(f.Nb(0,"div"),f.Jb(1,"ion-icon",37),f.Mb())}function w(e,t){if(1&e){var n=f.Ob();f.Nb(0,"div"),f.Nb(1,"ion-item",30),f.Ub("click",(function(){f.sc(n);var e=t.$implicit;return f.Wb(2).presentActionSheet(e.id)})),f.xc(2,b,3,1,"div",2),f.xc(3,v,1,0,"ng-template",null,31,f.yc),f.Nb(5,"ion-col"),f.zc(6),f.Xb(7,"date"),f.Mb(),f.Nb(8,"ion-col"),f.zc(9),f.Xb(10,"date"),f.Mb(),f.Nb(11,"ion-col"),f.zc(12),f.Xb(13,"date"),f.Mb(),f.Nb(14,"ion-col"),f.xc(15,m,2,0,"span",32),f.xc(16,y,2,0,"span",32),f.Mb(),f.Nb(17,"ion-col"),f.xc(18,g,2,0,"div",32),f.xc(19,S,2,0,"div",32),f.Mb(),f.Mb(),f.Mb()}if(2&e){var r=t.$implicit,s=f.rc(4);f.yb(2),f.dc("ngIf",r.onDuty.profilePicture)("ngIfElse",s),f.yb(4),f.Ac(f.Zb(7,9,r.start,"dd/MMM")),f.yb(3),f.Ac(f.Zb(10,12,r.start,"shortTime")),f.yb(3),f.Ac(f.Zb(13,15,r.end,"shortTime")),f.yb(3),f.dc("ngIf","secondary"===r.ShiftStatus),f.yb(1),f.dc("ngIf","primary"===r.ShiftStatus),f.yb(2),f.dc("ngIf",!1===r.isApproved),f.yb(1),f.dc("ngIf",!0===r.isApproved)}}function j(e,t){if(1&e){var n=f.Ob();f.Nb(0,"div"),f.Nb(1,"ion-list"),f.Nb(2,"ion-item-divider"),f.Nb(3,"ion-row",15),f.Nb(4,"ion-col",16),f.Nb(5,"strong"),f.zc(6,"Call Levels"),f.Mb(),f.Mb(),f.Nb(7,"ion-col",17),f.Nb(8,"span",18),f.zc(9,"Secondary"),f.Mb(),f.Mb(),f.Nb(10,"ion-col",19),f.Jb(11,"ion-icon",20),f.Mb(),f.Nb(12,"ion-col",17),f.Nb(13,"span",18),f.zc(14,"Primary"),f.Mb(),f.Mb(),f.Nb(15,"ion-col",19),f.Jb(16,"ion-icon",21),f.Mb(),f.Mb(),f.Mb(),f.Nb(17,"ion-item",22),f.Nb(18,"ion-button",23),f.Ub("click",(function(){return f.sc(n),f.Wb().toggleViewActionSheet()})),f.Jb(19,"ion-icon",24),f.Nb(20,"ion-label"),f.zc(21,"FILTER"),f.Mb(),f.Mb(),f.Nb(22,"ion-label",25),f.Nb(23,"strong"),f.zc(24),f.Mb(),f.Mb(),f.Mb(),f.Nb(25,"ion-item",26),f.Nb(26,"ion-col",27),f.Nb(27,"strong"),f.zc(28,"On Duty"),f.Mb(),f.Mb(),f.Nb(29,"ion-col",27),f.Nb(30,"strong"),f.zc(31,"Date"),f.Mb(),f.Mb(),f.Nb(32,"ion-col",27),f.Nb(33,"strong"),f.zc(34,"Start"),f.Mb(),f.Mb(),f.Nb(35,"ion-col",27),f.Nb(36,"strong"),f.zc(37,"Finish"),f.Mb(),f.Mb(),f.Nb(38,"ion-col",19),f.Nb(39,"strong"),f.zc(40,"Level"),f.Mb(),f.Mb(),f.Nb(41,"ion-col",28),f.Nb(42,"strong"),f.zc(43,"Approved"),f.Mb(),f.Mb(),f.Mb(),f.xc(44,w,20,18,"div",29),f.Mb(),f.Mb()}if(2&e){var r=f.Wb();f.yb(24),f.Ac(r.view),f.yb(20),f.dc("ngForOf",r.shifts)}}var k,U,O,N=function(){return["Admin Shifts List"]},M=function(){return["/admin/shifts/add"]},x=function(){return["/admin"]},P=[{path:"",component:(k=function(){function t(n,r,s,i,a,o,c){e(this,t),this.shiftsService=n,this.navCtrl=r,this.navParams=s,this.modalController=i,this.alertCtrl=a,this.router=o,this.actionSheetController=c,this.date=new Date,this.isLoading=!0,this.view="All Shifts"}return n(t,[{key:"onSelect",value:function(e){this.selectedShift=e}},{key:"ngOnInit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.onLoadAllShifts();case 2:setInterval((function(){t.date=new Date}),1e3);case 3:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnChanges",value:function(e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.onLoadAllShifts();case 2:case"end":return e.stop()}}),e,this)})))}},{key:"presentActionSheet",value:function(e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.actionSheetController.create({header:"Actions",animated:!0,buttons:[{text:"view",icon:"search-circle-outline",handler:function(){r.router.navigateByUrl("/admin/shifts/details/"+e)}},{text:"edit",icon:"create-outline",handler:function(){r.router.navigateByUrl("/admin/shifts/edit/"+e)}},{text:"Approve",icon:"thumbs-up-outline",handler:function(){r.router.navigateByUrl("/admin/shifts/approve/"+e)}},{text:"comment",icon:"chatbubble-outline",handler:function(){r.router.navigateByUrl("/shifts/".concat(e,"/add-comment"))}},{text:"delete",icon:"trash-bin-outline",handler:function(){r.router.navigateByUrl("/admin/shifts/delete/"+e)}},{text:"cancel",icon:"close",role:"cancel"}]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"toggleViewActionSheet",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actionSheetController.create({header:"Actions",cssClass:"my-custom-class",animated:!0,buttons:[{text:"All Shifts",handler:function(){n.view="All Shifts",n.onLoadAllShifts()}},{text:"Upcoming Shifts",handler:function(){n.view="Upcoming Shifts",n.onLoadUpcoming()}},{text:"Past Shifts",handler:function(){n.view="Past Shifts",n.onLoadPastShifts()}},{text:"All - Approved Shifts",handler:function(){n.view="Approved Shifts",n.onLoadApprovedShifts()}},{text:"All - Pending Shifts",handler:function(){n.view="Pending Shifts",n.onLoadPendingShifts()}},{text:"Approved - Primary Shifts",handler:function(){n.view="Approved - Primary Shifts",n.onLoadApprovedPrimary()}},{text:"Approved - Secondary",handler:function(){n.view="Approved - Secondary",n.onLoadApprovedSecondary()}},{text:"Pending Primary",handler:function(){n.view="Pending Primary",n.onLoadPendingPrimary()}},{text:"Pending Secondary",handler:function(){n.view="Pending Secondary",n.onLoadPendingSecondary()}},{text:"Live Shifts",handler:function(){n.view="Live Shifts",n.onLoadLiveShifts()}},{text:"CLOSE",icon:"close",role:"cancel"}]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"loadAllShifts",value:function(){var e=this;return this.shiftsService.loadAllShifts().pipe(Object(p.a)((function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=6;break}return e.next=3,this.alertCtrl.create({header:"No Shifts Found!",message:"No shifts were found in the database.",buttons:["OK"]});case 3:return n=e.sent,e.next=6,n.present();case 6:case"end":return e.stop()}}),e,this)})))})))}},{key:"onLoadAllShifts",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadAllShifts().subscribe((function(e){return t.shifts=e}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"loadUpcoming",value:function(){var e=this;return this.shiftsService.loadAllUpcomingShifts().pipe(Object(p.a)((function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=6;break}return e.next=3,this.alertCtrl.create({header:"We Looked, But there are NONE!",message:"No upcoming approved shifts were found in the database.",buttons:["OK"]});case 3:return n=e.sent,e.next=6,n.present();case 6:case"end":return e.stop()}}),e,this)})))})))}},{key:"onLoadUpcoming",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadUpcoming().subscribe((function(e){return t.shifts=e}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"loadPastShifts",value:function(){var e=this;return this.shiftsService.loadAllPastShifts().pipe(Object(p.a)((function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=6;break}return e.next=3,this.alertCtrl.create({header:"We Looked, But there are NONE!",message:"No past shifts were found in the database.",buttons:["OK"]});case 3:return n=e.sent,e.next=6,n.present();case 6:case"end":return e.stop()}}),e,this)})))})))}},{key:"onLoadPastShifts",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadPastShifts().subscribe((function(e){return t.shifts=e}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"loadApprovedShifts",value:function(){var e=this;return this.shiftsService.loadAllUpcomingApprovedShifts().pipe(Object(p.a)((function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=6;break}return e.next=3,this.alertCtrl.create({header:"We Looked, But there are NONE!",message:'No upcoming "approved" shifts were found in the database.',buttons:["OK"]});case 3:return n=e.sent,e.next=6,n.present();case 6:case"end":return e.stop()}}),e,this)})))})))}},{key:"onLoadApprovedShifts",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadApprovedShifts().subscribe((function(e){return t.shifts=e}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"loadPendingShifts",value:function(){var e=this;return this.shiftsService.loadAwaitingApprovalShifts().pipe(Object(p.a)((function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=6;break}return e.next=3,this.alertCtrl.create({header:"We Looked, But there are NONE!",message:'No upcoming "pending approval" shifts were found in the database.',buttons:["OK"]});case 3:return n=e.sent,e.next=6,n.present();case 6:case"end":return e.stop()}}),e,this)})))})))}},{key:"onLoadPendingShifts",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadPendingShifts().subscribe((function(e){return t.shifts=e}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"loadLiveShifts",value:function(){var e=this;return this.shiftsService.loadLiveShifts().pipe(Object(p.a)((function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=6;break}return e.next=3,this.alertCtrl.create({header:"We Looked, But there are NONE!",message:'No "live" shifts were found in the database.',buttons:["OK"]});case 3:return n=e.sent,e.next=6,n.present();case 6:case"end":return e.stop()}}),e,this)})))})))}},{key:"onLoadLiveShifts",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadLiveShifts().subscribe((function(e){return t.shifts=e}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"loadPendingPrimary",value:function(){var e=this;return this.shiftsService.loadUpcomingPendingPrimaryShifts().pipe(Object(p.a)((function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=6;break}return e.next=3,this.alertCtrl.create({header:"We Looked, But there are NONE!",message:'No upcoming "pending primary" shifts were found in the database.',buttons:["OK"]});case 3:return n=e.sent,e.next=6,n.present();case 6:case"end":return e.stop()}}),e,this)})))})))}},{key:"onLoadPendingPrimary",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadPendingPrimary().subscribe((function(e){return t.shifts=e}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"loadPendingSecondary",value:function(){var e=this;return this.shiftsService.loadUpcomingPendingSecondaryShifts().pipe(Object(p.a)((function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=6;break}return e.next=3,this.alertCtrl.create({header:"We Looked, But there are NONE!",message:'No upcoming "pending secondary" shifts were found in the database.',buttons:["OK"]});case 3:return n=e.sent,e.next=6,n.present();case 6:case"end":return e.stop()}}),e,this)})))})))}},{key:"onLoadPendingSecondary",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadPendingSecondary().subscribe((function(e){return t.shifts=e}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"loadApprovedPrimary",value:function(){var e=this;return this.shiftsService.loadUpcomingApprovedPrimaryShifts().pipe(Object(p.a)((function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=6;break}return e.next=3,this.alertCtrl.create({header:"We Looked, But there are NONE!",message:'No upcoming "approved primary" shifts were found in the database.',buttons:["OK"]});case 3:return n=e.sent,e.next=6,n.present();case 6:case"end":return e.stop()}}),e,this)})))})))}},{key:"onLoadApprovedPrimary",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadApprovedPrimary().subscribe((function(e){return t.shifts=e}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"loadApprovedSecondary",value:function(){var e=this;return this.shiftsService.loadUpcomingApprovedSecondaryShifts().pipe(Object(p.a)((function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=6;break}return e.next=3,this.alertCtrl.create({header:"We Looked, But there are NONE!",message:"No upcoming approved shifts were found in the database.",buttons:["OK"]});case 3:return n=e.sent,e.next=6,n.present();case 6:case"end":return e.stop()}}),e,this)})))})))}},{key:"onLoadApprovedSecondary",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadApprovedSecondary().subscribe((function(e){return t.shifts=e}));case 1:case"end":return e.stop()}}),e,this)})))}}]),t}(),k.\u0275fac=function(e){return new(e||k)(f.Ib(o.a),f.Ib(a.bb),f.Ib(a.cb),f.Ib(a.ab),f.Ib(a.b),f.Ib(u.f),f.Ib(a.a))},k.\u0275cmp=f.Cb({type:k,selectors:[["app-list-shifts"]],features:[f.wb],decls:19,vars:9,consts:[[3,"pageTitle"],["loading",""],[4,"ngIf","ngIfElse"],[3,"translucent"],["color","primary"],["slot","start"],["defaultHref","/admin","text","Back",2,"font-family","Quicksand, sans-serif","font-size","0.8rem"],["color","light",2,"font-size","0.8rem","font-family","Quicksand, sans-serif",3,"routerLink"],["name","add-circle-outline","slot","start"],["slot","end"],[2,"font-family","Quicksand, sans-serif","font-size","0.8rem",3,"routerLink"],["slot","end","name","list-outline"],[2,"padding","2rem","margin-top","3rem"],[1,"ion-text-center"],[2,"position","absolute","left","45%","right","45%"],[1,"ion-text-center",2,"font-family","Quicksand, sans-serif"],["size","3",2,"font-size","0.8rem"],["size","3"],[2,"font-size","0.7rem"],["size","1.5"],["color","secondary","name","person-circle-outline",2,"font-size","2rem"],["color","success","name","person-circle-outline",2,"font-size","2rem"],["detail","false"],["fill","clear",3,"click"],["slot","start","name","funnel-outline"],[2,"font-size","0.8rem","font-family","Quicksand, sans-serif","text-align","center"],[1,"ion-text-center",2,"font-size","0.7rem","font-family","Quicksand, sans-serif"],["size","2"],["size","2.5"],[4,"ngFor","ngForOf"],[1,"shifts","ion-text-center",2,"font-family","Quicksand, sans-serif","font-size","0.7rem",3,"click"],["spinner",""],[4,"ngIf"],[2,"width","3rem","height","3rem",3,"src"],["color","secondary","size","large","name","person-circle-outline"],["color","success","size","large","name","person-circle-outline"],["size","large","color","danger","name","close-circle-outline"],["size","large","color","success","name","checkmark-circle-outline"]],template:function(e,t){if(1&e&&(f.Jb(0,"app-header",0),f.Nb(1,"ion-content"),f.xc(2,h,6,0,"ng-template",null,1,f.yc),f.xc(4,j,45,2,"div",2),f.Mb(),f.Nb(5,"ion-footer",3),f.Nb(6,"ion-toolbar",4),f.Nb(7,"ion-buttons",5),f.Jb(8,"ion-back-button",6),f.Mb(),f.Nb(9,"ion-title"),f.Nb(10,"ion-button",7),f.Nb(11,"ion-label"),f.zc(12,"Add Shift"),f.Mb(),f.Jb(13,"ion-icon",8),f.Mb(),f.Mb(),f.Nb(14,"ion-buttons",9),f.Nb(15,"ion-button",10),f.Nb(16,"ion-label"),f.zc(17,"Dashboard"),f.Mb(),f.Jb(18,"ion-icon",11),f.Mb(),f.Mb(),f.Mb(),f.Mb()),2&e){var n=f.rc(3);f.dc("pageTitle",f.hc(6,N)),f.yb(4),f.dc("ngIf",t.shifts)("ngIfElse",n),f.yb(1),f.dc("translucent",!0),f.yb(5),f.dc("routerLink",f.hc(7,M)),f.yb(5),f.dc("routerLink",f.hc(8,x))}},directives:[l.a,a.q,i.m,a.s,a.V,a.i,a.f,a.g,a.T,a.h,a.eb,u.g,a.A,a.u,a.j,a.l,a.n,a.k,a.O,a.B,a.y,a.J,a.p,a.x,i.l,a.e,a.v],pipes:[i.e],styles:[""]}),k)}],A=((U=function t(){e(this,t)}).\u0275mod=f.Gb({type:U}),U.\u0275inj=f.Fb({factory:function(e){return new(e||U)},imports:[[u.i.forChild(P)],u.i]}),U),R=s("9Ku7"),C=s("jICo"),L=s("3Pt+"),T=s("tk/3"),H=s("WR+W"),z=((O=function t(){e(this,t)}).\u0275mod=f.Gb({type:O}),O.\u0275inj=f.Fb({factory:function(e){return new(e||O)},providers:[o.a,c.a,R.a,a.cb,{provide:T.a,useClass:H.a,multi:!0}],imports:[[i.c,a.W,A,C.a,L.j]]}),O)},hv5d:function(t,r,s){"use strict";s.d(r,"a",(function(){return d}));var i=s("tk/3"),a=s("AytR"),o=s("vkgz"),c=s("sWYD"),u=s("fXoL"),d=function(){var t=function(){function t(n){e(this,t),this.http=n,this.date=new Date}return n(t,[{key:"loadAllUsers",value:function(){var e=(new i.e).set("order[firstName]","asc");return this.http.get(a.a.apiUrl+"/users.json",{params:e,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(e){return console.log("Users Retrieved Successfully!")})))}},{key:"getUserById",value:function(e){return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,".json"),{headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("User with UUID: ".concat(e," Fetched Successfully!"))})))}},{key:"loadAllUsersShifts",value:function(e){var t=(new i.e).set("order[start]","asc");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingShifts",value:function(e){var t=(new i.e).set("order[start]","asc").set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastShifts",value:function(e){var t=(new i.e).set("order[start]","desc").set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPendingShifts",value:function(e){var t=(new i.e).set("order[start]","asc").set("isApproved","false");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingPendingShifts",value:function(e){var t=(new i.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastPendingShifts",value:function(e){var t=(new i.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersApprovedShifts",value:function(e){var t=(new i.e).set("order[start]","asc").set("isApproved","true");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingApprovedShifts",value:function(e){var t=(new i.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastApprovedShifts",value:function(e){var t=(new i.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPendingPrimaryShifts",value:function(e){var t=(new i.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingPendingPrimaryShifts",value:function(e){var t=(new i.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastPendingPrimaryShifts",value:function(e){var t=(new i.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","primary");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPendingSecondaryShifts",value:function(e){var t=(new i.e).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingPendingSecondaryShifts",value:function(e){var t=(new i.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastPendingSecondaryShifts",value:function(e){var t=(new i.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","false").set("ShiftStatus","secondary");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersApprovedPrimaryShifts",value:function(e){var t=(new i.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingApprovedPrimaryShifts",value:function(e){var t=(new i.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastApprovedPrimaryShifts",value:function(e){var t=(new i.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","primary");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersApprovedSecondaryShifts",value:function(e){var t=(new i.e).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingApprovedSecondaryShifts",value:function(e){var t=(new i.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastApprovedSecondaryShifts",value:function(e){var t=(new i.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("isApproved","true").set("ShiftStatus","secondary");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingSecondaryShifts",value:function(e){var t=(new i.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastSecondaryShifts",value:function(e){var t=(new i.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","secondary");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersSecondaryShifts",value:function(e){var t=(new i.e).set("order[start]","asc").set("ShiftStatus","secondary");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersUpcomingPrimaryShifts",value:function(e){var t=(new i.e).set("start[after]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPastPrimaryShifts",value:function(e){var t=(new i.e).set("start[before]",Object(c.a)(this.date,"yyyy-MM-dd HH:mm:ss")).set("order[start]","desc").set("ShiftStatus","primary");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"loadUsersPrimaryShifts",value:function(e){var t=(new i.e).set("order[start]","asc").set("ShiftStatus","primary");return this.http.get("".concat(a.a.apiUrl,"/users/").concat(e,"/shifts.json"),{params:t,headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return console.log("Shifts Retrieved For User: ".concat(e," "))})))}},{key:"editUser",value:function(e){return this.http.put("".concat(a.a.apiUrl,"/users/").concat(e.id),{id:e.id,firstName:e.firstName,lastName:e.lastName,contactNumber:e.contactNumber,profilePicture:e.profilePicture,roles:e.roles,email:e.email,wagePerHour:e.wagePerHour},{headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return alert("User ".concat(e.firstName," ").concat(e.lastName," was Successfully Updated!"))})),Object(o.a)((function(e){return console.log("edit user: "+JSON.stringify(e))})))}},{key:"deleteUser",value:function(e){return this.http.delete("".concat(a.a.apiUrl,"/users/").concat(e),{headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(e){return alert("User Successfully Deleted!")})),Object(o.a)((function(e){return console.log("delete user: "+JSON.stringify(e))})))}},{key:"resetPassword",value:function(e,t){return this.http.put("".concat(a.a.apiUrl,"/users/").concat(e),{password:t},{headers:new i.d({"Content-Type":"application/json"})})}},{key:"registerUser",value:function(e){return this.http.post(a.a.apiUrl+"/register",{id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return alert("User ".concat(e.firstName," ").concat(e.lastName," Created Successfully!"))})),Object(o.a)((function(e){return console.log("register: "+JSON.stringify(e))})))}},{key:"addUser",value:function(e){return this.http.post(a.a.apiUrl+"/users",{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,roles:e.roles,contactNumber:e.contactNumber,profilePicture:e.profilePicture,wagePerHour:e.wagePerHour},{headers:new i.d({"Content-Type":"application/json"})}).pipe(Object(o.a)((function(t){return alert("User ".concat(e.firstName," ").concat(e.lastName," Created Successfully!"))})),Object(o.a)((function(e){return console.log("add user: "+JSON.stringify(e))})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(u.Rb(i.b))},t.\u0275prov=u.Eb({token:t,factory:t.\u0275fac}),t}()},jICo:function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));var s=r("ofXK"),i=r("TEn/"),a=r("fXoL"),o=function(){var t=function t(){e(this,t)};return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(e){return new(e||t)},imports:[[s.c,i.W]]}),t}()}}])}();