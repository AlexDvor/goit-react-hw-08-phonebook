(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{64:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var r,c,a,u,s=n(0),o=n.n(s),i=n(6),b=n(11),j=n.n(b),l=n(8),p=n(9),f=p.a.div(r||(r=Object(l.a)(["\n    margin-left: auto;\n    margin-right: auto;\n    padding:20px 20px; \n"]))),d=n(1),O=function(t){var e=t.children;return Object(d.jsx)(f,{children:e})},h=n(24),x=p.a.form(c||(c=Object(l.a)(["\ndisplay:flex;\nflex-direction:column;\nwidth:250px\n"]))),m=p.a.input(a||(a=Object(l.a)(["\nmargin-bottom: 20px;\n\n"]))),v=p.a.button(u||(u=Object(l.a)(["\nwidth:120px\n"])));var g=function(t){var e=t.text;return Object(d.jsx)(v,{type:"submit",children:e})},y=n(3),w=n.n(y),C=n(10),k=n(2),S=Object(k.b)("filter/handleFilterByName"),A=Object(k.b)("contacts/getContactsRequest"),F=Object(k.b)("contacts/getContactsSuccess"),q=Object(k.b)("contacts/getContactsError"),E=Object(k.b)("contacts/postContactsRequest"),z=Object(k.b)("contacts/postContactsSuccess"),B=Object(k.b)("contacts/postContactsError"),J=Object(k.b)("contacts/deleteContactsRequest"),L=Object(k.b)("contacts/deleteContactsSuccess"),R=Object(k.b)("contacts/deleteContactsError"),Z=Object(k.b)("contacts/updatedListUsers"),D=n(19),M=n.n(D),N="http://localhost:3000";function P(){return T.apply(this,arguments)}function T(){return(T=Object(C.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.a.get("".concat(N,"/contacts")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(t){return U.apply(this,arguments)}function U(){return(U=Object(C.a)(w.a.mark((function t(e){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.name,r=e.number,t.next=3,M()({method:"post",url:"".concat(N,"/contacts"),data:{name:n,number:r}});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $(t){return G.apply(this,arguments)}function G(){return(G=Object(C.a)(w.a.mark((function t(e){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M()({method:"delete",url:"".concat(N,"/contacts/").concat(e)});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function H(t){return K.apply(this,arguments)}function K(){return(K=Object(C.a)(w.a.mark((function t(e){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:return n=t.sent,t.abrupt("return",e(Z(n)));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var Q,V=n(16),W=function(t){return t.contacts.items},X=Object(V.a)([W,function(t){return t.contacts.filter}],(function(t,e){if(t)return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),Y=n(18);function _(){var t=Object(s.useState)(""),e=Object(h.a)(t,2),n=e[0],r=e[1],c=Object(s.useState)(""),a=Object(h.a)(c,2),u=a[0],o=a[1],b=Object(i.d)(W),j=Object(i.c)(),l=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":r(c);break;case"number":o(c);break;default:return}},p=function(t,e){if(t.some((function(t){return t.name===e.name})))return Y.b.info("This name is already in your list");var n;j((n=e,function(){var t=Object(C.a)(w.a.mark((function t(e){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(E()),t.prev=1,t.next=4,I(n);case 4:e(z()),H(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(B());case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:Object(d.jsxs)(x,{onSubmit:function(t){t.preventDefault(),p(b,{name:n,number:u}),r(""),o("")},children:[Object(d.jsx)(m,{type:"text",value:n,name:"name",onChange:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,placeholder:"Name"}),Object(d.jsx)(m,{type:"tel",name:"number",value:u,onChange:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"Phone number"}),Object(d.jsx)(g,{text:"Add contact"})]})})})}var tt=p.a.button(Q||(Q=Object(l.a)(["\nmargin-left:20px\n"])));function et(){var t=Object(i.d)(X),e=Object(i.c)();return Object(s.useEffect)((function(){e(function(){var t=Object(C.a)(w.a.mark((function t(e){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(A()),t.prev=1,t.next=4,P();case 4:n=t.sent,e(F(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(q());case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[e]),Object(d.jsx)(d.Fragment,{children:t.length>0&&t.map((function(t){var n=t.name,r=t.id,c=t.number;return Object(d.jsxs)("li",{children:[n," : ",c,Object(d.jsx)(tt,{onClick:function(){return e(function(t){return function(){var e=Object(C.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(J()),e.prev=1,e.next=4,$(t);case 4:n(L()),H(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(R());case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}(r))},children:"Delete"})]},r)}))})}var nt=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("ul",{children:Object(d.jsx)(et,{})})})};function rt(){var t=Object(i.d)((function(t){return t.contacts.filter})),e=Object(i.c)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"Find Contacts by name"}),Object(d.jsx)("input",{type:"text",name:"filter",value:t,onChange:function(t){return e(S(t.target.value))},autoComplete:"off"})]})}n(63);var ct,at=Object(i.b)(null,null)((function(){return Object(d.jsxs)(O,{children:[Object(d.jsx)("h2",{children:"Phonebook"}),Object(d.jsx)(_,{}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(rt,{}),Object(d.jsx)(nt,{}),Object(d.jsx)(Y.a,{autoClose:3e3})]})})),ut=(n(64),n(20)),st=n(23),ot=n(7),it=Object(k.c)([],(ct={},Object(ut.a)(ct,F,(function(t,e){return Object(st.a)(e.payload)})),Object(ut.a)(ct,Z,(function(t,e){return Object(st.a)(e.payload)})),ct)),bt=Object(k.c)("",Object(ut.a)({},S,(function(t,e){return e.payload}))),jt=Object(ot.b)({items:it,filter:bt}),lt=Object(k.a)({reducer:{contacts:jt},devTools:!1});j.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(i.a,{store:lt,children:Object(d.jsx)(at,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.e2a94200.chunk.js.map