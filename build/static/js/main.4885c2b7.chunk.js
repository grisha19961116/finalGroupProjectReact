(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[6],{10:function(e,t,n){e.exports={container:"UserInfo_container__3FAqZ",signOutBtnLg:"UserInfo_signOutBtnLg__1t2Ys",userInfo:"UserInfo_userInfo__1IWgq",avatar:"UserInfo_avatar__5asUr",userInfoModal:"UserInfo_userInfoModal__ZTIrc",userInfoModalActive:"UserInfo_userInfoModalActive__3OwId UserInfo_userInfoModal__ZTIrc",userInfoModalText:"UserInfo_userInfoModalText__37N_z",customFileUpload:"UserInfo_customFileUpload__xHGjg",customNameUpload:"UserInfo_customNameUpload__1cNFq",avatarImg:"UserInfo_avatarImg__BzLgp",dropdownCaret:"UserInfo_dropdownCaret__1BC5o",name:"UserInfo_name__2_SqI",nameUpload:"UserInfo_nameUpload__1HW7Z UserInfo_userInfoModalText__37N_z",inputWrapper:"UserInfo_inputWrapper__21VG_",addBtn:"UserInfo_addBtn__1RMr6",addIcon:"UserInfo_addIcon__3oOCE",loading:"UserInfo_loading__JeDRc",initial:"UserInfo_initial__1t5df"}},16:function(e,t,n){"use strict";n.d(t,"a",(function(){return w})),n.d(t,"c",(function(){return N})),n.d(t,"b",(function(){return M}));var a,r,c,s,o=n(5),u=n.n(o),i=n(14),l=n(22),d=n(3),j=Object(d.a)("auth/registerUserRequest"),b=Object(d.a)("auth/registerUserSuccess"),f=Object(d.a)("auth/registerUserError"),p=Object(d.a)("auth/loginUserRequest"),O=Object(d.a)("auth/loginUserSuccess"),h=Object(d.a)("auth/loginUserError"),_=Object(d.a)("auth/logoutUserRequest"),v=Object(d.a)("auth/logoutUserSuccess"),g=Object(d.a)("auth/logoutUserError"),m=Object(d.a)("auth/fetchCurrentUserRequest"),x=Object(d.a)("auth/fetchCurrentUserSuccess"),I=Object(d.a)("auth/fetchCurrentUserError"),w={register:function(e){var t=e.email,n=e.password;return function(){var e=Object(i.a)(u.a.mark((function e(a){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(j()),e.prev=1,e.next=4,Object(l.g)({email:t,password:n});case 4:r=e.sent,c=r.data.avatar,a(b({user:{name:null,email:t,avatarURL:c}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),a(f(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(e){var t=e.email,n=e.password;return function(){var e=Object(i.a)(u.a.mark((function e(a){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(p()),e.prev=1,e.next=4,Object(l.c)({email:t,password:n});case 4:r=e.sent,c=r.data,l.h.set(c.token),localStorage.setItem("token",c.token),a(O(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),a(h(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(_()),e.prev=1,e.next=4,Object(l.e)();case 4:l.h.unset(),t(v()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(g(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},fetchCurrentUser:function(){return function(){var e=Object(i.a)(u.a.mark((function e(t,n){var a,r,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(),r=a.auth.token){e.next=3;break}return e.abrupt("return");case 3:return l.h.set(r),t(m()),e.prev=5,e.next=8,Object(l.b)();case 8:c=e.sent,s=c.data,t(x(s)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),t(I(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}()}},N={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUserEmail:function(e){return e.auth.user.email},getUserName:function(e){return e.auth.user.name}},y=n(2),k=n(7),U=Object(d.b)({user:{name:null,email:null,avatarURL:null},token:null,isLoggedIn:!1},(a={},Object(y.a)(a,b,(function(e,t){return t.payload.user})),Object(y.a)(a,O,(function(e,t){return t.payload.user})),Object(y.a)(a,v,(function(){return null})),a)),C=Object(d.b)(null,(r={},Object(y.a)(r,O,(function(e,t){return t.payload.token})),Object(y.a)(r,I,(function(){return null})),Object(y.a)(r,v,(function(){return null})),r)),E=Object(d.b)(!1,(c={},Object(y.a)(c,O,(function(){return!0})),Object(y.a)(c,x,(function(){return!0})),Object(y.a)(c,m,(function(){return!0})),Object(y.a)(c,h,(function(){return!1})),Object(y.a)(c,v,(function(){return!1})),Object(y.a)(c,I,(function(){return!1})),c)),L=Object(d.b)(!1,(s={},Object(y.a)(s,j,(function(){return!0})),Object(y.a)(s,b,(function(){return!1})),Object(y.a)(s,f,(function(){return!1})),Object(y.a)(s,p,(function(){return!0})),Object(y.a)(s,O,(function(){return!1})),Object(y.a)(s,h,(function(){return!1})),Object(y.a)(s,_,(function(){return!0})),Object(y.a)(s,v,(function(){return!1})),Object(y.a)(s,g,(function(){return!1})),Object(y.a)(s,m,(function(){return!0})),Object(y.a)(s,x,(function(){return!1})),Object(y.a)(s,I,(function(){return!1})),s)),M=Object(k.combineReducers)({registration:U,token:C,isLoggedIn:E,loading:L})},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return d})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return f})),n.d(t,"h",(function(){return l})),n.d(t,"b",(function(){return p}));var a=n(5),r=n.n(a),c=n(14),s=n(20),o=n.n(s);o.a.defaults.baseURL="https://final-group-project-node.herokuapp.com";var u=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/test/".concat("theoretical"===t?"theory-questions":"tech-questions"));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,{answers:n,nameTest:t};case 2:return a=e.sent,e.next=5,o.a.post("/test/result",a);case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l={set:function(e){o.a.defaults.headers.common.Authorization="Bearer ".concat(e)},unset:function(){o.a.defaults.headers.common.Authorization=""}},d=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.password,e.next=3,o.a.post("/auth/register",{email:n,password:a});case 3:return c=e.sent,s=c.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.password,e.next=3,o.a.post("/auth/login",{email:n,password:a});case 3:return c=e.sent,s=c.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/auth/google");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){return o.a.post("auth/logout").then((function(e){return e}))},p=function(){return o.a.get("/users/current").then((function(e){return e}))}},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"f",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i}));var a=n(3),r=Object(a.a)("questions/add",(function(e){return{payload:e}})),c=Object(a.a)("questions/update",(function(e){return{payload:e}})),s=Object(a.a)("questions/setName",(function(e){return{payload:e}})),o=Object(a.a)("answers/reset",(function(e){return{payload:e}})),u=Object(a.a)("data/getTest",(function(e){return{payload:e}})),i=Object(a.a)("data/postName",(function(e){return{payload:e}}))},26:function(e,t,n){e.exports={header:"Header_header__-1h0t",container:"Header_container__9hcUi",line:"Header_line__13SGr",lineLogin:"Header_lineLogin__3GwIT",wrapper:"Header_wrapper__14oFy"}},30:function(e,t,n){e.exports={link:"Logo_link__1l6uG",logo:"Logo_logo__1uAVD",darkText:"Logo_darkText__gKv0e",whiteText:"Logo_whiteText__2-tg2"}},31:function(e,t,n){e.exports={toggle:"Burger_toggle__uVjuv",active:"Burger_active__2iC_I",burger:"Burger_burger__3j9ZE"}},32:function(e,t,n){e.exports={footer:"Footer_footer__pTBTr",description:"Footer_description__MCWYk",icon:"Footer_icon__28jt4",link:"Footer_link__LdJia"}},55:function(e,t,n){e.exports={lds_dual_ring:"Loader_lds_dual_ring__2vvBI","lds-dual-ring":"Loader_lds-dual-ring__263YO"}},69:function(e,t,n){},8:function(e,t,n){"use strict";t.a={AUTH_VIEW:"/auth",AUTH_REDIRECT:"/auth/google-redirect",MAIN_VIEW:"/",TEST_VIEW:"/test",RESULT_VIEW:"/result",USEFUL_INFO_VIEW:"/useful-info",CONTACTS_VIEW:"/contacts"}},9:function(e,t,n){e.exports={link:"Navigation_link__1NuUT",text:"Navigation_text__1xQda",activeLink:"Navigation_activeLink__1Ay-P",signOutBtn:"Navigation_signOutBtn__1dsPd",signOutBtnLg:"Navigation_signOutBtnLg__2bB3F",wrapper:"Navigation_wrapper__2KaPz",navMenu:"Navigation_navMenu__2RAec",navMenuActive:"Navigation_navMenuActive__25Io6 Navigation_navMenu__2RAec",container:"Navigation_container__1ArGH"}},91:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),s=n(33),o=n.n(s),u=n(12),i=n(54),l=(n(68),n(69),n(8)),d=n(11),j=n(6),b=n(21),f=n(30),p=n.n(f);var O=function(e){var t=e.to,n=e.onOpenMobileMenu;return Object(a.jsx)(d.c,{to:t,className:p.a.link,onClick:function(){return n(!1)},children:Object(a.jsxs)("div",{className:p.a.logo,children:[Object(a.jsx)("p",{className:p.a.whiteText,children:"Pro"}),Object(a.jsx)("p",{className:p.a.darkText,children:"[Test_]"})]})})},h=n(16),_=n(5),v=n.n(_),g=n(14);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var I=r.createElement("g",{clipPath:"url(#clip0)"},r.createElement("path",{d:"M23.7122 8.71216L22.3866 10.0378L26.4112 14.0625H13.1251V15.9375H26.4112L22.3866 19.9622L23.7122 21.2878L30.0001 15L23.7122 8.71216Z"}),r.createElement("path",{d:"M20.6251 28.125H1.87508V1.87502H20.6251V3.75004H22.5001V0.93751C22.5001 0.419302 22.0808 0 21.5626 0H0.937571C0.419363 0 6.10352e-05 0.419302 6.10352e-05 0.93751V29.0625C6.10352e-05 29.5807 0.419363 30 0.937571 30H21.5626C22.0808 30 22.5001 29.5807 22.5001 29.0625V26.25H20.6251V28.125Z"})),w=r.createElement("defs",null,r.createElement("clipPath",{id:"clip0"},r.createElement("rect",{width:30,height:30})));function N(e,t){var n=e.title,a=e.titleId,c=x(e,["title","titleId"]);return r.createElement("svg",m({width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,I,w)}var y=r.forwardRef(N);n.p;function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var C=r.createElement("path",{d:"M27 4l-15 15-7-7-5 5 12 12 20-20z"});function E(e,t){var n=e.title,a=e.titleId,c=U(e,["title","titleId"]);return r.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,C)}var L=r.forwardRef(E),M=(n.p,n.p+"static/media/default-avatar.b59675d9.png"),T=n(10),S=n.n(T);var V=function(e){var t=e.onOpenMobileMenu,n=Object(u.b)(),c=M,s=Object(r.useState)(!1),o=Object(b.a)(s,2),i=o[0],j=o[1],f=Object(r.useState)(""),p=Object(b.a)(f,2),O=p[0],_=p[1],m=Object(r.useState)(""),x=Object(b.a)(m,2),I=x[0],w=x[1],N=Object(r.useState)(""),k=Object(b.a)(N,2),U=k[0],C=k[1],E=Object(r.useState)(!1),T=Object(b.a)(E,2),V=T[0],A=T[1],R=Object(r.useCallback)((function(){j((function(e){return!e}))}),[]);Object(r.useEffect)((function(){var e=function(e){"Escape"===e.code&&R()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[R]);var W=function(){var e=Object(g.a)(v.a.mark((function e(t){var n,a,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files,(a=new FormData).append("file",n[0]),a.append("upload_preset","kyhvjqja"),A(!0),e.next=7,fetch("\thttps://api.cloudinary.com/v1_1/andray838/image/upload",{method:"POST",body:a,api_key:914256646727944});case 7:return r=e.sent,e.next=10,r.json();case 10:c=e.sent,_(c.secure_url),A(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=Object(r.useCallback)((function(e){w(e.currentTarget.value)}),[]),F=function(){var e=Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C(I.length<12?I:I.slice(0,12)+"..."),w("");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=Object(r.useCallback)((function(e){e.preventDefault()}),[]);return Object(a.jsxs)("div",{className:S.a.container,children:[Object(a.jsxs)("div",{className:S.a.userInfo,children:[Object(a.jsxs)("div",{className:S.a.avatar,onClick:R,children:[V?Object(a.jsx)("h3",{className:S.a.loading,children:"Loading..."}):Object(a.jsx)("img",{src:O||c,alt:"avatar",width:"40",className:S.a.avatarImg}),Object(a.jsx)("span",{className:S.a.dropdownCaret}),Object(a.jsxs)("div",{className:i?S.a.userInfoModalActive:S.a.userInfoModal,children:[Object(a.jsx)("label",{htmlFor:"fileUpload",name:"file",className:S.a.customFileUpload,children:"Change avatar"}),Object(a.jsx)("input",{type:"file",name:"file",id:"fileUpload",placeholder:"Upload an image",onChange:W,onClick:R}),Object(a.jsxs)("form",{onSubmit:H,children:[Object(a.jsx)("label",{htmlFor:"nameUpload",name:"name",className:S.a.customNameUpload,children:"Change name"}),Object(a.jsxs)("div",{className:S.a.inputWrapper,children:[Object(a.jsx)("input",{type:"name",name:"name",id:"nameUpload",value:I,placeholder:"Change name",onClick:R,onChange:B,className:S.a.nameUpload,autoComplete:"off",autoFocus:!0}),I&&Object(a.jsx)("button",{className:S.a.addBtn,type:"submit",onClick:F,children:Object(a.jsx)(L,{className:S.a.addIcon})})]})]})]})]}),Object(a.jsxs)("span",{className:S.a.name,children:[U||"test@gmail.com"," "]})]}),Object(a.jsx)(d.c,{to:l.a.AUTH_VIEW,onClick:function(){return t(!1)},children:Object(a.jsx)(y,{className:S.a.signOutBtnLg,width:"16px",height:"16px",onClick:function(){return n(h.a.logOut())}})})]})},A=n(9),R=n.n(A);var W=function(e){var t=e.isOpen,n=e.onOpenMobileMenu,r=Object(u.c)(h.c.getIsLoggedIn),c=Object(u.b)();return Object(a.jsxs)("div",{className:R.a.container,children:[Object(a.jsx)("nav",{className:t?R.a.navMenuActive:R.a.navMenu,children:r?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:R.a.wrapper,children:[Object(a.jsx)(d.c,{to:l.a.MAIN_VIEW,exact:!0,className:R.a.link,activeClassName:R.a.activeLink,onClick:function(){return n(!1)},children:Object(a.jsx)("span",{className:R.a.text,children:"Home"})}),Object(a.jsx)(d.c,{to:l.a.USEFUL_INFO_VIEW,exact:!0,className:R.a.link,activeClassName:R.a.activeLink,onClick:function(){return n(!1)},children:Object(a.jsx)("span",{className:R.a.text,children:"Materials"})}),Object(a.jsx)(d.c,{to:l.a.CONTACTS_VIEW,exact:!0,className:R.a.link,activeClassName:R.a.activeLink,onClick:function(){return n(!1)},children:Object(a.jsx)("span",{className:R.a.text,children:"Contacts"})})]}),Object(a.jsx)(d.c,{to:l.a.AUTH_VIEW,onClick:function(){return n(!1)},children:Object(a.jsx)(y,{className:R.a.signOutBtn,width:"16px",height:"16px",onClick:function(){return c(h.a.logOut())}})})]}):Object(a.jsx)(d.c,{to:l.a.CONTACTS_VIEW,exact:!0,className:R.a.link,activeClassName:R.a.activeLink,onClick:function(){return n(!1)},children:Object(a.jsx)("span",{className:R.a.text,children:"Contacts"})})}),r&&Object(a.jsx)(V,{onOpenMobileMenu:n})]})},B=n(31),F=n.n(B);n.p;n.p;var H=function(e){var t=e.isOpen,n=e.onOpenMobileMenu;return Object(a.jsx)("div",{className:F.a.burger,children:Object(a.jsxs)("div",{className:t?"".concat(F.a.toggle," + ' ' + ").concat(F.a.active):F.a.toggle,type:"button",onClick:function(){return n(!t)},children:[Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{})]})})},q=n(26),P=n.n(q);var z=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1],s=Object(u.c)(h.c.getIsLoggedIn);return Object(a.jsx)("header",{className:P.a.header,children:Object(a.jsxs)("div",{className:P.a.container,children:[Object(a.jsx)(O,{to:l.a.MAIN_VIEW,onOpenMobileMenu:c}),Object(a.jsxs)("div",{className:P.a.wrapper,children:[Object(a.jsx)(W,{isOpen:n,onOpenMobileMenu:c}),Object(a.jsx)(H,{isOpen:n,onOpenMobileMenu:c})]}),Object(a.jsx)("div",{className:s?P.a.lineLogin:P.a.line})]})})},D=n(55),Q=n.n(D),G=function(){return Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:".5rem"},children:Object(a.jsx)("div",{className:Q.a.lds_dual_ring})})},Z=n(32),J=n.n(Z),Y=function(){return Object(a.jsx)("footer",{className:J.a.footer,children:Object(a.jsxs)("p",{className:J.a.description,children:["\xa9 2021 | All Rights Reserved | Developed with"," ",Object(a.jsx)("span",{className:J.a.icon,children:"\u2764"})," by"," ",Object(a.jsx)(d.c,{to:l.a.CONTACTS_VIEW,className:J.a.link,children:"GoIT Students"})]})})},K=n(25),X=n(37);function $(e){var t=e.children,n=Object(X.a)(e,["children"]),r=Object(u.c)(h.c.getIsLoggedIn);return Object(a.jsx)(j.b,Object(K.a)(Object(K.a)({},n),{},{children:r?t:Object(a.jsx)(j.a,{to:"/auth"})}))}function ee(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,c=Object(X.a)(e,["children","restricted"]),s=Object(u.c)(h.c.getIsLoggedIn);console.log(s);var o=s&&r;return Object(a.jsxs)(j.b,Object(K.a)(Object(K.a)({},c),{},{children:[" ",o?Object(a.jsx)(j.a,{to:"/"}):t," "]}))}var te=Object(r.lazy)((function(){return n.e(2).then(n.bind(null,247))})),ne=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,250))})),ae=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,245))})),re=Object(r.lazy)((function(){return Promise.all([n.e(8),n.e(3)]).then(n.bind(null,248))})),ce=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,249))})),se=Object(r.lazy)((function(){return Promise.all([n.e(10),n.e(0)]).then(n.bind(null,246))}));var oe,ue=function(){return Object(a.jsxs)(d.a,{children:[Object(a.jsx)(z,{}),Object(a.jsx)(r.Suspense,{fallback:Object(a.jsx)(G,{}),children:Object(a.jsxs)(j.d,{children:[Object(a.jsx)($,{exact:!0,path:l.a.USEFUL_INFO_VIEW,children:Object(a.jsx)(ne,{})}),Object(a.jsx)(ee,{exact:!0,path:l.a.CONTACTS_VIEW,children:Object(a.jsx)(ae,{})}),Object(a.jsx)(ee,{exact:!0,path:l.a.AUTH_VIEW,restricted:!0,children:Object(a.jsx)(se,{})}),Object(a.jsx)($,{exact:!0,path:l.a.RESULT_VIEW,children:Object(a.jsx)(re,{})}),Object(a.jsx)($,{exact:!0,path:l.a.MAIN_VIEW,children:Object(a.jsx)(te,{})}),Object(a.jsx)($,{exact:!0,path:l.a.TEST_VIEW,children:Object(a.jsx)(ce,{})})]})}),Object(a.jsx)(Y,{})]})},ie=n(7),le=n(29),de=n(36),je=n(56),be=n(57),fe=n.n(be),pe=n(2),Oe=n(43),he=n(3),_e=n(23),ve={resultQuestionsReducer:Object(he.b)([],(oe={},Object(pe.a)(oe,_e.a,(function(e,t){var n=t.payload;return[].concat(Object(Oe.a)(e),[n])})),Object(pe.a)(oe,_e.f,(function(e,t){var n=t.payload;return[].concat(Object(Oe.a)(e.filter((function(e){return e.answerId!==n.answerId}))),[n])})),Object(pe.a)(oe,_e.d,(function(e,t){return t.payload})),oe)),setNameReducer:Object(he.b)("",Object(pe.a)({},_e.e,(function(e,t){return t.payload}))),setDataQuestions:Object(he.b)([],Object(pe.a)({},_e.b,(function(e,t){return t.payload}))),setQuestionsResult:Object(he.b)([],Object(pe.a)({},_e.c,(function(e,t){var n=t.payload;return console.log(n,"payload setQuestionsResult"),n})))},ge=Object(he.a)("signIn/success",(function(e){return{payload:e}})),me=Object(he.b)({name:"",token:"",email:""},Object(pe.a)({},ge,(function(e,t){return t.payload}))),xe={key:"token",storage:fe.a},Ie=Object(ie.combineReducers)({answers:ve.resultQuestionsReducer,nameTest:ve.setNameReducer,questions:ve.setDataQuestions,result:ve.setQuestionsResult,localSt:Object(de.a)(xe,me),auth:h.b}),we=Object(je.composeWithDevTools)({}),Ne=Object(ie.createStore)(Ie,we(Object(ie.applyMiddleware)(le.a))),ye=Object(de.b)(Ne);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(i.a,{loading:null,persistor:ye,children:Object(a.jsx)(u.a,{store:Ne,children:Object(a.jsx)(ue,{})})})}),document.getElementById("root"))}},[[91,7,9]]]);
//# sourceMappingURL=main.4885c2b7.chunk.js.map