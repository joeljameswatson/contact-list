(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{207:function(e,t,n){e.exports=n(458)},302:function(e,t){},304:function(e,t){},339:function(e,t){},340:function(e,t){},458:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchContacts",function(){return Ae}),n.d(a,"fetchContactDetail",function(){return ye}),n.d(a,"createContact",function(){return we}),n.d(a,"deleteContact",function(){return Ne}),n.d(a,"updateContact",function(){return De});var r=n(0),c=n.n(r),i=n(22),o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var s=n(34),u=n(460),m=n(204),f=n.n(m),p=n(24),h=n(196),d=n(459),v=n(193),E=n.n(v),C=n(28),g=n.n(C),_=n(195),T=n.n(_),b=n(27),O=n.n(b),S=n(25);function j(){var e=Object(p.a)(["\n  .grow {\n    flex-grow: 1;\n  }\n  .app-name {\n    flex-grow: 1;\n    text-decoration: none;\n    color: white;\n  }\n  .link {\n    text-decoration: none;\n    color: white;\n  }\n  .button {\n    color: white;\n  }\n"]);return j=function(){return e},e}var A=S.b.div(j()),y=function(){return c.a.createElement(A,null,c.a.createElement(E.a,{color:"primary",className:"grow",position:"sticky"},c.a.createElement(T.a,null,c.a.createElement(O.a,{variant:"title",color:"inherit",className:"app-name"},c.a.createElement(h.a,{to:"/contacts",className:"link"},"Contact List")),c.a.createElement(d.a,{className:"link",to:"/contacts",activeStyle:{textDecoration:"underline",color:"white"}},c.a.createElement(g.a,{className:"button",color:"inherit"},"Contacts")),c.a.createElement(d.a,{className:"link",to:"/create",activeStyle:{textDecoration:"underline",color:"white"}},c.a.createElement(g.a,{className:"button",color:"inherit"},"Add New")))))},w=n(463),N=n(197),D=n(461),x=n(31),U=n(32),k=n(35),I=n(33),F=n(36),L=n(115),R=n.n(L),H=n(462),M=n(120),P=n.n(M),z=n(199),B=n.n(z),J=n(198),Q=n.n(J),W=n(200),V=n.n(W);function q(){var e=Object(p.a)(["\n  a {\n    text-decoration: none;\n  }\n"]);return q=function(){return e},e}var K=S.b.div(q()),X=Object(H.a)(function(e){var t=e.contact,n=e.match,a="".concat(t.first_name," ").concat(t.last_name);return c.a.createElement(K,null,c.a.createElement(h.a,{to:"".concat(n.url,"/").concat(t.id)},c.a.createElement(Q.a,{key:t.id,dense:!0,button:!0},t.avatar?c.a.createElement(P.a,{alt:a,src:"".concat("/contact-list").concat(t.avatar)}):c.a.createElement(P.a,null,c.a.createElement(B.a,null)),c.a.createElement(V.a,{primary:a}))))}),G=function(e){var t=e.contacts;return c.a.createElement(R.a,null,t.map(function(e){return c.a.createElement(X,{key:e.id,contact:e})}))},$=n(29),Y=n.n($),Z=n(54),ee=n(53),te=n(201),ne={contacts:[{id:1,first_name:"Marchall",last_name:"Abdee",email:"mabdee0@behance.net",phone:"2539464783",avatar:"/avatars/24.jpg"},{id:2,first_name:"Traver",last_name:"Cubbin",email:"tcubbin1@hubpages.com",phone:"6396783628",avatar:"/avatars/1.jpg"},{id:3,first_name:"Silas",last_name:"Asif",email:"sasif2@mediafire.com",phone:"2639487629",avatar:"/avatars/2.jpg"},{id:4,first_name:"Dennie",last_name:"Betz",email:"dbetz3@unc.edu",phone:"6483764927",avatar:"/avatars/3.jpg"},{id:5,first_name:"Burch",last_name:"McNae",email:"bmcnae4@cmu.edu",phone:"2639487629",avatar:"/avatars/4.jpg"},{id:6,first_name:"Adorne",last_name:"Cunio",email:"acunio5@eepurl.com",phone:"2639487629",avatar:"/avatars/5.jpg"},{id:7,first_name:"Aeriela",last_name:"Greaterex",email:"agreaterex6@bbc.co.uk",phone:"2639487629",avatar:"/avatars/6.jpg"},{id:8,first_name:"Lottie",last_name:"Massel",email:"lmassel7@mit.edu",phone:"2639487629",avatar:"/avatars/7.jpg"},{id:9,first_name:"Lisetta",last_name:"Cudiff",email:"lcudiff8@shutterfly.com",phone:"2639487629",avatar:"/avatars/8.jpg"},{id:10,first_name:"Konstanze",last_name:"Cosgreave",email:"kcosgreave9@shareasale.com",avatar:"/avatars/9.jpg"},{id:11,first_name:"Sheridan",last_name:"Dagg",email:"sdagga@soundcloud.com",phone:"2639487629",avatar:"/avatars/10.jpg"},{id:12,first_name:"Vonnie",last_name:"Duval",email:"vduvalb@4shared.com",phone:"2639487629",avatar:"/avatars/11.jpg"},{id:13,first_name:"Justis",last_name:"Labitt",email:"jlabittc@slashdot.org",phone:"2639487629",avatar:"/avatars/12.jpg"},{id:14,first_name:"Katherina",last_name:"Tamburi",email:"ktamburid@google.com.br",phone:"2639487629",avatar:"/avatars/13.jpg"},{id:15,first_name:"Mariellen",last_name:"Venturoli",email:"mventurolie@ehow.com",phone:"2639487629",avatar:"/avatars/14.jpg"},{id:16,first_name:"Hermie",last_name:"Brave",email:"hbravef@addtoany.com",phone:"2639487629",avatar:"/avatars/15.jpg"},{id:17,first_name:"Vick",last_name:"Huzzey",email:"vhuzzeyg@php.net",phone:"2639487629",avatar:"/avatars/16.jpg"},{id:18,first_name:"Elisha",last_name:"Roelvink",email:"eroelvinkh@alexa.com",phone:"2639487629",avatar:"/avatars/17.jpg"},{id:19,first_name:"Otho",last_name:"Balding",email:"obaldingi@usa.gov",phone:"2639487629",avatar:"/avatars/18.jpg"},{id:20,first_name:"Thayne",last_name:"Bourne",email:"tbournej@jugem.jp",phone:"2639487629",avatar:"/avatars/19.jpg"},{id:21,first_name:"Raul",last_name:"Lorait",email:"rloraitk@multiply.com",phone:"2639487629",avatar:"/avatars/20.jpg"},{id:22,first_name:"Mathilda",last_name:"MacMeekan",email:"mmacmeekanl@google.ru",phone:"2639487629",avatar:"/avatars/21.jpg"},{id:23,first_name:"Hakim",last_name:"Shillaber",email:"hshillaberm@artisteer.com",phone:"2639487629",avatar:"/avatars/22.jpg"},{id:24,first_name:"Tally",last_name:"Sharplin",email:"tsharplinn@spotify.com",phone:"2639487629",avatar:"/avatars/23.jpg"}].map(function(e){return Object(ee.a)({},e,{id:e.id.toString(),avatar_large:e.avatar})})},ae=function(e){return new Promise(function(t){return setTimeout(t,e)})},re=function(e){return ae(500).then(function(){var t=ne.contacts.find(function(t){return t.id===e});if(!t)throw new Error("cant find that one!");return t})},ce=function(e){var t=e.first_name,n=e.last_name,a=e.email,r=e.phone;return ae(500).then(function(){var e={id:Object(te.v4)(),first_name:t,last_name:n,email:a,phone:r};return ne.contacts.push(e),e})},ie=function(e){return ae(500).then(function(){ne.contacts=ne.contacts.filter(function(t){return t.id!==e})})},oe=function(e){return ae(500).then(function(){return ne.contacts.forEach(function(t,n,a){t.id===e.id&&(a[n]=e)}),e})},le=n(42),se=new le.schema.Entity("contacts"),ue=new le.schema.Array(se),me=n(23),fe=function(){var e=Object(Z.a)(Y.a.mark(function e(){var t;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae(500).then(function(){return ne.contacts.map(function(e){return{id:e.id,first_name:e.first_name,last_name:e.last_name,avatar:e.avatar}})});case 2:return t=e.sent,e.abrupt("return",Object(me.fromJS)(Object(le.normalize)(t,ue)));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(Z.a)(Y.a.mark(function e(t){var n;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re(t);case 2:return n=e.sent,e.abrupt("return",Object(me.fromJS)(Object(le.normalize)(n,se)));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),he=function(){var e=Object(Z.a)(Y.a.mark(function e(t){var n;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce(t);case 2:return n=e.sent,e.abrupt("return",Object(me.fromJS)(Object(le.normalize)(n,se)));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=Object(Z.a)(Y.a.mark(function e(t){return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ie(t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(Z.a)(Y.a.mark(function e(t){var n;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe(t);case 2:return n=e.sent,e.abrupt("return",Object(me.fromJS)(Object(le.normalize)(n,se)));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),Ee=n(85),Ce=function(e,t){return e.get(t)},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(me.Map)(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CONTACTS_SUCCESS":case"FETCH_CONTACT_DETAIL_SUCCESS":case"CREATE_CONTACT_SUCCESS":case"UPDATE_CONTACT_SUCCESS":return e.mergeDeep(t.response.getIn(["entities","contacts"]));case"DELETE_CONTACT_SUCCESS":return e.delete(t.id);default:return e}},_e=Object(Ee.combineReducers)({ids:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(me.List)(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CONTACTS_SUCCESS":return t.response.get("result");case"FETCH_CONTACT_DETAIL_SUCCESS":case"CREATE_CONTACT_SUCCESS":return e.has(t.response.get("result"))?e:e.push(t.response.get("result"));case"DELETE_CONTACT_SUCCESS":return e.filter(function(e){return e!==t.id});default:return e}},isFetching:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"FETCH_CONTACT_DETAIL_REQUEST":case"FETCH_CONTACTS_REQUEST":return!0;case"FETCH_CONTACT_DETAIL_SUCCESS":case"FETCH_CONTACT_DETAIL_FAILURE":case"FETCH_CONTACTS_SUCCESS":case"FETCH_CONTACTS_FAILURE":return!1;default:return e}},isListFetched:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"FETCH_CONTACTS_SUCCESS":return!0;default:return e}},errorMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CONTACT_DETAIL_FAILURE":return t.error.message;case"FETCH_CONTACT_DETAIL_REQUEST":case"FETCH_CONTACT_DETAIL_SUCCESS":return null;default:return e}},fetchedDetailIDs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(me.List)(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CONTACT_DETAIL_SUCCESS":case"CREATE_CONTACT_SUCCESS":return e.push(t.id);case"DELETE_CONTACT_SUCCESS":return e.filter(function(e){return e!==t.id});default:return e}}}),Te=_e,be=Object(Ee.combineReducers)({byId:ge,list:Te}),Oe=function(e,t){return Ce(e.get("byId"),t)},Se=function(e){return function(e){return e.get("isFetching")}(e.get("list"))},je=be,Ae=function(){return{types:["FETCH_CONTACTS_REQUEST","FETCH_CONTACTS_SUCCESS","FETCH_CONTACTS_FAILURE"],callAPI:function(){return fe()},shouldCallAPI:function(e){return!function(e){return function(e){return e.get("isListFetched")}(e.get("list"))}(e)}}},ye=function(e){return{types:["FETCH_CONTACT_DETAIL_REQUEST","FETCH_CONTACT_DETAIL_SUCCESS","FETCH_CONTACT_DETAIL_FAILURE"],callAPI:function(){return pe(e)},shouldCallAPI:function(t){return!function(e,t){return function(e,t){return e.get("fetchedDetailIDs").includes(t)}(e.get("list"),t)}(t,e)},payload:{id:e}}},we=function(e){return{types:["CREATE_CONTACT_REQUEST","CREATE_CONTACT_SUCCESS","CREATE_CONTACT_FAILURE"],callAPI:function(){return he(e)}}},Ne=function(e){return{types:["DELETE_CONTACT_REQUEST","DELETE_CONTACT_SUCCESS","DELETE_CONTACT_FAILURE"],callAPI:function(){return de(e)},payload:{id:e}}},De=function(e){return{types:["UPDATE_CONTACT_REQUEST","UPDATE_CONTACT_SUCCESS","UPDATE_CONTACT_FAILURE"],callAPI:function(){return ve(e)},payload:{id:e}}},xe=n(202),Ue=n.n(xe);function ke(){var e=Object(p.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n"]);return ke=function(){return e},e}var Ie=S.b.div(ke()),Fe=function(e){return e.isVisible?c.a.createElement(Ie,null,c.a.createElement(Ue.a,{size:50})):null},Le=function(e){function t(){var e,n;Object(x.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(k.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).fetchData=function(){n.props.fetchContacts()},n}return Object(F.a)(t,e),Object(U.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this.props,t=e.list,n=e.isFetching&&0===t.size,a=t.toJS();return c.a.createElement(c.a.Fragment,null,c.a.createElement(Fe,{isVisible:n}),c.a.createElement(G,{contacts:a}))}}]),t}(r.Component),Re=Object(s.b)(function(e){return{list:function(e){return function(e){return e.get("ids")}(e.get("list")).map(function(t){return Ce(e.get("byId"),t)})}(e),isFetching:Se(e)}},a)(Le),He=n(86),Me=n.n(He),Pe=n(88),ze=n.n(Pe),Be=n(87),Je=n.n(Be),Qe=n(203),We=n.n(Qe);function Ve(){var e=Object(p.a)(["\n      padding: ","px;\n    "]);return Ve=function(){return e},e}function qe(){var e=Object(p.a)(["\n  padding: 15px;\n\n  ",";\n"]);return qe=function(){return e},e}var Ke=S.b.div(qe(),function(e){return e.px&&Object(S.a)(Ve(),e.px)}),Xe=function(e){return c.a.createElement(Ke,e,e.children)};function Ge(){var e=Object(p.a)(["\n  .card {\n    max-width: 400px;\n    margin: 30px auto;\n  }\n  .media {\n    height: 300px;\n    object-fit: cover;\n  }\n"]);return Ge=function(){return e},e}var $e=S.b.div(Ge()),Ye=Object(H.a)(function(e){var t=e.contact,n=void 0===t?{}:t,a=e.handleRequestDelete,r=e.loading,i=e.id;return c.a.createElement($e,null,c.a.createElement(Xe,null,c.a.createElement(Me.a,{className:"card"},n.avatar_large&&c.a.createElement(We.a,{className:"media",image:"".concat("/contact-list").concat(n.avatar_large)}),c.a.createElement(Fe,{isVisible:r}),!r&&c.a.createElement(Je.a,null,c.a.createElement(O.a,{gutterBottom:!0,variant:"headline",component:"h2"},n.first_name," ",n.last_name),c.a.createElement(O.a,{component:"p"},"Email: ",n.email),c.a.createElement(O.a,{component:"p"},"Phone: ",n.phone)),c.a.createElement(ze.a,null,c.a.createElement(h.a,{to:"/edit/".concat(i)},c.a.createElement(g.a,{size:"small",color:"primary",id:"edit-contact"},"Edit")),c.a.createElement(g.a,{size:"small",color:"primary",onClick:a,id:"delete-contact"},"Delete")))))}),Ze=function(e){var t=e.message,n=e.handleRetry;return c.a.createElement(Xe,null,c.a.createElement(Me.a,null,c.a.createElement(Je.a,null,c.a.createElement(O.a,{gutterBottom:!0,variant:"headline",component:"h2"},"Something went wrong..."),c.a.createElement(O.a,{gutterBottom:!0,component:"p"},t)),c.a.createElement(ze.a,null,c.a.createElement(g.a,{color:"primary",onClick:n},"Retry"))))},et=function(e){function t(){var e,n;Object(x.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(k.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).fetchData=function(){var e=n.props.match.params.id;n.props.fetchContactDetail(e)},n.handleRequestDelete=function(){var e=n.props,t=e.match,a=e.deleteContact,r=e.history;a(t.params.id).then(function(){return r.push("/contacts")})},n}return Object(F.a)(t,e),Object(U.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this.props.contact,t=e&&e.toJS();return this.props.errorMessage?c.a.createElement(Ze,{message:this.props.errorMessage,handleRetry:this.fetchData}):c.a.createElement(Ye,{contact:t,handleRequestDelete:this.handleRequestDelete,loading:this.props.isFetching,id:this.props.match.params.id})}}]),t}(r.Component),tt=Object(s.b)(function(e,t){return{contact:Oe(e,t.match.params.id),isFetching:Se(e),errorMessage:function(e){return function(e){return e.get("errorMessage")}(e.get("list"))}(e)}},a)(et),nt=n(84),at=n(45),rt=n.n(at),ct=n(63),it=n.n(ct),ot=n(65),lt=n.n(ot);function st(){var e=Object(p.a)(["\n  .paper {\n    max-width: 600px;\n    margin: 30px auto;\n    padding: 15px;\n  }\n"]);return st=function(){return e},e}var ut=S.b.div(st()),mt=function(e){var t=e.handleInputChange,n=e.handleSave,a=e.values,r=e.title;return c.a.createElement(ut,null,c.a.createElement(Xe,null,c.a.createElement(it.a,{className:"paper"},c.a.createElement(O.a,{variant:"title",gutterBottom:!0},r),c.a.createElement("form",{noValidate:!0,autoComplete:"off"},c.a.createElement(rt.a,{container:!0,spacing:24},c.a.createElement(rt.a,{item:!0,xs:12,sm:6},c.a.createElement(lt.a,{name:"first_name",label:"First Name",value:a.first_name,onChange:function(e){return t(e)},margin:"normal",fullWidth:!0})),c.a.createElement(rt.a,{item:!0,xs:12,sm:6},c.a.createElement(lt.a,{name:"last_name",label:"Last Name",value:a.last_name,onChange:function(e){return t(e)},margin:"normal",fullWidth:!0})),c.a.createElement(rt.a,{item:!0,xs:12,sm:6},c.a.createElement(lt.a,{name:"email",label:"Email",value:a.email,onChange:function(e){return t(e)},margin:"normal",fullWidth:!0})),c.a.createElement(rt.a,{item:!0,xs:12,sm:6},c.a.createElement(lt.a,{name:"phone",label:"Phone",value:a.phone,onChange:function(e){return t(e)},margin:"normal",fullWidth:!0})),c.a.createElement(rt.a,{item:!0,xs:12},c.a.createElement(g.a,{variant:"contained",color:"primary",onClick:n},"Save")))))))},ft=function(e){function t(e){var n;Object(x.a)(this,t),(n=Object(k.a)(this,Object(I.a)(t).call(this,e))).handleSave=function(){n.props.handleSave(n.state)},n.handleInputChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(nt.a)({},r,a))};return n.state=n.props.existingContact||{first_name:"",last_name:"",email:"",phone:""},n}return Object(F.a)(t,e),Object(U.a)(t,[{key:"componentDidUpdate",value:function(e){e.existingContact!==this.props.existingContact&&this.setState(this.props.existingContact)}},{key:"render",value:function(){return c.a.createElement(mt,{handleInputChange:this.handleInputChange,handleSave:this.handleSave,values:this.state,title:this.props.title})}}]),t}(r.Component),pt=function(e){function t(){var e,n;Object(x.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(k.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).handleCreateContact=function(e){var t=n.props,a=t.createContact,r=t.history;a(e).then(function(){return r.push("/contacts")})},n}return Object(F.a)(t,e),Object(U.a)(t,[{key:"render",value:function(){return c.a.createElement(ft,{handleSave:this.handleCreateContact,title:"Create New Contact"})}}]),t}(r.Component),ht=Object(s.b)(null,a)(pt),dt=function(e){function t(){var e,n;Object(x.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(k.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).fetchData=function(){var e=n.props.match.params.id;n.props.fetchContactDetail(e)},n.handleUpdateContact=function(e){var t=n.props,a=t.updateContact,r=t.history;a(e).then(function(){return r.push("/contacts")})},n}return Object(F.a)(t,e),Object(U.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this.props.contact&&this.props.contact.toJS();return c.a.createElement(ft,{handleSave:this.handleUpdateContact,existingContact:e,title:"Edit Contact Details"})}}]),t}(r.Component),vt=Object(s.b)(function(e,t){return{contact:Oe(e,t.match.params.id)}},a)(dt),Et=function(){return c.a.createElement(w.a,null,c.a.createElement(N.a,{exact:!0,path:"/contacts",component:Re}),c.a.createElement(N.a,{exact:!0,path:"/contacts/:id",component:tt}),c.a.createElement(N.a,{exact:!0,path:"/create",component:ht}),c.a.createElement(N.a,{path:"/edit/:id",component:vt}),c.a.createElement(N.a,{render:function(){return c.a.createElement(D.a,{to:"/contacts"})}}))},Ct=n(52),gt=n(205),_t=function(e){var t=e.dispatch,n=e.getState;return function(e){return function(a){var r=a.types,c=a.callAPI,i=a.shouldCallAPI,o=void 0===i?function(){return!0}:i,l=a.payload,s=void 0===l?{}:l;if(!r)return e(a);if(!Array.isArray(r)||3!==r.length||!r.every(function(e){return"string"===typeof e}))throw new Error("Expected an array of three string types.");if("function"!==typeof c)throw new Error("Expected callAPI to be a function.");if(o(n())){var u=Object(gt.a)(r,3),m=u[0],f=u[1],p=u[2];return t(Object(ee.a)({},s,{type:m})),c().then(function(e){t(Object(ee.a)({},s,{response:e,type:f}))},function(e){return t(Object(ee.a)({},s,{error:e,type:p}))})}}}},Tt=function(){var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ct.c,t=[_t],n=Object(me.Map)();return Object(Ct.d)(je,n,e(Ct.a.apply(void 0,t)))},bt=n(64),Ot=Tt(),St=Object(bt.createMuiTheme)({palette:{primary:{light:"#4dabf5",main:"#2196f3",dark:"#1769aa",contrastText:"#fff"}}}),jt=function(){return c.a.createElement(bt.MuiThemeProvider,{theme:St},c.a.createElement(s.a,{store:Ot},c.a.createElement(u.a,{basename:"/contact-list"},c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,null),c.a.createElement(y,null),c.a.createElement(Et,null)))))};Object(i.render)(c.a.createElement(jt,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/contact-list",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/contact-list","/service-worker.js");o?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):l(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):l(e)})}}()}},[[207,2,1]]]);
//# sourceMappingURL=main.9332e950.chunk.js.map