(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{121:function(e,a,r){},304:function(e,a,r){"use strict";r.r(a);var i=r(0),n=r.n(i),t=r(47),o=r.n(t),l=(r(121),r(83)),s=r.n(l),c=r(88),d=r(345),h=r(352),j=r(357),u=r(40),b=r(2),m="localhost"===window.location.hostname.split(":")[0]?"http://localhost:5000":"",p=u.a({name:u.b("Enter your Name").required("Name is required"),email:u.b("Enter your email").email("Enter a valid email").required("Email is required"),password:u.b("Enter your password").min(8,"Password should be of minimum 8 characters length").max(10,"No more then 10").required("Password is required")});var x=function(){var e=Object(c.a)({validationSchema:p,initialValues:{name:"",email:"",password:""},onSubmit:function(e,a){var r=a.resetForm;console.log("values: ",e),s.a.post("".concat(m,"/api/v1/registration"),{name:e.name,email:e.email,password:e.password}).then((function(e){console.log(e.data),"Email Already authorized"===e.data?alert("Email Already authorized"):window.location.href="/login"})),r({values:""})}});return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"heading",children:Object(b.jsx)("h1",{children:"Registration"})}),Object(b.jsx)("form",{onSubmit:e.handleSubmit,children:Object(b.jsxs)(d.a,{spacing:2,children:[Object(b.jsx)(h.a,{fullWidth:!0,color:"primary",id:"outlined-basic",label:"Full Name",variant:"outlined",name:"name",value:e.values.name,onChange:e.handleChange,error:e.touched.name&&Boolean(e.errors.name),helperText:e.touched.name&&e.errors.name}),Object(b.jsx)(h.a,{fullWidth:!0,color:"primary",id:"outlined-basic",label:"E-mail",variant:"outlined",name:"email",value:e.values.email,onChange:e.handleChange,error:e.touched.email&&Boolean(e.errors.email),helperText:e.touched.email&&e.errors.email}),Object(b.jsx)(h.a,{fullWidth:!0,color:"primary",id:"filled-basic",label:"Password",variant:"outlined",type:"password",name:"password",value:e.values.password,onChange:e.handleChange,error:e.touched.password&&Boolean(e.errors.password),helperText:e.touched.password&&e.errors.password}),Object(b.jsx)(j.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",children:"Sign up"})]})})]})},O="localhost"===window.location.hostname.split(":")[0]?"http://localhost:5000":"",g=u.a({email:u.b("Enter your email").email("Enter a valid email").required("Email is required"),password:u.b("Enter your password").min(8,"Password should be of minimum 8 characters length").max(10,"No more then 10").required("Password is required")});var w=function(){var e=Object(c.a)({validationSchema:g,initialValues:{email:"",password:""},onSubmit:function(e,a){var r=a.resetForm;console.log("values: ",e),s.a.post("".concat(O,"/api/v1/login"),{email:e.email,password:e.password}).then((function(e){console.log(e.data),"Authentication fail"===e.data?alert("Wrond password"):window.location.href="/"})),r({values:""})}});return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"heading",children:Object(b.jsx)("h1",{children:"Log-in"})}),Object(b.jsx)("form",{onSubmit:e.handleSubmit,children:Object(b.jsxs)(d.a,{spacing:2,children:[Object(b.jsx)(h.a,{fullWidth:!0,color:"primary",id:"outlined-basic",label:"E-mail",variant:"outlined",name:"email",value:e.values.email,onChange:e.handleChange,error:e.touched.email&&Boolean(e.errors.email),helperText:e.touched.email&&e.errors.email}),Object(b.jsx)(h.a,{fullWidth:!0,color:"primary",id:"filled-basic",label:"Password",variant:"outlined",type:"password",name:"password",value:e.values.password,onChange:e.handleChange,error:e.touched.password&&Boolean(e.errors.password),helperText:e.touched.password&&e.errors.password}),Object(b.jsx)(j.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",children:"Login"})]})})]})},v=r(13),f=r(4),y=r(158),C=r.n(y),E=r(5),S=r(347),k=r(360),z=r(359),P=r(361),q=r(358),B=r(362),N=r(24),T=r(355),W=r(354),F=r(162),L=r(159),M=r.n(L),I=r(113),R=r.n(I),A=r(111),G=r.n(A),J=r(112),V=r.n(J),D=r(160),U=r.n(D),H=Object(E.a)("div")((function(e){var a=e.theme;return Object(f.a)({position:"relative",borderRadius:a.shape.borderRadius,backgroundColor:Object(S.a)(a.palette.common.white,.15),"&:hover":{backgroundColor:Object(S.a)(a.palette.common.white,.25)},marginRight:a.spacing(2),marginLeft:0,width:"100%"},a.breakpoints.up("sm"),{marginLeft:a.spacing(3),width:"auto"})})),K=Object(E.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),Q=Object(E.a)(N.c)((function(e){var a=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(f.a)({padding:a.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(a.spacing(4),")"),transition:a.transitions.create("width"),width:"100%"},a.breakpoints.up("md"),{width:"20ch"})}}));function X(){var e=i.useState(null),a=Object(v.a)(e,2),r=a[0],n=a[1],t=i.useState(null),o=Object(v.a)(t,2),l=o[0],s=o[1],c=Boolean(r),d=Boolean(l),h=function(e){n(e.currentTarget)},j=function(){s(null)},u=function(){n(null),j()},m="primary-search-account-menu",p=Object(b.jsxs)(F.a,{anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},id:m,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:c,onClose:u,children:[Object(b.jsx)(W.a,{onClick:u,children:"Profile"}),Object(b.jsx)(W.a,{onClick:u,children:"My account"})]}),x="primary-search-account-menu-mobile",O=Object(b.jsxs)(F.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:x,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:j,children:[Object(b.jsxs)(W.a,{children:[Object(b.jsx)(q.a,{size:"large","aria-label":"show 4 new mails",color:"inherit",children:Object(b.jsx)(T.a,{badgeContent:4,color:"error",children:Object(b.jsx)(G.a,{})})}),Object(b.jsx)("p",{children:"Messages"})]}),Object(b.jsxs)(W.a,{children:[Object(b.jsx)(q.a,{size:"large","aria-label":"show 17 new notifications",color:"inherit",children:Object(b.jsx)(T.a,{badgeContent:17,color:"error",children:Object(b.jsx)(V.a,{})})}),Object(b.jsx)("p",{children:"Notifications"})]}),Object(b.jsxs)(W.a,{onClick:h,children:[Object(b.jsx)(q.a,{size:"large","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(b.jsx)(R.a,{})}),Object(b.jsx)("p",{children:"Profile"})]})]});return Object(b.jsxs)(z.a,{sx:{flexGrow:1},children:[Object(b.jsx)(k.a,{position:"static",children:Object(b.jsxs)(P.a,{children:[Object(b.jsx)(q.a,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},children:Object(b.jsx)(C.a,{})}),Object(b.jsx)(B.a,{variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block"}},children:"MUI"}),Object(b.jsxs)(H,{children:[Object(b.jsx)(K,{children:Object(b.jsx)(M.a,{})}),Object(b.jsx)(Q,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]}),Object(b.jsx)(z.a,{sx:{flexGrow:1}}),Object(b.jsxs)(z.a,{sx:{display:{xs:"none",md:"flex"}},children:[Object(b.jsx)(q.a,{size:"large","aria-label":"show 4 new mails",color:"inherit",children:Object(b.jsx)(T.a,{badgeContent:4,color:"error",children:Object(b.jsx)(G.a,{})})}),Object(b.jsx)(q.a,{size:"large","aria-label":"show 17 new notifications",color:"inherit",children:Object(b.jsx)(T.a,{badgeContent:17,color:"error",children:Object(b.jsx)(V.a,{})})}),Object(b.jsx)(q.a,{size:"large",edge:"end","aria-label":"account of current user","aria-controls":m,"aria-haspopup":"true",onClick:h,color:"inherit",children:Object(b.jsx)(R.a,{})})]}),Object(b.jsx)(z.a,{sx:{display:{xs:"flex",md:"none"}},children:Object(b.jsx)(q.a,{size:"large","aria-label":"show more","aria-controls":x,"aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit",children:Object(b.jsx)(U.a,{})})})]})}),O,p]})}var Y=r(18),Z=r(70);var $=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(Y.c,{children:[Object(b.jsx)(Y.a,{exact:!0,path:"/",children:Object(b.jsx)(X,{})}),Object(b.jsx)(Y.a,{path:"/login",children:Object(b.jsx)(w,{})}),Object(b.jsx)(Y.a,{path:"/signup",children:Object(b.jsx)(x,{})})]}),Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(Z.b,{to:"/signup",children:"Signup"})}),Object(b.jsx)("li",{children:Object(b.jsx)(Z.b,{to:"/login",children:"Login"})})]})})]})},_=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,364)).then((function(a){var r=a.getCLS,i=a.getFID,n=a.getFCP,t=a.getLCP,o=a.getTTFB;r(e),i(e),n(e),t(e),o(e)}))};o.a.render(Object(b.jsx)(Z.a,{children:Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)($,{})})}),document.getElementById("root")),_()}},[[304,1,2]]]);
//# sourceMappingURL=main.80a083ed.chunk.js.map