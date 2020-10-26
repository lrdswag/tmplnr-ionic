!function(){function t(t,e,n,r,o,i,c){try{var a=t[i](c),s=a.value}catch(u){return void n(u)}a.done?e(s):Promise.resolve(s).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var c=e.apply(n,r);function a(e){t(c,o,i,a,s,"next",e)}function s(e){t(c,o,i,a,s,"throw",e)}a(void 0)}))}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/u1d":function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));var i=r("AytR"),c=r("vkgz"),a=r("sWYD"),s=r("tk/3"),u=r("wd/R"),l=r("fXoL"),f=function(){var t=function(){function t(e){n(this,t),this.http=e,this.date=new Date}return o(t,[{key:"loadAllComments",value:function(){return this.http.get(i.a.apiUrl+"/comments.json",{headers:new s.d({"Content-Type":"application/json"})}).pipe(Object(c.a)((function(t){return console.log("Comments Retrieved Successfully")})))}},{key:"loadCommentsForUpcomingShifts",value:function(){var t=(new s.e).set("start[after]",Object(a.a)(this.date,"yyyy-MM-dd HH:mm:ss"));return this.http.get(i.a.apiUrl+"/comments.json",{params:t,headers:new s.d({"Content-Type":"application/json"})}).pipe(Object(c.a)((function(t){return console.log("Comments Retrieved Successfully")})))}},{key:"getCommentById",value:function(t){return this.http.get("".concat(i.a.apiUrl,"/comments/").concat(t,".json"),{headers:new s.d({"Content-Type":"application/json"})}).pipe(Object(c.a)((function(e){return console.log("Shift: ".concat(t," Retrieved Successfully!"))})))}},{key:"markAsRead",value:function(t){return this.http.put("".concat(i.a.apiUrl,"/comments/").concat(t),{markedAsRead:!0},{headers:new s.d({"Content-Type":"application/json"})}).pipe(Object(c.a)((function(t){return console.log("Message marked as Read!")})))}},{key:"getCommentsForShift",value:function(t){var e=(new s.e).set("dateOfComment","desc");return this.http.get("".concat(i.a.apiUrl,"/shifts/").concat(t,"/comments.json"),{params:e,headers:new s.d({"Content-Type":"application/json"})}).pipe(Object(c.a)((function(t){return console.log("Shift shift-comments loaded!")})))}},{key:"getUsersComments",value:function(t){return this.http.get("".concat(i.a.apiUrl,"/users/").concat(t,"/comments.json"),{headers:new s.d({"Content-Type":"application/json"})}).pipe(Object(c.a)((function(e){return console.log("Shifts for user: ".concat(t," Retrieved successfully!"))})))}},{key:"getUsersSentMessages",value:function(t){return this.http.get("".concat(i.a.apiUrl,"/users/").concat(t,"/comments.json"),{params:(new s.e).set("isPrivate","true"),headers:new s.d({"Content-Type":"application/json"})}).pipe(Object(c.a)((function(e){return console.log("Shifts for user: ".concat(t," Retrieved successfully!"))})))}},{key:"getUsersReceivedComments",value:function(t){return this.http.get("".concat(i.a.apiUrl,"/users/").concat(t,"/received_comments.json"),{headers:new s.d({"Content-Type":"application/json"})}).pipe(Object(c.a)((function(e){return console.log("received comments for user ".concat(t," fetched successfully!"))})))}},{key:"getUsersUnreadComments",value:function(t){var e=(new s.e).set("markedAsRead","false");return this.http.get("".concat(i.a.apiUrl,"/users/").concat(t,"/received_comments.json"),{params:e,headers:new s.d({"Content-Type":"application/json"})}).pipe(Object(c.a)((function(e){return console.log("received comments for user ".concat(t," fetched successfully!"))})))}},{key:"getUsersReadComments",value:function(t){var e=(new s.e).set("markedAsRead","true");return this.http.get("".concat(i.a.apiUrl,"/users/").concat(t,"/received_comments.json"),{params:e,headers:new s.d({"Content-Type":"application/json"})}).pipe(Object(c.a)((function(e){return console.log("received comments for user ".concat(t," fetched successfully!"))})))}},{key:"addComment",value:function(t){return this.http.post(i.a.apiUrl+"/comments",{comment:t.comment,subject:t.subject,authoredBy:"/users/"+t.authoredBy,dateOfComment:u(t.dateOfComment).toDate(),markedAsRead:!1,isPrivate:!1,shift:"/shifts/"+t.shift,recipient:t.recipient},{headers:new s.d({"Content-Type":"application/json"})}).pipe(Object(c.a)((function(t){return console.log("Comment Edited Successfully!")})))}},{key:"sendMessage",value:function(t){return this.http.post(i.a.apiUrl+"/comments",{comment:t.comment,subject:t.subject,markedAsRead:!1,isPrivate:!0,authoredBy:"/users/"+t.authoredBy,dateOfComment:u(t.dateOfComment).toDate(),recipient:"/users/"+t.recipient},{headers:new s.d({"Content-Type":"application/json"})}).pipe(Object(c.a)((function(t){return console.log("Comment Edited Successfully!")})))}},{key:"editComment",value:function(t){return this.http.put("".concat(i.a.apiUrl,"/comments/").concat(t.id),{comment:t.comment,authoredBy:t.authoredBy,shift:t.shift,recipient:t.recipient},{headers:new s.d({"Content-Type":"application/json"})}).pipe(Object(c.a)((function(e){return console.log("Comment: ".concat(t.id," Edited Successfully!"))})))}},{key:"deleteComment",value:function(t){return this.http.delete("".concat(i.a.apiUrl,"/comments/").concat(t),{headers:new s.d({"Content-Type":"application/json"})}).pipe(Object(c.a)((function(e){return console.log("Comment: ".concat(t," Delete Successfully!"))})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l.Rb(s.b))},t.\u0275prov=l.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return a}));var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})}},notification:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=function(){r.selection()},i=function(){r.selectionStart()},c=function(){r.selectionChanged()},a=function(){r.selectionEnd()},s=function(t){r.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(t,e,n){var r=t*e/n-t+"ms",o=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,e,n){var r=e/n,o=t*r-t+"ms",i=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,e){return{r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,e,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,e,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}}}},NqGI:function(t,n,r){"use strict";r.d(n,"a",(function(){return o})),r.d(n,"b",(function(){return i}));var o=function(){var t=e(regeneratorRuntime.mark((function t(e,n,r,o,i){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",e.attachViewToDom(n,r,i,o));case 2:if("string"==typeof r||r instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(c="string"==typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r,o&&o.forEach((function(t){return c.classList.add(t)})),i&&Object.assign(c,i),n.appendChild(c),t.t0=c.componentOnReady,!t.t0){t.next=12;break}return t.next=12,c.componentOnReady();case 12:return t.abrupt("return",c);case 13:case"end":return t.stop()}}),t)})));return function(e,n,r,o,i){return t.apply(this,arguments)}}(),i=function(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"U/uv":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("sxy2"),o=n("ItpF"),i=n("2c9M"),c=function(t,e){var n,c,a=function(t,r,o){if("undefined"!=typeof document){var i=document.elementFromPoint(t,r);i&&e(i)?i!==n&&(u(),s(i,o)):u()}},s=function(t,e){n=t,c||(c=n);var o=n;Object(r.g)((function(){return o.classList.add("ion-activated")})),e()},u=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(n){var e=n;Object(r.g)((function(){return e.classList.remove("ion-activated")})),t&&c!==n&&n.click(),n=void 0}};return Object(o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return a(t.currentX,t.currentY,i.a)},onMove:function(t){return a(t.currentX,t.currentY,i.b)},onEnd:function(){u(!0),Object(i.e)(),c=void 0}})}},sPtc:function(t,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return c})),r.d(n,"c",(function(){return o})),r.d(n,"d",(function(){return s}));var o=function(t,e){return null!==e.closest(t)},i=function(t,e){return"string"==typeof t&&t.length>0?Object.assign((o=!0,(r="ion-color-"+t)in(n={"ion-color":!0})?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n),e):e;var n,r,o},c=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},a=/^[a-z][a-z0-9+\-.]*:/,s=function(){var t=e(regeneratorRuntime.mark((function t(e,n,r,o){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||"#"===e[0]||a.test(e)){t.next=4;break}if(!(i=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=n&&n.preventDefault(),i.push(e,r,o)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(e,n,r,o){return t.apply(this,arguments)}}()},t7M1:function(t,e,r){"use strict";r.r(e),r.d(e,"ContactModule",(function(){return g}));var i,c,a,s=r("ofXK"),u=r("TEn/"),l=r("tyNb"),f=r("fXoL"),p=r("4J71"),d=function(){return["Contact"]},m=((i=function(){function t(){n(this,t)}return o(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=f.Cb({type:i,selectors:[["app-contact"]],decls:23,vars:3,consts:[[3,"pageTitle"],["loading","eager","src","https://media.publit.io/file/organised.png","alt","header","width","100%","loading","lazy"],[1,"phone-text"],[3,"translucent"],["color","primary"],["defaultHref","/home"]],template:function(t,e){1&t&&(f.Jb(0,"app-header",0),f.Nb(1,"ion-content"),f.Jb(2,"img",1),f.Nb(3,"ion-card"),f.Nb(4,"ion-card-title"),f.zc(5,"Contact"),f.Mb(),f.Nb(6,"ion-card-content"),f.Nb(7,"ion-row"),f.Nb(8,"ion-col"),f.Nb(9,"h4"),f.Nb(10,"span"),f.zc(11,"Email:"),f.Mb(),f.zc(12," mail@xavrom.com"),f.Mb(),f.Mb(),f.Mb(),f.Nb(13,"ion-row"),f.Nb(14,"ion-col"),f.Nb(15,"h4",2),f.Nb(16,"span"),f.zc(17,"Phone:"),f.Mb(),f.zc(18," 0426828872"),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Nb(19,"ion-footer",3),f.Nb(20,"ion-toolbar",4),f.Nb(21,"ion-buttons"),f.Jb(22,"ion-back-button",5),f.Mb(),f.Mb(),f.Mb()),2&t&&(f.dc("pageTitle",f.hc(2,d)),f.yb(19),f.dc("translucent",!0))},directives:[p.a,u.q,u.j,u.n,u.k,u.J,u.p,u.s,u.V,u.i,u.f,u.g],styles:["ion-card-title[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{font-family:Bebas Neue,sans-serif}ion-card-title[_ngcontent-%COMP%]{font-size:2rem}ion-card-content[_ngcontent-%COMP%], ion-card-title[_ngcontent-%COMP%]{text-align:center}.phone-text[_ngcontent-%COMP%]{margin-right:2.2rem}ion-card[_ngcontent-%COMP%]{padding:2rem;margin-top:1rem}"]}),i),h=[{path:"",component:m}],y=((c=function t(){n(this,t)}).\u0275mod=f.Gb({type:c}),c.\u0275inj=f.Fb({factory:function(t){return new(t||c)},imports:[[l.i.forChild(h)],l.i]}),c),b=r("jICo"),g=((a=function t(){n(this,t)}).\u0275mod=f.Gb({type:a,bootstrap:[m]}),a.\u0275inj=f.Fb({factory:function(t){return new(t||a)},imports:[[s.c,u.W,y,b.a]]}),a)}}])}();