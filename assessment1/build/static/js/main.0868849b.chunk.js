(this.webpackJsonpsolution=this.webpackJsonpsolution||[]).push([[0],{14:function(a,e,t){},15:function(a,e,t){},17:function(a,e,t){"use strict";t.r(e);var s=t(1),i=t.n(s),o=t(8),n=t.n(o),c=(t(14),t(15),t(7)),r=t(2),p=t(0),l=function(a){var e=a.placeholder,t=a.value,s=a.onchange,i=a.style,o=a.classname,n=a.onkeydown;return Object(p.jsx)("div",{children:Object(p.jsx)("input",{placeholder:e,value:t,onChange:s,onKeyDown:n,style:i,className:o})})},m=t(4),d=function(a){var e=a.msg,t=void 0===e?"please wait...":e;return Object(p.jsx)("div",{children:Object(p.jsx)("span",{children:t})})},g=function(a){var e=a.label,t=a.onclick,s=a.style,i=a.classname;return Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:t,style:s,className:i,children:Object(p.jsx)("span",{className:"bl",children:e})})})},h={GET_SEARCH_BY_NAME:"GET_SEARCH_BY_NAME",SET_SEARCH_BY_NAME:"SET_SEARCH_BY_NAME",GET_SEARCH_BY_TAG:"GET_SEARCH_BY_TAG",SET_SEARCH_BY_TAG:"SET_SEARCH_BY_TAG"},u=Object(s.createContext)(),j=u.Provider,y={name:"",tag:""},f=function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object(m.a)(Object(m.a)({},y),e);switch(a){case h.GET_SEARCH_BY_NAME:return t.name;case h.GET_SEARCH_BY_TAG:return t.tag;case h.SET_SEARCH_BY_NAME||a.SET_SEARCH_BY_TAG:default:return t}},b=u,N=function(a){var e=a.values;return void 0===e||0===e.length?null:Object(p.jsx)("div",{className:"tag-flex bl margin-ud",children:e.map((function(a,e){return Object(p.jsx)("span",{className:"size14 tag",children:a},"tag-at-".concat(e))}))})},O=function(a){var e=a.id,t=a.pic,i=a.firstName,o=a.lastName,n=a.city,c=a.company,m=a.grades,h=a.skill,u=a.email,j=a.tags,y=Object(s.useState)(!1),f=Object(r.a)(y,2),O=f[0],v=f[1],x=Object(s.useContext)(b).app,w=function(a){var e=a.length;return void 0===e||0===e?0:a.reduce((function(a,e){return parseInt(a)+parseInt(e)}),0)/e}(m)+"%";console.log("tags",e,i,a.tags,"state",j);var k=function(a){if(13===a.keyCode){var t=a.target.value,s=j||[];-1===s.indexOf(t)&&s.push(t),x.updateTags(e,s)}};return Object(p.jsxs)("div",{className:"flex-row left v-center-flex",children:[Object(p.jsx)("div",{className:"flex1",children:Object(p.jsx)("img",{className:"img-avatar",src:t})}),Object(p.jsxs)("div",{className:"size14 wid-80 pad-lr",children:[Object(p.jsx)("h1",{children:"".concat(i.toUpperCase()," ").concat(o.toUpperCase())}),Object(p.jsxs)("div",{className:"txt-color-offwhite pad-lr",children:[Object(p.jsxs)("div",{children:["Email: ",u]}),Object(p.jsxs)("div",{children:["Company: ",c]}),Object(p.jsxs)("div",{children:["City: ",n]}),Object(p.jsxs)("div",{children:["Skill: ",h]}),Object(p.jsxs)("div",{children:["Average: ",w]})]}),Object(p.jsx)("div",{children:Object(p.jsx)(N,{values:j})}),Object(p.jsx)("div",{className:"txt-color-offwhite pad-lr margin-ud",children:function(){if(!1===O)return null;var a=Object(p.jsx)(d,{msg:"no grades present"});if(void 0===m)return a;if(0===m.length)return a;var t=m.map((function(a,t){return Object(p.jsx)("div",{children:"Test ".concat(t+1,": ").concat((s=a,s.padStart(10,"-")),"%")},"stu-".concat(e,"-grade-detail-").concat(t));var s}));return Object(p.jsxs)("div",{children:[t,Object(p.jsx)(l,{placeholder:"add tag",onkeydown:k})]})}()})]}),Object(p.jsx)("div",{className:"margin-r flex1",children:Object(p.jsx)(g,{label:O?"-":"+",onclick:function(){v(!O)}})})]})},v=function(a){var e=a.data,t=Object(s.useContext)(b).app;return 0===e.length?Object(p.jsx)(d,{}):Object(p.jsx)("div",{className:"height-400 h-relative margin-ud",children:function(){if(0!==e.length){var a=function(a){return JSON.parse(JSON.stringify(a))}(e);return(""===t.searchByName&&""===t.searchByTag?a:a.filter((function(a){return-1!==(a.firstName+" "+a.lastName).toLowerCase().indexOf(t.searchByName.toLowerCase())||-1!==(a.tags||[]).indexOf(t.searchByTag.toLowerCase())}))).map((function(a,e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(O,Object(m.a)({},a)),Object(p.jsx)("hr",{})]},"student_".concat(e))}))}}()})},x={students:"https://api.hatchways.io/assessment/students"},w={mode_offline:!0,app_name:"My Hatchways Assessment",sub_heading:"by: devendraprasad1984@gmail.com, https://dpresume.com",wait_msg:"please wait, while we are getting ready",objectKeys:{student_api_object_key:"students"}},k=function(a){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("h2",{children:[w.app_name," - mode ",w.mode_offline?Object(p.jsx)("span",{className:"txt-color-red",children:"OFFLINE"}):Object(p.jsx)("span",{className:"txt-color-green",children:"ONLINE"})]}),Object(p.jsx)("span",{className:"size14 txt-color-offwhite",children:w.sub_heading})]})},_={Accept:"application/json","Content-Type":"application/json"},S=function(a,e,t){return fetch(a,e).then((function(a){return a.json()})).then((function(a){return t(a)})).catch((function(a){return t({error:a})}))},E=function(a){var e=Object(s.useState)([]),t=Object(r.a)(e,2),i=t[0],o=t[1],n=Object(s.useState)(""),c=Object(r.a)(n,2),p=c[0],l=c[1],m=Object(s.useState)(!1),d=Object(r.a)(m,2),g=d[0],h=d[1],u=function(){!function(a,e){S(a,{method:"GET",headers:_},e)}(a,(function(a){void 0===a.error?(o(a),h(!1)):l(a.error||"")}))};return Object(s.useEffect)((function(){w.mode_offline||(h(!0),u())}),[]),{data:i,loading:g,error:p}},T=t(9),A=function(a){var e=Object(s.useState)(""),t=Object(r.a)(e,2),i=t[0],o=t[1],n=Object(s.useState)(""),m=Object(r.a)(n,2),g=m[0],h=m[1],u=Object(s.useState)([]),y=Object(r.a)(u,2),b=y[0],N=y[1],O=E(x.students),_=O.data,S=O.loading,A=O.error;Object(s.useEffect)((function(){N(""!==A||!0===w.mode_offline?T[w.objectKeys.student_api_object_key]:_[w.objectKeys.student_api_object_key])}),[_,S,A]);var C={searchByName:i,searchByTag:g,updateTags:function(a,e){var t=Object(c.a)(b);t.filter((function(e){return e.id===a}))[0].tags=e,N(Object(c.a)(t))}};return!0===S?Object(p.jsx)(d,{msg:w.wait_msg}):Object(p.jsx)("div",{children:Object(p.jsxs)(j,{value:{app:C,mainAppContextDispatcher:f},children:[Object(p.jsx)(k,{}),Object(p.jsx)(l,{placeholder:"search by name",onchange:function(a){var e=a.target.value;o(e)}}),Object(p.jsx)(l,{placeholder:"search by tag",onchange:function(a){var e=a.target.value;h(e)}}),Object(p.jsx)(v,{data:b})]})})};var C=function(){return Object(p.jsx)("div",{className:"App center bg-white wid-mobile",children:Object(p.jsx)(A,{})})},B=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(e){var t=e.getCLS,s=e.getFID,i=e.getFCP,o=e.getLCP,n=e.getTTFB;t(a),s(a),i(a),o(a),n(a)}))};n.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root")),B()},9:function(a){a.exports=JSON.parse('{"students":[{"city":"Fush\xeb-Muhurr","company":"Yadel","email":"iorton0@imdb.com","firstName":"Ingaberg","grades":["78","100","92","86","89","88","91","87"],"id":"1","lastName":"Orton","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg","skill":"Oracle"},{"city":"Sanghan","company":"Avamm","email":"cboards1@weibo.com","firstName":"Clarke","grades":["75","89","95","93","99","82","89","76"],"id":"2","lastName":"Boards","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasautreprehenderit.jpg","skill":"Sports"},{"city":"Kugesi","company":"Skalith","email":"lromanet2@wired.com","firstName":"Laurens","grades":["88","90","79","82","81","99","94","73"],"id":"3","lastName":"Romanet","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/aspernaturnonsapiente.jpg","skill":"Employee Handbooks"},{"city":"Krajan","company":"Mybuzz","email":"bskitt3@aboutads.info","firstName":"Berti","grades":["88","93","92","81","95","98","77","94"],"id":"4","lastName":"Skitt","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autautdeserunt.jpg","skill":"Nutrition Education"},{"city":"Huiqi","company":"Avavee","email":"msummerley4@craigslist.org","firstName":"Mureil","grades":["71","81","72","92","79","82","91","90"],"id":"5","lastName":"Summerley","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/consequaturdelectusquis.jpg","skill":"ISO 14971"},{"city":"Jianghong","company":"Twinte","email":"rcoryndon5@cargocollective.com","firstName":"Robbyn","grades":["97","92","72","99","92","92","79","96"],"id":"6","lastName":"Coryndon","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autautdeserunt.jpg","skill":"Cinema 4D"},{"city":"Sanxi","company":"Buzzster","email":"seykel6@examiner.com","firstName":"Sheena","grades":["74","95","75","95","85","97","88","85"],"id":"7","lastName":"Eykel","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/utquamut.jpg","skill":"Ulead VideoStudio"},{"city":"Huancheng","company":"Edgeblab","email":"mewen7@ycombinator.com","firstName":"Minnnie","grades":["80","100","97","78","99","99","76","85"],"id":"8","lastName":"Ewen","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/nesciuntrerumlibero.jpg","skill":"Vulcan"},{"city":"Luoxiong","company":"Fadeo","email":"riban8@hubpages.com","firstName":"Rory","grades":["70","100","75","96","83","90","94","92"],"id":"9","lastName":"Iban","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autemporroplaceat.jpg","skill":"EE4"},{"city":"Toulon","company":"Yakidoo","email":"lroxby9@cam.ac.uk","firstName":"Lenna","grades":["70","99","81","83","78","95","81","76"],"id":"10","lastName":"Roxby","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/doloribusquitempora.jpg","skill":"LPS"},{"city":"Lazo","company":"Photolist","email":"rfitzalana@parallels.com","firstName":"Rosalynd","grades":["98","93","78","87","99","89","97","81"],"id":"11","lastName":"FitzAlan","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/utquamut.jpg","skill":"Geography"},{"city":"Bichura","company":"Babblestorm","email":"srapellib@adobe.com","firstName":"Stephanie","grades":["83","97","70","96","75","98","90","71"],"id":"12","lastName":"Rapelli","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/enimpariaturoptio.jpg","skill":"Identity Management"},{"city":"Chval\u0161iny","company":"Mynte","email":"mmacdirmidc@plala.or.jp","firstName":"Maire","grades":["87","73","85","98","73","95","75","97"],"id":"13","lastName":"MacDirmid","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/aspernaturnonsapiente.jpg","skill":"Outdoor Advertising"},{"city":"Itaparica","company":"Photospace","email":"nshepherdd@desdev.cn","firstName":"Nicoline","grades":["90","73","88","95","71","100","80","86"],"id":"14","lastName":"Shepherd","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/nonipsaet.jpg","skill":"Amazon VPC"},{"city":"Praia da Vit\xf3ria","company":"Vitz","email":"ythornse@github.com","firstName":"Yoshi","grades":["78","78","96","92","80","82","91","99"],"id":"15","lastName":"Thorns","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg","skill":"DMR"},{"city":"Sambir","company":"Twitterwire","email":"mtothef@shutterfly.com","firstName":"Marna","grades":["88","74","76","89","75","97","75","86"],"id":"16","lastName":"Tothe","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/utquamut.jpg","skill":"PFI"},{"city":"Sarulla","company":"Blogpad","email":"okearyg@g.co","firstName":"Orelia","grades":["78","92","86","80","82","95","76","84"],"id":"17","lastName":"Keary","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/enimpariaturoptio.jpg","skill":"General Surgery"},{"city":"Ochakovo-Matveyevskoye","company":"Mydeo","email":"mswaith@cafepress.com","firstName":"Moses","grades":["84","82","92","74","87","98","86","73"],"id":"18","lastName":"Swait","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/velitnonquibusdam.jpg","skill":"Sales Tax"},{"city":"Youxi Chengguanzhen","company":"Avaveo","email":"fnusseyi@skyrock.com","firstName":"Fonsie","grades":["100","75","84","91","100","97","98","87"],"id":"19","lastName":"Nussey","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/remtemporavelit.jpg","skill":"Urbanism"},{"city":"Limoges","company":"Tazzy","email":"srydingsj@phoca.cz","firstName":"Skelly","grades":["89","81","77","93","96","96","70","79"],"id":"20","lastName":"Rydings","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/etporroalias.jpg","skill":"IFTA"},{"city":"\u0141ob\u017cenica","company":"Quatz","email":"obrennekek@yellowbook.com","firstName":"Olly","grades":["81","74","77","82","74","88","86","87"],"id":"21","lastName":"Brenneke","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/velitnonquibusdam.jpg","skill":"ATM Networks"},{"city":"Divo","company":"Gigazoom","email":"nbadwickl@nifty.com","firstName":"Norby","grades":["73","99","91","92","85","96","95","73"],"id":"22","lastName":"Badwick","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/delenitiestdolorum.jpg","skill":"Media Relations"},{"city":"Sortavala","company":"Eamia","email":"mmichiem@nifty.com","firstName":"Melody","grades":["100","83","76","71","93","95","73","88"],"id":"23","lastName":"Michie","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/sitlaborecorrupti.jpg","skill":"PC Games"},{"city":"Taupo","company":"Midel","email":"jwillougheyn@psu.edu","firstName":"Janice","grades":["71","80","83","99","91","95","81","75"],"id":"24","lastName":"Willoughey","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/dolordoloremassumenda.jpg","skill":"Kondor+"},{"city":"Krajandadapmulyo","company":"Wikibox","email":"ggallymoreo@mashable.com","firstName":"Geraldine","grades":["97","71","89","85","85","87","92","75"],"id":"25","lastName":"Gallymore","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/sitlaborecorrupti.jpg","skill":"WTL"}]}')}},[[17,1,2]]]);
//# sourceMappingURL=main.0868849b.chunk.js.map