(this["webpackJsonpcontent-autofy"]=this["webpackJsonpcontent-autofy"]||[]).push([[0],{29:function(e,t,n){e.exports=n(40)},34:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),i=n.n(l),c=(n(34),n(10)),o=(n(35),function(e){var t=e.headerText,n=e.inputVar,a=e.setInputVar;return r.a.createElement("div",{style:{margin:"20px",textAlign:"left"}},r.a.createElement("h2",null,t),r.a.createElement("input",{style:{width:"100%"},value:n,onChange:function(e){a(e.target.value)}}))}),s=n(62),u=n(64),d=function(e){var t=e.kw,n=e.selected,l=e.setSelected,i=Object(a.useState)(!1),o=Object(c.a)(i,2),d=o[0],m=o[1];return r.a.createElement("div",null,r.a.createElement(u.a,{control:r.a.createElement(s.a,{checked:d,onChange:function(e){if(m(e.target.checked),!1===n.includes(e.target.id))l(n.concat(e.target.id));else if(!1===e.target.checked){var t=n.filter((function(t){return t!==e.target.id}));l(t)}},inputProps:{"aria-label":"indeterminate checkbox"},id:t}),label:t}))},m=function(e){var t=e.listOfKeywords,n=e.subTitle,a=e.selectedList,l=e.selectedListStateFunction;return r.a.createElement("div",{style:{width:"100%",justifyContent:"center",textAlign:"left",float:"center"}},r.a.createElement("h4",{style:{float:"center"}},n),r.a.createElement("div",{style:{textAlign:"left"}},t.map((function(e){return r.a.createElement(d,{kw:e,selected:a,setSelected:l})}))))},f=n(61),g=n(63),E=function(e){var t=e.choice,n=e.setChoice;return r.a.createElement("div",{style:{justifyContent:"center",textAlign:"left"}},r.a.createElement("h4",null,"Manufacturer"),r.a.createElement(g.a,{"aria-label":"manufacturer",name:"manufacturer",value:t,onChange:function(e){n(e.target.value)}},r.a.createElement(u.a,{value:"Owens Corning",control:r.a.createElement(f.a,null),label:"Owens Corning"}),r.a.createElement(u.a,{value:"General Aniline & Film",control:r.a.createElement(f.a,null),label:"General Aniline & Film"})))},h=["Residential Roofing","Commercial Roofing","Shingle Roofing","Tile Roofing","Metal Roofing","Flat Roofing","Slate Roofing","Solar Roofing"],p=["Roof Replacement","Roof Repair","Roof Cleaning","Roof Maintenance","Roof Financing","Roof Inspection","Solar Roof"],v=["Gutter Repair","Storm Damage Repair","Roof Damage Repair"],y=["Attic Insulation","Roof Maxx","Gutter Installation","Seamless Gutters","Skylight Installation","Emergency Roofing","Leaky Roof"],w=function(e){var t=e.kw,n=e.setKw,a=e.mBrand,l=e.setMBrand;return r.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"spaceBetween",margin:"0 auto"}},r.a.createElement(m,{listOfKeywords:h,subTitle:"Type of Roofing",selectedList:t,selectedListStateFunction:n}),r.a.createElement(m,{listOfKeywords:p,subTitle:"Roof Service(s)",selectedList:t,selectedListStateFunction:n}),r.a.createElement(m,{listOfKeywords:y,subTitle:"Other Service(s)",selectedList:t,selectedListStateFunction:n}),r.a.createElement(m,{listOfKeywords:v,subTitle:"Repair Service(s)",selectedList:t,selectedListStateFunction:n}),r.a.createElement(E,{choice:a,setChoice:l}))},R=function(e){var t=e.kwList,n=e.setKwList,a=e.mBrand,l=e.setMBrand;return r.a.createElement("div",{style:{textAlign:"center",justifyContent:"center"}},r.a.createElement("h3",null,"Keywords"),r.a.createElement("p",null,t.toString()),r.a.createElement("p",null,a),r.a.createElement(w,{kw:t,setKw:n,mBrand:a,setMBrand:l}))};var S=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)(""),s=Object(c.a)(i,2),u=s[0],d=s[1],m=Object(a.useState)(""),f=Object(c.a)(m,2),g=f[0],E=f[1],h=Object(a.useState)(""),p=Object(c.a)(h,2),v=p[0],y=p[1],w={justifyContent:"center",textAlign:"center"};return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{style:{display:"flex",textAlign:"center",justifyContent:"center",width:"100%",verticalAlign:"middle"}},r.a.createElement(o,{headerText:"Brand Name",inputVar:u,setInputVar:d}),r.a.createElement(o,{headerText:"Brand Location",inputVar:g,setInputVar:E})),r.a.createElement("div",{styel:w},r.a.createElement(R,{style:w,kwList:n,setKwList:l,mBrand:v,setMBrand:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.d0f86a0b.chunk.js.map